
import React from 'react';
import { Phone, Mail, GraduationCap, Briefcase, Calendar, Star } from 'lucide-react';

interface CandidateOverviewTabProps {
  candidate: any;
}

export const CandidateOverviewTab: React.FC<CandidateOverviewTabProps> = ({ candidate }) => {
  return (
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
  );
};
