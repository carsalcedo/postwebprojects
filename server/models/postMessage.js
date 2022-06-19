import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    name: String,
    developer: String,
    tags: [String],
    selectedFile: String,
    link: String,
    likes: {
        type:[String],
        default: [],
    },
    createAT: {
        type: Date,
        default: new Date()
    }
});

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage