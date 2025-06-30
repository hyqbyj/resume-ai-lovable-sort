
import React, { useState } from 'react';
import { X, Download, Calendar, FileText, BarChart3, Users } from 'lucide-react';

interface ExportReportModalProps {
  onClose: () => void;
}

export const ExportReportModal: React.FC<ExportReportModalProps> = ({ onClose }) => {
  const [reportType, setReportType] = useState('comprehensive');
  const [dateRange, setDateRange] = useState('month');
  const [format, setFormat] = useState('pdf');
  const [sections, setSections] = useState({
    overview: true,
    candidates: true,
    jobs: true,
    analytics: true,
    timeline: false
  });

  const handleExport = () => {
    console.log('导出报告:', { reportType, dateRange, format, sections });
    onClose();
  };

  const handleSectionChange = (section: string, checked: boolean) => {
    setSections(prev => ({
      ...prev,
      [section]: checked
    }));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <FileText className="w-6 h-6 text-blue-600" />
            <h2 className="text-xl font-semibold text-gray-900">导出数据报告</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Report Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              报告类型
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div
                onClick={() => setReportType('comprehensive')}
                className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                  reportType === 'comprehensive' 
                    ? 'border-blue-500 bg-blue-50' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <BarChart3 className="w-5 h-5 text-blue-600" />
                  <div>
                    <div className="font-medium text-gray-900">综合报告</div>
                    <div className="text-sm text-gray-500">包含所有数据分析</div>
                  </div>
                </div>
              </div>
              <div
                onClick={() => setReportType('candidates')}
                className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                  reportType === 'candidates' 
                    ? 'border-blue-500 bg-blue-50' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-green-600" />
                  <div>
                    <div className="font-medium text-gray-900">候选人报告</div>
                    <div className="text-sm text-gray-500">仅候选人相关数据</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Date Range */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              时间范围
            </label>
            <div className="flex space-x-3">
              {[
                { value: 'week', label: '最近一周' },
                { value: 'month', label: '最近一月' },
                { value: 'quarter', label: '最近一季度' },
                { value: 'year', label: '最近一年' }
              ].map((option) => (
                <button
                  key={option.value}
                  onClick={() => setDateRange(option.value)}
                  className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                    dateRange === option.value
                      ? 'bg-blue-600 text-white'
                      : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          {/* Export Format */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              导出格式
            </label>
            <div className="flex space-x-3">
              {[
                { value: 'pdf', label: 'PDF' },
                { value: 'excel', label: 'Excel' },
                { value: 'csv', label: 'CSV' }
              ].map((option) => (
                <button
                  key={option.value}
                  onClick={() => setFormat(option.value)}
                  className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                    format === option.value
                      ? 'bg-blue-600 text-white'
                      : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          {/* Report Sections */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              报告内容
            </label>
            <div className="space-y-3">
              {[
                { key: 'overview', label: '数据概览', desc: '总体统计数据和关键指标' },
                { key: 'candidates', label: '候选人分析', desc: '简历分布、评分统计等' },
                { key: 'jobs', label: '职位分析', desc: '职位状态、申请情况等' },
                { key: 'analytics', label: '趋势分析', desc: '时间趋势和变化分析' },
                { key: 'timeline', label: '流程记录', desc: '详细的操作时间线' }
              ].map((section) => (
                <div key={section.key} className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    id={section.key}
                    checked={sections[section.key as keyof typeof sections]}
                    onChange={(e) => handleSectionChange(section.key, e.target.checked)}
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label htmlFor={section.key} className="flex-1 cursor-pointer">
                    <div className="font-medium text-gray-900">{section.label}</div>
                    <div className="text-sm text-gray-500">{section.desc}</div>
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Preview */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="font-medium text-gray-900 mb-2">报告预览信息</h4>
            <div className="text-sm text-gray-600 space-y-1">
              <div>• 报告类型：{reportType === 'comprehensive' ? '综合报告' : '候选人报告'}</div>
              <div>• 时间范围：{
                dateRange === 'week' ? '最近一周' :
                dateRange === 'month' ? '最近一月' :
                dateRange === 'quarter' ? '最近一季度' : '最近一年'
              }</div>
              <div>• 导出格式：{format.toUpperCase()}</div>
              <div>• 包含章节：{Object.entries(sections).filter(([_, checked]) => checked).length} 个</div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex space-x-3 p-6 border-t border-gray-200">
          <button
            onClick={handleExport}
            className="flex items-center space-x-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Download className="w-4 h-4" />
            <span>导出报告</span>
          </button>
          <button
            onClick={onClose}
            className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
          >
            取消
          </button>
        </div>
      </div>
    </div>
  );
};
