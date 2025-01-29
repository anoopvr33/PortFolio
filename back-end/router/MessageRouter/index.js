import Message from "../../db/Schemas/MessageSchema/index.js";
import express from "express";

const router = express.Router();

router.post("/message", async (req, res) => {
  //   const Message = new Message.create({
  //     message: req.body.message,
  //     sender: req.body.sender,
  //     receiver: req.body.receiver,
  //   });
  const body = { ...req.body };
  const msg = await Message.create(body);
  res.status(200).json(msg);
});

router.get("/get-message", async (req, res) => {
  const msg = await Message.find();
  res.status(200).json(msg);
});
export default router;
