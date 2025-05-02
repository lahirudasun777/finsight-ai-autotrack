
import React from 'react';
import { Link } from 'react-router-dom';
import { Wallet } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t bg-white dark:bg-gray-950">
      <div className="container flex flex-col items-center justify-center gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex items-center gap-2">
          <Wallet className="h-5 w-5 text-finsight-primary" />
          <span className="text-lg font-semibold text-finsight-primary">FinSight</span>
        </div>
        <nav className="flex flex-wrap gap-4 md:gap-6">
          <Link to="/" className="text-sm text-gray-500 hover:text-finsight-primary transition-colors">
            Home
          </Link>
          <Link to="/privacy" className="text-sm text-gray-500 hover:text-finsight-primary transition-colors">
            Privacy
          </Link>
          <Link to="/terms" className="text-sm text-gray-500 hover:text-finsight-primary transition-colors">
            Terms
          </Link>
          <Link to="/contact" className="text-sm text-gray-500 hover:text-finsight-primary transition-colors">
            Contact
          </Link>
        </nav>
        <div className="md:ml-auto flex items-center gap-1">
          <p className="text-sm text-gray-500">
            © 2025 FinSight. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
