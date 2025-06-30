
import React from 'react';
import { TrendChart } from './TrendChart';
import { SkillsAnalysis } from './SkillsAnalysis';
import { RecruitmentFunnel } from './RecruitmentFunnel';
import { PerformanceMetrics } from './PerformanceMetrics';

export const AnalyticsPanel = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">数据分析</h1>
          <p className="text-gray-600 mt-1">深度洞察招聘数据，优化筛选策略</p>
        </div>
        <div className="flex space-x-3">
          <select className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
            <option value="7">最近7天</option>
            <option value="30">最近30天</option>
            <option value="90">最近90天</option>
          </select>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            导出报告
          </button>
        </div>
      </div>

      {/* Performance Metrics */}
      <PerformanceMetrics />

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TrendChart />
        <RecruitmentFunnel />
      </div>

      {/* Skills Analysis */}
      <SkillsAnalysis />
    </div>
  );
};
