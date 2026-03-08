"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

// 超配中心页面
const SuperPowerCenterPage = () => {
  const router = useRouter();
  const [locale, setLocale] = useState<'zh' | 'en'>('zh');
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);

  // 套餐数据
  const plans = [
    {
      id: 'super',
      title: {
        zh: '超人套餐',
        en: 'Super Plan'
      },
      price: '2888元',
      priceEn: '¥2,888',
      config: {
        zh: '升级 GPU\nRTX 4060 / RTX 4070',
        en: 'Upgrade GPU\nRTX 4060 / RTX 4070'
      },
      features: [
        { zh: '生成海报', en: 'Poster Generation' },
        { zh: '生成插画', en: 'Illustration Creation' },
        { zh: '产品图', en: 'Product Image Generation' },
        { zh: 'AI角色', en: 'AI Character Creation' },
        { zh: '基础视频', en: 'Basic Video Generation' }
      ]
    },
    {
      id: 'ultimate',
      title: {
        zh: '顶级套餐',
        en: 'Ultimate Plan'
      },
      price: '15888元',
      priceEn: '¥15,888',
      config: {
        zh: '高级GPU算力 + AI多媒体生成',
        en: 'Advanced GPU Computing + AI Multimedia Generation'
      },
      features: [
        { zh: '文生视频', en: 'Text to Video' },
        { zh: '数字人视频', en: 'Digital Human Video' },
        { zh: 'AI短视频生成', en: 'AI Short Video Creation' },
        { zh: 'AI动画生成', en: 'AI Animation Generation' },
        { zh: 'AI主播', en: 'AI Virtual Host' },
        { zh: '数字人客服', en: 'Digital Human Customer Service' },
        { zh: '实时口型驱动', en: 'Real-time Lip Sync' },
        { zh: '实时视频合成', en: 'Real-time Video Rendering' }
      ]
    }
  ];

  // 切换语言
  const toggleLocale = () => {
    setLocale(locale === 'zh' ? 'en' : 'zh');
  };

  // 处理升级按钮点击
  const handleUpgrade = (planId: string) => {
    setSelectedPlan(planId);
    setShowModal(true);
  };

  // 确认支付
  const confirmPayment = () => {
    console.log('确认升级套餐:', selectedPlan);
    // 这里应该调用升级API
    setShowModal(false);
    // 支付成功后跳转到部署页面或用户中心
    router.push('/user-center');
  };

  // 获取当前选中的套餐
  const getSelectedPlan = () => {
    return plans.find(plan => plan.id === selectedPlan);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* 顶部导航 */}
      <header className="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 sticky top-0 z-50">
        {/* 左上角菜单按钮 */}
        <button
          onClick={() => router.back()}
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        >
          <svg className="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
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

        {/* 语言切换 */}
        <button
          onClick={toggleLocale}
          className="px-3 py-1 text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
        >
          {locale === 'zh' ? 'English' : '中文'}
        </button>
      </header>

      {/* 主要内容区域 */}
      <main className="flex-1 px-4 py-8">
        <div className="max-w-7xl mx-auto">
          {/* 页面标题 */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-3">
              {locale === 'zh' ? '超配中心' : 'Super Power Center'}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {locale === 'zh' 
                ? '升级你的AI算力，解锁更强大的AI创作能力' 
                : 'Upgrade your AI computing power to unlock advanced AI creation.'}
            </p>
          </div>

          {/* 套餐卡片 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              >
                {/* 卡片顶部渐变背景 */}
                <div
                  className="h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                  style={{
                    background: plan.id === 'super'
                      ? 'linear-gradient(to right, #165DFF, #722ED1)'
                      : 'linear-gradient(to right, #722ED1, #EB3349)'
                  }}
                ></div>

                {/* 卡片内容 */}
                <div className="p-6">
                  {/* 套餐标题 */}
                  <div className="text-center mb-4">
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                      {locale === 'zh' ? plan.title.zh : plan.title.en}
                    </h2>
                    <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                      {locale === 'zh' ? plan.price : plan.priceEn}
                    </p>
                  </div>

                  {/* 配置说明 */}
                  <div className="text-center mb-6 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <p className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-line">
                      {locale === 'zh' ? plan.config.zh : plan.config.en}
                    </p>
                  </div>

                  {/* 支持功能列表 */}
                  <div className="mb-6">
                    <ul className="space-y-2">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <svg
                            className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="text-gray-700 dark:text-gray-300">
                            {locale === 'zh' ? feature.zh : feature.en}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* 升级按钮 */}
                  <button
                    onClick={() => handleUpgrade(plan.id)}
                    className="w-full py-3 px-4 rounded-lg font-medium text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    {locale === 'zh' ? '立即升级' : 'Upgrade Now'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* 页脚 */}
      <footer className="px-4 py-3 text-center text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
        <p>© 2026 CrayChat（虾聊）. 专为一人公司创业者打造的AI工作平台</p>
      </footer>

      {/* 升级确认弹窗 */}
      {showModal && selectedPlan && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-md w-full p-6">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 text-center">
              {locale === 'zh' ? '确认升级该套餐？' : 'Confirm upgrade to this plan?'}
            </h3>

            {getSelectedPlan() && (
              <div className="mb-6 text-center">
                <p className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {locale === 'zh' 
                    ? getSelectedPlan()?.title.zh 
                    : getSelectedPlan()?.title.en}
                </p>
                <p className="text-xl font-bold text-blue-600 dark:text-blue-400">
                  {locale === 'zh' ? getSelectedPlan()?.price : getSelectedPlan()?.priceEn}
                </p>
              </div>
            )}

            <div className="flex gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 py-2 px-4 rounded-lg font-medium text-gray-700 dark:text-gray-300 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                {locale === 'zh' ? '取消' : 'Cancel'}
              </button>
              <button
                onClick={confirmPayment}
                className="flex-1 py-2 px-4 rounded-lg font-medium text-white bg-blue-500 hover:bg-blue-600 transition-colors"
              >
                {locale === 'zh' ? '确认支付' : 'Confirm Payment'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SuperPowerCenterPage;
