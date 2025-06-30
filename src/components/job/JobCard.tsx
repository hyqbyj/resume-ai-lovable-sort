
import React from 'react';
import { MapPin, Calendar, Users, CheckCircle, Settings } from 'lucide-react';

interface Job {
  id: number;
  title: string;
  department: string;
  location: string;
  salary: string;
  status: string;
  applicants: number;
  qualified: number;
  createdAt: string;
  requirements: {
    education: string;
    experience: string;
    skills: string[];
  };
}

interface JobCardProps {
  job: Job;
}

export const JobCard: React.FC<JobCardProps> = ({ job }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'paused':
        return 'bg-yellow-100 text-yellow-800';
      case 'closed':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active':
        return '招聘中';
      case 'paused':
        return '已暂停';
      case 'closed':
        return '已关闭';
      default:
        return '未知';
    }
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-1">{job.title}</h3>
          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <span>{job.department}</span>
            <div className="flex items-center space-x-1">
              <MapPin className="w-3 h-3" />
              <span>{job.location}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Calendar className="w-3 h-3" />
              <span>{job.createdAt}</span>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(job.status)}`}>
            {getStatusText(job.status)}
          </span>
          <button className="p-1.5 text-gray-400 hover:text-gray-600 rounded-md hover:bg-gray-100">
            <Settings className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Salary */}
      <div className="mb-4">
        <span className="text-lg font-semibold text-blue-600">{job.salary}</span>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-gray-50 rounded-lg p-3">
          <div className="flex items-center space-x-2">
            <Users className="w-4 h-4 text-gray-600" />
            <span className="text-sm text-gray-600">申请人数</span>
          </div>
          <div className="text-xl font-bold text-gray-900 mt-1">{job.applicants}</div>
        </div>
        <div className="bg-green-50 rounded-lg p-3">
          <div className="flex items-center space-x-2">
            <CheckCircle className="w-4 h-4 text-green-600" />
            <span className="text-sm text-green-600">合格候选人</span>
          </div>
          <div className="text-xl font-bold text-green-700 mt-1">{job.qualified}</div>
        </div>
      </div>

      {/* Requirements */}
      <div className="mb-4">
        <h4 className="text-sm font-medium text-gray-900 mb-2">职位要求</h4>
        <div className="space-y-1 text-sm text-gray-600">
          <div>学历: {job.requirements.education}</div>
          <div>经验: {job.requirements.experience}</div>
        </div>
        <div className="flex flex-wrap gap-1 mt-2">
          {job.requirements.skills.map((skill) => (
            <span
              key={skill}
              className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-md"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="flex space-x-2 pt-4 border-t border-gray-100">
        <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
          查看简历
        </button>
        <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors text-sm">
          编辑职位
        </button>
      </div>
    </div>
  );
};
