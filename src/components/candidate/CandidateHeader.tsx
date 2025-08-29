
import React, { useState } from 'react';
import { X, Phone, Mail, MessageSquare } from 'lucide-react';
import { ContactModal } from './ContactModal';

interface CandidateHeaderProps {
  candidate: any;
  onClose: () => void;
  getScoreColor: (score: number) => string;
  getStatusColor: (status: string) => string;
  getStatusText: (status: string) => string;
}

export const CandidateHeader: React.FC<CandidateHeaderProps> = ({
  candidate,
  onClose,
  getScoreColor,
  getStatusColor,
  getStatusText
}) => {
  const [showContactModal, setShowContactModal] = useState<'phone' | 'email' | 'sms' | null>(null);

  return (
    <>
      <div className="flex items-center justify-between p-6 border-b border-gray-200">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
            <span className="text-blue-600 font-semibold text-lg">
              {candidate.name.charAt(0)}
            </span>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900">{candidate.name}</h2>
            <p className="text-gray-600">{candidate.position}</p>
          </div>
          <div className={`px-3 py-1 rounded-full text-sm font-medium ${getScoreColor(candidate.score)}`}>
            {candidate.score} 分
          </div>
          <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(candidate.status)}`}>
            {getStatusText(candidate.status)}
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setShowContactModal('phone')}
            className="p-2 text-gray-400 hover:text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
            title="拨打电话"
          >
            <Phone className="w-4 h-4" />
          </button>
          <button
            onClick={() => setShowContactModal('email')}
            className="p-2 text-gray-400 hover:text-green-600 rounded-lg hover:bg-green-50 transition-colors"
            title="发送邮件"
          >
            <Mail className="w-4 h-4" />
          </button>
          <button
            onClick={() => setShowContactModal('sms')}
            className="p-2 text-gray-400 hover:text-purple-600 rounded-lg hover:bg-purple-50 transition-colors"
            title="发送短信"
          >
            <MessageSquare className="w-4 h-4" />
          </button>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Contact Modal */}
      {showContactModal && (
        <ContactModal
          candidate={candidate}
          type={showContactModal}
          onClose={() => setShowContactModal(null)}
        />
      )}
    </>
  );
};
Title: feat: add CandidateHeader component
Description: Create new component for candidate profile header
