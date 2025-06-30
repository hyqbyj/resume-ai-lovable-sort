
import React from 'react';
import { Phone, Mail, Download, MessageSquare } from 'lucide-react';

export const CandidateActionButtons: React.FC = () => {
  return (
    <div className="flex space-x-3 p-6 border-b border-gray-200">
      <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
        <Phone className="w-4 h-4" />
        <span>安排面试</span>
      </button>
      <button className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
        <Mail className="w-4 h-4" />
        <span>发送邮件</span>
      </button>
      <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
        <Download className="w-4 h-4" />
        <span>下载简历</span>
      </button>
      <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
        <MessageSquare className="w-4 h-4" />
        <span>添加备注</span>
      </button>
    </div>
  );
};
