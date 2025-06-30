
import React, { useState } from 'react';
import { Search, Filter, Download, Mail, Upload } from 'lucide-react';
import { CandidateCard } from './CandidateCard';
import { ScoreFilter } from './ScoreFilter';

const mockCandidates = [
  {
    id: 1,
    name: '张三',
    position: '前端开发工程师',
    score: 87,
    education: '北京大学 • 计算机科学',
    experience: '3年',
    skills: ['React', 'TypeScript', 'Node.js', 'Python'],
    status: 'pending',
    phone: '138****1234',
    email: 'zhang***@email.com',
    resumeUrl: '/resumes/zhangsan.pdf',
    appliedAt: '2024-01-15',
    highlights: ['技能匹配度高', '知名院校背景', '相关项目经验']
  },
  {
    id: 2,
    name: '李四',
    position: '前端开发工程师',
    score: 72,
    education: '清华大学 • 软件工程',
    experience: '2年',
    skills: ['Vue.js', 'JavaScript', 'CSS3', 'Webpack'],
    status: 'qualified',
    phone: '139****5678',
    email: 'lisi***@email.com',
    resumeUrl: '/resumes/lisi.pdf',
    appliedAt: '2024-01-14',
    highlights: ['学习能力强', '项目经验丰富']
  },
  {
    id: 3,
    name: '王五',
    position: '前端开发工程师',
    score: 45,
    education: '中南大学 • 信息技术',
    experience: '1年',
    skills: ['HTML', 'CSS', 'JavaScript'],
    status: 'rejected',
    phone: '137****9012',
    email: 'wangwu***@email.com',
    resumeUrl: '/resumes/wangwu.pdf',
    appliedAt: '2024-01-13',
    highlights: ['基础扎实', '但经验不足']
  }
];

export const CandidateManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [scoreRange, setScoreRange] = useState([0, 100]);
  const [showBulkActions, setShowBulkActions] = useState(false);

  const filteredCandidates = mockCandidates.filter(candidate => {
    const matchesSearch = candidate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         candidate.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesStatus = selectedStatus === 'all' || candidate.status === selectedStatus;
    const matchesScore = candidate.score >= scoreRange[0] && candidate.score <= scoreRange[1];
    
    return matchesSearch && matchesStatus && matchesScore;
  });

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">简历管理</h1>
          <p className="text-gray-600 mt-1">智能筛选候选人，高效管理简历流程</p>
        </div>
        <div className="flex space-x-3">
          <button className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
            <Download className="w-4 h-4" />
            <span>导出简历</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
            <Mail className="w-4 h-4" />
            <span>批量发送</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Upload className="w-4 h-4" />
            <span>批量上传</span>
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="space-y-4">
          {/* Search and Status */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="搜索候选人姓名或技能..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="flex items-center space-x-2">
              <Filter className="w-4 h-4 text-gray-400" />
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

          {/* Score Filter */}
          <ScoreFilter 
            range={scoreRange}
            onChange={setScoreRange}
          />
        </div>
      </div>

      {/* Results Summary */}
      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-600">
          共找到 {filteredCandidates.length} 份简历
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-600">排序方式:</span>
          <select className="text-sm border border-gray-300 rounded-md px-2 py-1 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
            <option value="score">评分从高到低</option>
            <option value="date">申请时间</option>
            <option value="name">姓名</option>
          </select>
        </div>
      </div>

      {/* Candidate List */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredCandidates.map((candidate) => (
          <CandidateCard key={candidate.id} candidate={candidate} />
        ))}
      </div>

      {filteredCandidates.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 text-lg mb-2">未找到匹配的候选人</div>
          <div className="text-gray-500 text-sm">尝试调整筛选条件或搜索关键词</div>
        </div>
      )}
    </div>
  );
};
