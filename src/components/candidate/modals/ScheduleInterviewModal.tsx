
import React, { useState } from 'react';
import { X, Calendar, Clock, MapPin, User } from 'lucide-react';

interface ScheduleInterviewModalProps {
  candidate: any;
  onClose: () => void;
}

export const ScheduleInterviewModal: React.FC<ScheduleInterviewModalProps> = ({ candidate, onClose }) => {
  const [interviewType, setInterviewType] = useState('technical');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');
  const [interviewer, setInterviewer] = useState('');
  const [notes, setNotes] = useState('');

  const interviewTypes = [
    { id: 'technical', label: '技术面试', duration: '60分钟' },
    { id: 'hr', label: 'HR面试', duration: '30分钟' },
    { id: 'manager', label: '部门经理面试', duration: '45分钟' },
    { id: 'final', label: '终面', duration: '90分钟' }
  ];

  const interviewers = [
    { id: '1', name: '张技术总监', department: '技术部' },
    { id: '2', name: '李HR经理', department: '人力资源部' },
    { id: '3', name: '王产品总监', department: '产品部' },
    { id: '4', name: '赵CEO', department: '管理层' }
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-auto">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <Calendar className="w-6 h-6 text-blue-600" />
            <div>
              <h2 className="text-xl font-semibold text-gray-900">安排面试</h2>
              <p className="text-sm text-gray-600">为 {candidate.name} 安排面试</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* 面试类型 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">面试类型</label>
            <div className="grid grid-cols-2 gap-3">
              {interviewTypes.map((type) => (
                <label key={type.id} className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                  <input
                    type="radio"
                    name="interviewType"
                    value={type.id}
                    checked={interviewType === type.id}
                    onChange={(e) => setInterviewType(e.target.value)}
                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <div>
                    <div className="font-medium text-gray-900">{type.label}</div>
                    <div className="text-sm text-gray-500">{type.duration}</div>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* 时间安排 */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">面试日期</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">面试时间</label>
              <div className="relative">
                <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* 面试地点 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">面试地点</label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">选择面试地点</option>
                <option value="meeting-room-1">会议室A (10人)</option>
                <option value="meeting-room-2">会议室B (6人)</option>
                <option value="online">线上面试</option>
                <option value="phone">电话面试</option>
              </select>
            </div>
          </div>

          {/* 面试官 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">面试官</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <select
                value={interviewer}
                onChange={(e) => setInterviewer(e.target.value)}
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">选择面试官</option>
                {interviewers.map((person) => (
                  <option key={person.id} value={person.id}>
                    {person.name} - {person.department}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* 备注 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">面试备注</label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="输入面试相关备注信息..."
            />
          </div>
        </div>

        {/* 底部操作按钮 */}
        <div className="flex justify-end space-x-3 p-6 border-t border-gray-200">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            取消
          </button>
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            确认安排
          </button>
        </div>
      </div>
    </div>
  );
};
