
import React from 'react';

interface CandidateResultsSummaryProps {
  candidateCount: number;
}

export const CandidateResultsSummary: React.FC<CandidateResultsSummaryProps> = ({ candidateCount }) => {
  return (
    <div className="flex items-center justify-between">
      <div className="text-sm text-gray-600">
        共找到 {candidateCount} 份简历
      </div>
      <div className="flex items-center space-x-2">
        <span className="text-sm text-gray-600">排序方式:</span>
        <select className="text-sm border border-gray-300 rounded-md px-2 py-1 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
          <option value="score">评分从高到低</option>
          <option value="date">申请时间</option>
          <option value="name">姓名</option>
        </select>
      </div>
    </div>
  );
};
