import React from 'react';
import Link from 'next/link';

const AdminFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-linear-to-br from-amber-50 via-yellow-50 to-orange-50 border-t border-amber-200 py-6 text-neutral-600">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em] font-medium">
          
          {/* Copyright */}
          <p className="text-neutral-500">
            © {currentYear} Flash FC Admin Panel
          </p>
          
          {/* Admin Links */}
          <div className="flex gap-6">
            <Link 
              href="/admin/dashboard" 
              className="hover:text-amber-600 transition-colors"
            >
              Dashboard
            </Link>
            <Link 
              href="/admin/settings" 
              className="hover:text-amber-600 transition-colors"
            >
              Settings
            </Link>
            <Link 
              href="/logout" 
              className="hover:text-amber-600 transition-colors"
            >
              Logout
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AdminFooter;