
import React, { useState } from 'react';
import { X, User, Building2, Shield, Smartphone, CheckCircle, AlertCircle } from 'lucide-react';

interface HRAccountModalProps {
  onClose: () => void;
}

export const HRAccountModal: React.FC<HRAccountModalProps> = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState<'login' | 'settings'>('login');
  const [dingTalkConnected, setDingTalkConnected] = useState(false);
  const [formData, setFormData] = useState({
    companyName: '',
    dingTalkOrgId: '',
    hrName: '',
    hrPhone: '',
    department: '',
    autoSync: true,
    loginRemember: false
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleDingTalkConnect = () => {
    // 模拟钉钉连接过程
    setTimeout(() => {
      setDingTalkConnected(true);
      setFormData(prev => ({
        ...prev,
        companyName: '示例科技有限公司',
        dingTalkOrgId: 'ding_12345678',
        hrName: '张小HR',
        hrPhone: '13800138000',
        department: '人力资源部'
      }));
    }, 1500);
  };

  const handleSave = () => {
    console.log('保存HR账号设置:', formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-[20000]">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative z-[20001]">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 rounded-t-xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">HR</span>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900">HR账号设置</h2>
                <p className="text-sm text-gray-500">企业钉钉账号集成登录</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Tab Navigation */}
          <div className="flex space-x-1 mt-4 bg-gray-100 p-1 rounded-lg">
            <button
              onClick={() => setActiveTab('login')}
              className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'login'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              钉钉登录
            </button>
            <button
              onClick={() => setActiveTab('settings')}
              className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'settings'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              账号设置
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {activeTab === 'login' && (
            <div className="space-y-6">
              {/* DingTalk Connection Status */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                      <Smartphone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">企业钉钉集成</h3>
                      <p className="text-sm text-gray-600">
                        {dingTalkConnected ? '已连接到企业钉钉账号' : '通过企业钉钉账号登录系统'}
                      </p>
                    </div>
                  </div>
                  {dingTalkConnected ? (
                    <div className="flex items-center space-x-2 text-green-600">
                      <CheckCircle className="w-5 h-5" />
                      <span className="text-sm font-medium">已连接</span>
                    </div>
                  ) : (
                    <button
                      onClick={handleDingTalkConnect}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      连接钉钉
                    </button>
                  )}
                </div>
              </div>

              {/* Connection Steps */}
              <div className="space-y-4">
                <h4 className="font-medium text-gray-900">连接步骤：</h4>
                <div className="space-y-3">
                  {[
                    { step: 1, title: '扫码授权', desc: '使用企业钉钉扫描二维码', completed: dingTalkConnected },
                    { step: 2, title: '验证身份', desc: '确认HR身份和权限', completed: dingTalkConnected },
                    { step: 3, title: '同步信息', desc: '同步企业和个人信息', completed: dingTalkConnected }
                  ].map((item) => (
                    <div key={item.step} className="flex items-center space-x-3">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-sm font-medium ${
                        item.completed 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-gray-100 text-gray-500'
                      }`}>
                        {item.completed ? '✓' : item.step}
                      </div>
                      <div>
                        <div className={`text-sm font-medium ${
                          item.completed ? 'text-green-700' : 'text-gray-900'
                        }`}>
                          {item.title}
                        </div>
                        <div className="text-xs text-gray-500">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Security Notice */}
              <div className="bg-amber-50 rounded-lg p-4">
                <div className="flex items-start space-x-2">
                  <AlertCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                  <div className="text-xs text-amber-800">
                    <p className="font-medium mb-1">安全提示</p>
                    <p>连接企业钉钉后，系统将使用钉钉的身份验证机制，确保账号安全。所有敏感信息均加密存储。</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="space-y-6">
              {/* Company Information */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Building2 className="w-5 h-5 text-gray-600" />
                  <h4 className="font-medium text-gray-900">企业信息</h4>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      企业名称
                    </label>
                    <input
                      type="text"
                      value={formData.companyName}
                      onChange={(e) => handleInputChange('companyName', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="请输入企业名称"
                      disabled={dingTalkConnected}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      钉钉企业ID（钉钉号）
                    </label>
                    <input
                      type="text"
                      value={formData.dingTalkOrgId}
                      onChange={(e) => handleInputChange('dingTalkOrgId', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="钉钉企业ID（钉钉号）"
                      disabled={dingTalkConnected}
                    />
                  </div>
                </div>
              </div>

              {/* HR Information */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <User className="w-5 h-5 text-gray-600" />
                  <h4 className="font-medium text-gray-900">HR信息</h4>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      HR姓名
                    </label>
                    <input
                      type="text"
                      value={formData.hrName}
                      onChange={(e) => handleInputChange('hrName', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="请输入HR姓名"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      联系电话
                    </label>
                    <input
                      type="tel"
                      value={formData.hrPhone}
                      onChange={(e) => handleInputChange('hrPhone', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="请输入联系电话"
                    />
                  </div>
                  
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      所属部门
                    </label>
                    <input
                      type="text"
                      value={formData.department}
                      onChange={(e) => handleInputChange('department', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="请输入所属部门"
                    />
                  </div>
                </div>
              </div>

              {/* System Settings */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-gray-600" />
                  <h4 className="font-medium text-gray-900">系统设置</h4>
                </div>
                
                <div className="space-y-3">
                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={formData.autoSync}
                      onChange={(e) => handleInputChange('autoSync', e.target.checked)}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700">自动同步钉钉通讯录</span>
                  </label>
                  
                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={formData.loginRemember}
                      onChange={(e) => handleInputChange('loginRemember', e.target.checked)}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700">记住登录状态（7天）</span>
                  </label>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-white border-t border-gray-200 px-6 py-4 rounded-b-xl">
          <div className="flex justify-end space-x-3">
            <button
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              取消
            </button>
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              保存设置
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
