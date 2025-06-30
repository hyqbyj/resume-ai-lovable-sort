
import React from 'react';
import { CandidateCard } from './CandidateCard';

interface CandidateListProps {
  candidates: any[];
  onViewDetail: (candidate: any) => void;
}

export const CandidateList: React.FC<CandidateListProps> = ({ candidates, onViewDetail }) => {
  if (candidates.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-400 text-lg mb-2">未找到匹配的候选人</div>
        <div className="text-gray-500 text-sm">尝试调整筛选条件或搜索关键词</div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {candidates.map((candidate) => (
        <CandidateCard 
          key={candidate.id} 
          candidate={candidate} 
          onViewDetail={() => onViewDetail(candidate)}
        />
      ))}
    </div>
  );
};
