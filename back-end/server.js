import express from "express";
import mongoose from "./db/db.js";
import router from "./router/router.js";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

app.get("*", (req, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.listen(3400, () => {
  console.log("Server is running on port 3400");
});
