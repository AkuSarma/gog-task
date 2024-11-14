import express, {json} from "express";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
import { connect } from "mongoose";

const app = express();
const port = 8000;

// middleware
app.use(cors());
app.use(json());

// mongodb connection
connect(
  "mongodb+srv://Akusar1702:Akusar1702@cluster0.mvolh.mongodb.net/carRentalWebsite?retryWrites=true&w=majority&appName=Cluster0"
)
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch((error) => {
    console.error("moongo db connection error", error);
  });

// routes
app.use('/user', userRoutes);

// server
app.listen(port, () => {`Server is runnsing on port ${port}`})