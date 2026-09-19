import { Router } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import {
  createSurprise, getSurprise, updateSurprise,
  deleteSurprise, listSurprises
} from '../controllers/surpriseController.js';
import { adminAuth } from '../middleware/auth.js';

const router = Router();

// Public: get a surprise by token
router.get('/:token', getSurprise);

// Admin login
router.post('/admin/login', async (req, res) => {
  const { password } = req.body;
  const hash = await bcrypt.hash(process.env.ADMIN_PASSWORD, 10);
  const valid = await bcrypt.compare(password, hash);
  if (!valid) return res.status(401).json({ error: 'Invalid password' });
  const token = jwt.sign({ role: 'admin' }, process.env.JWT_SECRET, { expiresIn: '7d' });
  res.json({ token });
});

// Protected admin routes
router.post('/', adminAuth, createSurprise);
router.get('/', adminAuth, listSurprises);
router.put('/:token', adminAuth, updateSurprise);
router.delete('/:token', adminAuth, deleteSurprise);

export default router;
