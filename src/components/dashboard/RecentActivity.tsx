
import React from 'react';
import { Clock, CheckCircle, XCircle, AlertCircle } from 'lucide-react';

const activities = [
  {
    id: 1,
    type: 'success',
    title: '简历批量处理完成',
    description: '成功处理324份简历，通过率24.7%',
    timestamp: '2分钟前',
    icon: CheckCircle
  },
  {
    id: 2,
    type: 'info',
    title: '新职位发布',
    description: '前端开发工程师职位已发布，开始接收简历',
    timestamp: '15分钟前',
    icon: AlertCircle
  },
  {
    id: 3,
    type: 'warning',
    title: '评分规则更新',
    description: '技能匹配权重已调整为35%',
    timestamp: '1小时前',
    icon: Clock
  },
  {
    id: 4,
    type: 'error',
    title: '文件解析失败',
    description: '12份简历因格式问题解析失败，需人工处理',
    timestamp: '2小时前',
    icon: XCircle
  }
];

const getStatusStyle = (type: string) => {
  switch (type) {
    case 'success':
      return { bg: 'bg-green-50', text: 'text-green-600', border: 'border-green-200' };
    case 'info':
      return { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-200' };
    case 'warning':
      return { bg: 'bg-yellow-50', text: 'text-yellow-600', border: 'border-yellow-200' };
    case 'error':
      return { bg: 'bg-red-50', text: 'text-red-600', border: 'border-red-200' };
    default:
      return { bg: 'bg-gray-50', text: 'text-gray-600', border: 'border-gray-200' };
  }
};

export const RecentActivity = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">最近活动</h3>
        <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
          查看全部
        </button>
      </div>
      
      <div className="space-y-4">
        {activities.map((activity) => {
          const Icon = activity.icon;
          const styles = getStatusStyle(activity.type);
          
          return (
            <div
              key={activity.id}
              className={`flex items-start space-x-4 p-4 rounded-lg border ${styles.border} ${styles.bg} transition-all hover:shadow-sm`}
            >
              <div className={`p-2 rounded-full ${styles.bg}`}>
                <Icon className={`w-4 h-4 ${styles.text}`} />
              </div>
              
              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-gray-900">{activity.title}</h4>
                <p className="text-sm text-gray-600 mt-1">{activity.description}</p>
                <span className="text-xs text-gray-500 mt-2 inline-block">
                  {activity.timestamp}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
