import React, { useState } from 'react';
import { X, Check, AlertCircle, Settings, Plus, Trash2, Edit3 } from 'lucide-react';
import { SyncSettingsModal } from './SyncSettingsModal';

interface AccountManagementModalProps {
  onClose: () => void;
}

interface PlatformAccount {
  id: string;
  platform: string;
  platformIcon: string;
  accountName: string;
  email: string;
  status: 'connected' | 'disconnected' | 'error';
  lastSync: string;
  resumeCount: number;
}

export const AccountManagementModal: React.FC<AccountManagementModalProps> = ({ onClose }) => {
  const [accounts, setAccounts] = useState<PlatformAccount[]>([
    {
      id: '1',
      platform: 'Boss直聘',
      platformIcon: '👔',
      accountName: '科技公司HR',
      email: 'hr@techcompany.com',
      status: 'connected',
      lastSync: '2024-01-15 10:30',
      resumeCount: 156
    },
    {
      id: '2',
      platform: '智联招聘',
      platformIcon: '🏢',
      accountName: '未连接',
      email: '',
      status: 'disconnected',
      lastSync: '从未同步',
      resumeCount: 0
    },
    {
      id: '3',
      platform: '猎聘',
      platformIcon: '🎯',
      accountName: '创新企业',
      email: 'talent@innovation.com',
      status: 'connected',
      lastSync: '2024-01-14 16:45',
      resumeCount: 89
    }
  ]);

  const [showAddAccount, setShowAddAccount] = useState(false);
  const [showSyncSettings, setShowSyncSettings] = useState(false);
  const [selectedPlatformForSettings, setSelectedPlatformForSettings] = useState<any>(null);
  const [editingAccount, setEditingAccount] = useState<string | null>(null);

  const handleConnect = (accountId: string) => {
    setAccounts(prev => prev.map(acc => 
      acc.id === accountId 
        ? { ...acc, status: 'connected' as const, lastSync: new Date().toLocaleString() }
        : acc
    ));
  };

  const handleDisconnect = (accountId: string) => {
    setAccounts(prev => prev.map(acc => 
      acc.id === accountId 
        ? { ...acc, status: 'disconnected' as const, lastSync: '从未同步', resumeCount: 0 }
        : acc
    ));
  };

  const handleDelete = (accountId: string) => {
    setAccounts(prev => prev.filter(acc => acc.id !== accountId));
  };

  const handleSyncSettings = (account: PlatformAccount) => {
    setSelectedPlatformForSettings({
      id: account.id,
      name: account.platform,
      icon: account.platformIcon
    });
    setShowSyncSettings(true);
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'connected':
        return (
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
            <Check className="w-3 h-3 mr-1" />
            已连接
          </span>
        );
      case 'error':
        return (
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
            <AlertCircle className="w-3 h-3 mr-1" />
            连接异常
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
            未连接
          </span>
        );
    }
  };

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-auto">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">账号管理</h2>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900">平台账号</h3>
                <p className="text-sm text-gray-600">管理您的招聘平台账号连接</p>
              </div>
              <button
                onClick={() => setShowAddAccount(true)}
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Plus className="w-4 h-4 mr-2" />
                添加账号
              </button>
            </div>

            {/* Account List */}
            <div className="space-y-4">
              {accounts.map((account) => (
                <div key={account.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-2xl">
                        {account.platformIcon}
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <h4 className="font-medium text-gray-900">{account.platform}</h4>
                          {getStatusBadge(account.status)}
                        </div>
                        <p className="text-sm text-gray-600">{account.accountName}</p>
                        {account.email && (
                          <p className="text-xs text-gray-500">{account.email}</p>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      {account.status === 'connected' ? (
                        <>
                          <button
                            onClick={() => setEditingAccount(account.id)}
                            className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100"
                          >
                            <Edit3 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDisconnect(account.id)}
                            className="px-3 py-1 text-sm border border-red-300 text-red-700 rounded hover:bg-red-50 transition-colors"
                          >
                            断开连接
                          </button>
                        </>
                      ) : (
                        <button
                          onClick={() => handleConnect(account.id)}
                          className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                        >
                          连接账号
                        </button>
                      )}
                      <button
                        onClick={() => handleDelete(account.id)}
                        className="p-2 text-gray-400 hover:text-red-600 rounded-lg hover:bg-gray-100"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {account.status === 'connected' && (
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-500">最后同步:</span>
                          <span className="ml-2 text-gray-900">{account.lastSync}</span>
                        </div>
                        <div>
                          <span className="text-gray-500">简历数量:</span>
                          <span className="ml-2 text-gray-900">{account.resumeCount} 份</span>
                        </div>
                      </div>
                      <div className="mt-3 flex space-x-2">
                        <button className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition-colors">
                          立即同步
                        </button>
                        <button 
                          onClick={() => handleSyncSettings(account)}
                          className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition-colors"
                        >
                          同步设置
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Add Account Modal */}
            {showAddAccount && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-60">
                <div className="bg-white rounded-lg max-w-md w-full p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-medium text-gray-900">添加平台账号</h3>
                    <button
                      onClick={() => setShowAddAccount(false)}
                      className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        选择平台
                      </label>
                      <select className="w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
                        <option>Boss直聘</option>
                        <option>智联招聘</option>
                        <option>猎聘</option>
                        <option>前程无忧</option>
                        <option>拉勾网</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        账号名称
                      </label>
                      <input
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        placeholder="输入账号名称"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        登录邮箱
                      </label>
                      <input
                        type="email"
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        placeholder="输入登录邮箱"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        密码
                      </label>
                      <input
                        type="password"
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        placeholder="输入密码"
                      />
                    </div>
                  </div>
                  
                  <div className="flex space-x-3 mt-6">
                    <button
                      onClick={() => setShowAddAccount(false)}
                      className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      取消
                    </button>
                    <button
                      onClick={() => setShowAddAccount(false)}
                      className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      连接账号
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Statistics */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="bg-blue-50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-blue-600">{accounts.filter(a => a.status === 'connected').length}</div>
                <div className="text-sm text-blue-800">已连接账号</div>
              </div>
              <div className="bg-green-50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-green-600">
                  {accounts.reduce((sum, acc) => sum + acc.resumeCount, 0)}
                </div>
                <div className="text-sm text-green-800">总简历数</div>
              </div>
              <div className="bg-purple-50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-purple-600">
                  {accounts.filter(a => a.status === 'connected').length}
                </div>
                <div className="text-sm text-purple-800">活跃平台</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sync Settings Modal */}
      {showSyncSettings && selectedPlatformForSettings && (
        <SyncSettingsModal
          platform={selectedPlatformForSettings}
          onClose={() => {
            setShowSyncSettings(false);
            setSelectedPlatformForSettings(null);
          }}
        />
      )}
    </>
  );
};
