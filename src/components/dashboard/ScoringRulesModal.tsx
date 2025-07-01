
import React, { useState } from 'react';
import { X, Plus, Trash2, Settings, Save, Building2 } from 'lucide-react';

interface ScoringRule {
  id: string;
  category: string;
  criteria: string;
  weight: number;
  scoreRange: [number, number];
  description: string;
  required: boolean;
}

interface PositionScoringRules {
  [positionId: string]: {
    positionName: string;
    rules: ScoringRule[];
    passingScore: number;
    autoReject: boolean;
  };
}

interface ScoringRulesModalProps {
  onClose: () => void;
}

export const ScoringRulesModal: React.FC<ScoringRulesModalProps> = ({ onClose }) => {
  // 模拟的职位数据
  const positions = [
    { id: 'frontend', name: '前端开发工程师' },
    { id: 'backend', name: '后端开发工程师' },
    { id: 'fullstack', name: '全栈开发工程师' },
    { id: 'ui-ux', name: 'UI/UX设计师' },
    { id: 'product', name: '产品经理' },
    { id: 'data', name: '数据分析师' }
  ];

  const [selectedPosition, setSelectedPosition] = useState(positions[0].id);
  const [positionRules, setPositionRules] = useState<PositionScoringRules>({
    frontend: {
      positionName: '前端开发工程师',
      rules: [
        {
          id: '1',
          category: '学历背景',
          criteria: '本科及以上学历',
          weight: 15,
          scoreRange: [0, 15],
          description: '计算机相关专业优先',
          required: true
        },
        {
          id: '2',
          category: '前端技能',
          criteria: 'React/Vue/Angular框架经验',
          weight: 35,
          scoreRange: [0, 35],
          description: '熟练掌握至少一种主流前端框架',
          required: true
        },
        {
          id: '3',
          category: 'JavaScript能力',
          criteria: 'JavaScript/TypeScript基础',
          weight: 25,
          scoreRange: [0, 25],
          description: 'ES6+语法，异步编程等',
          required: true
        },
        {
          id: '4',
          category: '项目经历',
          criteria: '前端项目实战经验',
          weight: 15,
          scoreRange: [0, 15],
          description: '完整的前端项目开发经历',
          required: false
        },
        {
          id: '5',
          category: '综合素质',
          criteria: '沟通协作能力',
          weight: 10,
          scoreRange: [0, 10],
          description: '团队合作和问题解决能力',
          required: false
        }
      ],
      passingScore: 70,
      autoReject: true
    },
    backend: {
      positionName: '后端开发工程师',
      rules: [
        {
          id: '1',
          category: '学历背景',
          criteria: '本科及以上学历',
          weight: 15,
          scoreRange: [0, 15],
          description: '计算机相关专业优先',
          required: true
        },
        {
          id: '2',
          category: '后端技能',
          criteria: 'Java/Python/Go等后端语言',
          weight: 30,
          scoreRange: [0, 30],
          description: '熟练掌握至少一种后端开发语言',
          required: true
        },
        {
          id: '3',
          category: '数据库技能',
          criteria: 'MySQL/PostgreSQL/MongoDB',
          weight: 20,
          scoreRange: [0, 20],
          description: '数据库设计和优化能力',
          required: true
        },
        {
          id: '4',
          category: '系统架构',
          criteria: '微服务架构经验',
          weight: 20,
          scoreRange: [0, 20],
          description: 'Spring Boot/分布式系统经验',
          required: false
        },
        {
          id: '5',
          category: '综合素质',
          criteria: '学习和沟通能力',
          weight: 15,
          scoreRange: [0, 15],
          description: '技术学习能力和团队协作',
          required: false
        }
      ],
      passingScore: 65,
      autoReject: true
    },
    'ui-ux': {
      positionName: 'UI/UX设计师',
      rules: [
        {
          id: '1',
          category: '学历背景',
          criteria: '设计相关专业背景',
          weight: 20,
          scoreRange: [0, 20],
          description: '视觉传达、交互设计等专业优先',
          required: true
        },
        {
          id: '2',
          category: '设计工具',
          criteria: 'Figma/Sketch/Adobe系列',
          weight: 30,
          scoreRange: [0, 30],
          description: '熟练使用主流设计工具',
          required: true
        },
        {
          id: '3',
          category: '作品集质量',
          criteria: '设计作品集展示',
          weight: 35,
          scoreRange: [0, 35],
          description: '原创设计作品的质量和完整性',
          required: true
        },
        {
          id: '4',
          category: '用户体验理解',
          criteria: 'UX设计思维',
          weight: 10,
          scoreRange: [0, 10],
          description: '用户研究和体验设计能力',
          required: false
        },
        {
          id: '5',
          category: '沟通协作',
          criteria: '跨部门协作能力',
          weight: 5,
          scoreRange: [0, 5],
          description: '与开发和产品团队的协作',
          required: false
        }
      ],
      passingScore: 75,
      autoReject: false
    }
  });

  const currentRules = positionRules[selectedPosition] || {
    positionName: positions.find(p => p.id === selectedPosition)?.name || '',
    rules: [],
    passingScore: 60,
    autoReject: true
  };

  const addRule = () => {
    const newRule: ScoringRule = {
      id: Date.now().toString(),
      category: '',
      criteria: '',
      weight: 0,
      scoreRange: [0, 0],
      description: '',
      required: false
    };
    
    setPositionRules(prev => ({
      ...prev,
      [selectedPosition]: {
        ...prev[selectedPosition],
        rules: [...(prev[selectedPosition]?.rules || []), newRule]
      }
    }));
  };

  const updateRule = (id: string, field: keyof ScoringRule, value: any) => {
    setPositionRules(prev => ({
      ...prev,
      [selectedPosition]: {
        ...prev[selectedPosition],
        rules: prev[selectedPosition]?.rules.map(rule => 
          rule.id === id ? { ...rule, [field]: value } : rule
        ) || []
      }
    }));
  };

  const deleteRule = (id: string) => {
    setPositionRules(prev => ({
      ...prev,
      [selectedPosition]: {
        ...prev[selectedPosition],
        rules: prev[selectedPosition]?.rules.filter(rule => rule.id !== id) || []
      }
    }));
  };

  const updatePositionSetting = (field: 'passingScore' | 'autoReject', value: any) => {
    setPositionRules(prev => ({
      ...prev,
      [selectedPosition]: {
        ...prev[selectedPosition],
        [field]: value
      }
    }));
  };

  const totalWeight = currentRules.rules.reduce((sum, rule) => sum + rule.weight, 0);
  const requiredRules = currentRules.rules.filter(rule => rule.required);

  const handleSave = () => {
    console.log('保存职位评分规则:', positionRules);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-6xl w-full max-h-[90vh] overflow-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <Settings className="w-6 h-6 text-purple-600" />
            <h2 className="text-xl font-semibold text-gray-900">职位评分规则设置</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* 职位选择 */}
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center space-x-3 mb-4">
              <Building2 className="w-5 h-5 text-gray-600" />
              <h3 className="font-medium text-gray-900">选择职位</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {positions.map((position) => (
                <button
                  key={position.id}
                  onClick={() => setSelectedPosition(position.id)}
                  className={`p-3 rounded-lg border-2 transition-colors text-left ${
                    selectedPosition === position.id
                      ? 'border-purple-500 bg-purple-50 text-purple-700'
                      : 'border-gray-200 bg-white hover:border-gray-300'
                  }`}
                >
                  <div className="font-medium text-sm">{position.name}</div>
                  <div className="text-xs text-gray-500 mt-1">
                    {positionRules[position.id]?.rules.length || 0} 条规则
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* 当前职位设置 */}
          <div className="bg-blue-50 rounded-lg p-4">
            <h3 className="font-medium text-blue-900 mb-3">
              {currentRules.positionName} - 评分设置
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-blue-800 mb-2">
                  合格分数线
                </label>
                <input
                  type="number"
                  value={currentRules.passingScore}
                  onChange={(e) => updatePositionSetting('passingScore', Number(e.target.value))}
                  min="0"
                  max="100"
                  className="w-full px-3 py-2 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="flex items-center">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={currentRules.autoReject}
                    onChange={(e) => updatePositionSetting('autoReject', e.target.checked)}
                    className="rounded border-blue-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm font-medium text-blue-800">自动拒绝低分简历</span>
                </label>
              </div>
            </div>
          </div>

          {/* 评分规则列表 */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-medium text-gray-900">
                  评分规则 (总权重: {totalWeight}%)
                </h3>
                <p className="text-sm text-gray-600">
                  必选规则: {requiredRules.length} 条 | 可选规则: {currentRules.rules.length - requiredRules.length} 条
                </p>
              </div>
              <button
                onClick={addRule}
                className="flex items-center space-x-2 px-3 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                <Plus className="w-4 h-4" />
                <span>添加规则</span>
              </button>
            </div>

            {totalWeight !== 100 && (
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4">
                <p className="text-sm text-yellow-800">
                  ⚠️ 权重总和应为100%，当前为{totalWeight}%
                </p>
              </div>
            )}

            <div className="space-y-4">
              {currentRules.rules.map((rule) => (
                <div key={rule.id} className={`border-2 rounded-lg p-4 ${
                  rule.required ? 'border-red-200 bg-red-50' : 'border-gray-200 bg-white'
                }`}>
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        评分类别
                      </label>
                      <input
                        type="text"
                        value={rule.category}
                        onChange={(e) => updateRule(rule.id, 'category', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                        placeholder="例如：技术能力"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        评分标准
                      </label>
                      <input
                        type="text"
                        value={rule.criteria}
                        onChange={(e) => updateRule(rule.id, 'criteria', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                        placeholder="具体评分标准"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        权重 (%)
                      </label>
                      <input
                        type="number"
                        value={rule.weight}
                        onChange={(e) => updateRule(rule.id, 'weight', Number(e.target.value))}
                        min="0"
                        max="100"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        规则类型
                      </label>
                      <select
                        value={rule.required ? 'required' : 'optional'}
                        onChange={(e) => updateRule(rule.id, 'required', e.target.value === 'required')}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                      >
                        <option value="required">必选项</option>
                        <option value="optional">可选项</option>
                      </select>
                    </div>
                    <div className="flex items-end">
                      <button
                        onClick={() => deleteRule(rule.id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <div className="mt-3">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      规则描述
                      {rule.required && <span className="text-red-500 ml-1">*必选</span>}
                    </label>
                    <textarea
                      value={rule.description}
                      onChange={(e) => updateRule(rule.id, 'description', e.target.value)}
                      rows={2}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                      placeholder="详细说明该规则的评分逻辑..."
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 预览效果 */}
          <div className="bg-blue-50 rounded-lg p-4">
            <h3 className="font-medium text-blue-900 mb-3">当前职位评分规则预览</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-medium text-blue-800 mb-2">规则统计</h4>
                <ul className="space-y-1 text-blue-700">
                  <li>• 职位: {currentRules.positionName}</li>
                  <li>• 评分规则: {currentRules.rules.length}条</li>
                  <li>• 必选规则: {requiredRules.length}条</li>
                  <li>• 总权重: {totalWeight}%</li>
                  <li>• 合格分数线: {currentRules.passingScore}分</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-blue-800 mb-2">必选规则</h4>
                <ul className="space-y-1 text-blue-700">
                  {requiredRules.length > 0 ? (
                    requiredRules.map((rule, index) => (
                      <li key={rule.id}>• {rule.category} ({rule.weight}%)</li>
                    ))
                  ) : (
                    <li>• 暂无必选规则</li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end space-x-3 p-6 border-t border-gray-200">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            取消
          </button>
          <button
            onClick={handleSave}
            disabled={totalWeight !== 100}
            className="flex items-center space-x-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
          >
            <Save className="w-4 h-4" />
            <span>保存规则</span>
          </button>
        </div>
      </div>
    </div>
  );
};
