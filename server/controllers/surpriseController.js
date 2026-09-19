import { nanoid } from 'nanoid';
import validator from 'validator';
import Surprise from '../models/Surprise.js';

const sanitize = (str) => str ? validator.escape(validator.trim(str)) : str;

export const createSurprise = async (req, res) => {
  try {
    const {
      recipientName, message, signature, openingText, footerText,
      bouquetStyle, flowers, backgroundTheme, emoji,
      secretAdmirer, easterEgg, musicEnabled, expiresAt
    } = req.body;

    if (!recipientName || !message || !signature) {
      return res.status(400).json({ error: 'recipientName, message, and signature are required.' });
    }

    const token = nanoid(10);

    const surprise = await Surprise.create({
      token,
      recipientName: sanitize(recipientName),
      message: sanitize(message),
      signature: sanitize(signature),
      openingText: openingText ? sanitize(openingText) : undefined,
      footerText: footerText ? sanitize(footerText) : undefined,
      bouquetStyle, flowers, backgroundTheme,
      emoji: emoji ? validator.trim(emoji) : undefined,
      secretAdmirer, easterEgg: easterEgg ? sanitize(easterEgg) : '',
      musicEnabled,
      expiresAt: expiresAt ? new Date(expiresAt) : null
    });

    res.status(201).json({ token: surprise.token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getSurprise = async (req, res) => {
  try {
    const surprise = await Surprise.findOne({ token: req.params.token }).select('-__v');
    if (!surprise) return res.status(404).json({ error: 'not_found' });
    if (!surprise.isActive) return res.status(410).json({ error: 'inactive' });
    if (surprise.expiresAt && surprise.expiresAt < new Date()) {
      return res.status(410).json({ error: 'expired' });
    }
    // Don't expose _id
    const { _id, ...data } = surprise.toObject();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateSurprise = async (req, res) => {
  try {
    const allowed = ['recipientName','message','signature','openingText','footerText',
      'bouquetStyle','flowers','backgroundTheme','emoji','secretAdmirer','easterEgg',
      'musicEnabled','isActive','expiresAt'];
    const updates = {};
    allowed.forEach(k => { if (req.body[k] !== undefined) updates[k] = req.body[k]; });
    if (updates.recipientName) updates.recipientName = sanitize(updates.recipientName);
    if (updates.message) updates.message = sanitize(updates.message);
    if (updates.signature) updates.signature = sanitize(updates.signature);

    const surprise = await Surprise.findOneAndUpdate(
      { token: req.params.token },
      updates,
      { new: true, runValidators: true }
    ).select('-__v -_id');

    if (!surprise) return res.status(404).json({ error: 'not_found' });
    res.json(surprise);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteSurprise = async (req, res) => {
  try {
    const surprise = await Surprise.findOneAndUpdate(
      { token: req.params.token },
      { isActive: false },
      { new: true }
    );
    if (!surprise) return res.status(404).json({ error: 'not_found' });
    res.json({ message: 'Surprise deactivated.' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const listSurprises = async (req, res) => {
  try {
    const surprises = await Surprise.find({}).select('token recipientName createdAt isActive').sort('-createdAt');
    res.json(surprises);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
