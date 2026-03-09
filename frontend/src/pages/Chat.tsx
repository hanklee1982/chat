import React, { useState, useRef, useEffect } from 'react';
import './Chat.css';

interface Message {
  id: number;
  content: string;
  role: 'user' | 'assistant';
}

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      content: '你好！我是CrayChat，你的专属AI助手。有什么我可以帮助你的吗？',
      role: 'assistant'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const newMessage: Message = {
      id: messages.length + 1,
      content: inputValue,
      role: 'user'
    };

    setMessages([...messages, newMessage]);
    setInputValue('');

    // 模拟AI回复
    setTimeout(() => {
      const aiResponse: Message = {
        id: messages.length + 2,
        content: '这是AI的回复内容。你可以在这里和我进行自然语言对话。',
        role: 'assistant'
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  return (
    <div className="chat-container">
      {/* 左侧边栏 */}
      <div className="chat-sidebar">
        <div className="new-chat-btn">
          <span>+</span>
          <span>新会话</span>
        </div>
        
        <div className="sessions-list">
          <div className="session-item active">
            <div className="session-icon">💬</div>
            <div className="session-title">新会话</div>
          </div>
          <div className="session-item">
            <div className="session-icon">📝</div>
            <div className="session-title">项目需求讨论</div>
          </div>
          <div className="session-item">
            <div className="session-icon">🔧</div>
            <div className="session-title">技术问题排查</div>
          </div>
        </div>
        
        <div className="sidebar-footer">
          <div className="user-profile">
            <div className="user-avatar">👤</div>
            <div className="user-name">用户名称</div>
          </div>
        </div>
      </div>
      
      {/* 主聊天区域 */}
      <div className="chat-main">
        <div className="chat-header">
          <h1 className="chat-title">新会话</h1>
          <div className="chat-actions">
            <button className="action-btn">📤</button>
            <button className="action-btn">⭐</button>
            <button className="action-btn">🗑️</button>
          </div>
        </div>
        
        <div className="messages-container">
          {messages.map((message) => (
            <div 
              key={message.id} 
              className={`message ${message.role === 'user' ? 'user-message' : 'assistant-message'}`}
            >
              <div className="message-avatar">
                {message.role === 'user' ? '👤' : '🤖'}
              </div>
              <div className="message-content">
                <p>{message.content}</p>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        
        <form onSubmit={handleSendMessage} className="input-form">
          <div className="input-wrapper">
            <textarea
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="输入你的消息..."
              className="message-input"
              rows={1}
            />
            <button type="submit" className="send-btn" disabled={!inputValue.trim()}>
              ▶️
            </button>
          </div>
          <div className="input-footer">
            <p>CrayGPT 可以生成自然的人类语言回复。隐私和安全有保障。</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Chat;
