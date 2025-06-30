
import React, { useState } from 'react';
import { Plus, Search, Filter } from 'lucide-react';
import { JobCard } from './JobCard';
import { CreateJobModal } from './CreateJobModal';

const mockJobs = [
  {
    id: 1,
    title: '前端开发工程师',
    department: '技术部',
    location: '北京',
    salary: '15K-30K',
    status: 'active',
    applicants: 156,
    qualified: 37,
    createdAt: '2024-01-15',
    requirements: {
      education: '本科及以上',
      experience: '3-5年',
      skills: ['React', 'TypeScript', 'Node.js'],
    }
  },
  {
    id: 2,
    title: '产品经理',
    department: '产品部',
    location: '上海',
    salary: '20K-35K',
    status: 'active',
    applicants: 89,
    qualified: 21,
    createdAt: '2024-01-12',
    requirements: {
      education: '本科及以上',
      experience: '5-8年',
      skills: ['产品设计', '数据分析', '用户研究'],
    }
  },
  {
    id: 3,
    title: '后端开发工程师',
    department: '技术部',
    location: '深圳',
    salary: '18K-32K',
    status: 'paused',
    applicants: 78,
    qualified: 15,
    createdAt: '2024-01-10',
    requirements: {
      education: '本科及以上',
      experience: '3-6年',
      skills: ['Java', 'Spring Boot', 'MySQL'],
    }
  },
  {
    id: 4,
    title: 'UI设计师',
    department: '设计部',
    location: '杭州',
    salary: '12K-25K',
    status: 'closed',
    applicants: 45,
    qualified: 8,
    createdAt: '2024-01-08',
    requirements: {
      education: '大专及以上',
      experience: '2-4年',
      skills: ['Figma', 'Sketch', 'Photoshop'],
    }
  },
  {
    id: 5,
    title: '数据分析师',
    department: '数据部',
    location: '北京',
    salary: '16K-28K',
    status: 'active',
    applicants: 67,
    qualified: 19,
    createdAt: '2024-01-18',
    requirements: {
      education: '本科及以上',
      experience: '2-5年',
      skills: ['Python', 'SQL', 'Tableau'],
    }
  },
  {
    id: 6,
    title: '测试工程师',
    department: '技术部',
    location: '上海',
    salary: '13K-22K',
    status: 'paused',
    applicants: 34,
    qualified: 12,
    createdAt: '2024-01-16',
    requirements: {
      education: '本科及以上',
      experience: '2-4年',
      skills: ['自动化测试', 'Selenium', 'JMeter'],
    }
  }
];

export const JobManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState('all');

  // 修复搜索功能
  const filteredJobs = mockJobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.department.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = selectedStatus === 'all' || job.status === selectedStatus;
    
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">职位管理</h1>
          <p className="text-gray-600 mt-1">创建和管理招聘职位，设定筛选规则</p>
        </div>
        <button
          onClick={() => setShowCreateModal(true)}
          className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span>创建职位</span>
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="搜索职位名称或部门..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Status Filter */}
          <div className="flex items-center space-x-2">
            <Filter className="w-4 h-4 text-gray-400" />
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">全部状态</option>
              <option value="active">招聘中</option>
              <option value="paused">已暂停</option>
              <option value="closed">已关闭</option>
            </select>
          </div>
        </div>
      </div>

      {/* Results Summary */}
      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-600">
          共找到 {filteredJobs.length} 个职位
        </div>
      </div>

      {/* Job List */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredJobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>

      {filteredJobs.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 text-lg mb-2">未找到匹配的职位</div>
          <div className="text-gray-500 text-sm">尝试调整搜索条件或筛选状态</div>
        </div>
      )}

      {/* Create Job Modal */}
      {showCreateModal && (
        <CreateJobModal onClose={() => setShowCreateModal(false)} />
      )}
    </div>
  );
};
