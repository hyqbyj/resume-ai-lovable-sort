
import React from 'react';

interface CandidateExperienceTabProps {
  candidate: any;
}

export const CandidateExperienceTab: React.FC<CandidateExperienceTabProps> = ({ candidate }) => {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-900">工作经历</h3>
      <div className="space-y-4">
        {candidate.workExperience?.map((exp: any, index: number) => (
          <div key={index} className={`border-l-4 ${index === 0 ? 'border-blue-200' : 'border-gray-200'} pl-4`}>
            <h4 className="font-semibold text-gray-900">{exp.position}</h4>
            <p className="text-gray-600">{exp.company} • {exp.duration}</p>
            <p className="text-sm text-gray-500 mt-2">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
