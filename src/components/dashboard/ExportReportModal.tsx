
import React, { useState } from 'react';
import { X, Download, BarChart3, TrendingUp, Users, Calendar } from 'lucide-react';

interface ExportReportModalProps {
  onClose: () => void;
}

export const ExportReportModal: React.FC<ExportReportModalProps> = ({ onClose }) => {
  const [reportType, setReportType] = useState('comprehensive');
  const [timeRange, setTimeRange] = useState('30days');
  const [format, setFormat] = useState('pdf');

  const reportTypes = [
    {
      id: 'comprehensive',
      name: '综合分析报告',
      description: '包含招聘全流程数据分析',
      icon: BarChart3
    },
    {
      id: 'performance',
      name: '招聘效率报告',
      description: '分析招聘时长、成功率等指标',
      icon: TrendingUp
    },
    {
      id: 'candidate',
      name: '候选人质量报告',
      description: '候选人来源、评分分布分析',
      icon: Users
    }
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-2xl w-full">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">导出数据报告</h2>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* 报告类型 */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-3">报告类型</h3>
            <div className="space-y-3">
              {reportTypes.map((type) => {
                const Icon = type.icon;
                return (
                  <label key={type.id} className="flex items-start space-x-3 cursor-pointer">
                    <input
                      type="radio"
                      name="reportType"
                      value={type.id}
                      checked={reportType === type.id}
                      onChange={(e) => setReportType(e.target.value)}
                      className="mt-1"
                    />
                    <div className="flex items-start space-x-3">
                      <div className="p-2 bg-blue-50 rounded-lg">
                        <Icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{type.name}</div>
                        <div className="text-sm text-gray-600">{type.description}</div>
                      </div>
                    </div>
                  </label>
                );
              })}
            </div>
          </div>

          {/* 时间范围 */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-3">时间范围</h3>
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            >
              <option value="7days">最近 7 天</option>
              <option value="30days">最近 30 天</option>
              <option value="90days">最近 90 天</option>
              <option value="6months">最近 6 个月</option>
              <option value="1year">最近 1 年</option>
            </select>
          </div>

          {/* 导出格式 */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-3">导出格式</h3>
            <div className="flex space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="format"
                  value="pdf"
                  checked={format === 'pdf'}
                  onChange={(e) => setFormat(e.target.value)}
                  className="mr-2"
                />
                <span className="text-sm">PDF 报告</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="format"
                  value="excel"
                  checked={format === 'excel'}
                  onChange={(e) => setFormat(e.target.value)}
                  className="mr-2"
                />
                <span className="text-sm">Excel 数据</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="format"
                  value="ppt"
                  checked={format === 'ppt'}
                  onChange={(e) => setFormat(e.target.value)}
                  className="mr-2"
                />
                <span className="text-sm">PPT 演示</span>
              </label>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-4">
            <h4 className="font-medium text-blue-900 mb-2">报告预览</h4>
            <div className="text-sm text-blue-800 space-y-1">
              <div>• 数据统计时间段：{timeRange === '30days' ? '2024-01-01 至 2024-01-30' : '选定时间范围'}</div>
              <div>• 预计包含数据：1,247 份简历，156 个职位，89 场面试</div>
              <div>• 生成时间：约 2-3 分钟</div>
            </div>
          </div>

          <div className="flex space-x-3">
            <button
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
            >
              取消
            </button>
            <button
              onClick={() => {
                console.log('Generating report...');
                onClose();
              }}
              className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              <Download className="w-4 h-4" />
              <span>生成报告</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
