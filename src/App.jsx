import React, { useState } from 'react';
import RoutesTab from './components/RoutesTab';
import NavigationView from './components/NavigationView';
import SafetyTab from './components/SafetyTab';
import ContactsTab from './components/ContactsTab';
import FeedTab from './components/FeedTab';
import ReportTab from './components/ReportTab';
import BottomNav from './components/BottomNav';
import StatusBar from './components/StatusBar';
import { routes, contacts as initialContacts, communityPosts, safetyData } from './data/mockData';

function App() {
  const [activeTab, setActiveTab] = useState('routes');
  const [selectedRoute, setSelectedRoute] = useState(null);
  const [isNavigating, setIsNavigating] = useState(false);
  const [isSharing, setIsSharing] = useState(false);
  const [showReport, setShowReport] = useState(false);
  const [contacts, setContacts] = useState(initialContacts);
  const [autoShare, setAutoShare] = useState(true);
  const [nightMode, setNightMode] = useState(true);

  const handleStartNavigation = (route) => {
    setSelectedRoute(route);
    setIsNavigating(true);
    if (autoShare) {
      setIsSharing(true);
    }
  };

  const handleStopNavigation = () => {
    setIsNavigating(false);
    setSelectedRoute(null);
    setIsSharing(false);
  };

  return (
    <div className="w-full h-screen bg-gray-950 text-white flex items-center justify-center p-4">
      <div className="w-full max-w-md h-[800px] bg-black rounded-[3rem] shadow-2xl overflow-hidden border border-gray-800 flex flex-col">
        <StatusBar />

        <div className="flex-1 overflow-y-auto bg-gray-950">
          {/* Header */}
          <div className="p-6 pb-4">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-2xl font-bold">
                <span className="text-white">Safe</span>
                <span className="text-green-400">way</span>
              </h1>
            </div>

            {activeTab === 'routes' && !isNavigating && (
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 p-3 bg-gray-900 rounded-lg">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-sm text-gray-300">Current Location</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-gray-900 rounded-lg">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <span className="text-sm text-gray-300">Lipton Hall</span>
                </div>
              </div>
            )}
          </div>

          {/* Tab Content */}
          {activeTab === 'routes' && !isNavigating && (
            <RoutesTab routes={routes} onStartNavigation={handleStartNavigation} />
          )}

          {activeTab === 'routes' && isNavigating && selectedRoute && (
            <NavigationView
              route={selectedRoute}
              isSharing={isSharing}
              contacts={contacts}
              onStop={handleStopNavigation}
              onToggleShare={() => setIsSharing(!isSharing)}
              onReport={() => setShowReport(true)}
            />
          )}

          {activeTab === 'safety' && (
            <SafetyTab safetyData={safetyData} />
          )}

          {activeTab === 'contacts' && (
            <ContactsTab
              contacts={contacts}
              autoShare={autoShare}
              nightMode={nightMode}
              onToggleAutoShare={() => setAutoShare(!autoShare)}
              onToggleNightMode={() => setNightMode(!nightMode)}
            />
          )}

          {activeTab === 'feed' && (
            <FeedTab posts={communityPosts} />
          )}

          {(activeTab === 'report' || showReport) && (
            <ReportTab
              onClose={() => {
                setShowReport(false);
                setActiveTab('safety');
              }}
            />
          )}
        </div>

        <BottomNav
          activeTab={activeTab}
          onTabChange={(tab) => {
            setActiveTab(tab);
            setShowReport(tab === 'report');
          }}
        />
      </div>
    </div>
  );
}

export default App;