
import React, { useState } from 'react';
import { X, Mail, Users, Send } from 'lucide-react';

interface BulkSendEmailModalProps {
  onClose: () => void;
}

export const BulkSendEmailModal: React.FC<BulkSendEmailModalProps> = ({ onClose }) => {
  const [emailType, setEmailType] = useState('rejection');
  const [subject, setSubject] = useState('');
  const [content, setContent] = useState('');
  const [selectedCandidates, setSelectedCandidates] = useState<string[]>([]);

  const emailTemplates = {
    rejection: {
      subject: '关于您的求职申请',
      content: `尊敬的候选人，

感谢您对我们公司的关注和投递简历。

经过仔细评估，我们认为您的背景和经验与当前职位的要求不太匹配。虽然这次没有合适的机会，但我们会将您的简历保留在我们的人才库中，如果有合适的职位会及时与您联系。

再次感谢您的关注，祝您求职顺利！

最好的祝愿，
人力资源部`
    },
    interview: {
      subject: '面试邀请 - 恭喜您通过初筛',
      content: `尊敬的候选人，

恭喜您！您的简历已通过我们的初步筛选。

我们诚挚邀请您参加面试，具体安排如下：
- 面试时间：请回复邮件确认您的可用时间
- 面试形式：现场面试/视频面试
- 面试地点：将在确认后通知

请携带相关证件和作品集（如适用）。

期待与您的会面！

最好的祝愿，
人力资源部`
    },
    followup: {
      subject: '感谢您的申请 - 后续安排',
      content: `尊敬的候选人，

感谢您对我们职位的关注和申请。

我们已收到您的简历并正在仔细评估中。我们会在7个工作日内给您回复，请耐心等待。

如有任何问题，请随时联系我们。

最好的祝愿，
人力资源部`
    }
  };

  const handleTemplateChange = (type: string) => {
    setEmailType(type);
    const template = emailTemplates[type as keyof typeof emailTemplates];
    setSubject(template.subject);
    setContent(template.content);
  };

  const candidateGroups = [
    { id: 'pending', label: '待筛选候选人', count: 45 },
    { id: 'rejected', label: '已拒绝候选人', count: 23 },
    { id: 'qualified', label: '已合格候选人', count: 12 },
    { id: 'interviewed', label: '已面试候选人', count: 8 }
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-auto">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <Mail className="w-6 h-6 text-blue-600" />
            <h2 className="text-xl font-semibold text-gray-900">批量发送邮件</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* 选择收件人 */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">选择收件人</h3>
            <div className="grid grid-cols-2 gap-4">
              {candidateGroups.map((group) => (
                <label key={group.id} className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedCandidates.includes(group.id)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedCandidates([...selectedCandidates, group.id]);
                      } else {
                        setSelectedCandidates(selectedCandidates.filter(id => id !== group.id));
                      }
                    }}
                    className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                  />
                  <Users className="w-5 h-5 text-gray-400" />
                  <div>
                    <div className="font-medium text-gray-900">{group.label}</div>
                    <div className="text-sm text-gray-500">{group.count} 人</div>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* 邮件模板 */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">选择邮件模板</h3>
            <div className="flex space-x-2 mb-4">
              <button
                onClick={() => handleTemplateChange('rejection')}
                className={`px-4 py-2 rounded-lg text-sm font-medium ${
                  emailType === 'rejection' 
                    ? 'bg-red-100 text-red-700 border border-red-300' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                拒绝信
              </button>
              <button
                onClick={() => handleTemplateChange('interview')}
                className={`px-4 py-2 rounded-lg text-sm font-medium ${
                  emailType === 'interview' 
                    ? 'bg-green-100 text-green-700 border border-green-300' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                面试邀请
              </button>
              <button
                onClick={() => handleTemplateChange('followup')}
                className={`px-4 py-2 rounded-lg text-sm font-medium ${
                  emailType === 'followup' 
                    ? 'bg-blue-100 text-blue-700 border border-blue-300' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                后续跟进
              </button>
            </div>

            {/* 邮件内容 */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">邮件主题</label>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="输入邮件主题"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">邮件内容</label>
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  rows={10}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="输入邮件内容"
                />
              </div>
            </div>
          </div>

          {/* 发送预览 */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="font-medium text-gray-900 mb-2">发送预览</h4>
            <div className="text-sm text-gray-600">
              将向 <span className="font-medium text-blue-600">
                {selectedCandidates.reduce((total, id) => {
                  const group = candidateGroups.find(g => g.id === id);
                  return total + (group?.count || 0);
                }, 0)}
              </span> 位候选人发送邮件
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
            disabled={selectedCandidates.length === 0 || !subject || !content}
            className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send className="w-4 h-4" />
            <span>发送邮件</span>
          </button>
        </div>
      </div>
    </div>
  );
};
