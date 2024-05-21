import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import axios from "axios";

const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [titles, setTitles] = useState([]);
  const url = "https://backend-0521.azurewebsites.net:8000/send";

  const sendMessage = () => {
    const userMessage = inputMessage;
    if (!userMessage.trim()) return; // 空白メッセージは送信しない
    setMessages([
      ...messages,
      { text: userMessage, title: "", sender: "user" },
    ]);
    setInputMessage(""); // 送信後は空白に

    axios
      .post(url, { text: userMessage })
      .then((res) => {
        const botResponseText = res.data.text;
        const botResponseTitle = res.data.title;
        const botResponseUrl = res.data.url;
        const botResponseContent = res.data.content;
        setMessages((prev) => [
          ...prev,
          { text: botResponseText, sender: "bot" },
        ]);
        setTitles((prev) => [
          ...prev,
          {
            title: botResponseTitle,
            url: botResponseUrl,
            content: botResponseContent,
          },
        ]);
      })
      .catch((error) => {
        console.log("error!", error);
        setMessages((prev) => [...prev, { text: "error!", sender: "bot" }]);
        setTitles((prevTitles) => [
          ...prevTitles,
          { title: "", url: "", content: "" },
        ]);
      });
  };

  return (
    <div className="bg-gray-100 h-full p-4 flex flex-col">
      <h1 className="flex justify-evenly item-center text-4xl mb-10">
        国文学科
      </h1>

      <div className="border-2 rounded flex flex-wrap">
        {titles.map((title, index) => (
          <div
            key={index}
            className="w-64 h-30 overflow-auto border-2 rounded-lg p-4 m-2"
          >
            <p>
              {title.url ? (
                <a
                  href={title.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 hover:text-blue-700"
                >
                  {title.title}
                </a>
              ) : (
                title.title
              )}
            </p>
          </div>
        ))}
      </div>

      <div className="flex-grow overflow-y-auto mb-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={message.sender === "user" ? "text-right" : "text-left"}
          >
            <div
              className={
                message.sender === "user"
                  ? "bg-blue-500 inline-block rounded-lg px-4 py-2 m-2"
                  : "bg-green-500 inline-block rounded-lg px-4 py-2 m-2"
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
