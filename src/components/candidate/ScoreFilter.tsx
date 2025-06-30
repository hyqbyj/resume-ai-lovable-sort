
import React from 'react';

interface ScoreFilterProps {
  range: [number, number];
  onChange: (range: [number, number]) => void;
}

export const ScoreFilter: React.FC<ScoreFilterProps> = ({ range, onChange }) => {
  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMin = parseInt(e.target.value);
    onChange([newMin, range[1]]);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMax = parseInt(e.target.value);
    onChange([range[0], newMax]);
  };

  const presets = [
    { label: '全部', range: [0, 100] as [number, number] },
    { label: '优秀 (80+)', range: [80, 100] as [number, number] },
    { label: '良好 (60-80)', range: [60, 80] as [number, number] },
    { label: '一般 (40-60)', range: [40, 60] as [number, number] },
    { label: '不合格 (<40)', range: [0, 40] as [number, number] },
  ];

  return (
    <div className="space-y-3">
      <div className="text-sm font-medium text-gray-700">评分筛选</div>
      
      {/* Preset Buttons */}
      <div className="flex flex-wrap gap-2">
        {presets.map((preset) => (
          <button
            key={preset.label}
            onClick={() => onChange(preset.range)}
            className={`px-3 py-1.5 text-xs rounded-md transition-colors ${
              range[0] === preset.range[0] && range[1] === preset.range[1]
                ? 'bg-blue-100 text-blue-700 border border-blue-300'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {preset.label}
          </button>
        ))}
      </div>

      {/* Custom Range */}
      <div className="flex items-center space-x-3">
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-600">最低分:</span>
          <input
            type="number"
            min="0"
            max="100"
            value={range[0]}
            onChange={handleMinChange}
            className="w-16 px-2 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <span className="text-gray-400">-</span>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-600">最高分:</span>
          <input
            type="number"
            min="0"
            max="100"
            value={range[1]}
            onChange={handleMaxChange}
            className="w-16 px-2 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Visual Range Indicator */}
      <div className="relative h-2 bg-gray-200 rounded-full">
        <div
          className="absolute h-2 bg-blue-500 rounded-full"
          style={{
            left: `${range[0]}%`,
            width: `${range[1] - range[0]}%`
          }}
        />
      </div>
    </div>
  );
};
