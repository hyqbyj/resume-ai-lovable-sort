
import React from 'react';
import { getTimelineData } from './utils/TimelineUtils';

interface CandidateTimelineTabProps {
  candidate: any;
}

export const CandidateTimelineTab: React.FC<CandidateTimelineTabProps> = ({ candidate }) => {
  const timelineData = getTimelineData(candidate.status, candidate.appliedAt, candidate.score);

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-900">招聘流程记录</h3>
      <div className="space-y-4">
        {timelineData.map((item, index) => (
          <div key={index} className="flex items-start space-x-4">
            <div className={`w-3 h-3 rounded-full mt-2 ${
              item.status === 'completed' ? 'bg-green-500' :
              item.status === 'pending' ? 'bg-yellow-500' : 
              item.status === 'rejected' ? 'bg-red-500' :
              item.status === 'cancelled' ? 'bg-gray-400' : 'bg-gray-300'
            }`}></div>
            <div className="flex-1">
              <div className="flex items-center space-x-2">
                <h4 className={`font-medium ${
                  item.status === 'rejected' ? 'text-red-600' :
                  item.status === 'cancelled' ? 'text-gray-500' : 'text-gray-900'
                }`}>{item.action}</h4>
                {item.date && (
                  <span className="text-sm text-gray-500">{item.date}</span>
                )}
                {item.status === 'rejected' && (
                  <span className="px-2 py-1 text-xs bg-red-100 text-red-700 rounded">已拒绝</span>
                )}
                {item.status === 'cancelled' && (
                  <span className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded">已跳过</span>
                )}
              </div>
              <p className={`text-sm ${
                item.status === 'cancelled' ? 'text-gray-400' : 'text-gray-600'
              }`}>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
