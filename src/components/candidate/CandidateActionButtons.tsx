
import React, { useState } from 'react';
import { Phone, Mail, Download, MessageSquare } from 'lucide-react';
import { ScheduleInterviewModal } from './modals/ScheduleInterviewModal';
import { SendEmailModal } from './modals/SendEmailModal';
import { DownloadResumeModal } from './modals/DownloadResumeModal';
import { AddNoteModal } from './modals/AddNoteModal';

interface CandidateActionButtonsProps {
  candidate: any;
}

export const CandidateActionButtons: React.FC<CandidateActionButtonsProps> = ({ candidate }) => {
  const [showScheduleInterview, setShowScheduleInterview] = useState(false);
  const [showSendEmail, setShowSendEmail] = useState(false);
  const [showDownloadResume, setShowDownloadResume] = useState(false);
  const [showAddNote, setShowAddNote] = useState(false);

  return (
    <>
      <div className="flex space-x-3 p-6 border-b border-gray-200">
        <button 
          onClick={() => setShowScheduleInterview(true)}
          className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Phone className="w-4 h-4" />
          <span>安排面试</span>
        </button>
        <button 
          onClick={() => setShowSendEmail(true)}
          className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
        >
          <Mail className="w-4 h-4" />
          <span>发送邮件</span>
        </button>
        <button 
          onClick={() => setShowDownloadResume(true)}
          className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
        >
          <Download className="w-4 h-4" />
          <span>下载简历</span>
        </button>
        <button 
          onClick={() => setShowAddNote(true)}
          className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
        >
          <MessageSquare className="w-4 h-4" />
          <span>添加备注</span>
        </button>
      </div>

      {/* Modals */}
      {showScheduleInterview && (
        <ScheduleInterviewModal 
          candidate={candidate}
          onClose={() => setShowScheduleInterview(false)} 
        />
      )}
      
      {showSendEmail && (
        <SendEmailModal 
          candidate={candidate}
          onClose={() => setShowSendEmail(false)} 
        />
      )}
      
      {showDownloadResume && (
        <DownloadResumeModal 
          candidate={candidate}
          onClose={() => setShowDownloadResume(false)} 
        />
      )}
      
      {showAddNote && (
        <AddNoteModal 
          candidate={candidate}
          onClose={() => setShowAddNote(false)} 
        />
      )}
    </>
  );
};
