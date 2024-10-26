const { Schema, model } = require('../connections');

const mySchema = new Schema({
    name: String,
    email: { type: String, unique: true },
    password: { type: String, required: true },
    city: { type: String, default: 'Unknown' },
    role: { type: String, enum: ['user', 'admin'], default: 'user' }, // Added role field
    createdAt: { type: Date, default: Date.now }
});

module.exports = model('newUser1', mySchema);