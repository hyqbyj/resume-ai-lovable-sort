
import React from 'react';

const funnelData = [
  { stage: '简历投递', count: 1247, percentage: 100, color: 'bg-blue-500' },
  { stage: '初步筛选', count: 456, percentage: 36.6, color: 'bg-blue-400' },
  { stage: '技能匹配', count: 234, percentage: 18.8, color: 'bg-blue-300' },
  { stage: '面试邀请', count: 89, percentage: 7.1, color: 'bg-green-500' },
  { stage: '最终录用', count: 23, percentage: 1.8, color: 'bg-green-600' }
];

export const RecruitmentFunnel = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">招聘漏斗</h3>
          <p className="text-gray-600 text-sm">各阶段转化率分析</p>
        </div>
      </div>
      
      <div className="space-y-4">
        {funnelData.map((item, index) => (
          <div key={item.stage} className="relative">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-900">{item.stage}</span>
              <div className="text-right">
                <span className="text-sm font-semibold text-gray-900">{item.count}</span>
                <span className="text-xs text-gray-500 ml-2">({item.percentage}%)</span>
              </div>
            </div>
            
            <div className="relative h-8 bg-gray-100 rounded-lg overflow-hidden">
              <div
                className={`h-full ${item.color} rounded-lg transition-all duration-500 ease-out`}
                style={{ 
                  width: `${item.percentage}%`,
                  animationDelay: `${index * 200}ms`
                }}
              />
              
              {/* Stage Label */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xs font-medium text-white drop-shadow">
                  {item.count} 人
                </span>
              </div>
            </div>
            
            {/* Conversion Rate */}
            {index > 0 && (
              <div className="text-xs text-gray-500 mt-1 text-right">
                转化率: {((item.count / funnelData[index - 1].count) * 100).toFixed(1)}%
              </div>
            )}
          </div>
        ))}
      </div>
      
      {/* Summary */}
      <div className="mt-6 pt-4 border-t border-gray-100">
        <div className="grid grid-cols-2 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-blue-600">7.1%</div>
            <div className="text-xs text-gray-600">面试转化率</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-green-600">1.8%</div>
            <div className="text-xs text-gray-600">最终录用率</div>
          </div>
        </div>
      </div>
    </div>
  );
};
