
import React from 'react';
import { X, Clock, CheckCircle, XCircle, AlertCircle, Calendar, User, Tag } from 'lucide-react';

interface ActivityDetailModalProps {
  onClose: () => void;
}

const allActivities = [
  {
    id: 1,
    type: 'success',
    title: '简历批量处理完成',
    description: '成功处理324份简历，通过率24.7%',
    timestamp: '2分钟前',
    icon: CheckCircle,
    details: '本次批量处理共收到324份简历，其中80份通过初筛，通过率为24.7%。主要拒绝原因：经验不足(45%)、技能不匹配(32%)、学历要求(23%)。',
    user: '系统自动',
    category: '批量处理'
  },
  {
    id: 2,
    type: 'info',
    title: '新职位发布',
    description: '前端开发工程师职位已发布，开始接收简历',
    timestamp: '15分钟前',
    icon: AlertCircle,
    details: '前端开发工程师职位已成功发布到各大招聘平台，预计薪资15K-30K，要求3-5年经验，React技术栈。',
    user: '张经理',
    category: '职位管理'
  },
  {
    id: 3,
    type: 'warning',
    title: '评分规则更新',
    description: '技能匹配权重已调整为35%',
    timestamp: '1小时前',
    icon: Clock,
    details: '根据最新的招聘需求，调整了评分算法：技能匹配35%，工作经验30%，教育背景20%，项目经验15%。',
    user: '李主管',
    category: '系统设置'
  },
  {
    id: 4,
    type: 'error',
    title: '文件解析失败',
    description: '12份简历因格式问题解析失败，需人工处理',
    timestamp: '2小时前',
    icon: XCircle,
    details: '12份简历因为格式异常无法自动解析，其中PDF格式8份，Word格式4份。建议联系应聘者重新提交。',
    user: '系统自动',
    category: '解析错误'
  },
  {
    id: 5,
    type: 'success',
    title: '面试安排完成',
    description: '本周面试计划已制定，涉及15位候选人',
    timestamp: '3小时前',
    icon: CheckCircle,
    details: '本周共安排15场面试，其中技术面试8场，HR面试7场。面试时间集中在周二到周四。',
    user: '王助理',
    category: '面试管理'
  },
  {
    id: 6,
    type: 'info',
    title: '候选人状态更新',
    description: '5位候选人进入终面阶段',
    timestamp: '4小时前',
    icon: AlertCircle,
    details: '前端开发工程师岗位5位候选人通过技术面试，进入终面阶段。预计下周完成最终面试。',
    user: '系统自动',
    category: '候选人管理'
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

export const ActivityDetailModal: React.FC<ActivityDetailModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-auto">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">所有活动记录</h2>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          <div className="space-y-4">
            {allActivities.map((activity) => {
              const Icon = activity.icon;
              const styles = getStatusStyle(activity.type);
              
              return (
                <div
                  key={activity.id}
                  className={`p-6 rounded-lg border ${styles.border} ${styles.bg} transition-all hover:shadow-sm`}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-full ${styles.bg}`}>
                      <Icon className={`w-5 h-5 ${styles.text}`} />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-gray-900">{activity.title}</h4>
                        <span className="text-sm text-gray-500">{activity.timestamp}</span>
                      </div>
                      
                      <p className="text-gray-600 mb-3">{activity.description}</p>
                      <p className="text-sm text-gray-700 mb-4">{activity.details}</p>
                      
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <User className="w-4 h-4" />
                          <span>{activity.user}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Tag className="w-4 h-4" />
                          <span>{activity.category}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{activity.timestamp}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
