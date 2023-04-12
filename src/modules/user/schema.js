import mongoose from 'mongoose'

const Userschema = new mongoose.Schema({
  firstName: { type: String, require: true },
  lastName: { type: String, require: true },
  email: { type: String, require: true, unique: true },
  password: { type: String },
})

export default mongoose.models.User || mongoose.model('User', Userschema)

