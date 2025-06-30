
import React, { useState } from 'react';
import { BarChart3, TrendingUp, Users, FileText, Download } from 'lucide-react';
import { PerformanceMetrics } from './PerformanceMetrics';
import { RecruitmentFunnel } from './RecruitmentFunnel';
import { SkillsAnalysis } from './SkillsAnalysis';
import { TrendChart } from './TrendChart';
import { ExportReportModal } from './ExportReportModal';

export const AnalyticsPanel = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [showExportModal, setShowExportModal] = useState(false);

  return (
    <>
      <div className="space-y-6 animate-fade-in">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">数据分析</h1>
            <p className="text-gray-600 mt-1">深入洞察招聘数据，优化决策流程</p>
          </div>
          <button
            onClick={() => setShowExportModal(true)}
            className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Download className="w-4 h-4" />
            <span>导出报告</span>
          </button>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="flex border-b border-gray-200">
            {[
              { id: 'overview', label: '数据概览', icon: BarChart3 },
              { id: 'funnel', label: '招聘漏斗', icon: TrendingUp },
              { id: 'skills', label: '技能分析', icon: Users },
              { id: 'trends', label: '趋势分析', icon: FileText }
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-4 font-medium text-sm border-b-2 transition-colors ${
                    activeTab === tab.id
                      ? 'border-blue-600 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === 'overview' && <PerformanceMetrics />}
            {activeTab === 'funnel' && <RecruitmentFunnel />}
            {activeTab === 'skills' && <SkillsAnalysis />}
            {activeTab === 'trends' && <TrendChart />}
          </div>
        </div>
      </div>

      {/* Export Modal */}
      {showExportModal && (
        <ExportReportModal onClose={() => setShowExportModal(false)} />
      )}
    </>
  );
};
