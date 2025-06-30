
import React from 'react';

interface CandidateEvaluationTabProps {
  candidate: any;
}

export const CandidateEvaluationTab: React.FC<CandidateEvaluationTabProps> = ({ candidate }) => {
  return (
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
  );
};
