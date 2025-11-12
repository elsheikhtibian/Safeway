import React from 'react';
import { Navigation, Shield, Users, FileText, AlertCircle } from 'lucide-react';

const BottomNav = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'routes', label: 'Routes', icon: Navigation },
    { id: 'safety', label: 'Safety', icon: Shield },
    { id: 'contacts', label: 'Contacts', icon: Users },
    { id: 'feed', label: 'Feed', icon: FileText },
    { id: 'report', label: 'Report', icon: AlertCircle }
  ];

  return (
    <div className="bg-black border-t border-gray-800 px-8 py-4 flex justify-around items-center">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`flex flex-col items-center gap-1 transition-colors ${
              activeTab === tab.id ? 'text-green-400' : 'text-gray-500'
            }`}
          >
            <Icon className="w-6 h-6" />
            <span className="text-xs font-medium">{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default BottomNav;