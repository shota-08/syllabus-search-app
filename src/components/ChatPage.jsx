"use client";

import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import OpenAI from "openai";

const ChatPage = () => {
  const openai = new OpenAI({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
  });

  const [inputMessage, setInputMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = async () => {
    if (!inputMessage.trim()) return;

    const messageData = {
      text: inputMessage,
      sender: "user",
      createdAt: new Date(),
    };

    setMessages([...messages, messageData]);
    setInputMessage("");

    const gpt3Response = await openai.chat.completions.create({
      messages: [{ role: "user", content: inputMessage }],
      model: "gpt-3.5-turbo",
    });

    const botResponse = gpt3Response.choices[0].message.content;
    const botMessageData = {
      text: botResponse,
      sender: "bot",
      createdAt: new Date(),
    };

    setMessages((messages) => [...messages, botMessageData]);
  };

  return (
    <div className="bg-gray-100 h-full p-4 flex flex-col">
      <h1 className="flex justify-evenly item-center text-4xl mb-10">
        国文学科
      </h1>
      <div className="flex-grow overflow-y-auto mb-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={message.sender === "user" ? "text-right" : "text-left"}
          >
            <div
              className={
                message.sender === "user"
                  ? "bg-blue-500 inline-block rounded px-4 py-2"
                  : "bg-green-500 inline-block rounded px-4 py-2"
              }
            >
              <p className="text-white font-medium">{message.text}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex-shrink-0 relative">
        <input
          type="text"
          placeholder="Send a Message"
          className="border-2 rounded w-full pr-10 focus:outline-none p-2"
          onChange={(e) => setInputMessage(e.target.value)}
          value={inputMessage}
        />
        <button
          className="absolute inset-y-0 right-4 flex items-center"
          onClick={() => sendMessage()}
        >
          <FaPaperPlane />
        </button>
      </div>
    </div>
  );
};

export default ChatPage;
