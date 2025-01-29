import { useState } from "react";
import "./style.css";
import axios from "axios";

const Message = () => {
  const [data, setData] = useState({ name: "", email: "", message: "" });

  const OnSendMessage = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const OnUpload = async () => {
    await axios.post("http://localhost:3400/guest/message", data);
    alert("message send");
  };

  return (
    <div className="message">
      <label htmlFor="">
        <input
          name="name"
          onChange={OnSendMessage}
          type="text"
          placeholder="Enter your Name"
        />
      </label>
      <label htmlFor="">
        <input
          name="email"
          onChange={OnSendMessage}
          type="email"
          placeholder="Email"
        />
      </label>
      <label htmlFor="">
        <textarea
          name="message"
          onChange={OnSendMessage}
          placeholder="Enter Message"
        />
      </label>
      <button onClick={OnUpload}>
        Send Message<i className="fa-solid fa-paper-plane"></i>
      </button>
    </div>
  );
};

export default Message;
