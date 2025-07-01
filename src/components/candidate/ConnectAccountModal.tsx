
import React, { useState } from 'react';
import { X, Eye, EyeOff, AlertCircle, CheckCircle, Loader2 } from 'lucide-react';

interface ConnectAccountModalProps {
  onClose: () => void;
  platform: {
    id: string;
    name: string;
    icon: string;
  };
  onConnect: (accountData: any) => void;
}

export const ConnectAccountModal: React.FC<ConnectAccountModalProps> = ({ 
  onClose, 
  platform, 
  onConnect 
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [connecting, setConnecting] = useState(false);
  const [connected, setConnected] = useState(false);
  const [formData, setFormData] = useState({
    accountName: '',
    email: '',
    password: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleConnect = async () => {
    if (!formData.email || !formData.password) return;
    
    setConnecting(true);
    
    // 模拟连接过程
    setTimeout(() => {
      const accountInfo = {
        platform: platform.name,
        accountName: formData.accountName || `${platform.name}用户`,
        email: formData.email,
        resumeCount: Math.floor(Math.random() * 200) + 50,
        lastSync: '刚刚',
        status: 'connected'
      };
      
      setConnected(true);
      setConnecting(false);
      onConnect(accountInfo);
    }, 2000);
  };

  if (connected) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-[9999]">
        <div className="bg-white rounded-xl max-w-md w-full p-6 relative z-[10000]">
          <div className="text-center">
            <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">连接成功！</h3>
            <p className="text-gray-600 mb-4">账号已成功连接到{platform.name}</p>
            <button
              onClick={onClose}
              className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              完成
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-[9999]">
      <div className="bg-white rounded-xl max-w-md w-full p-6 relative z-[10000] max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <span className="text-2xl">{platform.icon}</span>
            <h2 className="text-xl font-semibold text-gray-900">
              连接{platform.name}账号
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              账号名称
            </label>
            <input
              type="text"
              value={formData.accountName}
              onChange={(e) => handleInputChange('accountName', e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-colors"
              placeholder="为此账号设置一个名称"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              登录邮箱 *
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-colors"
              placeholder="输入登录邮箱"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              登录密码 *
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={formData.password}
                onChange={(e) => handleInputChange('password', e.target.value)}
                className="w-full p-3 pr-10 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-colors"
                placeholder="输入登录密码"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Security Notice */}
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-start space-x-2">
              <AlertCircle className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
              <div className="text-xs text-gray-600">
                <p className="font-medium mb-1">安全保证</p>
                <p>您的账号信息将经过加密存储，仅用于合法的简历数据同步。</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-3 pt-4">
            <button
              onClick={onClose}
              className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              取消
            </button>
            <button
              onClick={handleConnect}
              disabled={!formData.email || !formData.password || connecting}
              className="flex-1 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors flex items-center justify-center space-x-2"
            >
              {connecting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>连接中...</span>
                </>
              ) : (
                <span>连接账号</span>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
