
import React from 'react';
import { Search, Filter } from 'lucide-react';
import { ScoreFilter } from './ScoreFilter';

interface CandidateFiltersProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedStatus: string;
  setSelectedStatus: (status: string) => void;
  scoreRange: [number, number];
  setScoreRange: (range: [number, number]) => void;
}

export const CandidateFilters: React.FC<CandidateFiltersProps> = ({
  searchTerm,
  setSearchTerm,
  selectedStatus,
  setSelectedStatus,
  scoreRange,
  setScoreRange
}) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <div className="space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="搜索候选人姓名或技能..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="flex items-center space-x-2">
            <Filter className="w-4 h-4 text-gray-400" />
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">全部状态</option>
              <option value="pending">待筛选</option>
              <option value="qualified">已合格</option>
              <option value="rejected">已拒绝</option>
              <option value="interviewed">已面试</option>
            </select>
          </div>
        </div>

        <ScoreFilter 
          range={scoreRange}
          onChange={setScoreRange}
        />
      </div>
    </div>
  );
};
