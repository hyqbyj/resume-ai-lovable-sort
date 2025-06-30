
import React, { useState } from 'react';
import { Upload, FileText, Settings, Mail } from 'lucide-react';
import { CreateJDModal } from './CreateJDModal';
import { ScoringRulesModal } from './ScoringRulesModal';
import { BulkEmailModal } from './BulkEmailModal';

interface QuickActionsProps {
  onBulkUpload?: () => void;
  onExportReport?: () => void;
}

export const QuickActions: React.FC<QuickActionsProps> = ({ onBulkUpload, onExportReport }) => {
  const [showCreateJD, setShowCreateJD] = useState(false);
  const [showScoringRules, setShowScoringRules] = useState(false);
  const [showBulkEmail, setShowBulkEmail] = useState(false);

  const actions = [
    {
      title: '批量上传简历',
      description: '支持PDF、Word、图片格式',
      icon: Upload,
      color: 'blue',
      action: onBulkUpload
    },
    {
      title: '创建职位描述',
      description: '智能JD解析与配置',
      icon: FileText,
      color: 'green',
      action: () => setShowCreateJD(true)
    },
    {
      title: '评分规则设置',
      description: '自定义筛选标准',
      icon: Settings,
      color: 'purple',
      action: () => setShowScoringRules(true)
    },
    {
      title: '批量发送拒信',
      description: '自动化邮件通知',
      icon: Mail,
      color: 'orange',
      action: () => setShowBulkEmail(true)
    }
  ];

  return (
    <>
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">快速操作</h3>
        
        <div className="space-y-3">
          {actions.map((action, index) => {
            const Icon = action.icon;
            
            return (
              <button
                key={action.title}
                onClick={action.action}
                className="w-full p-4 rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all duration-200 text-left group"
              >
                <div className="flex items-start space-x-3">
                  <div className={`p-2 rounded-lg bg-${action.color}-50 group-hover:bg-${action.color}-100 transition-colors`}>
                    <Icon className={`w-5 h-5 text-${action.color}-600`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-gray-900 group-hover:text-gray-700">
                      {action.title}
                    </h4>
                    <p className="text-sm text-gray-500 mt-1">
                      {action.description}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Modals */}
      {showCreateJD && (
        <CreateJDModal onClose={() => setShowCreateJD(false)} />
      )}
      
      {showScoringRules && (
        <ScoringRulesModal onClose={() => setShowScoringRules(false)} />
      )}
      
      {showBulkEmail && (
        <BulkEmailModal onClose={() => setShowBulkEmail(false)} />
      )}
    </>
  );
};
