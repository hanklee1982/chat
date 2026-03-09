import React from 'react';
import './SetupProgress.css';

const SetupProgress: React.FC = () => {
  const progress = 75; // 模拟配置进度
  const steps = [
    { title: '账号激活', completed: true },
    { title: '支付完成', completed: true },
    { title: '系统配置', completed: true },
    { title: '初始化完成', completed: false }
  ];

  return (
    <div className="setup-container">
      <div className="setup-card">
        <h1 className="setup-title">系统配置中</h1>
        
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }}></div>
        </div>
        <p className="progress-text">配置进度：{progress}%</p>
        
        <div className="steps-container">
          {steps.map((step, index) => (
            <div key={index} className={`step ${step.completed ? 'completed' : ''}`}>
              <div className="step-number">
                {step.completed ? '✓' : index + 1}
              </div>
              <div className="step-content">
                <h3>{step.title}</h3>
                {step.completed ? (
                  <p className="step-status">已完成</p>
                ) : (
                  <p className="step-status">进行中...</p>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="setup-info">
          <p>正在为您配置专属聊天工作台...</p>
          <p>预计还需要 <strong>2分钟</strong></p>
        </div>
        
        <button className="continue-btn" disabled={progress < 100}>
          {progress < 100 ? '配置中...' : '进入工作台'}
        </button>
      </div>
    </div>
  );
};

export default SetupProgress;
