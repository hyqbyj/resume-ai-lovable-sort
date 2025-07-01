
export const candidatesData = [
  {
    id: 1,
    name: '张三',
    position: '前端开发工程师',
    score: 87,
    education: '北京大学 • 计算机科学',
    experience: '3年',
    skills: ['React', 'TypeScript', 'Node.js', 'Python'],
    status: 'pending',
    phone: '138****1234',
    email: 'zhang***@email.com',
    resumeUrl: '/resumes/zhangsan.pdf',
    appliedDate: '2024-01-15',
    appliedAt: '2024-01-15',
    highlights: ['技能匹配度高', '知名院校背景'],
    basicInfo: {
      gender: '男',
      age: 28,
      location: '北京',
      maritalStatus: '未婚',
    },
    workExperience: [
      {
        company: '字节跳动',
        position: '高级前端开发工程师',
        duration: '2022.03 - 至今',
        description: '负责抖音创作者平台的前端开发，使用React和TypeScript构建高性能的Web应用，参与架构设计和技术选型，指导初级开发者。'
      },
      {
        company: '美团',
        position: '前端开发工程师',
        duration: '2020.07 - 2022.02',
        description: '参与美团商家后台系统的开发，使用Vue.js和Element UI构建管理系统，优化页面性能，提升用户体验。'
      }
    ],
    evaluationDetails: {
      skillMatch: 95,
      experienceMatch: 85,
      overallScore: 87,
      aiSuggestions: [
        '技术栈与岗位需求高度匹配，React和TypeScript经验丰富',
        '有大厂工作背景，项目复杂度和技术深度符合要求',
        '建议重点考察系统设计和团队协作能力',
        '薪资期望可能较高，需要提前沟通'
      ]
    },
    timeline: [
      { action: '提交简历', date: '2024-01-15', status: 'completed' },
      { action: '初步筛选', date: '2024-01-16', status: 'completed' },
      { action: '技术面试', date: '2024-01-18', status: 'pending' },
      { action: 'HR面试', status: 'pending' }
    ]
  },
  {
    id: 2,
    name: '李四',
    position: '后端开发工程师',
    score: 72,
    education: '清华大学 • 软件工程',
    experience: '2年',
    skills: ['Java', 'Spring Boot', 'MySQL', 'Redis'],
    status: 'qualified',
    phone: '139****5678',
    email: 'lisi***@email.com',
    resumeUrl: '/resumes/lisi.pdf',
    appliedDate: '2024-01-14',
    appliedAt: '2024-01-14',
    highlights: ['学习能力强', '项目经验丰富'],
    basicInfo: {
      gender: '男',
      age: 26,
      location: '上海',
      maritalStatus: '未婚',
    },
    workExperience: [
      {
        company: '阿里巴巴',
        position: 'Java开发工程师',
        duration: '2022.03 - 至今',
        description: '负责淘宝支付系统的后端开发，使用Spring Boot构建微服务架构，处理高并发交易场景，保障系统稳定性。'
      },
      {
        company: '京东',
        position: '初级Java开发工程师',
        duration: '2021.07 - 2022.02',
        description: '参与京东商城订单系统开发，使用SpringMVC和MyBatis构建RESTful API，优化数据库查询性能。'
      }
    ],
    evaluationDetails: {
      skillMatch: 85,
      experienceMatch: 75,
      overallScore: 72,
      aiSuggestions: [
        'Java技术栈扎实，Spring Boot框架经验丰富',
        '有电商和支付系统开发经验，符合业务需求',
        '建议考察分布式系统设计能力',
        '年轻有潜力，可重点培养'
      ]
    },
    timeline: [
      { action: '提交简历', date: '2024-01-14', status: 'completed' },
      { action: '初步筛选', date: '2024-01-15', status: 'completed' },
      { action: '技术面试', date: '2024-01-17', status: 'completed' },
      { action: 'HR面试', date: '2024-01-19', status: 'completed' },
      { action: '已通过', status: 'completed' }
    ]
  },
  {
    id: 3,
    name: '王五',
    position: '产品经理',
    score: 65,
    education: '上海交通大学 • 工商管理',
    experience: '4年',
    skills: ['产品设计', 'Axure', 'Figma', '数据分析'],
    status: 'pending',
    phone: '150****9876',
    email: 'wangwu***@email.com',
    resumeUrl: '/resumes/wangwu.pdf',
    appliedDate: '2024-01-13',
    appliedAt: '2024-01-13',
    highlights: ['产品思维敏锐', '数据驱动决策'],
    basicInfo: {
      gender: '男',
      age: 29,
      location: '上海',
      maritalStatus: '已婚',
    },
    workExperience: [
      {
        company: '腾讯',
        position: '高级产品经理',
        duration: '2021.06 - 至今',
        description: '负责微信支付商户端产品规划，从0到1搭建商户数据看板，月活用户突破500万，提升商户留存率25%。'
      },
      {
        company: '滴滴出行',
        position: '产品经理',
        duration: '2019.03 - 2021.05',
        description: '负责滴滴司机端产品优化，通过用户调研和数据分析，改进派单算法，提升司机接单率15%。'
      }
    ],
    evaluationDetails: {
      skillMatch: 70,
      experienceMatch: 80,
      overallScore: 65,
      aiSuggestions: [
        '产品经验丰富，有B端和C端产品经验',
        '数据分析能力强，能够用数据驱动产品决策',
        '建议考察对行业的理解和创新思维',
        '沟通能力需要进一步了解'
      ]
    },
    timeline: [
      { action: '提交简历', date: '2024-01-13', status: 'completed' },
      { action: '初步筛选', date: '2024-01-14', status: 'completed' },
      { action: '产品面试', status: 'pending' },
      { action: 'HR面试', status: 'pending' }
    ]
  },
  {
    id: 4,
    name: '赵六',
    position: 'UI设计师',
    score: 78,
    education: '中央美术学院 • 视觉传达设计',
    experience: '3年',
    skills: ['Sketch', 'Figma', 'Adobe Creative Suite', '用户体验设计'],
    status: 'interviewed',
    phone: '186****4567',
    email: 'zhaoliu***@email.com',
    resumeUrl: '/resumes/zhaoliu.pdf',
    appliedDate: '2024-01-12',
    appliedAt: '2024-01-12',
    highlights: ['设计功底扎实', '用户体验意识强'],
    basicInfo: {
      gender: '女',
      age: 27,
      location: '北京',
      maritalStatus: '未婚',
    },
    workExperience: [
      {
        company: '小米科技',
        position: '高级UI设计师',
        duration: '2022.01 - 至今',
        description: '负责MIUI系统界面设计，参与小米商城改版项目，设计的界面获得红点设计奖，用户满意度提升30%。'
      },
      {
        company: '网易',
        position: 'UI设计师',
        duration: '2020.06 - 2021.12',
        description: '负责网易云音乐移动端界面设计，优化播放页面交互流程，提升用户使用时长20%。'
      }
    ],
    evaluationDetails: {
      skillMatch: 90,
      experienceMatch: 75,
      overallScore: 78,
      aiSuggestions: [
        '设计能力优秀，有知名产品设计经验',
        '对用户体验有深入理解，设计思维清晰',
        '建议考察团队协作和项目管理能力',
        '作品集质量很高，符合公司设计标准'
      ]
    },
    timeline: [
      { action: '提交简历', date: '2024-01-12', status: 'completed' },
      { action: '初步筛选', date: '2024-01-13', status: 'completed' },
      { action: '设计面试', date: '2024-01-16', status: 'completed' },
      { action: 'HR面试', status: 'pending' }
    ]
  },
  {
    id: 5,
    name: '孙七',
    position: '数据分析师',
    score: 83,
    education: '复旦大学 • 统计学',
    experience: '5年',
    skills: ['Python', 'SQL', 'Tableau', 'Excel', '机器学习'],
    status: 'qualified',
    phone: '159****3210',
    email: 'sunqi***@email.com',
    resumeUrl: '/resumes/sunqi.pdf',
    appliedDate: '2024-01-11',
    appliedAt: '2024-01-11',
    highlights: ['数据敏感度高', '业务理解深入'],
    basicInfo: {
      gender: '女',
      age: 30,
      location: '上海',
      maritalStatus: '已婚',
    },
    workExperience: [
      {
        company: '蚂蚁金服',
        position: '高级数据分析师',
        duration: '2020.03 - 至今',
        description: '负责支付宝用户行为分析，构建用户画像模型，为产品决策提供数据支持，预测模型准确率达85%。'
      },
      {
        company: '百度',
        position: '数据分析师',
        duration: '2018.07 - 2020.02',
        description: '负责百度搜索广告效果分析，优化投放策略，帮助广告主提升ROI 40%，获得团队最佳员工奖。'
      }
    ],
    evaluationDetails: {
      skillMatch: 95,
      experienceMatch: 85,
      overallScore: 83,
      aiSuggestions: [
        '数据分析技能全面，Python和SQL能力突出',
        '有丰富的金融科技行业经验，业务理解深入',
        '机器学习实践经验丰富，能独立完成建模工作',
        '沟通表达能力强，能将复杂数据转化为业务洞察'
      ]
    },
    timeline: [
      { action: '提交简历', date: '2024-01-11', status: 'completed' },
      { action: '初步筛选', date: '2024-01-12', status: 'completed' },
      { action: '技术面试', date: '2024-01-15', status: 'completed' },
      { action: 'HR面试', date: '2024-01-17', status: 'completed' },
      { action: '已通过', status: 'completed' }
    ]
  },
  {
    id: 6,
    name: '周八',
    position: '运营专员',
    score: 58,
    education: '华中科技大学 • 市场营销',
    experience: '1年',
    skills: ['新媒体运营', '内容策划', '数据分析', 'Photoshop'],
    status: 'rejected',
    phone: '177****8901',
    email: 'zhouba***@email.com',
    resumeUrl: '/resumes/zhouba.pdf',
    appliedDate: '2024-01-10',
    appliedAt: '2024-01-10',
    highlights: ['创意思维活跃', '学习积极性高'],
    basicInfo: {
      gender: '女',
      age: 24,
      location: '武汉',
      maritalStatus: '未婚',
    },
    workExperience: [
      {
        company: '字节跳动',
        position: '运营实习生',
        duration: '2023.06 - 2023.12',
        description: '负责抖音企业号内容运营，策划并执行了10+个营销活动，平均阅读量提升50%，获得实习生优秀奖。'
      },
      {
        company: '小红书',
        position: '内容运营实习生',
        duration: '2023.01 - 2023.05',
        description: '参与小红书品牌合作项目，协助KOL内容策划，学习了完整的品牌营销流程和数据分析方法。'
      }
    ],
    evaluationDetails: {
      skillMatch: 60,
      experienceMatch: 50,
      overallScore: 58,
      aiSuggestions: [
        '新媒体运营经验有限，主要为实习经验',
        '创意思维不错，但缺乏独立项目管理经验',
        '数据分析能力需要进一步提升',
        '建议继续积累行业经验再申请'
      ]
    },
    timeline: [
      { action: '提交简历', date: '2024-01-10', status: 'completed' },
      { action: '初步筛选', date: '2024-01-11', status: 'completed' },
      { action: '运营面试', date: '2024-01-14', status: 'rejected' },
      { action: 'HR面试', status: 'cancelled' }
    ]
  },
  {
    id: 7,
    name: '吴九',
    position: '测试工程师',
    score: 75,
    education: '西安电子科技大学 • 软件工程',
    experience: '4年',
    skills: ['自动化测试', 'Selenium', 'Python', 'Postman', 'JMeter'],
    status: 'interviewed',
    phone: '138****2468',
    email: 'wujiu***@email.com',
    resumeUrl: '/resumes/wujiu.pdf',
    appliedDate: '2024-01-09',
    appliedAt: '2024-01-09',
    highlights: ['测试经验丰富', '自动化测试专家'],
    basicInfo: {
      gender: '男',
      age: 31,
      location: '西安',
      maritalStatus: '已婚',
    },
    workExperience: [
      {
        company: '华为',
        position: '高级测试工程师',
        duration: '2021.04 - 至今',
        description: '负责华为云平台自动化测试框架搭建，覆盖率达90%，测试效率提升60%，获得华为技术创新奖。'
      },
      {
        company: '中兴通讯',
        position: '测试工程师',
        duration: '2019.07 - 2021.03',
        description: '负责5G基站软件测试，设计测试用例1000+，发现关键bug 50+，保障产品质量稳定。'
      }
    ],
    evaluationDetails: {
      skillMatch: 85,
      experienceMatch: 80,
      overallScore: 75,
      aiSuggestions: [
        '自动化测试技能扎实，有丰富的框架搭建经验',
        '通信行业背景丰富，对复杂系统测试有深入理解',
        '建议考察敏捷开发和DevOps实践经验',
        '技术能力强，可承担测试团队技术负责人角色'
      ]
    },
    timeline: [
      { action: '提交简历', date: '2024-01-09', status: 'completed' },
      { action: '初步筛选', date: '2024-01-10', status: 'completed' },
      { action: '技术面试', date: '2024-01-13', status: 'completed' },
      { action: 'HR面试', status: 'pending' }
    ]
  },
  {
    id: 8,
    name: '郑十',
    position: '算法工程师',
    score: 92,
    education: '中科院计算所 • 计算机科学',
    experience: '6年',
    skills: ['机器学习', '深度学习', 'Python', 'TensorFlow', 'PyTorch'],
    status: 'qualified',
    phone: '156****1357',
    email: 'zhengshi***@email.com',
    resumeUrl: '/resumes/zhengshi.pdf',
    appliedDate: '2024-01-08',
    appliedAt: '2024-01-08',
    highlights: ['算法能力顶尖', '论文发表多篇'],
    basicInfo: {
      gender: '男',
      age: 32,
      location: '北京',
      maritalStatus: '已婚',
    },
    workExperience: [
      {
        company: '商汤科技',
        position: '资深算法工程师',
        duration: '2020.01 - 至今',
        description: '负责计算机视觉算法研发，主导人脸识别系统优化，准确率提升至99.5%，获得10+项专利，发表顶会论文5篇。'
      },
      {
        company: '百度',
        position: '算法工程师',
        duration: '2017.07 - 2019.12',
        description: '参与百度自动驾驶项目，负责目标检测算法开发，模型推理速度提升40%，为Apollo项目贡献核心代码。'
      }
    ],
    evaluationDetails: {
      skillMatch: 100,
      experienceMatch: 95,
      overallScore: 92,
      aiSuggestions: [
        '算法功底极其扎实，有顶级AI公司工作经验',
        '学术背景优秀，理论与实践结合能力强',
        '项目经验丰富，能独立承担核心算法研发',
        '是难得的算法人才，强烈推荐录用'
      ]
    },
    timeline: [
      { action: '提交简历', date: '2024-01-08', status: 'completed' },
      { action: '初步筛选', date: '2024-01-09', status: 'completed' },
      { action: '算法面试', date: '2024-01-11', status: 'completed' },
      { action: 'HR面试', date: '2024-01-13', status: 'completed' },
      { action: '已通过', status: 'completed' }
    ]
  }
];
