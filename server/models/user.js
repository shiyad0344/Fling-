import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    bio: String, 
    birthday: String, 
    email: String, 
    gender: String, 
    img: String,
    name: String, 
    hashedPassword: String,
    preference: String
});

export default mongoose.model('User', userSchema);