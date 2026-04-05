import React from 'react';
import Link from 'next/link';
import {
  UserCheck,
  Calendar,
  Trophy,
  ImagePlus,
  UserPlus,
} from 'lucide-react';

interface AdminCard {
  title: string;
  href: string;
  icon: React.ElementType;
  description?: string;
}

const AdminDashboard: React.FC = () => {
  const cards: AdminCard[] = [
    {
      title: 'Registrations',
      href: '/admin/user-approvals',
      icon: UserCheck,
      description: 'Approve new members',
    },
    {
      title: 'Upcoming Matches',
      href: '/admin/fixtures',
      icon: Calendar,
      description: 'Manage fixtures',
    },
    {
      title: 'Results',
      href: '/admin/results',
      icon: Trophy,
      description: 'Record match outcomes',
    },
    {
      title: 'Gallery',
      href: '/admin/gallery',
      icon: ImagePlus,
      description: 'Add photos & media',
    },
    {
      title: 'Admins',
      href: '/admin/admins',
      icon: UserPlus,
      description: 'Manage team members',
    },
  ];

  return (
    <div className="min-h-screen bg-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-black uppercase tracking-tighter text-neutral-800">
            Admin <span className="text-amber-600">Dashboard</span>
          </h1>
          <p className="mt-2 text-xs uppercase tracking-wider text-neutral-500">
            Quick access to management tools
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <Link
                key={card.title}
                href={card.href}
                className="group block bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-amber-200 hover:border-amber-400"
              >
                <div className="flex items-start justify-between">
                  <div className="space-y-3">
                    <div className="p-2 bg-white/60 rounded-xl w-fit group-hover:bg-white transition-colors">
                      <Icon size={20} className="text-amber-600" />
                    </div>
                    <div>
                      <h2 className="text-lg font-bold tracking-tight text-neutral-800">
                        {card.title}
                      </h2>
                      {card.description && (
                        <p className="text-xs text-neutral-600 mt-1 uppercase tracking-wide">
                          {card.description}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="text-amber-500 group-hover:text-amber-700 transition-colors">
                    →
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;