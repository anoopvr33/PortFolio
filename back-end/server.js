import express from "express";
import mongoose from "./db/db.js";
import router from "./router/router.js";
import cors from "cors";
import dotenv from "dotenv";
// import { Server } from "http";
import http from "http";

const app = express();

dotenv.config({ path: "./.env" });

// const frontendUrl = process.env.FRONTEND_URL;

const corsOption = {
  origin: "https://port-folio-fr-ont.vercel.app/",
  methods: "GET,POST,PUT,DELETE",
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

server.listen(3400, "0.0.0.0", () => {
  console.log("Server is running on port 3400");
});
