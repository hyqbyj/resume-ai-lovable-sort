
import { useState, useMemo } from 'react';
import { mockCandidates } from '../data/mockCandidates';

export const useCandidateFilters = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [scoreRange, setScoreRange] = useState<[number, number]>([0, 100]);

  const filteredCandidates = useMemo(() => {
    return mockCandidates.filter(candidate => {
      const matchesSearch = candidate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           candidate.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesStatus = selectedStatus === 'all' || candidate.status === selectedStatus;
      const matchesScore = candidate.score >= scoreRange[0] && candidate.score <= scoreRange[1];
      
      return matchesSearch && matchesStatus && matchesScore;
    });
  }, [searchTerm, selectedStatus, scoreRange]);

  return {
    searchTerm,
    setSearchTerm,
    selectedStatus,
    setSelectedStatus,
    scoreRange,
    setScoreRange,
    filteredCandidates
  };
};
