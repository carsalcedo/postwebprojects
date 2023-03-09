import express from "express";
import bodyParser from 'body-parser'
import mongoose from 'mongoose';
import cors from 'cors'
import postRoutes from './routes/posts.js'
import userRoutes from './routes/users.js'
import dotenv from 'dotenv'


const app = express();
dotenv.config();

app.use(cors());
app.use(bodyParser.json({limit: "150mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "150mb", extended: true}));

app.use('/posts', postRoutes);
app.use('/user', userRoutes);

//const CONNETION_URL = 'mongodb+srv://nando:235813@cluster0.z4eey9c.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

//mongoose.set("strictQuery", true);
mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> app.listen(PORT, () => console.log(`server running on Port ${PORT}`)))
    .catch((error)=> console.log(error.message));

mongoose.set('useFindAndModify', false);