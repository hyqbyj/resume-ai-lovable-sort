
import React from 'react';
import { Download, Mail, Upload } from 'lucide-react';

interface CandidateManagementHeaderProps {
  onShowExport: () => void;
  onShowBulkSendEmail: () => void;
  onShowBulkUpload: () => void;
}

export const CandidateManagementHeader: React.FC<CandidateManagementHeaderProps> = ({
  onShowExport,
  onShowBulkSendEmail,
  onShowBulkUpload
}) => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">简历管理</h1>
        <p className="text-gray-600 mt-1">智能筛选候选人，高效管理简历流程</p>
      </div>
      <div className="flex space-x-3">
        <button 
          onClick={onShowExport}
          className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
        >
          <Download className="w-4 h-4" />
          <span>导出简历</span>
        </button>
        <button 
          onClick={onShowBulkSendEmail}
          className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
        >
          <Mail className="w-4 h-4" />
          <span>批量发送</span>
        </button>
        <button 
          onClick={onShowBulkUpload}
          className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Upload className="w-4 h-4" />
          <span>批量上传</span>
        </button>
      </div>
    </div>
  );
};
