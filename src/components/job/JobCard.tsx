
import React, { useState } from 'react';
import { MapPin, Users, Calendar, MoreHorizontal, Eye, Edit, Settings } from 'lucide-react';
import { ViewResumesModal } from './ViewResumesModal';
import { EditJobModal } from './EditJobModal';
import { JobSettingsModal } from './JobSettingsModal';

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
  const [showViewResumes, setShowViewResumes] = useState(false);
  const [showEditJob, setShowEditJob] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'paused':
        return 'bg-yellow-100 text-yellow-800';
      case 'closed':
        return 'bg-red-100 text-red-800';
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
    <>
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{job.title}</h3>
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <span>{job.department}</span>
              <span className="flex items-center space-x-1">
                <MapPin className="w-3 h-3" />
                <span>{job.location}</span>
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(job.status)}`}>
              {getStatusText(job.status)}
            </span>
            <div className="relative">
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="p-1 text-gray-400 hover:text-gray-600 rounded"
              >
                <MoreHorizontal className="w-4 h-4" />
              </button>
              {showDropdown && (
                <div className="absolute right-0 top-8 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                  <button
                    onClick={() => {
                      setShowViewResumes(true);
                      setShowDropdown(false);
                    }}
                    className="w-full flex items-center space-x-2 px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50"
                  >
                    <Eye className="w-4 h-4" />
                    <span>查看简历</span>
                  </button>
                  <button
                    onClick={() => {
                      setShowEditJob(true);
                      setShowDropdown(false);
                    }}
                    className="w-full flex items-center space-x-2 px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50"
                  >
                    <Edit className="w-4 h-4" />
                    <span>编辑职位</span>
                  </button>
                  <button
                    onClick={() => {
                      setShowSettings(true);
                      setShowDropdown(false);
                    }}
                    className="w-full flex items-center space-x-2 px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50"
                  >
                    <Settings className="w-4 h-4" />
                    <span>设置</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Salary */}
        <div className="mb-4">
          <span className="text-xl font-bold text-blue-600">{job.salary}</span>
        </div>

        {/* Stats */}
        <div className="flex items-center space-x-6 mb-4">
          <div className="flex items-center space-x-2">
            <Users className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-600">
              {job.applicants} 份申请
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">
              {job.qualified} 份合格
            </span>
          </div>
        </div>

        {/* Requirements */}
        <div className="mb-4">
          <div className="text-sm text-gray-600 space-y-1">
            <div>学历：{job.requirements.education}</div>
            <div>经验：{job.requirements.experience}</div>
          </div>
        </div>

        {/* Skills */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-1">
            {job.requirements.skills.slice(0, 3).map((skill) => (
              <span
                key={skill}
                className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded"
              >
                {skill}
              </span>
            ))}
            {job.requirements.skills.length > 3 && (
              <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                +{job.requirements.skills.length - 3}
              </span>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center space-x-2 text-xs text-gray-500">
            <Calendar className="w-3 h-3" />
            <span>发布于 {job.createdAt}</span>
          </div>
          <button
            onClick={() => setShowViewResumes(true)}
            className="text-blue-600 hover:text-blue-700 text-sm font-medium"
          >
            查看申请 →
          </button>
        </div>
      </div>

      {/* Modals */}
      {showViewResumes && (
        <ViewResumesModal 
          job={job}
          onClose={() => setShowViewResumes(false)} 
        />
      )}
      
      {showEditJob && (
        <EditJobModal 
          job={job}
          onClose={() => setShowEditJob(false)} 
        />
      )}
      
      {showSettings && (
        <JobSettingsModal 
          job={job}
          onClose={() => setShowSettings(false)} 
        />
      )}
    </>
  );
};
