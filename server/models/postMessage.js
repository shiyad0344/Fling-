import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    avatar: String,
    caption: String,
    name: String,
    creator: String,
    img: String,
    likes: { type: [String], default: [] },
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;