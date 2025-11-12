import React from 'react';
import { Sun, Users, AlertTriangle, Clock, ChevronRight, Shield } from 'lucide-react';

const getScoreColor = (score) => {
  if (score >= 85) return 'text-green-400';
  if (score >= 70) return 'text-yellow-400';
  return 'text-red-400';
};

const RoutesTab = ({ routes, onStartNavigation }) => {
  return (
    <div className="px-6 pb-24">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Choose your route</h2>
        <span className="text-sm text-gray-400">{routes.length} options</span>
      </div>

      <div className="space-y-3">
        {routes.map((route) => (
          <div
            key={route.id}
            className="bg-gray-900 rounded-2xl p-4 border border-gray-800 hover:border-green-500/50 transition-all cursor-pointer"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-semibold text-white">{route.name}</h3>
                  {route.recommended && (
                    <span className="px-2 py-0.5 bg-green-500/20 text-green-400 text-xs rounded-full flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                      Recommended
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-400">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {route.time}
                  </span>
                  <span>•</span>
                  <span>{route.distance}</span>
                </div>
              </div>
              <div className={`text-right ${getScoreColor(route.safetyScore)}`}>
                <div className="text-3xl font-bold">{route.safetyScore}</div>
                <div className="text-xs text-gray-400">Safety Score</div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 mb-3">
              <div className="bg-gray-800 rounded-lg p-2 text-center">
                <Sun className="w-4 h-4 text-yellow-400 mx-auto mb-1" />
                <div className="text-xs font-semibold text-white">{route.lighting.percent}%</div>
                <div className="text-xs text-gray-400">Lit</div>
              </div>
              <div className="bg-gray-800 rounded-lg p-2 text-center">
                <Users className="w-4 h-4 text-blue-400 mx-auto mb-1" />
                <div className="text-xs font-semibold text-white">{route.traffic}</div>
                <div className="text-xs text-gray-400">Traffic</div>
              </div>
              <div className="bg-gray-800 rounded-lg p-2 text-center">
                <AlertTriangle className="w-4 h-4 text-red-400 mx-auto mb-1" />
                <div className="text-xs font-semibold text-white">{route.incidents}</div>
                <div className="text-xs text-gray-400">Incidents</div>
              </div>
            </div>

            <ul className="space-y-1 mb-3">
              {route.details.map((detail, idx) => (
                <li key={idx} className="text-xs text-gray-400 flex items-center gap-2">
                  <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
                  {detail}
                </li>
              ))}
            </ul>

            <button
              onClick={() => onStartNavigation(route)}
              className="w-full py-3 bg-white text-black rounded-xl font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
            >
              Start Navigation
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        ))}
      </div>

      <div className="mt-4 p-4 bg-blue-500/10 border border-blue-500/30 rounded-xl">
        <div className="flex items-start gap-2">
          <Shield className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
          <div className="text-xs text-gray-300">
            <span className="font-semibold text-blue-400">Safety scores based on:</span>
            <br />
            Street lighting data, police reports (last 30 days), community feedback, and real-time crowd density.
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoutesTab;