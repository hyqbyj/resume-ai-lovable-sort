
import React, { useState } from 'react';
import { Sidebar } from './Sidebar';
import { Dashboard } from '../dashboard/Dashboard';
import { JobManagement } from '../job/JobManagement';
import { CandidateManagement } from '../candidate/CandidateManagement';
import { AnalyticsPanel } from '../analytics/AnalyticsPanel';

export type ActiveView = 'dashboard' | 'jobs' | 'candidates' | 'analytics';

export const MainLayout = () => {
  const [activeView, setActiveView] = useState<ActiveView>('dashboard');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const renderContent = () => {
    switch (activeView) {
      case 'dashboard':
        return <Dashboard />;
      case 'jobs':
        return <JobManagement />;
      case 'candidates':
        return <CandidateManagement />;
      case 'analytics':
        return <AnalyticsPanel />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar 
        activeView={activeView}
        onViewChange={setActiveView}
        collapsed={sidebarCollapsed}
        onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
      />
      <main className={`flex-1 transition-all duration-300 ${sidebarCollapsed ? 'ml-16' : 'ml-64'}`}>
        <div className="p-6">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};
