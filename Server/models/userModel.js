import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

UserSchema.pre('save', async function(next) {
  if (!this.isModified('password')) {
    return next();
  }
  const salt = await bcrypt.genSalt(10); // Here creating a bcrypt salt to put in hasshed password
  this.password = await bcrypt.hash(this.password, salt); // Here is hashing the password with adding already created salt
  next();
});

UserSchema.methods.matchPassword = async function(enteredPassword) {// Here checking and return the entered password is correct or not
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model('User', UserSchema);
export default User;
