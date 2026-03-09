import React, { useState } from 'react';
import './Payment.css';

const Payment: React.FC = () => {
  const [paymentType, setPaymentType] = useState<'one-time' | 'subscription'>('one-time');
  const [paymentMethod, setPaymentMethod] = useState<'alipay' | 'wechat' | 'card'>('alipay');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 后续添加API调用
    console.log('支付', { paymentType, paymentMethod });
  };

  return (
    <div className="payment-container">
      <div className="payment-card">
        <h1 className="payment-title">开通CrayChat Pro</h1>
        
        <div className="payment-options">
          <div 
            className={`payment-option ${paymentType === 'one-time' ? 'active' : ''}`}
            onClick={() => setPaymentType('one-time')}
          >
            <h2>一次性支付</h2>
            <p className="price">¥2999</p>
            <p className="description">终身使用权限</p>
          </div>
          
          <div 
            className={`payment-option ${paymentType === 'subscription' ? 'active' : ''}`}
            onClick={() => setPaymentType('subscription')}
          >
            <h2>月订阅</h2>
            <p className="price">¥699<span className="month">/月</span></p>
            <p className="description">按月自动续费</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="payment-form">
          <div className="form-group">
            <label>支付方式</label>
            <div className="payment-methods">
              <div 
                className={`payment-method ${paymentMethod === 'alipay' ? 'active' : ''}`}
                onClick={() => setPaymentMethod('alipay')}
              >
                <span className="method-icon">💳</span>
                <span>支付宝</span>
              </div>
              <div 
                className={`payment-method ${paymentMethod === 'wechat' ? 'active' : ''}`}
                onClick={() => setPaymentMethod('wechat')}
              >
                <span className="method-icon">📱</span>
                <span>微信支付</span>
              </div>
              <div 
                className={`payment-method ${paymentMethod === 'card' ? 'active' : ''}`}
                onClick={() => setPaymentMethod('card')}
              >
                <span className="method-icon">💳</span>
                <span>银行卡</span>
              </div>
            </div>
          </div>
          
          <button type="submit" className="submit-btn">
            立即支付 {paymentType === 'one-time' ? '¥2999' : '¥699/月'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Payment;
