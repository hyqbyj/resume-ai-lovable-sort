
import React, { useState } from 'react';
import { X, Search, User, Star, Calendar } from 'lucide-react';
import { CandidateDetailModal } from '../candidate/CandidateDetailModal';
import { candidatesData } from '../candidate/data/candidatesData';

interface ViewResumesModalProps {
  job: any;
  onClose: () => void;
}

export const ViewResumesModal: React.FC<ViewResumesModalProps> = ({ job, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedCandidate, setSelectedCandidate] = useState(null);

  const filteredResumes = candidatesData.filter(resume => {
    const matchesSearch = resume.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = selectedStatus === 'all' || resume.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'qualified': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'rejected': return 'bg-red-100 text-red-800';
      case 'interviewed': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'qualified': return '已合格';
      case 'pending': return '待筛选';
      case 'rejected': return '已拒绝';
      case 'interviewed': return '已面试';
      default: return '未知';
    }
  };

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-auto">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">{job.title} - 简历列表</h2>
              <p className="text-gray-600">共 {job.applicants} 份简历，{job.qualified} 份已通过筛选</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Filters */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="搜索候选人姓名..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">全部状态</option>
                <option value="pending">待筛选</option>
                <option value="qualified">已合格</option>
                <option value="rejected">已拒绝</option>
                <option value="interviewed">已面试</option>
              </select>
            </div>
          </div>

          {/* Resume List */}
          <div className="p-6">
            <div className="space-y-4">
              {filteredResumes.map((resume) => (
                <div key={resume.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{resume.name}</h3>
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                          <Calendar className="w-3 h-3" />
                          <span>申请时间: {resume.appliedDate}</span>
                          <span>•</span>
                          <span>经验: {resume.experience}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-600">
                        {resume.score} 分
                      </div>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(resume.status)}`}>
                        {getStatusText(resume.status)}
                      </span>
                    </div>
                  </div>
                  
                  <div className="mt-3">
                    <div className="flex items-center space-x-2">
                      {resume.highlights.map((highlight, index) => (
                        <div key={index} className="flex items-center space-x-1">
                          <Star className="w-3 h-3 text-yellow-500" />
                          <span className="text-xs text-gray-600">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-3 flex space-x-2">
                    <button 
                      onClick={() => setSelectedCandidate(resume)}
                      className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition-colors"
                    >
                      查看详情
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {filteredResumes.length === 0 && (
              <div className="text-center py-8">
                <div className="text-gray-400 text-lg mb-2">未找到匹配的简历</div>
                <div className="text-gray-500 text-sm">尝试调整搜索条件或筛选状态</div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Candidate Detail Modal */}
      {selectedCandidate && (
        <CandidateDetailModal 
          candidate={selectedCandidate}
          onClose={() => setSelectedCandidate(null)}
        />
      )}
    </>
  );
};
