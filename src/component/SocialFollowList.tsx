import React from 'react';

interface SocialItem {
  id: string;
  label: string;
  count: string;
  action: string;
  icon: React.ReactNode;
}

interface SocialFollowListProps {
  items: SocialItem[];
}

export default function   SocialFollowList({ items }: SocialFollowListProps) {
  return (
    <div className="w-full space-y-6">
      {items.map((item) => (
        <div key={item.id} className="flex items-center justify-between">
          {/* Left */}
          <div className="flex items-center gap-4">
            {/* Icon */}
            <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center text-sm font-bold">
              {item.icon}
            </div>

            {/* Text */}
            <div className="text-sm">
              <div className="font-semibold">{item.count}</div>
              <div className="text-gray-500">{item.label}</div>
            </div>
          </div>

          {/* Action */}
          <button className="text-sm text-gray-500 hover:text-black transition">
            {item.action}
          </button>
        </div>
      ))}
    </div>
  );
}
