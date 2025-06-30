
import React, { useState } from 'react';
import { CandidateHeader } from './CandidateHeader';
import { CandidateActionButtons } from './CandidateActionButtons';
import { CandidateOverviewTab } from './CandidateOverviewTab';
import { CandidateExperienceTab } from './CandidateExperienceTab';
import { CandidateEvaluationTab } from './CandidateEvaluationTab';
import { CandidateTimelineTab } from './CandidateTimelineTab';

interface CandidateDetailModalProps {
  candidate: any;
  onClose: () => void;
}

export const CandidateDetailModal: React.FC<CandidateDetailModalProps> = ({ candidate, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600 bg-green-50';
    if (score >= 60) return 'text-yellow-600 bg-yellow-50';
    return 'text-red-600 bg-red-50';
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'qualified': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'rejected': return 'bg-red-100 text-red-800';
      case 'interviewed': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'qualified': return '已合格';
      case 'pending': return '待筛选';
      case 'rejected': return '已拒绝';
      case 'interviewed': return '已面试';
      default: return '未知';
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-auto">
        <CandidateHeader 
          candidate={candidate}
          onClose={onClose}
          getScoreColor={getScoreColor}
          getStatusColor={getStatusColor}
          getStatusText={getStatusText}
        />

        <CandidateActionButtons />

        {/* Tabs */}
        <div className="flex border-b border-gray-200">
          {[
            { id: 'overview', label: '基本信息' },
            { id: 'experience', label: '工作经历' },
            { id: 'evaluation', label: '评估详情' },
            { id: 'timeline', label: '流程记录' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 font-medium text-sm border-b-2 transition-colors ${
                activeTab === tab.id
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="p-6">
          {activeTab === 'overview' && <CandidateOverviewTab candidate={candidate} />}
          {activeTab === 'experience' && <CandidateExperienceTab />}
          {activeTab === 'evaluation' && <CandidateEvaluationTab candidate={candidate} />}
          {activeTab === 'timeline' && <CandidateTimelineTab candidate={candidate} />}
        </div>
      </div>
    </div>
  );
};
