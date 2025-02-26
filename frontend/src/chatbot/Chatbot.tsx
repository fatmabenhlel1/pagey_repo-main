import React, { useState } from 'react';
import axios from 'axios';  // Import Axios
import Header from '../Header/Header';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = async () => {
    if (input.trim() === '') return;

    const userMessage = { text: input, sender: 'user' };
    setMessages([...messages, userMessage]);
    setInput('');

    try {
      const response = await axios.post('http://127.0.0.1:5000/chat', { 
        message: input 
      });

      const botMessage = { 
        text: response.data.response || "Sorry, I couldn't generate a response.", 
        sender: 'bot' 
      };

      setMessages(prevMessages => [...prevMessages, botMessage]);
    } catch (error) {
      console.error('Error:', error);
      setMessages(prevMessages => [...prevMessages, { text: "Error connecting to the chatbot.", sender: 'bot' }]);
    }
  };

  return (
    <div className="chatbot-container">
      <Header />
      
      <div className="chatbot-content">
        <h2 className="chat-title">Ask our AI Assistant about Books</h2>
        <p className="chat-subtitle">Get recommendations, author insights, and more.</p>

        <div className="chatbox">
          <div className="messages">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="input-area">
            <input 
              type="text" 
              placeholder="Ask about a book or an author..." 
              value={input} 
              onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .chatbot-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          background-color: #f4f4f4;
          min-height: 100vh;
          padding-top: 50px;
        }

        .chatbot-content {
          text-align: center;
          max-width: 800px;
          margin-top: 40px;
        }

        .chat-title {
          font-size: 28px;
          font-weight: bold;
          color: #222;
        }

        .chat-subtitle {
          font-size: 18px;
          color: #666;
          margin-bottom: 20px;
        }

        .chatbox {
          width: 100%;
          max-width: 600px;
          background: white;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          display: flex;
          flex-direction: column;
        }

        .messages {
          max-height: 400px;
          overflow-y: auto;
          margin-bottom: 10px;
          padding: 10px;
          border-radius: 5px;
          background: #fafafa;
          text-align: left;
        }

        .message {
          padding: 10px;
          border-radius: 5px;
          margin-bottom: 5px;
          max-width: 80%;
        }

        .user {
          background-color:rgb(54, 73, 95);
          color: white;
          align-self: flex-end;
        }

        .bot {
          background-color: #e1e1e1;
          color: black;
          align-self: flex-start;
        }

        .input-area {
          display: flex;
          gap: 10px;
          margin-top: 10px;
        }

        input {
          flex: 1;
          padding: 12px;
          border: 1px solid #ccc;
          border-radius: 5px;
          font-size: 16px;
        }

        button {
          background: #222;
          color: white;
          border: none;
          padding: 12px 20px;
          border-radius: 5px;
          cursor: pointer;
          font-size: 16px;
          font-weight: bold;
        }

        button:hover {
          background: #444;
        }
      `}</style>
    </div>
  );
};

export default Chatbot;
