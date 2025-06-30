
export const getTimelineData = (status: string, appliedAt: string, candidateScore: number) => {
  const baseDate = new Date(appliedAt);
  const formatDate = (date: Date) => {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
  };

  const addDays = (date: Date, days: number) => {
    const result = new Date(date);
    result.setDate(date.getDate() + days);
    return result;
  };

  const commonSteps = [
    { 
      date: formatDate(baseDate), 
      action: '简历投递', 
      status: 'completed', 
      desc: '候选人通过官网投递简历' 
    },
    { 
      date: formatDate(baseDate), 
      action: 'AI初筛', 
      status: 'completed', 
      desc: `系统评分${candidateScore}分，${candidateScore >= 60 ? '自动通过初筛' : '未通过AI初筛'}` 
    }
  ];

  switch (status) {
    case 'pending':
      return [
        ...commonSteps,
        { 
          date: formatDate(addDays(baseDate, 1)), 
          action: 'HR筛选', 
          status: 'pending', 
          desc: '等待HR进行人工筛选' 
        },
        { 
          date: '', 
          action: '技术面试', 
          status: 'waiting', 
          desc: '等待HR筛选结果' 
        },
        { 
          date: '', 
          action: 'HR面试', 
          status: 'waiting', 
          desc: '等待技术面试安排' 
        },
        { 
          date: '', 
          action: '最终决策', 
          status: 'waiting', 
          desc: '等待面试结果' 
        }
      ];

    case 'qualified':
      return [
        ...commonSteps,
        { 
          date: formatDate(addDays(baseDate, 1)), 
          action: 'HR筛选', 
          status: 'completed', 
          desc: 'HR确认候选人符合基本要求，通过筛选' 
        },
        { 
          date: formatDate(addDays(baseDate, 2)), 
          action: '技术面试', 
          status: 'completed', 
          desc: '技术面试表现优秀，通过技术评估' 
        },
        { 
          date: formatDate(addDays(baseDate, 4)), 
          action: 'HR面试', 
          status: 'completed', 
          desc: '综合素质面试通过，符合团队要求' 
        },
        { 
          date: formatDate(addDays(baseDate, 5)), 
          action: '最终决策', 
          status: 'completed', 
          desc: '候选人已通过所有面试环节，确认录用' 
        }
      ];

    case 'rejected':
      if (candidateScore < 60) {
        return [
          { 
            date: formatDate(baseDate), 
            action: '简历投递', 
            status: 'completed', 
            desc: '候选人通过官网投递简历' 
          },
          { 
            date: formatDate(baseDate), 
            action: 'AI初筛', 
            status: 'rejected', 
            desc: `系统评分${candidateScore}分，未达到初筛标准，自动拒绝` 
          },
          { 
            date: '', 
            action: 'HR筛选', 
            status: 'cancelled', 
            desc: '因AI初筛未通过，跳过此环节' 
          },
          { 
            date: '', 
            action: '技术面试', 
            status: 'cancelled', 
            desc: '因前置环节未通过，跳过此环节' 
          },
          { 
            date: '', 
            action: 'HR面试', 
            status: 'cancelled', 
            desc: '因前置环节未通过，跳过此环节' 
          }
        ];
      } else {
        return [
          ...commonSteps,
          { 
            date: formatDate(addDays(baseDate, 1)), 
            action: 'HR筛选', 
            status: 'rejected', 
            desc: 'HR评估后认为不符合岗位要求，拒绝进入下一轮' 
          },
          { 
            date: '', 
            action: '技术面试', 
            status: 'cancelled', 
            desc: '因HR筛选未通过，跳过此环节' 
          },
          { 
            date: '', 
            action: 'HR面试', 
            status: 'cancelled', 
            desc: '因前置环节未通过，跳过此环节' 
          },
          { 
            date: '', 
            action: '最终决策', 
            status: 'cancelled', 
            desc: '因前置环节未通过，跳过此环节' 
          }
        ];
      }

    case 'interviewed':
      return [
        ...commonSteps,
        { 
          date: formatDate(addDays(baseDate, 1)), 
          action: 'HR筛选', 
          status: 'completed', 
          desc: 'HR确认候选人符合基本要求' 
        },
        { 
          date: formatDate(addDays(baseDate, 2)), 
          action: '技术面试', 
          status: 'completed', 
          desc: '技术面试已完成，等待面试官反馈' 
        },
        { 
          date: formatDate(addDays(baseDate, 4)), 
          action: 'HR面试', 
          status: 'pending', 
          desc: '待安排HR综合面试' 
        },
        { 
          date: '', 
          action: '最终决策', 
          status: 'waiting', 
          desc: '等待所有面试完成后做最终决策' 
        }
      ];

    default:
      return commonSteps;
  }
};
