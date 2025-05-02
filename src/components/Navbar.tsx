
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChartPie, Calendar, Wallet } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/75 backdrop-blur-md border-b">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Wallet className="h-6 w-6 text-finsight-primary" />
          <span className="text-xl font-bold text-finsight-primary">FinSight</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/dashboard" className="text-sm font-medium hover:text-finsight-secondary transition-colors">
            Dashboard
          </Link>
          <Link to="/transactions" className="text-sm font-medium hover:text-finsight-secondary transition-colors">
            Transactions
          </Link>
          <Link to="/insights" className="text-sm font-medium hover:text-finsight-secondary transition-colors">
            Insights
          </Link>
          <Link to="/settings" className="text-sm font-medium hover:text-finsight-secondary transition-colors">
            Settings
          </Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <Button className="hidden md:inline-flex" variant="ghost">Log In</Button>
          <Button>Get Started</Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
