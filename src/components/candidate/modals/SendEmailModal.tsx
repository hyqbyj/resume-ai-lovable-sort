
import React, { useState } from 'react';
import { X, Mail, Send } from 'lucide-react';

interface SendEmailModalProps {
  candidate: any;
  onClose: () => void;
}

export const SendEmailModal: React.FC<SendEmailModalProps> = ({ candidate, onClose }) => {
  const [emailType, setEmailType] = useState('custom');
  const [subject, setSubject] = useState('');
  const [content, setContent] = useState('');

  const emailTemplates = {
    interview: {
      subject: `面试邀请 - ${candidate.position}职位`,
      content: `尊敬的${candidate.name}，

恭喜您通过了我们的初步筛选！

我们诚挚邀请您参加${candidate.position}职位的面试。请回复邮件确认您的可用时间，我们会尽快安排具体的面试时间和地点。

期待与您的会面！

最好的祝愿，
人力资源部`
    },
    followup: {
      subject: `关于您的求职申请 - ${candidate.position}`,
      content: `尊敬的${candidate.name}，

感谢您对我们公司${candidate.position}职位的关注。

我们已经收到您的简历，目前正在仔细评估中。我们会在一周内给您答复，请耐心等待。

如有任何问题，请随时联系我们。

最好的祝愿，
人力资源部`
    },
    rejection: {
      subject: `关于您的求职申请`,
      content: `尊敬的${candidate.name}，

感谢您对我们公司的关注和投递简历。

经过仔细考虑，我们认为您的背景和经验与当前${candidate.position}职位的要求不太匹配。虽然这次没有合适的机会，但我们会将您的简历保留在人才库中。

再次感谢您的关注，祝您求职顺利！

最好的祝愿，
人力资源部`
    }
  };

  const handleTemplateChange = (type: string) => {
    setEmailType(type);
    if (type !== 'custom') {
      const template = emailTemplates[type as keyof typeof emailTemplates];
      setSubject(template.subject);
      setContent(template.content);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-auto">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <Mail className="w-6 h-6 text-blue-600" />
            <div>
              <h2 className="text-xl font-semibold text-gray-900">发送邮件</h2>
              <p className="text-sm text-gray-600">发送给: {candidate.name} ({candidate.email})</p>
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
          {/* 邮件模板选择 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">选择邮件模板</label>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => handleTemplateChange('interview')}
                className={`px-3 py-2 rounded-lg text-sm font-medium ${
                  emailType === 'interview' 
                    ? 'bg-green-100 text-green-700 border border-green-300' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                面试邀请
              </button>
              <button
                onClick={() => handleTemplateChange('followup')}
                className={`px-3 py-2 rounded-lg text-sm font-medium ${
                  emailType === 'followup' 
                    ? 'bg-blue-100 text-blue-700 border border-blue-300' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                后续跟进
              </button>
              <button
                onClick={() => handleTemplateChange('rejection')}
                className={`px-3 py-2 rounded-lg text-sm font-medium ${
                  emailType === 'rejection' 
                    ? 'bg-red-100 text-red-700 border border-red-300' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                拒绝信
              </button>
              <button
                onClick={() => handleTemplateChange('custom')}
                className={`px-3 py-2 rounded-lg text-sm font-medium ${
                  emailType === 'custom' 
                    ? 'bg-purple-100 text-purple-700 border border-purple-300' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                自定义
              </button>
            </div>
          </div>

          {/* 邮件主题 */}
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

          {/* 邮件内容 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">邮件内容</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={8}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="输入邮件内容"
            />
          </div>

          {/* 邮件预览 */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="font-medium text-gray-900 mb-2">邮件预览</h4>
            <div className="text-sm text-gray-600 space-y-1">
              <div><strong>收件人:</strong> {candidate.name} &lt;{candidate.email}&gt;</div>
              <div><strong>主题:</strong> {subject || '(未填写主题)'}</div>
              <div><strong>内容:</strong> {content ? content.substring(0, 100) + '...' : '(未填写内容)'}</div>
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
            disabled={!subject || !content}
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
