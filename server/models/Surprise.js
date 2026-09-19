import mongoose from 'mongoose';

const surpriseSchema = new mongoose.Schema({
  token: { type: String, required: true, unique: true, index: true },
  recipientName: { type: String, required: true, maxlength: 100 },
  message: { type: String, required: true, maxlength: 2000 },
  signature: { type: String, required: true, maxlength: 100 },
  openingText: { type: String, default: 'Someone left a little something for you...', maxlength: 200 },
  footerText: { type: String, default: 'Made with a little thought 💗', maxlength: 200 },
  bouquetStyle: {
    type: String,
    enum: ['romantic-garden', 'spring-meadow', 'soft-pastels', 'wild-flowers'],
    default: 'romantic-garden'
  },
  flowers: {
    type: [String],
    enum: ['rose-red', 'rose-pink', 'daisy-white', 'lily-purple', 'carnation-pink', 'flower-orange', 'flower-white'],
    default: ['rose-red', 'daisy-white', 'lily-purple', 'carnation-pink']
  },
  backgroundTheme: {
    type: String,
    enum: ['cream', 'blush', 'lavender', 'mint'],
    default: 'cream'
  },
  emoji: { type: String, default: '🌸', maxlength: 10 },
  secretAdmirer: { type: Boolean, default: false },
  easterEgg: { type: String, default: '', maxlength: 200 },
  musicEnabled: { type: Boolean, default: false },
  isActive: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
  expiresAt: { type: Date, default: null }
});

export default mongoose.model('Surprise', surpriseSchema);
