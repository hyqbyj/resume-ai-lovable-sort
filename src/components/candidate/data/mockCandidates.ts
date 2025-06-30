
export const mockCandidates = [
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
    appliedAt: '2024-01-15',
    highlights: ['技能匹配度高', '知名院校背景', '相关项目经验'],
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
    position: '前端开发工程师',
    score: 72,
    education: '清华大学 • 软件工程',
    experience: '2年',
    skills: ['Vue.js', 'JavaScript', 'CSS3', 'Webpack'],
    status: 'qualified',
    phone: '139****5678',
    email: 'lisi***@email.com',
    resumeUrl: '/resumes/lisi.pdf',
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
        position: '前端开发工程师',
        duration: '2022.03 - 至今',
        description: '负责淘宝店铺的前端开发，使用Vue.js和Element UI构建高性能的Web应用，参与架构设计和技术选型，指导初级开发者。'
      },
      {
        company: '腾讯',
        position: '前端开发工程师',
        duration: '2020.07 - 2022.02',
        description: '参与腾讯视频后台系统的开发，使用React和Ant Design构建管理系统，优化页面性能，提升用户体验。'
      }
    ],
    evaluationDetails: {
      skillMatch: 85,
      experienceMatch: 75,
      overallScore: 72,
      aiSuggestions: [
        '技术栈与岗位需求高度匹配，Vue.js和Element UI经验丰富',
        '有大厂工作背景，项目复杂度和技术深度符合要求',
        '建议重点考察系统设计和团队协作能力',
        '薪资期望可能较高，需要提前沟通'
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
    position: '前端开发工程师',
    score: 45,
    education: '中南大学 • 信息技术',
    experience: '1年',
    skills: ['HTML', 'CSS', 'JavaScript'],
    status: 'rejected',
    phone: '137****9012',
    email: 'wangwu***@email.com',
    resumeUrl: '/resumes/wangwu.pdf',
    appliedAt: '2024-01-13',
    highlights: ['基础扎实', '但经验不足'],
    basicInfo: {
      gender: '男',
      age: 24,
      location: '长沙',
      maritalStatus: '未婚',
    },
    workExperience: [
      {
        company: '百度',
        position: '前端开发工程师',
        duration: '2023.03 - 至今',
        description: '负责百度地图的前端开发，使用HTML、CSS和JavaScript构建高性能的Web应用，参与架构设计和技术选型，指导初级开发者。'
      },
    ],
    evaluationDetails: {
      skillMatch: 55,
      experienceMatch: 45,
      overallScore: 45,
      aiSuggestions: [
        '技术栈与岗位需求不匹配，HTML、CSS和JavaScript经验不足',
        '没有大厂工作背景，项目复杂度和技术深度不符合要求',
        '建议重点考察系统设计和团队协作能力',
        '薪资期望可能较低，需要提前沟通'
      ]
    },
    timeline: [
      { action: '提交简历', date: '2024-01-13', status: 'completed' },
      { action: '初步筛选', date: '2024-01-14', status: 'rejected' },
      { action: '已拒绝', status: 'rejected' }
    ]
  },
  {
    id: 4,
    name: '赵六',
    position: '后端开发工程师',
    score: 92,
    education: '上海交通大学 • 计算机科学',
    experience: '5年',
    skills: ['Java', 'Spring Boot', 'MySQL', 'Redis', 'Kafka'],
    status: 'qualified',
    phone: '135****3456',
    email: 'zhaoliu***@email.com',
    resumeUrl: '/resumes/zhaoliu.pdf',
    appliedAt: '2024-01-16',
    highlights: ['架构经验丰富', '大厂背景', '技术深度优秀'],
    basicInfo: {
      gender: '男',
      age: 30,
      location: '上海',
      maritalStatus: '已婚',
    },
    workExperience: [
      {
        company: '华为',
        position: '后端开发工程师',
        duration: '2022.03 - 至今',
        description: '负责华为云的后端开发，使用Java、Spring Boot和MySQL构建高性能的Web应用，参与架构设计和技术选型，指导初级开发者。'
      },
      {
        company: '中兴',
        position: '后端开发工程师',
        duration: '2020.07 - 2022.02',
        description: '参与中兴通讯的后端开发，使用Java、Spring Boot和MySQL构建高性能的Web应用，优化页面性能，提升用户体验。'
      }
    ],
    evaluationDetails: {
      skillMatch: 95,
      experienceMatch: 95,
      overallScore: 92,
      aiSuggestions: [
        '技术栈与岗位需求高度匹配，Java、Spring Boot和MySQL经验丰富',
        '有大厂工作背景，项目复杂度和技术深度符合要求',
        '建议重点考察系统设计和团队协作能力',
        '薪资期望可能较高，需要提前沟通'
      ]
    },
    timeline: [
      { action: '提交简历', date: '2024-01-16', status: 'completed' },
      { action: '初步筛选', date: '2024-01-17', status: 'completed' },
      { action: '技术面试', date: '2024-01-19', status: 'completed' },
      { action: 'HR面试', date: '2024-01-21', status: 'completed' },
      { action: '已通过', status: 'completed' }
    ]
  },
  {
    id: 5,
    name: '孙七',
    position: '产品经理',
    score: 78,
    education: '复旦大学 • 工商管理',
    experience: '4年',
    skills: ['产品设计', '用户研究', 'SQL', 'Python', 'Axure'],
    status: 'interviewed',
    phone: '136****7890',
    email: 'sunqi***@email.com',
    resumeUrl: '/resumes/sunqi.pdf',
    appliedAt: '2024-01-17',
    highlights: ['B端产品经验', '数据分析能力强', '沟通能力优秀'],
    basicInfo: {
      gender: '女',
      age: 29,
      location: '北京',
      maritalStatus: '未婚',
    },
    workExperience: [
      {
        company: '腾讯',
        position: '产品经理',
        duration: '2022.03 - 至今',
        description: '负责腾讯视频的产品设计，使用SQL和Python进行数据分析，参与用户研究，提升用户体验。'
      },
      {
        company: '阿里巴巴',
        position: '产品经理',
        duration: '2020.07 - 2022.02',
        description: '参与淘宝店铺的产品设计，使用SQL和Python进行数据分析，参与用户研究，提升用户体验。'
      }
    ],
    evaluationDetails: {
      skillMatch: 85,
      experienceMatch: 75,
      overallScore: 78,
      aiSuggestions: [
        '技术栈与岗位需求高度匹配，产品设计、用户研究和SQL经验丰富',
        '有大厂工作背景，项目复杂度和技术深度符合要求',
        '建议重点考察系统设计和团队协作能力',
        '薪资期望可能较高，需要提前沟通'
      ]
    },
    timeline: [
      { action: '提交简历', date: '2024-01-17', status: 'completed' },
      { action: '初步筛选', date: '2024-01-18', status: 'completed' },
      { action: '技术面试', date: '2024-01-20', status: 'completed' },
      { action: 'HR面试', date: '2024-01-22', status: 'completed' },
      { action: '部门经理面试', date: '2024-01-24', status: 'completed' },
      { action: '已面试', status: 'interviewed' }
    ]
  },
  {
    id: 6,
    name: '周八',
    position: 'UI设计师',
    score: 65,
    education: '中央美术学院 • 视觉传达',
    experience: '2年',
    skills: ['Figma', 'Sketch', 'Adobe Creative Suite', 'Principle'],
    status: 'pending',
    phone: '138****2468',
    email: 'zhouba***@email.com',
    resumeUrl: '/resumes/zhouba.pdf',
    appliedAt: '2024-01-18',
    highlights: ['设计功底扎实', '作品集丰富', '创意思维活跃'],
    basicInfo: {
      gender: '女',
      age: 25,
      location: '北京',
      maritalStatus: '未婚',
    },
    workExperience: [
      {
        company: '百度',
        position: 'UI设计师',
        duration: '2023.03 - 至今',
        description: '负责百度地图的UI设计，使用Figma、Sketch和Adobe Creative Suite构建高性能的Web应用，参与架构设计和技术选型，指导初级开发者。'
      },
    ],
    evaluationDetails: {
      skillMatch: 75,
      experienceMatch: 65,
      overallScore: 65,
      aiSuggestions: [
        '技术栈与岗位需求匹配，Figma、Sketch和Adobe Creative Suite经验丰富',
        '没有大厂工作背景，项目复杂度和技术深度不符合要求',
        '建议重点考察系统设计和团队协作能力',
        '薪资期望可能较低，需要提前沟通'
      ]
    },
    timeline: [
      { action: '提交简历', date: '2024-01-18', status: 'completed' },
      { action: '初步筛选', date: '2024-01-19', status: 'completed' },
      { action: '技术面试', date: '2024-01-21', status: 'pending' },
      { action: 'HR面试', status: 'pending' }
    ]
  },
  {
    id: 7,
    name: '吴九',
    position: '数据分析师',
    score: 85,
    education: '北京理工大学 • 统计学',
    experience: '3年',
    skills: ['Python', 'R', 'SQL', 'Tableau', 'Power BI'],
    status: 'qualified',
    phone: '139****1357',
    email: 'wujiu***@email.com',
    resumeUrl: '/resumes/wujiu.pdf',
    appliedAt: '2024-01-19',
    highlights: ['数据建模能力强', '业务理解深入', '可视化技能优秀'],
    basicInfo: {
      gender: '男',
      age: 28,
      location: '北京',
      maritalStatus: '未婚',
    },
    workExperience: [
      {
        company: '阿里巴巴',
        position: '数据分析师',
        duration: '2022.03 - 至今',
        description: '负责淘宝店铺的数据分析，使用Python、R和SQL进行数据分析，参与用户研究，提升用户体验。'
      },
      {
        company: '腾讯',
        position: '数据分析师',
        duration: '2020.07 - 2022.02',
        description: '参与腾讯视频的数据分析，使用Python、R和SQL进行数据分析，参与用户研究，提升用户体验。'
      }
    ],
    evaluationDetails: {
      skillMatch: 95,
      experienceMatch: 85,
      overallScore: 85,
      aiSuggestions: [
        '技术栈与岗位需求高度匹配，Python、R和SQL经验丰富',
        '有大厂工作背景，项目复杂度和技术深度符合要求',
        '建议重点考察系统设计和团队协作能力',
        '薪资期望可能较高，需要提前沟通'
      ]
    },
    timeline: [
      { action: '提交简历', date: '2024-01-19', status: 'completed' },
      { action: '初步筛选', date: '2024-01-20', status: 'completed' },
      { action: '技术面试', date: '2024-01-22', status: 'completed' },
      { action: 'HR面试', date: '2024-01-24', status: 'completed' },
      { action: '已通过', status: 'completed' }
    ]
  },
  {
    id: 8,
    name: '郑十',
    position: '测试工程师',
    score: 58,
    education: '华南理工大学 • 软件工程',
    experience: '2年',
    skills: ['Selenium', 'JMeter', 'Postman', 'MySQL'],
    status: 'pending',
    phone: '137****9876',
    email: 'zhengshi***@email.com',
    resumeUrl: '/resumes/zhengshi.pdf',
    appliedAt: '2024-01-20',
    highlights: ['自动化测试经验', '细致认真', '学习意愿强'],
    basicInfo: {
      gender: '男',
      age: 26,
      location: '广州',
      maritalStatus: '未婚',
    },
    workExperience: [
      {
        company: '网易',
        position: '测试工程师',
        duration: '2023.03 - 至今',
        description: '负责网易游戏测试，使用Selenium、JMeter和Postman构建高性能的Web应用，参与架构设计和技术选型，指导初级开发者。'
      },
    ],
    evaluationDetails: {
      skillMatch: 65,
      experienceMatch: 55,
      overallScore: 58,
      aiSuggestions: [
        '技术栈与岗位需求匹配，Selenium、JMeter和Postman经验丰富',
        '没有大厂工作背景，项目复杂度和技术深度不符合要求',
        '建议重点考察系统设计和团队协作能力',
        '薪资期望可能较低，需要提前沟通'
      ]
    },
    timeline: [
      { action: '提交简历', date: '2024-01-20', status: 'completed' },
      { action: '初步筛选', date: '2024-01-21', status: 'completed' },
      { action: '技术面试', date: '2024-01-23', status: 'pending' },
      { action: 'HR面试', status: 'pending' }
    ]
  }
];
