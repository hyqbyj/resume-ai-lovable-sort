import React, { useState } from 'react';
import { X, Download, Mail, Phone, MapPin, Calendar, GraduationCap, Briefcase, Star, FileText, MessageSquare } from 'lucide-react';

interface CandidateDetailModalProps {
  candidate: any;
  onClose: () => void;
}

export const CandidateDetailModal: React.FC<CandidateDetailModalProps> = ({ candidate, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600 bg-green-50';
    if (score >= 60) return 'text-yellow-600 bg-yellow-50';
    return 'text-red-600 bg-red-50';
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'qualified': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'rejected': return 'bg-red-100 text-red-800';
      case 'interviewed': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'qualified': return '已合格';
      case 'pending': return '待筛选';
      case 'rejected': return '已拒绝';
      case 'interviewed': return '已面试';
      default: return '未知';
    }
  };

  const getTimelineData = (status: string, appliedAt: string) => {
    const baseDate = new Date(appliedAt);
    const formatDate = (date: Date) => {
      return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
    };

    const addDays = (date: Date, days: number) => {
      const result = new Date(date);
      result.setDate(date.getDate() + days);
      return result;
    };

    const commonSteps = [
      { 
        date: formatDate(baseDate), 
        action: '简历投递', 
        status: 'completed', 
        desc: '候选人通过官网投递简历' 
      },
      { 
        date: formatDate(baseDate), 
        action: 'AI初筛', 
        status: 'completed', 
        desc: `系统评分${candidate.score}分，${candidate.score >= 60 ? '自动通过初筛' : '未通过AI初筛'}` 
      }
    ];

    switch (status) {
      case 'pending':
        return [
          ...commonSteps,
          { 
            date: formatDate(addDays(baseDate, 1)), 
            action: 'HR筛选', 
            status: 'pending', 
            desc: '等待HR进行人工筛选' 
          },
          { 
            date: '', 
            action: '技术面试', 
            status: 'waiting', 
            desc: '等待HR筛选结果' 
          },
          { 
            date: '', 
            action: 'HR面试', 
            status: 'waiting', 
            desc: '等待技术面试安排' 
          },
          { 
            date: '', 
            action: '最终决策', 
            status: 'waiting', 
            desc: '等待面试结果' 
          }
        ];

      case 'qualified':
        return [
          ...commonSteps,
          { 
            date: formatDate(addDays(baseDate, 1)), 
            action: 'HR筛选', 
            status: 'completed', 
            desc: 'HR确认候选人符合基本要求，通过筛选' 
          },
          { 
            date: formatDate(addDays(baseDate, 2)), 
            action: '技术面试', 
            status: 'completed', 
            desc: '技术面试表现优秀，通过技术评估' 
          },
          { 
            date: formatDate(addDays(baseDate, 4)), 
            action: 'HR面试', 
            status: 'completed', 
            desc: '综合素质面试通过，符合团队要求' 
          },
          { 
            date: formatDate(addDays(baseDate, 5)), 
            action: '最终决策', 
            status: 'completed', 
            desc: '候选人已通过所有面试环节，确认录用' 
          }
        ];

      case 'rejected':
        const rejectionReason = candidate.score < 60 ? 'AI初筛评分过低' : 'HR筛选未通过';
        const rejectionStep = candidate.score < 60 ? 'AI初筛' : 'HR筛选';
        
        if (candidate.score < 60) {
          return [
            { 
              date: formatDate(baseDate), 
              action: '简历投递', 
              status: 'completed', 
              desc: '候选人通过官网投递简历' 
            },
            { 
              date: formatDate(baseDate), 
              action: 'AI初筛', 
              status: 'rejected', 
              desc: `系统评分${candidate.score}分，未达到初筛标准，自动拒绝` 
            },
            { 
              date: '', 
              action: 'HR筛选', 
              status: 'cancelled', 
              desc: '因AI初筛未通过，跳过此环节' 
            },
            { 
              date: '', 
              action: '技术面试', 
              status: 'cancelled', 
              desc: '因前置环节未通过，跳过此环节' 
            },
            { 
              date: '', 
              action: 'HR面试', 
              status: 'cancelled', 
              desc: '因前置环节未通过，跳过此环节' 
            }
          ];
        } else {
          return [
            ...commonSteps,
            { 
              date: formatDate(addDays(baseDate, 1)), 
              action: 'HR筛选', 
              status: 'rejected', 
              desc: 'HR评估后认为不符合岗位要求，拒绝进入下一轮' 
            },
            { 
              date: '', 
              action: '技术面试', 
              status: 'cancelled', 
              desc: '因HR筛选未通过，跳过此环节' 
            },
            { 
              date: '', 
              action: 'HR面试', 
              status: 'cancelled', 
              desc: '因前置环节未通过，跳过此环节' 
            },
            { 
              date: '', 
              action: '最终决策', 
              status: 'cancelled', 
              desc: '因前置环节未通过，跳过此环节' 
            }
          ];
        }

      case 'interviewed':
        return [
          ...commonSteps,
          { 
            date: formatDate(addDays(baseDate, 1)), 
            action: 'HR筛选', 
            status: 'completed', 
            desc: 'HR确认候选人符合基本要求' 
          },
          { 
            date: formatDate(addDays(baseDate, 2)), 
            action: '技术面试', 
            status: 'completed', 
            desc: '技术面试已完成，等待面试官反馈' 
          },
          { 
            date: formatDate(addDays(baseDate, 4)), 
            action: 'HR面试', 
            status: 'pending', 
            desc: '待安排HR综合面试' 
          },
          { 
            date: '', 
            action: '最终决策', 
            status: 'waiting', 
            desc: '等待所有面试完成后做最终决策' 
          }
        ];

      default:
        return commonSteps;
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-blue-600 font-semibold text-lg">
                {candidate.name.charAt(0)}
              </span>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900">{candidate.name}</h2>
              <p className="text-gray-600">{candidate.position}</p>
            </div>
            <div className={`px-3 py-1 rounded-full text-sm font-medium ${getScoreColor(candidate.score)}`}>
              {candidate.score} 分
            </div>
            <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(candidate.status)}`}>
              {getStatusText(candidate.status)}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3 p-6 border-b border-gray-200">
          <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Phone className="w-4 h-4" />
            <span>安排面试</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
            <Mail className="w-4 h-4" />
            <span>发送邮件</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
            <Download className="w-4 h-4" />
            <span>下载简历</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
            <MessageSquare className="w-4 h-4" />
            <span>添加备注</span>
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-200">
          {[
            { id: 'overview', label: '基本信息' },
            { id: 'experience', label: '工作经历' },
            { id: 'evaluation', label: '评估详情' },
            { id: 'timeline', label: '流程记录' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 font-medium text-sm border-b-2 transition-colors ${
                activeTab === tab.id
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="p-6">
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">个人信息</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-4 h-4 text-gray-400" />
                    <span>{candidate.phone}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-4 h-4 text-gray-400" />
                    <span>{candidate.email}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <GraduationCap className="w-4 h-4 text-gray-400" />
                    <span>{candidate.education}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Briefcase className="w-4 h-4 text-gray-400" />
                    <span>{candidate.experience} 工作经验</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <span>申请时间: {candidate.appliedAt}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">技能标签</h3>
                <div className="flex flex-wrap gap-2">
                  {candidate.skills.map((skill: string) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mt-6">亮点标签</h3>
                <div className="space-y-2">
                  {candidate.highlights.map((highlight: string, index: number) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span className="text-sm text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'experience' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900">工作经历</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-200 pl-4">
                  <h4 className="font-semibold text-gray-900">高级前端开发工程师</h4>
                  <p className="text-gray-600">字节跳动 • 2022.03 - 至今</p>
                  <p className="text-sm text-gray-500 mt-2">
                    负责抖音创作者平台的前端开发，使用React和TypeScript构建高性能的Web应用，
                    参与架构设计和技术选型，指导初级开发者。
                  </p>
                </div>
                <div className="border-l-4 border-gray-200 pl-4">
                  <h4 className="font-semibold text-gray-900">前端开发工程师</h4>
                  <p className="text-gray-600">美团 • 2020.07 - 2022.02</p>
                  <p className="text-sm text-gray-500 mt-2">
                    参与美团商家后台系统的开发，使用Vue.js和Element UI构建管理系统，
                    优化页面性能，提升用户体验。
                  </p>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-gray-900">项目经历</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900">抖音创作者数据看板</h4>
                  <p className="text-sm text-gray-500 mb-2">2023.01 - 2023.06</p>
                  <p className="text-sm text-gray-700">
                    使用React + TypeScript + Echarts构建数据可视化平台，支持千万级用户数据展示，
                    通过虚拟滚动和分页优化性能，页面加载时间减少60%。
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'evaluation' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-900 mb-3">技能匹配度</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">前端技术栈</span>
                      <span className="text-sm font-medium">95%</span>
                    </div>
                    <div className="w-full bg-blue-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '95%' }}></div>
                    </div>
                  </div>
                  <div className="space-y-2 mt-3">
                    <div className="flex justify-between">
                      <span className="text-sm">项目经验</span>
                      <span className="text-sm font-medium">85%</span>
                    </div>
                    <div className="w-full bg-blue-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-semibold text-green-900 mb-3">综合评估</h4>
                  <div className="text-2xl font-bold text-green-600 mb-2">{candidate.score}/100</div>
                  <div className="text-sm text-green-700">
                    技术能力强，项目经验丰富，团队协作能力良好，建议进入面试环节。
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 rounded-lg p-4">
                <h4 className="font-semibold text-yellow-900 mb-3">AI 分析建议</h4>
                <ul className="text-sm text-yellow-800 space-y-1">
                  <li>• 技术栈与岗位需求高度匹配，React和TypeScript经验丰富</li>
                  <li>• 有大厂工作背景，项目复杂度和技术深度符合要求</li>
                  <li>• 建议重点考察系统设计和团队协作能力</li>
                  <li>• 薪资期望可能较高，需要提前沟通</li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'timeline' && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">招聘流程记录</h3>
              <div className="space-y-4">
                {getTimelineData(candidate.status, candidate.appliedAt).map((item, index) => (
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
          )}
        </div>
      </div>
    </div>
  );
};
