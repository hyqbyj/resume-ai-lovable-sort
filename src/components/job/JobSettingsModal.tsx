
import React, { useState } from 'react';
import { X, Save, Trash2 } from 'lucide-react';

interface JobSettingsModalProps {
  job: any;
  onClose: () => void;
}

export const JobSettingsModal: React.FC<JobSettingsModalProps> = ({ job, onClose }) => {
  const [settings, setSettings] = useState({
    autoScreening: true,
    minScore: 60,
    emailNotifications: true,
    publicListing: true,
    allowRemote: false,
    urgentHiring: false
  });

  const handleSave = () => {
    console.log('保存设置:', settings);
    onClose();
  };

  const handleDelete = () => {
    if (window.confirm('确定要删除这个职位吗？此操作不可撤销。')) {
      console.log('删除职位:', job.id);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-lg w-full">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">职位设置</h2>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Settings */}
        <div className="p-6 space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-gray-900">自动筛选</h3>
                <p className="text-xs text-gray-500">启用AI自动筛选功能</p>
              </div>
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.autoScreening}
                  onChange={(e) => setSettings(prev => ({ ...prev, autoScreening: e.target.checked }))}
                  className="sr-only"
                />
                <div className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.autoScreening ? 'bg-blue-600' : 'bg-gray-200'
                }`}>
                  <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.autoScreening ? 'translate-x-6' : 'translate-x-1'
                  }`} />
                </div>
              </label>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                最低筛选分数
              </label>
              <input
                type="number"
                min="0"
                max="100"
                value={settings.minScore}
                onChange={(e) => setSettings(prev => ({ ...prev, minScore: parseInt(e.target.value) }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-gray-900">邮件通知</h3>
                <p className="text-xs text-gray-500">收到新申请时发送邮件通知</p>
              </div>
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.emailNotifications}
                  onChange={(e) => setSettings(prev => ({ ...prev, emailNotifications: e.target.checked }))}
                  className="sr-only"
                />
                <div className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.emailNotifications ? 'bg-blue-600' : 'bg-gray-200'
                }`}>
                  <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.emailNotifications ? 'translate-x-6' : 'translate-x-1'
                  }`} />
                </div>
              </label>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-gray-900">公开招聘</h3>
                <p className="text-xs text-gray-500">在招聘网站上公开发布</p>
              </div>
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.publicListing}
                  onChange={(e) => setSettings(prev => ({ ...prev, publicListing: e.target.checked }))}
                  className="sr-only"
                />
                <div className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.publicListing ? 'bg-blue-600' : 'bg-gray-200'
                }`}>
                  <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.publicListing ? 'translate-x-6' : 'translate-x-1'
                  }`} />
                </div>
              </label>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-gray-900">支持远程</h3>
                <p className="text-xs text-gray-500">允许远程办公</p>
              </div>
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.allowRemote}
                  onChange={(e) => setSettings(prev => ({ ...prev, allowRemote: e.target.checked }))}
                  className="sr-only"
                />
                <div className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.allowRemote ? 'bg-blue-600' : 'bg-gray-200'
                }`}>
                  <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.allowRemote ? 'translate-x-6' : 'translate-x-1'
                  }`} />
                </div>
              </label>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-gray-900">紧急招聘</h3>
                <p className="text-xs text-gray-500">标记为紧急招聘职位</p>
              </div>
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.urgentHiring}
                  onChange={(e) => setSettings(prev => ({ ...prev, urgentHiring: e.target.checked }))}
                  className="sr-only"
                />
                <div className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.urgentHiring ? 'bg-blue-600' : 'bg-gray-200'
                }`}>
                  <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.urgentHiring ? 'translate-x-6' : 'translate-x-1'
                  }`} />
                </div>
              </label>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-between p-6 border-t border-gray-200">
          <button
            onClick={handleDelete}
            className="flex items-center space-x-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            <Trash2 className="w-4 h-4" />
            <span>删除职位</span>
          </button>
          <div className="flex space-x-3">
            <button
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              取消
            </button>
            <button
              onClick={handleSave}
              className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Save className="w-4 h-4" />
              <span>保存设置</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
