
import React, { useState } from 'react';
import { X, Plus, Trash2, Settings, Save } from 'lucide-react';

interface ScoringRule {
  id: string;
  category: string;
  criteria: string;
  weight: number;
  scoreRange: [number, number];
  description: string;
}

interface ScoringRulesModalProps {
  onClose: () => void;
}

export const ScoringRulesModal: React.FC<ScoringRulesModalProps> = ({ onClose }) => {
  const [rules, setRules] = useState<ScoringRule[]>([
    {
      id: '1',
      category: '学历背景',
      criteria: '本科及以上学历',
      weight: 20,
      scoreRange: [0, 20],
      description: '根据学历层次进行评分'
    },
    {
      id: '2',
      category: '工作经验',
      criteria: '相关工作经验年限',
      weight: 30,
      scoreRange: [0, 30],
      description: '根据相关工作经验年限评分'
    },
    {
      id: '3',
      category: '技能匹配',
      criteria: '专业技能匹配度',
      weight: 25,
      scoreRange: [0, 25],
      description: '技能与岗位要求匹配程度'
    },
    {
      id: '4',
      category: '项目经历',
      criteria: '相关项目经验',
      weight: 15,
      scoreRange: [0, 15],
      description: '项目经历的相关性和复杂度'
    },
    {
      id: '5',
      category: '综合素质',
      criteria: '沟通能力、学习能力等',
      weight: 10,
      scoreRange: [0, 10],
      description: '综合软技能评估'
    }
  ]);

  const [passingScore, setPassingScore] = useState(60);
  const [autoReject, setAutoReject] = useState(true);

  const addRule = () => {
    const newRule: ScoringRule = {
      id: Date.now().toString(),
      category: '',
      criteria: '',
      weight: 0,
      scoreRange: [0, 0],
      description: ''
    };
    setRules([...rules, newRule]);
  };

  const updateRule = (id: string, field: keyof ScoringRule, value: any) => {
    setRules(rules.map(rule => 
      rule.id === id ? { ...rule, [field]: value } : rule
    ));
  };

  const deleteRule = (id: string) => {
    setRules(rules.filter(rule => rule.id !== id));
  };

  const totalWeight = rules.reduce((sum, rule) => sum + rule.weight, 0);

  const handleSave = () => {
    console.log('保存评分规则:', { rules, passingScore, autoReject });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-5xl w-full max-h-[90vh] overflow-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <Settings className="w-6 h-6 text-purple-600" />
            <h2 className="text-xl font-semibold text-gray-900">评分规则设置</h2>
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
          {/* 全局设置 */}
          <div className="bg-gray-50 rounded-lg p-4 space-y-4">
            <h3 className="font-medium text-gray-900">全局设置</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  合格分数线
                </label>
                <input
                  type="number"
                  value={passingScore}
                  onChange={(e) => setPassingScore(Number(e.target.value))}
                  min="0"
                  max="100"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                />
                <p className="text-xs text-gray-500 mt-1">低于此分数的简历将被标记为不合格</p>
              </div>
              <div>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={autoReject}
                    onChange={(e) => setAutoReject(e.target.checked)}
                    className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                  />
                  <span className="text-sm font-medium text-gray-700">自动拒绝低分简历</span>
                </label>
                <p className="text-xs text-gray-500 mt-1">自动向不合格候选人发送拒信</p>
              </div>
            </div>
          </div>

          {/* 评分规则列表 */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium text-gray-900">评分规则 (总权重: {totalWeight}%)</h3>
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
              {rules.map((rule) => (
                <div key={rule.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        评分类别
                      </label>
                      <input
                        type="text"
                        value={rule.category}
                        onChange={(e) => updateRule(rule.id, 'category', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                        placeholder="例如：学历背景"
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
            <h3 className="font-medium text-blue-900 mb-3">评分规则预览</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-medium text-blue-800 mb-2">规则统计</h4>
                <ul className="space-y-1 text-blue-700">
                  <li>• 评分规则数量: {rules.length}条</li>
                  <li>• 总权重: {totalWeight}%</li>
                  <li>• 合格分数线: {passingScore}分</li>
                  <li>• 自动拒绝: {autoReject ? '开启' : '关闭'}</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-blue-800 mb-2">评分流程</h4>
                <ol className="space-y-1 text-blue-700">
                  <li>1. AI解析简历内容</li>
                  <li>2. 按规则计算各项得分</li>
                  <li>3. 加权计算总分</li>
                  <li>4. 根据分数线自动分类</li>
                </ol>
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
