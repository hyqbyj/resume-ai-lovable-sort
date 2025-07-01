
import React from 'react';

interface CandidateEvaluationTabProps {
  candidate: any;
}

export const CandidateEvaluationTab: React.FC<CandidateEvaluationTabProps> = ({ candidate }) => {
  // 根据候选人技能动态生成技能匹配内容
  const getSkillMatchData = () => {
    const primarySkill = candidate.skills?.[0] || '相关技术';
    const secondarySkill = candidate.skills?.[1] || '项目经验';
    
    // 根据分数计算匹配度
    const primaryMatch = Math.min(95, candidate.score + 8);
    const secondaryMatch = Math.min(90, candidate.score - 2);
    
    return {
      primary: { name: primarySkill, match: primaryMatch },
      secondary: { name: secondarySkill, match: secondaryMatch }
    };
  };

  // 根据候选人背景生成AI分析建议
  const generateAISuggestions = () => {
    const suggestions = [];
    
    // 基于技能的建议
    if (candidate.skills?.includes('React') || candidate.skills?.includes('Vue')) {
      suggestions.push(`前端技术栈${candidate.skills.includes('TypeScript') ? '和TypeScript' : ''}经验${candidate.score >= 80 ? '丰富' : '一般'}，符合岗位需求`);
    } else if (candidate.skills?.includes('Java') || candidate.skills?.includes('Python')) {
      suggestions.push(`后端开发能力${candidate.score >= 80 ? '突出' : '良好'}，${candidate.skills.join('、')}技术栈扎实`);
    } else if (candidate.skills?.includes('Figma') || candidate.skills?.includes('Sketch')) {
      suggestions.push(`设计工具使用熟练，${candidate.skills.filter(skill => ['Figma', 'Sketch', 'Adobe Creative Suite'].includes(skill)).join('、')}经验丰富`);
    } else {
      suggestions.push(`专业技能匹配度${candidate.score >= 80 ? '很高' : candidate.score >= 60 ? '较高' : '一般'}，${candidate.skills?.[0] || '相关技能'}经验${candidate.experience >= '3年' ? '丰富' : '适中'}`);
    }
    
    // 基于工作经验的建议
    if (candidate.workExperience?.[0]?.company) {
      const currentCompany = candidate.workExperience[0].company;
      const isBigTech = ['字节跳动', '阿里巴巴', '腾讯', '百度', '美团', '小米科技', '华为', '商汤科技'].includes(currentCompany);
      
      if (isBigTech) {
        suggestions.push(`有${currentCompany}等知名企业工作背景，项目复杂度和技术深度符合要求`);
      } else {
        suggestions.push(`在${currentCompany}积累了丰富的实践经验，项目经历与岗位需求匹配`);
      }
    }
    
    // 基于评分的建议
    if (candidate.score >= 85) {
      suggestions.push('综合能力突出，建议重点考察团队协作和领导能力');
      if (candidate.score >= 90) {
        suggestions.push('是难得的优秀人才，强烈推荐进入面试环节');
      } else {
        suggestions.push('建议进入面试环节，重点了解项目经验细节');
      }
    } else if (candidate.score >= 70) {
      suggestions.push('基础能力扎实，建议考察学习能力和发展潜力');
    } else {
      suggestions.push('基础技能需要进一步了解，建议谨慎考虑');
    }
    
    // 基于薪资和地区的建议
    if (candidate.basicInfo?.location === '北京' || candidate.basicInfo?.location === '上海') {
      suggestions.push('一线城市背景，薪资期望可能较高，需要提前沟通');
    }
    
    return suggestions.slice(0, 4); // 最多返回4条建议
  };

  const skillMatchData = getSkillMatchData();
  const aiSuggestions = generateAISuggestions();

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-blue-50 rounded-lg p-4">
          <h4 className="font-semibold text-blue-900 mb-3">技能匹配度</h4>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm">{skillMatchData.primary.name}</span>
              <span className="text-sm font-medium">{skillMatchData.primary.match}%</span>
            </div>
            <div className="w-full bg-blue-200 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${skillMatchData.primary.match}%` }}></div>
            </div>
          </div>
          <div className="space-y-2 mt-3">
            <div className="flex justify-between">
              <span className="text-sm">{skillMatchData.secondary.name}</span>
              <span className="text-sm font-medium">{skillMatchData.secondary.match}%</span>
            </div>
            <div className="w-full bg-blue-200 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${skillMatchData.secondary.match}%` }}></div>
            </div>
          </div>
        </div>

        <div className="bg-green-50 rounded-lg p-4">
          <h4 className="font-semibold text-green-900 mb-3">综合评估</h4>
          <div className="text-2xl font-bold text-green-600 mb-2">{candidate.score}/100</div>
          <div className="text-sm text-green-700">
            {candidate.score >= 85 
              ? `能力突出，${candidate.position || '岗位'}匹配度高，建议优先考虑面试。`
              : candidate.score >= 70
              ? `基础能力良好，${candidate.position || '岗位'}经验符合要求，建议进入面试环节。`
              : candidate.score >= 60
              ? `基本符合要求，建议进一步了解具体能力和发展潜力。`
              : '综合能力有待提升，建议谨慎考虑。'
            }
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 rounded-lg p-4">
        <h4 className="font-semibold text-yellow-900 mb-3">AI 分析建议</h4>
        <ul className="text-sm text-yellow-800 space-y-1">
          {aiSuggestions.map((suggestion, index) => (
            <li key={index}>• {suggestion}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
