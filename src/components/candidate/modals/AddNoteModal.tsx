
import React, { useState } from 'react';
import { X, MessageSquare, Save, User, Calendar } from 'lucide-react';

interface AddNoteModalProps {
  candidate: any;
  onClose: () => void;
}

export const AddNoteModal: React.FC<AddNoteModalProps> = ({ candidate, onClose }) => {
  const [noteType, setNoteType] = useState('general');
  const [content, setContent] = useState('');
  const [isPrivate, setIsPrivate] = useState(false);

  // 模拟现有备注
  const existingNotes = [
    {
      id: 1,
      type: 'interview',
      content: '技术面试表现优秀，对React和TypeScript掌握扎实，有良好的编程思维。建议进入下一轮面试。',
      author: '张技术总监',
      date: '2024-01-15 14:30',
      isPrivate: false
    },
    {
      id: 2,
      type: 'hr',
      content: '沟通能力强，团队协作意识好，薪资期望25K，在合理范围内。',
      author: '李HR经理',
      date: '2024-01-14 10:15',
      isPrivate: true
    }
  ];

  const noteTypes = [
    { id: 'general', label: '一般备注', color: 'blue' },
    { id: 'interview', label: '面试记录', color: 'green' },
    { id: 'hr', label: 'HR备注', color: 'purple' },
    { id: 'technical', label: '技术评估', color: 'orange' },
    { id: 'warning', label: '注意事项', color: 'red' }
  ];

  const getTypeColor = (type: string) => {
    const typeConfig = noteTypes.find(t => t.id === type);
    return typeConfig?.color || 'blue';
  };

  const handleSave = () => {
    console.log('保存备注:', {
      candidate: candidate.name,
      type: noteType,
      content,
      isPrivate,
      author: '当前用户',
      date: new Date().toISOString()
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-auto">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <MessageSquare className="w-6 h-6 text-blue-600" />
            <div>
              <h2 className="text-xl font-semibold text-gray-900">添加备注</h2>
              <p className="text-sm text-gray-600">为 {candidate.name} 添加备注信息</p>
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
          {/* 备注类型 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">备注类型</label>
            <div className="flex flex-wrap gap-2">
              {noteTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setNoteType(type.id)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium ${
                    noteType === type.id 
                      ? `bg-${type.color}-100 text-${type.color}-700 border border-${type.color}-300` 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {type.label}
                </button>
              ))}
            </div>
          </div>

          {/* 备注内容 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">备注内容</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="输入备注内容..."
            />
          </div>

          {/* 隐私设置 */}
          <div>
            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={isPrivate}
                onChange={(e) => setIsPrivate(e.target.checked)}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <div>
                <div className="font-medium text-gray-900">私有备注</div>
                <div className="text-sm text-gray-500">仅自己可见，不会分享给其他团队成员</div>
              </div>
            </label>
          </div>

          {/* 现有备注 */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">现有备注</h3>
            <div className="space-y-3 max-h-60 overflow-y-auto">
              {existingNotes.map((note) => (
                <div key={note.id} className={`p-4 border border-gray-200 rounded-lg bg-${getTypeColor(note.type)}-50`}>
                  <div className="flex items-start justify-between mb-2">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full bg-${getTypeColor(note.type)}-100 text-${getTypeColor(note.type)}-700`}>
                      {noteTypes.find(t => t.id === note.type)?.label}
                    </span>
                    {note.isPrivate && (
                      <span className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full">私有</span>
                    )}
                  </div>
                  <p className="text-sm text-gray-700 mb-2">{note.content}</p>
                  <div className="flex items-center space-x-4 text-xs text-gray-500">
                    <div className="flex items-center space-x-1">
                      <User className="w-3 h-3" />
                      <span>{note.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{note.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
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
            onClick={handleSave}
            disabled={!content}
            className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Save className="w-4 h-4" />
            <span>保存备注</span>
          </button>
        </div>
      </div>
    </div>
  );
};
