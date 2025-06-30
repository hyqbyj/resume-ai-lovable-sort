
import React, { useState } from 'react';
import { X, Upload, FileText, Wand2, Save } from 'lucide-react';

interface CreateJDModalProps {
  onClose: () => void;
}

export const CreateJDModal: React.FC<CreateJDModalProps> = ({ onClose }) => {
  const [jobTitle, setJobTitle] = useState('');
  const [department, setDepartment] = useState('');
  const [jobType, setJobType] = useState('全职');
  const [workLocation, setWorkLocation] = useState('');
  const [salaryRange, setSalaryRange] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [requirements, setRequirements] = useState('');
  const [benefits, setBenefits] = useState('');

  const handleSmartGenerate = () => {
    // 模拟AI智能生成JD内容
    if (jobTitle) {
      const generatedContent = `
职位职责：
1. 负责${jobTitle}相关工作的规划、设计和实施
2. 参与项目需求分析，制定技术方案
3. 与团队成员协作，确保项目按时交付
4. 持续优化工作流程，提升团队效率

任职要求：
1. 本科及以上学历，相关专业优先
2. 3年以上相关工作经验
3. 具备良好的沟通协调能力
4. 学习能力强，能快速适应新技术和新环境
      `.trim();
      
      setJobDescription(generatedContent);
      setRequirements('本科及以上学历\n3年以上相关经验\n熟练使用相关工具和技术');
      setBenefits('五险一金\n带薪年假\n弹性工作\n团队建设活动\n培训发展机会');
    }
  };

  const handleSave = () => {
    // 保存JD逻辑
    console.log('保存职位描述:', {
      jobTitle,
      department,
      jobType,
      workLocation,
      salaryRange,
      jobDescription,
      requirements,
      benefits
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <FileText className="w-6 h-6 text-blue-600" />
            <h2 className="text-xl font-semibold text-gray-900">创建职位描述</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* 基础信息 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                职位名称 *
              </label>
              <input
                type="text"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="请输入职位名称"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                所属部门
              </label>
              <select
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">请选择部门</option>
                <option value="技术部">技术部</option>
                <option value="产品部">产品部</option>
                <option value="市场部">市场部</option>
                <option value="销售部">销售部</option>
                <option value="人事部">人事部</option>
                <option value="财务部">财务部</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                工作类型
              </label>
              <select
                value={jobType}
                onChange={(e) => setJobType(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="全职">全职</option>
                <option value="兼职">兼职</option>
                <option value="实习">实习</option>
                <option value="外包">外包</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                工作地点
              </label>
              <input
                type="text"
                value={workLocation}
                onChange={(e) => setWorkLocation(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="请输入工作地点"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                薪资范围
              </label>
              <input
                type="text"
                value={salaryRange}
                onChange={(e) => setSalaryRange(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="例如：10K-15K"
              />
            </div>
          </div>

          {/* AI智能生成按钮 */}
          <div className="flex items-center justify-between bg-blue-50 rounded-lg p-4">
            <div>
              <h3 className="font-medium text-blue-900">AI智能生成</h3>
              <p className="text-sm text-blue-700">基于职位名称自动生成专业的JD内容</p>
            </div>
            <button
              onClick={handleSmartGenerate}
              disabled={!jobTitle}
              className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
            >
              <Wand2 className="w-4 h-4" />
              <span>智能生成</span>
            </button>
          </div>

          {/* 详细内容 */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                职位描述
              </label>
              <textarea
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
                rows={6}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="请详细描述职位职责和工作内容..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                任职要求
              </label>
              <textarea
                value={requirements}
                onChange={(e) => setRequirements(e.target.value)}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="请列出具体的任职要求..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                福利待遇
              </label>
              <textarea
                value={benefits}
                onChange={(e) => setBenefits(e.target.value)}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="请描述公司提供的福利待遇..."
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end space-x-3 p-6 border-t border-gray-200">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            取消
          </button>
          <button
            onClick={handleSave}
            className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Save className="w-4 h-4" />
            <span>保存发布</span>
          </button>
        </div>
      </div>
    </div>
  );
};
