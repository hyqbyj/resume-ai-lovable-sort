
import React from 'react';
import { MapPin, Calendar, Star, Phone, Mail, Eye, MessageSquare } from 'lucide-react';

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
  onViewDetail?: () => void;
}

export const CandidateCard: React.FC<CandidateCardProps> = ({ candidate, onViewDetail }) => {
  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600 bg-green-50 border-green-200';
    if (score >= 60) return 'text-yellow-600 bg-yellow-50 border-yellow-200';
    return 'text-red-600 bg-red-50 border-red-200';
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'qualified':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      case 'interviewed':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'qualified':
        return '已合格';
      case 'pending':
        return '待筛选';
      case 'rejected':
        return '已拒绝';
      case 'interviewed':
        return '已面试';
      default:
        return '未知';
    }
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
            <span className="text-blue-600 font-semibold">
              {candidate.name.charAt(0)}
            </span>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">{candidate.name}</h3>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <span>{candidate.position}</span>
              <span>•</span>
              <span>{candidate.experience}</span>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <div className={`px-3 py-1 rounded-full text-sm font-medium border ${getScoreColor(candidate.score)}`}>
            {candidate.score} 分
          </div>
          <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(candidate.status)}`}>
            {getStatusText(candidate.status)}
          </span>
        </div>
      </div>

      {/* Education & Contact */}
      <div className="space-y-2 mb-4">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <MapPin className="w-3 h-3" />
          <span>{candidate.education}</span>
        </div>
        <div className="flex items-center space-x-4 text-sm text-gray-500">
          <div className="flex items-center space-x-1">
            <Phone className="w-3 h-3" />
            <span>{candidate.phone}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Mail className="w-3 h-3" />
            <span>{candidate.email}</span>
          </div>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <Calendar className="w-3 h-3" />
          <span>申请时间: {candidate.appliedAt}</span>
        </div>
      </div>

      {/* Skills */}
      <div className="mb-4">
        <div className="flex flex-wrap gap-1">
          {candidate.skills.slice(0, 6).map((skill) => (
            <span
              key={skill}
              className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded"
            >
              {skill}
            </span>
          ))}
          {candidate.skills.length > 6 && (
            <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
              +{candidate.skills.length - 6}
            </span>
          )}
        </div>
      </div>

      {/* Highlights */}
      <div className="mb-4">
        <div className="space-y-1">
          {candidate.highlights.slice(0, 2).map((highlight, index) => (
            <div key={index} className="flex items-center space-x-2">
              <Star className="w-3 h-3 text-yellow-500 flex-shrink-0" />
              <span className="text-xs text-gray-600">{highlight}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="flex space-x-2 pt-4 border-t border-gray-100">
        <button 
          onClick={onViewDetail}
          className="flex-1 flex items-center justify-center space-x-1 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
        >
          <Eye className="w-3 h-3" />
          <span>查看详情</span>
        </button>
        <button className="flex items-center justify-center px-3 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors text-sm">
          <Phone className="w-3 h-3" />
        </button>
        <button className="flex items-center justify-center px-3 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors text-sm">
          <Mail className="w-3 h-3" />
        </button>
        <button className="flex items-center justify-center px-3 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors text-sm">
          <MessageSquare className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
};
