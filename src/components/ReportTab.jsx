import React, { useState } from 'react';
import { Sun, Users, AlertTriangle, ThumbsUp, FileText, CheckCircle } from 'lucide-react';

const ReportTab = ({ onClose }) => {
  const [reportType, setReportType] = useState('');
  const [reportSubmitted, setReportSubmitted] = useState(false);
  const [additionalDetails, setAdditionalDetails] = useState('');

  const handleSubmitReport = () => {
    setReportSubmitted(true);
    setTimeout(() => {
      onClose();
    }, 2000);
  };

  if (reportSubmitted) {
    return (
      <div className="px-6 pb-24 flex flex-col items-center justify-center h-96">
        <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
          <CheckCircle className="w-12 h-12 text-green-400" />
        </div>
        <h3 className="text-xl font-bold mb-2">Report Submitted!</h3>
        <p className="text-sm text-gray-400 text-center max-w-xs">
          Thank you for helping make your community safer. Your report will be reviewed and verified shortly.
        </p>
        <button
          onClick={onClose}
          className="mt-6 px-6 py-3 bg-white text-black rounded-xl font-semibold hover:bg-gray-100 transition-colors"
        >
          Back to Safety Overview
        </button>
      </div>
    );
  }

  return (
    <div className="px-6 pb-24">
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2">Quick Safety Report</h2>
        <p className="text-sm text-gray-400">Help your community by sharing observations</p>
      </div>

      <div className="bg-gray-900 rounded-xl p-4 border border-gray-800 mb-6">
        <div className="text-sm text-gray-400 mb-2">Reporting from</div>
        <div className="flex items-center justify-between">
          <div>
            <div className="font-semibold text-white">Main Street & 5th Ave</div>
          </div>
          <button className="px-3 py-1 bg-gray-800 rounded-lg text-xs text-gray-300">
            Current Location
          </button>
        </div>
      </div>

      <div className="mb-6">
        <div className="text-sm font-semibold mb-3">What would you like to report?</div>
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => setReportType('lighting')}
            className={`p-4 rounded-xl border transition-all ${
              reportType === 'lighting'
                ? 'bg-amber-500/20 border-amber-500/50'
                : 'bg-gray-900 border-gray-800 hover:border-gray-700'
            }`}
          >
            <Sun className="w-6 h-6 text-amber-400 mx-auto mb-2" />
            <div className="text-sm font-medium">Poor Lighting</div>
          </button>
          <button
            onClick={() => setReportType('traffic')}
            className={`p-4 rounded-xl border transition-all ${
              reportType === 'traffic'
                ? 'bg-blue-500/20 border-blue-500/50'
                : 'bg-gray-900 border-gray-800 hover:border-gray-700'
            }`}
          >
            <Users className="w-6 h-6 text-blue-400 mx-auto mb-2" />
            <div className="text-sm font-medium">Low Foot Traffic</div>
          </button>
          <button
            onClick={() => setReportType('suspicious')}
            className={`p-4 rounded-xl border transition-all ${
              reportType === 'suspicious'
                ? 'bg-red-500/20 border-red-500/50'
                : 'bg-gray-900 border-gray-800 hover:border-gray-700'
            }`}
          >
            <AlertTriangle className="w-6 h-6 text-red-400 mx-auto mb-2" />
            <div className="text-sm font-medium">Suspicious Activity</div>
          </button>
          <button
            onClick={() => setReportType('safe')}
            className={`p-4 rounded-xl border transition-all ${
              reportType === 'safe'
                ? 'bg-green-500/20 border-green-500/50'
                : 'bg-gray-900 border-gray-800 hover:border-gray-700'
            }`}
          >
            <ThumbsUp className="w-6 h-6 text-green-400 mx-auto mb-2" />
            <div className="text-sm font-medium">Felt Safe</div>
          </button>
        </div>
      </div>

      <div className="mb-6">
        <label className="text-sm font-semibold mb-2 block">Additional details (optional)</label>
        <textarea
          value={additionalDetails}
          onChange={(e) => setAdditionalDetails(e.target.value)}
          className="w-full bg-gray-900 border border-gray-800 rounded-xl p-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-green-500/50 transition-colors resize-none"
          rows={4}
          placeholder="Provide more context about what you observed...

Be specific but avoid personal information"
        ></textarea>
        <div className="mt-2 text-xs text-gray-400">
          Quick suggestions:
          <div className="flex gap-2 mt-2">
            <button
              onClick={() => setAdditionalDetails('Streetlights out')}
              className="px-3 py-1 bg-gray-800 rounded-lg hover:bg-gray-700"
            >
              Streetlights out
            </button>
            <button
              onClick={() => setAdditionalDetails('Dark pathway')}
              className="px-3 py-1 bg-gray-800 rounded-lg hover:bg-gray-700"
            >
              Dark pathway
            </button>
          </div>
        </div>
      </div>

      <button
        onClick={handleSubmitReport}
        disabled={!reportType}
        className="w-full py-4 bg-white text-black rounded-xl font-semibold hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        <FileText className="w-5 h-5" />
        Submit Report
      </button>
    </div>
  );
};

export default ReportTab;