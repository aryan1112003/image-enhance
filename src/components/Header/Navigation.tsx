import React from 'react';
import { Home, Image, Info } from 'lucide-react';

export function Navigation() {
  return (
    <nav className="hidden md:flex items-center gap-6">
      <NavItem icon={<Home className="w-4 h-4" />} label="Home" active />
      <NavItem icon={<Image className="w-4 h-4" />} label="Gallery" />
      <NavItem icon={<Info className="w-4 h-4" />} label="About" />
    </nav>
  );
}

function NavItem({ icon, label, active = false }: { icon: React.ReactNode; label: string; active?: boolean }) {
  return (
    <button className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
      active 
        ? 'bg-blue-50 text-blue-600' 
        : 'text-gray-600 hover:bg-gray-50'
    }`}>
      {icon}
      <span className="font-medium">{label}</span>
    </button>
  );
}