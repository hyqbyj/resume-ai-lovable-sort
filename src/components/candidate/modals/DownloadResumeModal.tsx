
import React, { useState } from 'react';
import { X, Download, FileText, Image, File } from 'lucide-react';

interface DownloadResumeModalProps {
  candidate: any;
  onClose: () => void;
}

export const DownloadResumeModal: React.FC<DownloadResumeModalProps> = ({ candidate, onClose }) => {
  const [downloadFormat, setDownloadFormat] = useState('original');
  const [includeEvaluation, setIncludeEvaluation] = useState(false);
  const [includeNotes, setIncludeNotes] = useState(false);

  const formatOptions = [
    { id: 'original', label: '原始简历', icon: FileText, description: '候选人提交的原始简历文件' },
    { id: 'pdf', label: 'PDF格式', icon: FileText, description: '标准化PDF格式，便于打印和分享' },
    { id: 'structured', label: '结构化报告', icon: File, description: '包含评估信息的完整报告' }
  ];

  const handleDownload = () => {
    // 模拟下载功能
    console.log('下载简历:', {
      candidate: candidate.name,
      format: downloadFormat,
      includeEvaluation,
      includeNotes
    });
    
    // 创建模拟下载链接
    const link = document.createElement('a');
    link.href = '#';
    link.download = `${candidate.name}_简历_${downloadFormat}.pdf`;
    link.click();
    
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-lg w-full">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <Download className="w-6 h-6 text-blue-600" />
            <div>
              <h2 className="text-xl font-semibold text-gray-900">下载简历</h2>
              <p className="text-sm text-gray-600">{candidate.name} - {candidate.position}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* 下载格式选择 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">选择下载格式</label>
            <div className="space-y-3">
              {formatOptions.map((option) => {
                const Icon = option.icon;
                return (
                  <label key={option.id} className="flex items-start space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                    <input
                      type="radio"
                      name="downloadFormat"
                      value={option.id}
                      checked={downloadFormat === option.id}
                      onChange={(e) => setDownloadFormat(e.target.value)}
                      className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500 mt-1"
                    />
                    <Icon className="w-5 h-5 text-gray-400 mt-0.5" />
                    <div>
                      <div className="font-medium text-gray-900">{option.label}</div>
                      <div className="text-sm text-gray-500">{option.description}</div>
                    </div>
                  </label>
                );
              })}
            </div>
          </div>

          {/* 附加内容选项 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">附加内容</label>
            <div className="space-y-3">
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={includeEvaluation}
                  onChange={(e) => setIncludeEvaluation(e.target.checked)}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <div>
                  <div className="font-medium text-gray-900">包含评估详情</div>
                  <div className="text-sm text-gray-500">AI评估结果和评分详情</div>
                </div>
              </label>
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={includeNotes}
                  onChange={(e) => setIncludeNotes(e.target.checked)}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <div>
                  <div className="font-medium text-gray-900">包含备注信息</div>
                  <div className="text-sm text-gray-500">HR和面试官的备注</div>
                </div>
              </label>
            </div>
          </div>

          {/* 文件信息预览 */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="font-medium text-gray-900 mb-2">文件信息</h4>
            <div className="text-sm text-gray-600 space-y-1">
              <div>候选人: {candidate.name}</div>
              <div>职位: {candidate.position}</div>
              <div>评分: {candidate.score}分</div>
              <div>格式: {formatOptions.find(f => f.id === downloadFormat)?.label}</div>
              <div>预估大小: ~2.5MB</div>
            </div>
          </div>
        </div>

        {/* 底部操作按钮 */}
        <div className="flex justify-end space-x-3 p-6 border-t border-gray-200">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            取消
          </button>
          <button
            onClick={handleDownload}
            className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            <Download className="w-4 h-4" />
            <span>下载</span>
          </button>
        </div>
      </div>
    </div>
  );
};
