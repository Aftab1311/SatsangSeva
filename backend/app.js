import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
// import userRouter from "./routes/user-routes";
import userRouter from "./routes/user-routes.js";
import adminRouter from "./routes/admin-routes.js";
import movieRouter from "./routes/movie-routes.js";
import bookingsRouter from "./routes/booking-routes.js";
import cors from "cors";
dotenv.config();
const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use("/user", userRouter);
app.use("/admin", adminRouter);
app.use("/movie", movieRouter);
app.use("/booking", bookingsRouter);

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.8e6yml0.mongodb.net/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority`
  )
  .then(() =>
    app.listen(8000, () =>
      console.log("Connected To Database And Server is running")
    )
  )
  .catch((e) => console.log(e));
