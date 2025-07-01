
import React, { useState } from 'react';
import { X, Clock, RefreshCw, Filter, Bell, Shield } from 'lucide-react';

interface SyncSettingsModalProps {
  onClose: () => void;
  platform: {
    id: string;
    name: string;
    icon: string;
  };
}

export const SyncSettingsModal: React.FC<SyncSettingsModalProps> = ({ 
  onClose, 
  platform 
}) => {
  const [settings, setSettings] = useState({
    syncFrequency: 'daily',
    autoSync: true,
    syncOnlyNew: true,
    notifyOnSync: false,
    filterByScore: false,
    minScore: 60,
    syncHours: '09:00',
    includeAttachments: true
  });

  const handleSettingChange = (key: string, value: any) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleSave = () => {
    // 保存设置逻辑
    console.log('保存同步设置:', settings);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-60">
      <div className="bg-white rounded-xl max-w-lg w-full max-h-[90vh] overflow-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <span className="text-2xl">{platform.icon}</span>
            <h2 className="text-xl font-semibold text-gray-900">
              {platform.name} 同步设置
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
        <div className="p-6 space-y-6">
          {/* 同步频率 */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-blue-600" />
              <h3 className="font-medium text-gray-900">同步频率</h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { value: 'realtime', label: '实时同步' },
                { value: 'hourly', label: '每小时' },
                { value: 'daily', label: '每天' },
                { value: 'weekly', label: '每周' }
              ].map((option) => (
                <label key={option.value} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="syncFrequency"
                    value={option.value}
                    checked={settings.syncFrequency === option.value}
                    onChange={(e) => handleSettingChange('syncFrequency', e.target.value)}
                    className="text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-700">{option.label}</span>
                </label>
              ))}
            </div>
            {settings.syncFrequency === 'daily' && (
              <div className="ml-7">
                <label className="block text-sm text-gray-600 mb-1">同步时间</label>
                <input
                  type="time"
                  value={settings.syncHours}
                  onChange={(e) => handleSettingChange('syncHours', e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg text-sm"
                />
              </div>
            )}
          </div>

          {/* 自动同步 */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <RefreshCw className="w-5 h-5 text-green-600" />
              <h3 className="font-medium text-gray-900">自动同步选项</h3>
            </div>
            <div className="space-y-2">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={settings.autoSync}
                  onChange={(e) => handleSettingChange('autoSync', e.target.checked)}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">启用自动同步</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={settings.syncOnlyNew}
                  onChange={(e) => handleSettingChange('syncOnlyNew', e.target.checked)}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">仅同步新简历</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={settings.includeAttachments}
                  onChange={(e) => handleSettingChange('includeAttachments', e.target.checked)}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">包含附件文件</span>
              </label>
            </div>
          </div>

          {/* 筛选条件 */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-purple-600" />
              <h3 className="font-medium text-gray-900">筛选条件</h3>
            </div>
            <div className="space-y-2">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={settings.filterByScore}
                  onChange={(e) => handleSettingChange('filterByScore', e.target.checked)}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">按评分筛选</span>
              </label>
              {settings.filterByScore && (
                <div className="ml-6">
                  <label className="block text-sm text-gray-600 mb-1">最低评分</label>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    value={settings.minScore}
                    onChange={(e) => handleSettingChange('minScore', parseInt(e.target.value))}
                    className="w-20 px-3 py-2 border border-gray-300 rounded-lg text-sm"
                  />
                  <span className="ml-2 text-sm text-gray-500">分</span>
                </div>
              )}
            </div>
          </div>

          {/* 通知设置 */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Bell className="w-5 h-5 text-yellow-600" />
              <h3 className="font-medium text-gray-900">通知设置</h3>
            </div>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={settings.notifyOnSync}
                onChange={(e) => handleSettingChange('notifyOnSync', e.target.checked)}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700">同步完成后通知我</span>
            </label>
          </div>

          {/* 安全说明 */}
          <div className="bg-blue-50 rounded-lg p-4">
            <div className="flex items-start space-x-2">
              <Shield className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
              <div className="text-sm text-blue-800">
                <p className="font-medium mb-1">数据安全</p>
                <p>所有同步数据均经过加密传输和存储，严格遵守数据保护法规。</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex space-x-3 p-6 border-t border-gray-200">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            取消
          </button>
          <button
            onClick={handleSave}
            className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            保存设置
          </button>
        </div>
      </div>
    </div>
  );
};
