
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import TransactionsList from '@/components/TransactionsList';
import TransactionFilters from '@/components/TransactionFilters';
import Footer from '@/components/Footer';

const Transactions = () => {
  const [filters, setFilters] = useState({
    searchTerm: '',
    dateRange: 'all',
    category: 'all',
    amountRange: { min: 0, max: 10000 },
    source: 'all',
  });

  const handleFilterChange = (newFilters: any) => {
    setFilters({ ...filters, ...newFilters });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container px-4 py-8 mx-auto">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-finsight-primary">Transactions</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            View and manage your financial activities
          </p>
        </div>
        
        <TransactionFilters onFilterChange={handleFilterChange} />
        
        <div className="mt-6">
          <TransactionsList filters={filters} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Transactions;
