
import React from 'react';
import { 
  Star, 
  Download, 
  Mail, 
  Phone, 
  Calendar, 
  CheckCircle, 
  XCircle, 
  Clock,
  Eye
} from 'lucide-react';

interface Candidate {
  id: number;
  name: string;
  position: string;
  score: number;
  education: string;
  experience: string;
  skills: string[];
  status: string;
  phone: string;
  email: string;
  resumeUrl: string;
  appliedAt: string;
  highlights: string[];
}

interface CandidateCardProps {
  candidate: Candidate;
}

export const CandidateCard: React.FC<CandidateCardProps> = ({ candidate }) => {
  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600 bg-green-50';
    if (score >= 60) return 'text-blue-600 bg-blue-50';
    if (score >= 40) return 'text-yellow-600 bg-yellow-50';
    return 'text-red-600 bg-red-50';
  };

  const getStatusConfig = (status: string) => {
    switch (status) {
      case 'qualified':
        return { color: 'text-green-700 bg-green-50', text: '已合格', icon: CheckCircle };
      case 'rejected':
        return { color: 'text-red-700 bg-red-50', text: '已拒绝', icon: XCircle };
      case 'interviewed':
        return { color: 'text-purple-700 bg-purple-50', text: '已面试', icon: Calendar };
      default:
        return { color: 'text-gray-700 bg-gray-50', text: '待筛选', icon: Clock };
    }
  };

  const statusConfig = getStatusConfig(candidate.status);
  const StatusIcon = statusConfig.icon;

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-lg">
            {candidate.name.charAt(0)}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{candidate.name}</h3>
            <p className="text-gray-600 text-sm">{candidate.position}</p>
            <p className="text-gray-500 text-xs mt-1">申请时间: {candidate.appliedAt}</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <div className={`px-3 py-1 rounded-full text-sm font-medium ${getScoreColor(candidate.score)}`}>
            {candidate.score}分
          </div>
          <div className={`px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1 ${statusConfig.color}`}>
            <StatusIcon className="w-3 h-3" />
            <span>{statusConfig.text}</span>
          </div>
        </div>
      </div>

      {/* Education & Experience */}
      <div className="mb-4">
        <div className="text-sm text-gray-700 mb-1">
          <strong>教育背景:</strong> {candidate.education}
        </div>
        <div className="text-sm text-gray-700">
          <strong>工作经验:</strong> {candidate.experience}
        </div>
      </div>

      {/* Skills */}
      <div className="mb-4">
        <div className="text-sm font-medium text-gray-900 mb-2">技能标签</div>
        <div className="flex flex-wrap gap-2">
          {candidate.skills.map((skill) => (
            <span
              key={skill}
              className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-md font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Highlights */}
      <div className="mb-4">
        <div className="text-sm font-medium text-gray-900 mb-2">亮点分析</div>
        <div className="space-y-1">
          {candidate.highlights.map((highlight, index) => (
            <div key={index} className="flex items-center space-x-2 text-sm">
              <Star className="w-3 h-3 text-yellow-500" />
              <span className="text-gray-700">{highlight}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Info */}
      <div className="mb-4 p-3 bg-gray-50 rounded-lg">
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div className="flex items-center space-x-2">
            <Phone className="w-3 h-3 text-gray-500" />
            <span className="text-gray-700">{candidate.phone}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail className="w-3 h-3 text-gray-500" />
            <span className="text-gray-700">{candidate.email}</span>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex space-x-2">
        <button className="flex-1 flex items-center justify-center space-x-1 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
          <Eye className="w-4 h-4" />
          <span>查看详情</span>
        </button>
        <button className="px-3 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
          <Download className="w-4 h-4" />
        </button>
        <button className="px-3 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
          <Mail className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
