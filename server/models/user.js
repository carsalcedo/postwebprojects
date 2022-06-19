import mongoose from "mongoose";

const userSchema = mongoose.Schema({
   name: {type: String, required: true},
   email: {type: String, required: true},
   password: {type: String, required: true},
   id: {type: String},
   country: {type: String},
   telephone: {type: String},
   documentT: {type: String},
   document: {type: String}
});

export default mongoose.model('User', userSchema);

