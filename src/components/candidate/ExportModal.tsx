
import React, { useState } from 'react';
import { X, Download, FileText, Table, Image } from 'lucide-react';

interface ExportModalProps {
  onClose: () => void;
}

export const ExportModal: React.FC<ExportModalProps> = ({ onClose }) => {
  const [exportFormat, setExportFormat] = useState('excel');
  const [exportScope, setExportScope] = useState('current');
  const [includeFields, setIncludeFields] = useState({
    basicInfo: true,
    scores: true,
    skills: true,
    status: true,
    timeline: false,
    notes: false
  });

  const handleExport = () => {
    // 模拟导出逻辑
    console.log('Exporting with settings:', { exportFormat, exportScope, includeFields });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-lg w-full">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">导出简历数据</h2>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Export Format */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-3">导出格式</h3>
            <div className="grid grid-cols-3 gap-3">
              <button
                onClick={() => setExportFormat('excel')}
                className={`p-3 border rounded-lg text-center transition-colors ${
                  exportFormat === 'excel'
                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                    : 'border-gray-300 hover:border-gray-400'
                }`}
              >
                <Table className="w-6 h-6 mx-auto mb-1" />
                <div className="text-sm font-medium">Excel</div>
              </button>
              <button
                onClick={() => setExportFormat('pdf')}
                className={`p-3 border rounded-lg text-center transition-colors ${
                  exportFormat === 'pdf'
                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                    : 'border-gray-300 hover:border-gray-400'
                }`}
              >
                <FileText className="w-6 h-6 mx-auto mb-1" />
                <div className="text-sm font-medium">PDF</div>
              </button>
              <button
                onClick={() => setExportFormat('csv')}
                className={`p-3 border rounded-lg text-center transition-colors ${
                  exportFormat === 'csv'
                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                    : 'border-gray-300 hover:border-gray-400'
                }`}
              >
                <Image className="w-6 h-6 mx-auto mb-1" />
                <div className="text-sm font-medium">CSV</div>
              </button>
            </div>
          </div>

          {/* Export Scope */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-3">导出范围</h3>
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="scope"
                  value="current"
                  checked={exportScope === 'current'}
                  onChange={(e) => setExportScope(e.target.value)}
                  className="mr-3"
                />
                <span className="text-sm">当前筛选结果 (8 条记录)</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="scope"
                  value="all"
                  checked={exportScope === 'all'}
                  onChange={(e) => setExportScope(e.target.value)}
                  className="mr-3"
                />
                <span className="text-sm">全部简历 (156 条记录)</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="scope"
                  value="qualified"
                  checked={exportScope === 'qualified'}
                  onChange={(e) => setExportScope(e.target.value)}
                  className="mr-3"
                />
                <span className="text-sm">仅合格候选人 (37 条记录)</span>
              </label>
            </div>
          </div>

          {/* Include Fields */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-3">包含字段</h3>
            <div className="space-y-2">
              {[
                { key: 'basicInfo', label: '基本信息 (姓名、联系方式、教育背景)' },
                { key: 'scores', label: '评分信息' },
                { key: 'skills', label: '技能标签' },
                { key: 'status', label: '状态信息' },
                { key: 'timeline', label: '流程记录' },
                { key: 'notes', label: '备注信息' }
              ].map((field) => (
                <label key={field.key} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={includeFields[field.key as keyof typeof includeFields]}
                    onChange={(e) =>
                      setIncludeFields({
                        ...includeFields,
                        [field.key]: e.target.checked
                      })
                    }
                    className="mr-3"
                  />
                  <span className="text-sm">{field.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Data Protection Notice */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
            <div className="text-sm text-yellow-800">
              <strong>数据保护提醒：</strong>
              导出的文件包含候选人敏感信息，请妥善保管，避免泄露。建议为导出文件设置密码保护。
            </div>
          </div>

          {/* Actions */}
          <div className="flex space-x-3">
            <button
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              取消
            </button>
            <button
              onClick={handleExport}
              className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>导出数据</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
