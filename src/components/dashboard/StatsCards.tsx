
import React from 'react';
import { TrendingUp, Users, CheckCircle, Clock } from 'lucide-react';

const stats = [
  {
    title: '今日处理简历',
    value: '1,247',
    change: '+12%',
    changeType: 'positive' as const,
    icon: Users,
    color: 'blue'
  },
  {
    title: '通过率',
    value: '23.5%',
    change: '+2.1%',
    changeType: 'positive' as const,
    icon: CheckCircle,
    color: 'green'
  },
  {
    title: '平均评分',
    value: '67.8',
    change: '+5.2',
    changeType: 'positive' as const,
    icon: TrendingUp,
    color: 'purple'
  },
  {
    title: '处理时长',
    value: '1.3s',
    change: '-0.2s',
    changeType: 'positive' as const,
    icon: Clock,
    color: 'orange'
  }
];

export const StatsCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        
        return (
          <div
            key={stat.title}
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200 animate-scale-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-center justify-between">
              <div className={`p-3 rounded-lg bg-${stat.color}-50`}>
                <Icon className={`w-6 h-6 text-${stat.color}-600`} />
              </div>
              <span className={`text-sm font-medium ${
                stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
              }`}>
                {stat.change}
              </span>
            </div>
            
            <div className="mt-4">
              <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
              <p className="text-gray-600 text-sm mt-1">{stat.title}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
