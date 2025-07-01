
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
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [connecting, setConnecting] = useState(false);
  const [formData, setFormData] = useState({
    accountName: '',
    email: '',
    password: '',
    rememberPassword: false,
    autoSync: true,
    syncFrequency: 'daily'
  });

  const [connectionResult, setConnectionResult] = useState<{
    success: boolean;
    message: string;
    accountInfo?: any;
  } | null>(null);

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleConnect = async () => {
    setConnecting(true);
    
    // 模拟连接过程
    setTimeout(() => {
      const success = Math.random() > 0.3; // 70% 成功率
      
      if (success) {
        const accountInfo = {
          platform: platform.name,
          accountName: formData.accountName || `${platform.name}用户`,
          email: formData.email,
          resumeCount: Math.floor(Math.random() * 200) + 50,
          lastSync: '刚刚',
          status: 'connected'
        };
        
        setConnectionResult({
          success: true,
          message: '账号连接成功！',
          accountInfo
        });
        
        onConnect(accountInfo);
      } else {
        setConnectionResult({
          success: false,
          message: '连接失败，请检查账号密码是否正确'
        });
      }
      
      setConnecting(false);
      setStep(2);
    }, 2000);
  };

  const getPlatformLoginTips = () => {
    switch (platform.id) {
      case 'boss':
        return [
          '请使用您的Boss直聘企业账号登录',
          '确保账号具有简历查看权限',
          '建议使用HR管理员账号以获得完整功能'
        ];
      case 'zhilian':
        return [
          '请使用智联招聘企业版账号',
          '个人账号无法导入简历数据',
          '确保账号状态正常且已认证'
        ];
      case 'liepin':
        return [
          '请使用猎聘企业账号登录',
          '需要具备简历下载权限',
          '建议绑定企业邮箱以提高安全性'
        ];
      default:
        return ['请确保使用有效的企业账号'];
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-60">
      <div className="bg-white rounded-xl max-w-md w-full max-h-[90vh] overflow-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <span className="text-2xl">{platform.icon}</span>
            <h2 className="text-xl font-semibold text-gray-900">
              连接{platform.name}账号
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {step === 1 && (
            <div className="space-y-6">
              {/* Login Tips */}
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-medium text-blue-900 mb-2">连接说明</h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  {getPlatformLoginTips().map((tip, index) => (
                    <li key={index}>• {tip}</li>
                  ))}
                </ul>
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
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
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
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
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
                      className="w-full p-3 pr-10 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      placeholder="输入登录密码"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Options */}
                <div className="space-y-3">
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={formData.rememberPassword}
                      onChange={(e) => handleInputChange('rememberPassword', e.target.checked)}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700">记住密码（安全存储）</span>
                  </label>

                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={formData.autoSync}
                      onChange={(e) => handleInputChange('autoSync', e.target.checked)}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700">启用自动同步</span>
                  </label>
                </div>

                {formData.autoSync && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      同步频率
                    </label>
                    <select
                      value={formData.syncFrequency}
                      onChange={(e) => handleInputChange('syncFrequency', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="realtime">实时同步</option>
                      <option value="hourly">每小时</option>
                      <option value="daily">每天</option>
                      <option value="weekly">每周</option>
                    </select>
                  </div>
                )}
              </div>

              {/* Security Notice */}
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-start space-x-2">
                  <AlertCircle className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                  <div className="text-xs text-gray-600">
                    <p className="font-medium mb-1">安全保证</p>
                    <p>您的账号信息将经过加密存储，我们承诺不会用于其他用途。系统仅用于合法的简历数据同步，严格遵守数据保护法规。</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-3">
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
          )}

          {step === 2 && connectionResult && (
            <div className="space-y-6 text-center">
              <div className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                {connectionResult.success ? (
                  <CheckCircle className="w-16 h-16 text-green-600" />
                ) : (
                  <AlertCircle className="w-16 h-16 text-red-600" />
                )}
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  {connectionResult.success ? '连接成功！' : '连接失败'}
                </h3>
                <p className="text-gray-600 mb-4">{connectionResult.message}</p>
              </div>

              {connectionResult.success && connectionResult.accountInfo && (
                <div className="bg-green-50 rounded-lg p-4 text-left">
                  <h4 className="font-medium text-green-900 mb-3">账号信息</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-green-700">平台:</span>
                      <span className="text-green-900">{connectionResult.accountInfo.platform}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-green-700">账号名称:</span>
                      <span className="text-green-900">{connectionResult.accountInfo.accountName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-green-700">可用简历:</span>
                      <span className="text-green-900">{connectionResult.accountInfo.resumeCount} 份</span>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex space-x-3">
                {!connectionResult.success && (
                  <button
                    onClick={() => setStep(1)}
                    className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    重试连接
                  </button>
                )}
                <button
                  onClick={onClose}
                  className="flex-1 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  {connectionResult.success ? '完成' : '关闭'}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
