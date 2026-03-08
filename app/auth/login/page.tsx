"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const LoginPage = () => {
  const router = useRouter();
  const [loginMethod, setLoginMethod] = useState<'phone' | 'email'>('phone');
  const [formData, setFormData] = useState({
    phone: '',
    email: '',
    password: '',
    verificationCode: ''
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // 这里应该调用登录API
    console.log('登录请求', formData);
    // 登录成功后跳转到认购页面
    router.push('/subscribe');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* 顶部导航 */}
      <header className="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
        <button
          onClick={() => router.back()}
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        >
          <svg className="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </button>

        <div className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="CrayChat Logo"
            width={40}
            height={40}
            className="h-10 w-10"
          />
          <span className="text-xl font-bold text-gray-800 dark:text-white">CrayChat</span>
        </div>

        {/* 右上角语言切换 */}
        <button
          onClick={() => {}}
          className="px-3 py-1 text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
        >
          中文
        </button>
      </header>

      {/* 主要内容区域 */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-8">
        <div className="max-w-md w-full">
          {/* 登录标题 */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
              登录
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              登录你的CrayChat账户
            </p>
          </div>

          {/* 登录表单 */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-6">
            {/* 登录方式切换 */}
            <div className="flex mb-6">
              <button
                onClick={() => setLoginMethod('phone')}
                className={`flex-1 py-2 px-4 rounded-t-lg ${loginMethod === 'phone' ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'}`}
              >
                手机号登录
              </button>
              <button
                onClick={() => setLoginMethod('email')}
                className={`flex-1 py-2 px-4 rounded-t-lg ${loginMethod === 'email' ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'}`}
              >
                邮箱登录
              </button>
            </div>

            <form onSubmit={handleLogin}>
              {/* 手机号输入 */}
              {loginMethod === 'phone' && (
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    手机号
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="请输入你的手机号"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    required
                  />
                </div>
              )}

              {/* 邮箱输入 */}
              {loginMethod === 'email' && (
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    邮箱
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="请输入你的邮箱"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    required
                  />
                </div>
              )}

              {/* 密码输入 */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  密码
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="请输入你的密码"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  required
                />
              </div>

              {/* 验证码输入（可选） */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  验证码
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    name="verificationCode"
                    value={formData.verificationCode}
                    onChange={handleInputChange}
                    placeholder="请输入验证码"
                    className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  />
                  <button
                    type="button"
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    获取验证码
                  </button>
                </div>
              </div>

              {/* 登录按钮 */}
              <button
                type="submit"
                className="w-full py-3 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium mb-4"
              >
                登录
              </button>
            </form>

            {/* 注册链接 */}
            <div className="text-center">
              <p className="text-gray-600 dark:text-gray-300">
                还没有账户？
                <button
                  onClick={() => router.push('/auth/register')}
                  className="text-blue-500 hover:underline ml-1"
                >
                  立即注册
                </button>
              </p>
            </div>

            {/* 忘记密码 */}
            <div className="text-center mt-4">
              <button
                onClick={() => {}}
                className="text-sm text-gray-500 dark:text-gray-400 hover:underline"
              >
                忘记密码？
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* 页脚 */}
      <footer className="px-4 py-3 text-center text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
        <p>© 2026 CrayChat（虾聊）. 专为一人公司创业者打造的AI工作平台</p>
      </footer>
    </div>
  );
};

export default LoginPage;
