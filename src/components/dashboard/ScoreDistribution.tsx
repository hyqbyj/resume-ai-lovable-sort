
import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const timeData = {
  today: [
    { range: '0-20', count: 12, color: '#ef4444' },
    { range: '21-40', count: 28, color: '#f97316' },
    { range: '41-60', count: 45, color: '#eab308' },
    { range: '61-80', count: 67, color: '#22c55e' },
    { range: '81-100', count: 34, color: '#3b82f6' }
  ],
  week: [
    { range: '0-20', count: 45, color: '#ef4444' },
    { range: '21-40', count: 132, color: '#f97316' },
    { range: '41-60', count: 287, color: '#eab308' },
    { range: '61-80', count: 456, color: '#22c55e' },
    { range: '81-100', count: 234, color: '#3b82f6' }
  ],
  month: [
    { range: '0-20', count: 178, color: '#ef4444' },
    { range: '21-40', count: 543, color: '#f97316' },
    { range: '41-60', count: 892, color: '#eab308' },
    { range: '61-80', count: 1234, color: '#22c55e' },
    { range: '81-100', count: 678, color: '#3b82f6' }
  ]
};

export const ScoreDistribution = () => {
  const [selectedPeriod, setSelectedPeriod] = useState<'today' | 'week' | 'month'>('week');
  
  const data = timeData[selectedPeriod];

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">简历评分分布</h3>
          <p className="text-gray-600 text-sm">基于智能算法的综合评分统计</p>
        </div>
        <div className="flex space-x-2">
          <button 
            onClick={() => setSelectedPeriod('today')}
            className={`px-3 py-1.5 text-xs rounded-md transition-colors ${
              selectedPeriod === 'today' 
                ? 'bg-blue-100 text-blue-700' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            今日
          </button>
          <button 
            onClick={() => setSelectedPeriod('week')}
            className={`px-3 py-1.5 text-xs rounded-md transition-colors ${
              selectedPeriod === 'week' 
                ? 'bg-blue-100 text-blue-700' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            本周
          </button>
          <button 
            onClick={() => setSelectedPeriod('month')}
            className={`px-3 py-1.5 text-xs rounded-md transition-colors ${
              selectedPeriod === 'month' 
                ? 'bg-blue-100 text-blue-700' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            本月
          </button>
        </div>
      </div>
      
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
            <XAxis 
              dataKey="range" 
              tick={{ fontSize: 12, fill: '#64748b' }}
              axisLine={{ stroke: '#e2e8f0' }}
            />
            <YAxis 
              tick={{ fontSize: 12, fill: '#64748b' }}
              axisLine={{ stroke: '#e2e8f0' }}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: '#fff',
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
            />
            <Bar dataKey="count" radius={[4, 4, 0, 0]}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-4 mt-4 pt-4 border-t border-gray-100">
        {data.map((item) => (
          <div key={item.range} className="flex items-center space-x-2">
            <div 
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: item.color }}
            />
            <span className="text-sm text-gray-600">
              {item.range}分 ({item.count}份)
            </span>
          </div>
        ))}
      </div>
      
      {/* Period Summary */}
      <div className="mt-4 pt-4 border-t border-gray-100">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">
            {selectedPeriod === 'today' && '今日总计'}
            {selectedPeriod === 'week' && '本周总计'}
            {selectedPeriod === 'month' && '本月总计'}
          </span>
          <span className="font-semibold text-gray-900">
            {data.reduce((sum, item) => sum + item.count, 0)} 份简历
          </span>
        </div>
      </div>
    </div>
  );
};
