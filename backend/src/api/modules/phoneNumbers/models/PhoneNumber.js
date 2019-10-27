import mongoose, { Schema } from 'mongoose'

const PhoneNumberSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  phoneNumber: {
    type: String,
    required: true,
    trim: true
  }
}, {
  timestamps: true
})

export default mongoose.model('PhoneNumber', PhoneNumberSchema)