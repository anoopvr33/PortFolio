import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost:27017/PortFolio")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((e) => {
    console.log(e.message);
  });

export default mongoose;
