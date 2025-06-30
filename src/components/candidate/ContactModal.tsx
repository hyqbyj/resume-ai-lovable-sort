
import React, { useState } from 'react';
import { X, Phone, Mail, MessageSquare } from 'lucide-react';

interface ContactModalProps {
  candidate: any;
  type: 'phone' | 'email' | 'sms';
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ candidate, type, onClose }) => {
  const [message, setMessage] = useState('');
  const [subject, setSubject] = useState('');

  const getTitle = () => {
    switch (type) {
      case 'phone': return '拨打电话';
      case 'email': return '发送邮件';
      case 'sms': return '发送短信';
      default: return '联系候选人';
    }
  };

  const getIcon = () => {
    switch (type) {
      case 'phone': return <Phone className="w-5 h-5" />;
      case 'email': return <Mail className="w-5 h-5" />;
      case 'sms': return <MessageSquare className="w-5 h-5" />;
      default: return null;
    }
  };

  const handleSend = () => {
    console.log(`发送${type}给${candidate.name}:`, { subject, message });
    onClose();
  };

  const handleCall = () => {
    console.log(`拨打电话给${candidate.name}: ${candidate.phone}`);
    onClose();
  };

  if (type === 'phone') {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-xl max-w-md w-full">
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              {getIcon()}
              <h2 className="text-xl font-semibold text-gray-900">{getTitle()}</h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-semibold text-xl">
                  {candidate.name.charAt(0)}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{candidate.name}</h3>
              <p className="text-gray-600 mb-4">{candidate.position}</p>
              <div className="text-2xl font-bold text-blue-600 mb-6">
                {candidate.phone}
              </div>
              <div className="flex space-x-3">
                <button
                  onClick={handleCall}
                  className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>拨打电话</span>
                </button>
                <button
                  onClick={onClose}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  取消
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-lg w-full">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            {getIcon()}
            <h2 className="text-xl font-semibold text-gray-900">{getTitle()}</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          <div className="mb-4">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-semibold">
                  {candidate.name.charAt(0)}
                </span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">{candidate.name}</h3>
                <p className="text-sm text-gray-600">{candidate.position}</p>
              </div>
            </div>
            <div className="text-sm text-gray-600">
              {type === 'email' ? `收件人：${candidate.email}` : `手机号：${candidate.phone}`}
            </div>
          </div>

          {type === 'email' && (
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                邮件主题
              </label>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="请输入邮件主题"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          )}

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {type === 'email' ? '邮件内容' : '短信内容'}
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={6}
              placeholder={type === 'email' ? '请输入邮件内容...' : '请输入短信内容...'}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            />
            <div className="text-xs text-gray-500 mt-1">
              {message.length}/500 字符
            </div>
          </div>

          <div className="flex space-x-3">
            <button
              onClick={handleSend}
              className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              {getIcon()}
              <span>{type === 'email' ? '发送邮件' : '发送短信'}</span>
            </button>
            <button
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              取消
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
