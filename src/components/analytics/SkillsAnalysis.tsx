
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const skillsData = [
  { skill: 'React', demand: 89, supply: 67, gap: 22 },
  { skill: 'Python', demand: 76, supply: 82, gap: -6 },
  { skill: 'Java', demand: 65, supply: 45, gap: 20 },
  { skill: 'Vue.js', demand: 54, supply: 38, gap: 16 },
  { skill: 'Node.js', demand: 48, supply: 29, gap: 19 },
  { skill: 'MySQL', demand: 43, supply: 51, gap: -8 },
  { skill: 'TypeScript', demand: 37, supply: 24, gap: 13 },
  { skill: 'Docker', demand: 29, supply: 15, gap: 14 }
];

export const SkillsAnalysis = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">技能供需分析</h3>
          <p className="text-gray-600 text-sm">技能需求与候选人匹配度对比</p>
        </div>
        <div className="flex items-center space-x-4 text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span className="text-gray-600">需求量</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-gray-600">供给量</span>
          </div>
        </div>
      </div>
      
      <div className="h-80 mb-6">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={skillsData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
            <XAxis 
              dataKey="skill" 
              tick={{ fontSize: 12, fill: '#64748b' }}
              axisLine={{ stroke: '#e2e8f0' }}
            />
            <YAxis 
              tick={{ fontSize: 12, fill: '#64748b' }}
              axisLine={{ stroke: '#e2e8f0' }}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: '#fff',
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
              formatter={(value, name) => [
                value,
                name === 'demand' ? '需求量' : '供给量'
              ]}
            />
            <Bar dataKey="demand" fill="#3b82f6" radius={[2, 2, 0, 0]} />
            <Bar dataKey="supply" fill="#22c55e" radius={[2, 2, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Skills Gap Summary */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {skillsData.slice(0, 4).map((skill) => (
          <div key={skill.skill} className="text-center p-3 bg-gray-50 rounded-lg">
            <div className="text-sm font-medium text-gray-900 mb-1">{skill.skill}</div>
            <div className={`text-lg font-bold ${
              skill.gap > 0 ? 'text-red-600' : 'text-green-600'
            }`}>
              {skill.gap > 0 ? '+' : ''}{skill.gap}
            </div>
            <div className="text-xs text-gray-500">
              {skill.gap > 0 ? '缺口' : '盈余'}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
