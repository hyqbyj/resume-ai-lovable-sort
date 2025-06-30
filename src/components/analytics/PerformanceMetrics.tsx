
import React from 'react';
import { TrendingUp, TrendingDown, Clock, Target } from 'lucide-react';

const metrics = [
  {
    title: '处理效率',
    value: '98.5%',
    change: '+2.3%',
    changeType: 'positive' as const,
    icon: TrendingUp,
    description: '自动化处理成功率'
  },
  {
    title: '平均处理时间',
    value: '1.2s',
    change: '-0.3s',
    changeType: 'positive' as const,
    icon: Clock,
    description: '单份简历处理时长'
  },
  {
    title: '准确率',
    value: '94.7%',
    change: '+1.2%',
    changeType: 'positive' as const,
    icon: Target,
    description: '筛选结果准确性'
  },
  {
    title: '拒信发送率',
    value: '76.8%',
    change: '-2.1%',
    changeType: 'negative' as const,
    icon: TrendingDown,
    description: '自动拒信比例'
  }
];

export const PerformanceMetrics = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric, index) => {
        const Icon = metric.icon;
        
        return (
          <div
            key={metric.title}
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-lg bg-blue-50">
                <Icon className="w-6 h-6 text-blue-600" />
              </div>
              <span className={`text-sm font-medium ${
                metric.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
              }`}>
                {metric.change}
              </span>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</h3>
              <h4 className="text-sm font-medium text-gray-900 mb-1">{metric.title}</h4>
              <p className="text-xs text-gray-500">{metric.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
