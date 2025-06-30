
import React from 'react';

export const CandidateExperienceTab: React.FC = () => {
  return (
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
  );
};
