
import React, { useState } from 'react';
import { CandidateManagementHeader } from './CandidateManagementHeader';
import { CandidateFilters } from './CandidateFilters';
import { CandidateResultsSummary } from './CandidateResultsSummary';
import { CandidateList } from './CandidateList';
import { CandidateDetailModal } from './CandidateDetailModal';
import { BulkUploadModal } from './BulkUploadModal';
import { ExportModal } from './ExportModal';
import { BulkSendEmailModal } from './BulkSendEmailModal';
import { useCandidateFilters } from './hooks/useCandidateFilters';

export const CandidateManagement = () => {
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [showBulkUpload, setShowBulkUpload] = useState(false);
  const [showExport, setShowExport] = useState(false);
  const [showBulkSendEmail, setShowBulkSendEmail] = useState(false);

  const {
    searchTerm,
    setSearchTerm,
    selectedStatus,
    setSelectedStatus,
    scoreRange,
    setScoreRange,
    filteredCandidates
  } = useCandidateFilters();

  return (
    <div className="space-y-6 animate-fade-in">
      <CandidateManagementHeader
        onShowExport={() => setShowExport(true)}
        onShowBulkSendEmail={() => setShowBulkSendEmail(true)}
        onShowBulkUpload={() => setShowBulkUpload(true)}
      />

      <CandidateFilters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedStatus={selectedStatus}
        setSelectedStatus={setSelectedStatus}
        scoreRange={scoreRange}
        setScoreRange={setScoreRange}
      />

      <CandidateResultsSummary candidateCount={filteredCandidates.length} />

      <CandidateList
        candidates={filteredCandidates}
        onViewDetail={setSelectedCandidate}
      />

      {/* Modals */}
      {selectedCandidate && (
        <CandidateDetailModal 
          candidate={selectedCandidate}
          onClose={() => setSelectedCandidate(null)}
        />
      )}
      
      {showBulkUpload && (
        <BulkUploadModal onClose={() => setShowBulkUpload(false)} />
      )}
      
      {showExport && (
        <ExportModal onClose={() => setShowExport(false)} />
      )}
      
      {showBulkSendEmail && (
        <BulkSendEmailModal onClose={() => setShowBulkSendEmail(false)} />
      )}
    </div>
  );
};
