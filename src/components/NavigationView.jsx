import React, { useState, useEffect } from 'react';
import { Navigation, MapPin, Sun, Users, Share2, AlertCircle } from 'lucide-react';

const getScoreColor = (score) => {
  if (score >= 85) return 'text-green-400';
  if (score >= 70) return 'text-yellow-400';
  return 'text-red-400';
};

const NavigationView = ({ route, isSharing, contacts, onStop, onToggleShare, onReport }) => {
  const [progress, setProgress] = useState(25);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-full flex flex-col">
      {/* Map Area */}
      <div className="flex-1 bg-gradient-to-br from-blue-900 to-blue-950 relative overflow-hidden">
        {/* Map Grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="grid grid-cols-4 grid-rows-6 h-full">
            {[...Array(24)].map((_, i) => (
              <div key={i} className="border border-blue-400/30"></div>
            ))}
          </div>
        </div>

        {/* Street Lines */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 right-0 h-2 bg-amber-600/40 rounded"></div>
          <div className="absolute top-1/2 left-0 right-0 h-2 bg-amber-700/40 rounded"></div>
          <div className="absolute top-3/4 left-0 right-0 h-2 bg-amber-600/40 rounded"></div>
          <div className="absolute top-0 bottom-0 left-1/2 w-2 bg-amber-600/40 rounded"></div>
        </div>

        {/* Current Location */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-4 h-4 bg-green-400 rounded-full border-4 border-white shadow-lg"></div>
        </div>

        {/* Location Info Card */}
        <div className="absolute top-4 left-4 right-4 bg-gray-900/95 backdrop-blur rounded-2xl p-4 border border-gray-700">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                <MapPin className="w-5 h-5 text-green-400" />
              </div>
              <div>
                <div className="font-semibold text-white">Waverly Pl</div>
                <div className="text-xs text-gray-400">Well-lit, Active area</div>
              </div>
            </div>
            <div className="text-right">
              <div className={`text-2xl font-bold ${getScoreColor(route.safetyScore)}`}>
                {route.safetyScore}
              </div>
            </div>
          </div>
          <div className="flex gap-2 mt-3">
            <div className="flex items-center gap-1 px-2 py-1 bg-gray-800 rounded-lg text-xs">
              <Sun className="w-3 h-3 text-yellow-400" />
              <span className="text-gray-300">{route.lighting.percent}% Lit</span>
            </div>
            <div className="flex items-center gap-1 px-2 py-1 bg-gray-800 rounded-lg text-xs">
              <Users className="w-3 h-3 text-blue-400" />
              <span className="text-gray-300">{route.traffic} Traffic</span>
            </div>
          </div>
        </div>

        {/* Zoom Controls */}
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 space-y-2">
          <button className="w-10 h-10 bg-gray-900/95 backdrop-blur rounded-full flex items-center justify-center border border-gray-700">
            <span className="text-white text-xl">+</span>
          </button>
          <button className="w-10 h-10 bg-gray-900/95 backdrop-blur rounded-full flex items-center justify-center border border-gray-700">
            <span className="text-white text-xl">−</span>
          </button>
        </div>

        {isSharing && (
          <div className="absolute top-20 right-4 bg-green-500/20 backdrop-blur border border-green-500/50 rounded-xl p-3">
            <div className="flex items-center gap-2 text-xs text-green-400">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Sharing with {contacts.filter(c => c.active).length} contacts</span>
            </div>
          </div>
        )}
      </div>

      {/* Navigation Instructions */}
      <div className="bg-gray-900 p-4 border-t border-gray-800">
        <div className="flex items-center justify-between mb-3 text-xs text-gray-400">
          <span>0.2 mi away • 3 min</span>
          <span>{progress}% complete</span>
        </div>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0">
            <Navigation className="w-6 h-6 text-white transform rotate-45" />
          </div>
          <div className="flex-1">
            <div className="font-semibold text-white">Continue on Washington Square</div>
            <div className="text-sm text-gray-400">Then turn right in 500 ft</div>
          </div>
        </div>

        <div className="flex gap-2">
          <button
            onClick={onToggleShare}
            className="flex-1 py-3 bg-gray-800 rounded-xl text-sm font-medium flex items-center justify-center gap-2 hover:bg-gray-700 transition-colors"
          >
            <Share2 className="w-4 h-4" />
            {isSharing ? 'Sharing...' : 'Share my walk'}
          </button>
          <button
            onClick={onReport}
            className="flex-1 py-3 bg-gray-800 rounded-xl text-sm font-medium flex items-center justify-center gap-2 hover:bg-gray-700 transition-colors"
          >
            <AlertCircle className="w-4 h-4" />
            Report Issue
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavigationView;