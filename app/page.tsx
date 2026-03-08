"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

// 游客首页 - ChatGPT风格
const HomePage = () => {
  const router = useRouter();

  // 处理游客操作跳转登录
  const handleGuestAction = () => {
    router.push('/auth/login');
  };

  // 快捷提示词
  const quickPrompts = [
    '给我开发个项目',
    '给我写个商业计划书',
    '给我画张图',
    '帮我做营销方案'
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* 顶部导航 */}
      <header className="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
        {/* 左上角菜单按钮 */}
        <button
          onClick={handleGuestAction}
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        >
          <svg className="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* 中央Logo */}
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
        <div className="max-w-3xl w-full">
          {/* 欢迎文案 */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
              欢迎来到 CrayChat
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              和 AI 一起开始你的创业项目
            </p>
          </div>

          {/* 聊天区域 */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 mb-6">
            <div className="p-4 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-start gap-3">
                <Image
                  src="/logo.png"
                  alt="AI"
                  width={32}
                  height={32}
                  className="h-8 w-8 rounded-full"
                />
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3 text-gray-800 dark:text-white">
                  <p>你好！我是你的AI创业助手。点击下面的快捷提示词开始，或者在底部输入框输入你的需求。</p>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    提示：游客仅可浏览，点击任何操作将跳转到注册登录
                  </p>
                </div>
              </div>
            </div>

            {/* 快捷提示词 */}
            <div className="p-4 bg-gray-50 dark:bg-gray-900">
              <div className="flex flex-wrap gap-2">
                {quickPrompts.map((prompt, index) => (
                  <button
                    key={index}
                    onClick={handleGuestAction}
                    className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* 聊天输入框 */}
          <div className="relative">
            <div className="flex items-center gap-2 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 p-2">
              <input
                type="text"
                placeholder="输入你的需求..."
                className="flex-1 px-3 py-2 text-gray-800 dark:text-white bg-transparent outline-none"
                onClick={handleGuestAction}
              />
              <button
                onClick={handleGuestAction}
                className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
            <div className="text-center mt-2 text-sm text-gray-500 dark:text-gray-400">
              点击输入框或快捷提示词将跳转到注册登录
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

export default HomePage;
