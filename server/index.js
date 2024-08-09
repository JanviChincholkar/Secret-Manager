import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

import { postSignup, postLogin } from './controllers/user.js';
import { postSecret, getSecrets, deleteSecret} from './controllers/secret.js'


// Connect to MongoDB
const connectDB = async () =>{
  const conn = await mongoose.connect(process.env.MONGODB_URL)

  if (conn) {
    console.log(`MongoDB connected successfully ✅`);
  }
};
connectDB();

app.get('/', (req, res) => {
  res.json({
    message: `Welcome.... Store Your Secrets Here!`
  })
})

app.post("/signup", postSignup)
app.post("/login", postLogin)

app.post("/secret", postSecret)
app.get("/secrets", getSecrets)
app.delete("/secret/:id", deleteSecret)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})