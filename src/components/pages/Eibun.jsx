import React, { useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import { FaPaperPlane } from "react-icons/fa";
import LoadingIcons from "react-loading-icons";

const Eibun = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [titles, setTitles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const url = "http://backend-0521.azurewebsites.net/eibun";

  const sendMessage = () => {
    const userMessage = inputMessage;
    if (!userMessage.trim()) return; // 空白メッセージは送信しない
    setMessages([
      ...messages,
      { text: userMessage, title: "", sender: "user" },
    ]);
    setInputMessage(""); // 送信後は空白に
    setIsLoading(true);

    axios
      .post(url, { text: userMessage })
      .then((res) => {
        const botResponseText = res.data.text;
        const botResponseData = [
          { title: res.data.title_1, url: res.data.url_1, sender: "bot" },
          { title: res.data.title_2, url: res.data.url_2, sender: "bot" },
          { title: res.data.title_3, url: res.data.url_3, sender: "bot" },
          { title: res.data.title_4, url: res.data.url_4, sender: "bot" },
        ];
        setMessages((prev) => [
          ...prev,
          { text: botResponseText, sender: "bot" },
        ]);
        setTitles((prev) => {
          const updatedTitles = [...prev, ...botResponseData];
          return updatedTitles.slice(-4);
        });
      })
      .catch((error) => {
        console.log("error!", error);
        setMessages((prev) => [...prev, { text: "error!", sender: "bot" }]);
        setTitles((prevTitles) => [
          ...prevTitles,
          { title: "", url: "", sender: "bot" },
          { title: "", url: "", sender: "bot" },
          { title: "", url: "", sender: "bot" },
          { title: "", url: "", sender: "bot" },
        ]);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="bg-gray-100 h-full p-4 flex flex-col">
      <h1 className="flex justify-evenly item-center text-4xl mb-10">
        英文学科
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
                  ? "bg-gray-300 inline-block rounded-xl px-4 py-2 m-2 text-black"
                  : "bg-gray-100 inline-block rounded-xl px-4 py-2 m-2 text-black"
              }
            >
              <div className="markdown">
                <ReactMarkdown remarkPlugins={[gfm]}>
                  {message.text}
                </ReactMarkdown>
              </div>
            </div>
          </div>
        ))}
        <div className="rounded flex flex-wrap overflow-y-auto">
          {isLoading && <LoadingIcons.TailSpin width="50" stroke="gray" />}
          {!isLoading &&
            titles.map((title, index) => (
              <div
                key={index}
                className="w-64 h-30 overflow-auto border-2 rounded-xl p-4 m-2 hover:bg-gray-200"
              >
                <p>
                  {title.url ? (
                    <a
                      href={title.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-500 hover:text-blue-700 w-full h-full flex  items-center justify-center"
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
      </div>

      <div className="flex-shrink-0 relative">
        <input
          type="text"
          placeholder="Send a Message"
          className="border-2 rounded w-full pr-10 focus:outline-none p-2"
          onChange={(e) => setInputMessage(e.target.value)}
          value={inputMessage}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              sendMessage();
            }
          }}
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

export default Eibun;
