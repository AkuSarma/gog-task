import express, {json} from "express";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
import { connect } from "mongoose";
import dotenv from "dotenv";
dotenv.config()

const app = express();
const PORT = process.env.PORT || 8000;

// middleware
app.use(cors());
app.use(json());

// mongodb connection
connect(process.env.mongo_uri)
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch((error) => {
    console.error("moongo db connection error", error);
  });

// routes
app.use('/user', userRoutes);

// server
app.listen(PORT, () => console.log(`Server is runnsing on port: ${PORT}`));