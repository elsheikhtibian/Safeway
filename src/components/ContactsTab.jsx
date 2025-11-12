import React from 'react';
import { Navigation, Clock, Phone } from 'lucide-react';

const ContactsTab = ({ contacts, autoShare, nightMode, onToggleAutoShare, onToggleNightMode }) => {
  return (
    <div className="px-6 pb-24">
      <div className="mb-6">
        <div className="text-sm text-gray-400 mb-4">
          {contacts.filter(c => c.active).length} contacts can see your location
        </div>

        <div className="space-y-3 mb-6">
          <div className="bg-gray-900 rounded-xl p-4 border border-gray-800">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <Navigation className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <div className="font-semibold text-white">Auto-Share When Walking</div>
                  <div className="text-xs text-gray-400">Automatically share location when navigation starts</div>
                </div>
              </div>
              <button
                onClick={onToggleAutoShare}
                className={`w-12 h-6 rounded-full transition-colors relative ${
                  autoShare ? 'bg-green-500' : 'bg-gray-700'
                }`}
              >
                <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform ${
                  autoShare ? 'translate-x-6' : 'translate-x-0.5'
                }`}></div>
              </button>
            </div>
          </div>

          <div className="bg-gray-900 rounded-xl p-4 border border-gray-800">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center">
                  <Clock className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <div className="font-semibold text-white">Night Mode (6pm - 6am)</div>
                  <div className="text-xs text-gray-400">Always share during evening hours</div>
                </div>
              </div>
              <button
                onClick={onToggleNightMode}
                className={`w-12 h-6 rounded-full transition-colors relative ${
                  nightMode ? 'bg-green-500' : 'bg-gray-700'
                }`}
              >
                <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform ${
                  nightMode ? 'translate-x-6' : 'translate-x-0.5'
                }`}></div>
              </button>
            </div>
          </div>
        </div>

        {(autoShare || nightMode) && (
          <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4 mb-6">
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 font-semibold">Location sharing active</span>
            </div>
            <div className="text-xs text-gray-400 mt-1">Your selected contacts can see your real-time location</div>
          </div>
        )}
      </div>

      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold">Trusted Contacts</h3>
        <button className="text-sm text-green-400 font-semibold hover:text-green-300">
          Add Contact
        </button>
      </div>

      <div className="space-y-3">
        {contacts.map((contact) => (
          <div key={contact.id} className="bg-gray-900 rounded-xl p-4 border border-gray-800">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                  <span className="font-semibold text-green-400">{contact.initials}</span>
                </div>
                <div>
                  <div className="font-semibold text-white flex items-center gap-2">
                    {contact.name}
                    {contact.active && (
                      <span className="text-xs text-green-400">Active</span>
                    )}
                  </div>
                  <div className="text-sm text-gray-400">{contact.phone}</div>
                </div>
              </div>
              <button className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700">
                <Phone className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactsTab;