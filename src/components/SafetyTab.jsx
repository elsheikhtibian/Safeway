import React from 'react';
import { MapPin, Shield, TrendingUp, Clock, ThumbsUp, Sun } from 'lucide-react';

const SafetyTab = ({ safetyData }) => {
  return (
    <div className="px-6 pb-24">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <MapPin className="w-5 h-5 text-green-400" />
          <span className="text-sm text-gray-400">{safetyData.location}</span>
        </div>
      </div>

      <div className="bg-gradient-to-br from-green-900/30 to-green-950/30 rounded-2xl p-6 border border-green-500/30 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="text-sm text-gray-400 mb-1">Overall Safety Score</div>
            <div className="text-5xl font-bold text-green-400">{safetyData.overallScore}</div>
          </div>
          <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center">
            <Shield className="w-8 h-8 text-green-400" />
          </div>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <TrendingUp className="w-4 h-4 text-green-400" />
          <span className="text-green-400 font-semibold">{safetyData.scoreChange} points this month</span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 mb-6">
        <div className="bg-gray-900 rounded-xl p-4 text-center border border-gray-800">
          <div className="text-2xl font-bold text-white mb-1">{safetyData.lighting}</div>
          <div className="text-xs text-gray-400">Well-Lit</div>
        </div>
        <div className="bg-gray-900 rounded-xl p-4 text-center border border-gray-800">
          <div className="text-2xl font-bold text-white mb-1">{safetyData.activity}</div>
          <div className="text-xs text-gray-400">Activity</div>
        </div>
        <div className="bg-gray-900 rounded-xl p-4 text-center border border-gray-800">
          <div className="text-2xl font-bold text-white mb-1">{safetyData.incidents}</div>
          <div className="text-xs text-gray-400">Incidents</div>
        </div>
      </div>

      <div className="flex gap-2 mb-6">
        <button className="flex-1 py-2 bg-green-500/20 text-green-400 rounded-lg text-sm font-semibold border border-green-500/30">
          Community Reports
        </button>
        <button className="flex-1 py-2 bg-gray-800 text-gray-400 rounded-lg text-sm font-semibold">
          Crime Stats
        </button>
      </div>

      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold">Last 7 days</h3>
          <span className="text-sm text-gray-400">{safetyData.recentReports.length} reports</span>
        </div>

        <div className="space-y-3">
          {safetyData.recentReports.map((report, idx) => (
            <div key={idx} className="bg-gray-900 rounded-xl p-4 border border-gray-800">
              <div className="flex items-start gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  report.type === 'positive' ? 'bg-green-500/20' : 'bg-yellow-500/20'
                }`}>
                  {report.type === 'positive' ? (
                    <ThumbsUp className="w-5 h-5 text-green-400" />
                  ) : (
                    <Sun className="w-5 h-5 text-yellow-400" />
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-xs font-semibold ${
                      report.type === 'positive' ? 'text-green-400' : 'text-yellow-400'
                    }`}>
                      {report.type === 'positive' ? 'Positive' : 'Lighting'}
                    </span>
                    {report.verified && (
                      <span className="text-xs text-gray-500">Verified</span>
                    )}
                  </div>
                  <div className="text-sm font-medium text-white mb-1">{report.location}</div>
                  <div className="text-sm text-gray-400 mb-2">{report.description}</div>
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <Clock className="w-3 h-3" />
                    {report.time}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SafetyTab;