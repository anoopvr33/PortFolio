import express from "express";
import mongoose from "./db/db.js";
import router from "./router/router.js";
import cors from "cors";
import dotenv from "dotenv";
// import { Server } from "http";
import http from "http";

const app = express();

dotenv.config({ path: "./.env" });

const PORT = process.env.PORT || 3500;

const frontendUrl = process.env.FRONTEND_URL;

const corsOption = {
  origin: frontendUrl, // Allow only your frontend domain
  methods: ["GET", "POST"], // Specify allowed methods
  allowedHeaders: ["Content-Type"],
  Credential: true,
};

app.use(express.json());
app.use(express.static("public"));
app.use(cors(corsOption));
app.use(router);

const server = http.createServer(app);

app.get("*", (req, res) => {
  res.status(404).json({ message: "Route not found" });
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
