import mongoose from "mongoose";

mongoose
  .connect(
    "mongodb+srv://AnoopVR:anoopvr333@cluster0.1seql.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((e) => {
    console.log("error", e.message);
  });

export default mongoose;
