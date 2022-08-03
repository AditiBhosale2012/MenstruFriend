import React, { useEffect, useState } from "react";
import { user } from "../Join/Join";
import socketIO, { io } from "socket.io-client";
import "./Chat.css";
import logo from "../../images/womenchat.jpg";
// import logo from "../../images/logo.png";
import sendlogo from "../../images/send.png";
import Message from "../Message/Message";
import ReactScrollToBottom from "react-scroll-to-bottom";
import closelogo from "../../images/closeIcon.png";
import Navbar from "../../../Navbar";
import Fotter from "../../../Footer/Fotter";

let socket;
const ENDPOINT = "https://chatserver22.herokuapp.com/";

export const Chat = () => {
  const [id, setid] = useState("");
  const [messages, setMessages] = useState([]);

  const send = () => {
    const message = document.getElementById("chatInput").value;
    socket.emit("message", { message, id });
    document.getElementById("chatInput").value = "";
  };
  console.log(messages);
  useEffect(() => {
    socket = socketIO(ENDPOINT, { transports: ["websocket"] });

    socket.on("connect", () => {
      alert("Connected to server succesfully!!");
      setid(socket.id);
    });
    console.log(socket);
    socket.emit("joined", { user });

    socket.on("welcome", (data) => {
      setMessages([...messages, data]);
      console.log(data.user, data.message);
    });

    socket.on("userJoined", (data) => {
      //delete next two lines
      const message=`${data.user} has joined the chat`;
      io.emit("message",{message,id});
      setMessages([...messages, data]);
      console.log(data.user, data.message);
      
    });

    socket.on("leave", (data) => {
      setMessages([...messages, data]);
      console.log(data.user, data.message);
    });

    return () => {
      socket.emit("disconnect");
      socket.off();
    };
  }, []);

  useEffect(() => {
    socket.on("sendMessage", (data) => {
      setMessages([...messages, data]);
      console.log(data.user, data.message, data.id);
    });
    return () => {
      socket.off();
    };
  }, [messages]);

  return (
    <div>
      <Navbar />
    <div className="chatpage">
      <div className="chatcontainer">
        <div className="header">
          <img className="heading-logo" src={logo} alt="logo"></img>
          <h2>women chat Room</h2>
          <a href="/livechat"> <img className="closel" src={closelogo} alt="Close" /></a>
        </div>
        <ReactScrollToBottom className="chatbox">
          {messages.map((item, i) => (
            <Message
              user={item.id === id ? "" : item.user}
              message={item.message}
              classs={item.id === id ? "right" : "left"}
            />
          ))}
        </ReactScrollToBottom>
        <div className="inputBox">
          <input
            onKeyPress={(event) => (event.key === "Enter" ? send() : null)}
            type="text"
            id="chatInput"
          />
          <button onClick={send} className="sendBtn">
            <img src={sendlogo} alt="Send" />
          </button>
        </div>
      </div>
    </div>
    <Fotter />
    </div>
  );
};
