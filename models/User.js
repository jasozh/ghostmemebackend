const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    user_id: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    blocked: { type: Array, required: true, default: [] },
    blockedBy: { type: Array, required: true, default: [] }
})

module.exports = mongoose.model('user', UserSchema)