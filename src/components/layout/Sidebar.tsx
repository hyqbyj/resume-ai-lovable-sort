
import React from 'react';
import { 
  LayoutDashboard, 
  Briefcase, 
  Users, 
  BarChart3, 
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { ActiveView } from './MainLayout';

interface SidebarProps {
  activeView: ActiveView;
  onViewChange: (view: ActiveView) => void;
  collapsed: boolean;
  onToggleCollapse: () => void;
}

const menuItems = [
  { id: 'dashboard' as ActiveView, label: '数据看板', icon: LayoutDashboard },
  { id: 'jobs' as ActiveView, label: '职位管理', icon: Briefcase },
  { id: 'candidates' as ActiveView, label: '简历管理', icon: Users },
  { id: 'analytics' as ActiveView, label: '数据分析', icon: BarChart3 },
];

export const Sidebar: React.FC<SidebarProps> = ({ 
  activeView, 
  onViewChange, 
  collapsed, 
  onToggleCollapse 
}) => {
  return (
    <div className={`fixed left-0 top-0 h-full bg-white border-r border-gray-200 shadow-sm transition-all duration-300 z-50 ${
      collapsed ? 'w-16' : 'w-64'
    }`}>
      {/* Header */}
      <div className="h-16 flex items-center justify-between px-4 border-b border-gray-200">
        {!collapsed && (
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">HR</span>
            </div>
            <span className="font-semibold text-gray-900">智能筛选系统</span>
          </div>
        )}
        <button
          onClick={onToggleCollapse}
          className="p-1.5 rounded-md hover:bg-gray-100 transition-colors"
        >
          {collapsed ? (
            <ChevronRight className="w-4 h-4 text-gray-600" />
          ) : (
            <ChevronLeft className="w-4 h-4 text-gray-600" />
          )}
        </button>
      </div>

      {/* Navigation */}
      <nav className="mt-6">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeView === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onViewChange(item.id)}
              className={`w-full flex items-center px-4 py-3 text-left transition-all duration-200 ${
                isActive
                  ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Icon className={`w-5 h-5 ${collapsed ? 'mx-auto' : 'mr-3'}`} />
              {!collapsed && (
                <span className="font-medium">{item.label}</span>
              )}
            </button>
          );
        })}
      </nav>

      {/* Stats Summary (when not collapsed) */}
      {!collapsed && (
        <div className="absolute bottom-6 left-4 right-4">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4">
            <div className="text-sm text-gray-600 mb-2">今日处理</div>
            <div className="text-2xl font-bold text-gray-900">1,247</div>
            <div className="text-xs text-green-600">↑ 12% 较昨日</div>
          </div>
        </div>
      )}
    </div>
  );
};
