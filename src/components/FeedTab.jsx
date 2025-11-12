import React from 'react';
import { MapPin, Clock, ThumbsUp, MessageCircle } from 'lucide-react';

const FeedTab = ({ posts }) => {
  return (
    <div className="px-6 pb-24">
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <MapPin className="w-5 h-5 text-blue-400" />
          <span className="font-semibold">NYU Kimmel Center</span>
        </div>
      </div>

      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold">Recent Activity</h3>
        <span className="text-sm text-gray-400">{posts.length} posts</span>
      </div>

      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="bg-gray-900 rounded-xl p-4 border border-gray-800">
            <div className="flex gap-3">
              <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="font-semibold text-green-400 text-sm">{post.initials}</span>
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <div className="font-semibold text-white">{post.author}</div>
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <MapPin className="w-3 h-3" />
                      <span>{post.location}</span>
                      <span>•</span>
                      <Clock className="w-3 h-3" />
                      <span>{post.time}</span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-300 mb-3">{post.content}</p>
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <button className="flex items-center gap-1 hover:text-green-400 transition-colors">
                    <ThumbsUp className="w-4 h-4" />
                    <span>{post.likes}</span>
                  </button>
                  <button className="flex items-center gap-1 hover:text-blue-400 transition-colors">
                    <MessageCircle className="w-4 h-4" />
                    <span>{post.comments}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedTab;