import { useState } from "react";
import "./style.css";
import axios from "../../autils/axios";
import { ToastContainer, toast } from "react-toastify";

const Message = () => {
  const [data, setData] = useState({ name: "", email: "", message: "" });

  const OnSendMessage = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const OnUpload = async () => {
    console.log("button clicked");
    await axios.post("/guest/message", data);
    // alert("message send");
    toast.success("successfully send");
  };

  return (
    <div className="message">
      {/* Message */}
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
      <div className="butt" onClick={OnUpload}>
        Send Message<i className="fa-solid fa-paper-plane"></i>
      </div>
      <span>
        <ToastContainer />
      </span>
    </div>
  );
};

export default Message;
