
import React, { useState } from 'react';
import { X, Mail, Send, Users, FileText, Eye, CheckCircle } from 'lucide-react';

interface Candidate {
  id: string;
  name: string;
  email: string;
  position: string;
  score: number;
  status: string;
}

interface BulkEmailModalProps {
  onClose: () => void;
}

export const BulkEmailModal: React.FC<BulkEmailModalProps> = ({ onClose }) => {
  const [selectedCandidates, setSelectedCandidates] = useState<Candidate[]>([
    { id: '1', name: '张三', email: 'zhangsan@example.com', position: '前端开发工程师', score: 45, status: '待处理' },
    { id: '2', name: '李四', email: 'lisi@example.com', position: '前端开发工程师', score: 38, status: '待处理' },
    { id: '3', name: '王五', email: 'wangwu@example.com', position: '后端开发工程师', score: 42, status: '待处理' },
    { id: '4', name: '赵六', email: 'zhaoliu@example.com', position: '产品经理', score: 35, status: '待处理' },
  ]);

  const [emailTemplate, setEmailTemplate] = useState('rejection');
  const [emailSubject, setEmailSubject] = useState('关于您的求职申请');
  const [emailContent, setEmailContent] = useState(`亲爱的候选人，

感谢您对我们公司的关注和信任，以及您抽出宝贵时间参与我们的招聘流程。

经过仔细评估，我们认为您的背景和经验与当前职位的具体要求存在一定差距。虽然这次未能进入下一轮，但我们对您的专业能力和求职态度印象深刻。

我们会将您的简历保留在人才库中，如有更合适的职位空缺，我们会优先考虑与您联系。

再次感谢您的理解与支持，祝您求职顺利！

此致
敬礼

{公司名称}
人力资源部`);

  const [currentStep, setCurrentStep] = useState(1);
  const [sendingProgress, setSendingProgress] = useState(0);
  const [sentResults, setSentResults] = useState<{success: number, failed: number}>({success: 0, failed: 0});

  const templates = [
    {
      id: 'rejection',
      name: '拒绝信模板',
      subject: '关于您的求职申请',
      content: emailContent
    },
    {
      id: 'interview',
      name: '面试邀请模板',
      subject: '面试邀请 - {职位名称}',
      content: `亲爱的{候选人姓名}，

恭喜您！经过初步筛选，我们对您的背景和经验非常感兴趣，诚邀您参加我们{职位名称}职位的面试。

面试安排：
时间：{面试时间}
地点：{面试地点}
面试形式：{面试形式}

请您确认是否能够按时参加，如有时间冲突，请及时联系我们重新安排。

期待与您见面！

此致
敬礼

{公司名称}
人力资源部`
    },
    {
      id: 'offer',
      name: 'Offer发放模板',
      subject: 'Offer Letter - 欢迎加入我们！',
      content: `亲爱的{候选人姓名}，

经过综合评估，我们很高兴地通知您，您已成功通过我们的招聘流程！

职位信息：
职位：{职位名称}
部门：{部门名称}
薪资：{薪资待遇}
入职时间：{入职时间}

请您在收到此邮件后3个工作日内回复确认，我们将安排后续入职事宜。

欢迎加入我们的团队！

此致
敬礼

{公司名称}
人力资源部`
    }
  ];

  const handleTemplateChange = (templateId: string) => {
    const template = templates.find(t => t.id === templateId);
    if (template) {
      setEmailTemplate(templateId);
      setEmailSubject(template.subject);
      setEmailContent(template.content);
    }
  };

  const handleSendEmails = () => {
    setCurrentStep(2);
    setSendingProgress(0);
    
    // 模拟发送邮件过程
    const interval = setInterval(() => {
      setSendingProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setSentResults({
            success: selectedCandidates.length - 1,
            failed: 1
          });
          setCurrentStep(3);
          return 100;
        }
        return prev + 20;
      });
    }, 500);
  };

  const toggleCandidateSelection = (candidateId: string) => {
    setSelectedCandidates(prev => 
      prev.map(candidate => 
        candidate.id === candidateId 
          ? { ...candidate, status: candidate.status === '已选择' ? '待处理' : '已选择' }
          : candidate
      )
    );
  };

  const selectedCount = selectedCandidates.filter(c => c.status === '已选择').length;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <Mail className="w-6 h-6 text-orange-600" />
            <h2 className="text-xl font-semibold text-gray-900">批量发送邮件</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Indicator */}
        <div className="flex items-center justify-center p-6 border-b border-gray-200">
          <div className="flex items-center space-x-4">
            <div className={`flex items-center space-x-2 ${currentStep >= 1 ? 'text-orange-600' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                currentStep >= 1 ? 'bg-orange-600 text-white' : 'bg-gray-200 text-gray-400'
              }`}>1</div>
              <span className="font-medium">选择候选人</span>
            </div>
            <div className="w-8 h-px bg-gray-300"></div>
            <div className={`flex items-center space-x-2 ${currentStep >= 2 ? 'text-orange-600' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                currentStep >= 2 ? 'bg-orange-600 text-white' : 'bg-gray-200 text-gray-400'
              }`}>2</div>
              <span className="font-medium">发送邮件</span>
            </div>
            <div className="w-8 h-px bg-gray-300"></div>
            <div className={`flex items-center space-x-2 ${currentStep >= 3 ? 'text-orange-600' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                currentStep >= 3 ? 'bg-orange-600 text-white' : 'bg-gray-200 text-gray-400'
              }`}>3</div>
              <span className="font-medium">发送结果</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {currentStep === 1 && (
            <div className="space-y-6">
              {/* 候选人列表 */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-medium text-gray-900">
                    候选人列表 (已选择 {selectedCount} 人)
                  </h3>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Users className="w-4 h-4" />
                    <span>低分候选人 (< 60分)</span>
                  </div>
                </div>
                
                <div className="space-y-2 max-h-48 overflow-y-auto">
                  {selectedCandidates.map((candidate) => (
                    <div
                      key={candidate.id}
                      className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer"
                      onClick={() => toggleCandidateSelection(candidate.id)}
                    >
                      <input
                        type="checkbox"
                        checked={candidate.status === '已选择'}
                        onChange={() => {}}
                        className="rounded border-gray-300 text-orange-600 focus:ring-orange-500"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium text-gray-900">{candidate.name}</h4>
                            <p className="text-sm text-gray-600">{candidate.position}</p>
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-medium text-red-600">{candidate.score}分</div>
                            <div className="text-xs text-gray-500">{candidate.email}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 邮件模板选择 */}
              <div>
                <h3 className="font-medium text-gray-900 mb-3">邮件模板</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
                  {templates.map((template) => (
                    <button
                      key={template.id}
                      onClick={() => handleTemplateChange(template.id)}
                      className={`p-3 border rounded-lg text-left transition-colors ${
                        emailTemplate === template.id
                          ? 'border-orange-500 bg-orange-50 text-orange-900'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <FileText className="w-4 h-4 mb-2" />
                      <div className="font-medium text-sm">{template.name}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* 邮件内容编辑 */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    邮件主题
                  </label>
                  <input
                    type="text"
                    value={emailSubject}
                    onChange={(e) => setEmailSubject(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    邮件内容
                  </label>
                  <textarea
                    value={emailContent}
                    onChange={(e) => setEmailContent(e.target.value)}
                    rows={12}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>
              </div>

              {/* 发送按钮 */}
              <div className="flex items-center justify-end space-x-3">
                <button
                  onClick={onClose}
                  className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  取消
                </button>
                <button
                  onClick={handleSendEmails}
                  disabled={selectedCount === 0}
                  className="flex items-center space-x-2 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                >
                  <Send className="w-4 h-4" />
                  <span>发送邮件 ({selectedCount})</span>
                </button>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-6 text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                <Send className="w-8 h-8 text-orange-600" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">正在发送邮件...</h3>
                <p className="text-gray-600">正在向 {selectedCount} 位候选人发送邮件</p>
              </div>
              
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div 
                  className="bg-orange-600 h-3 rounded-full transition-all duration-300"
                  style={{ width: `${sendingProgress}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-500">{sendingProgress}% 完成</p>
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-6 text-center">
              <CheckCircle className="w-16 h-16 text-green-600 mx-auto" />
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">邮件发送完成</h3>
                <p className="text-gray-600">邮件发送任务已完成</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-green-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-green-600">{sentResults.success}</div>
                  <div className="text-sm text-green-800">发送成功</div>
                </div>
                <div className="bg-red-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-red-600">{sentResults.failed}</div>
                  <div className="text-sm text-red-800">发送失败</div>
                </div>
              </div>

              <button
                onClick={onClose}
                className="w-full px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
              >
                完成
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
