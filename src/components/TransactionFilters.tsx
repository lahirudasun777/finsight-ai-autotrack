
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Search, Filter, Calendar, Download } from 'lucide-react';

interface TransactionFiltersProps {
  onFilterChange: (filters: any) => void;
}

const TransactionFilters: React.FC<TransactionFiltersProps> = ({ onFilterChange }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    onFilterChange({ searchTerm: value });
  };

  const handleDateFilter = (range: string) => {
    onFilterChange({ dateRange: range });
  };

  const handleCategoryFilter = (category: string) => {
    onFilterChange({ category });
  };

  const handleSourceFilter = (source: string) => {
    onFilterChange({ source });
  };

  const exportTransactions = () => {
    console.log('Exporting transactions...');
    // Implementation for exporting transactions as CSV
  };

  return (
    <div className="flex flex-col md:flex-row gap-3 justify-between items-start md:items-center">
      <div className="relative flex-grow w-full md:w-auto">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
        <Input 
          placeholder="Search transactions..." 
          value={searchTerm}
          onChange={handleSearch}
          className="pl-10 w-full"
        />
      </div>
      
      <div className="flex flex-wrap gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>Date</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-36">
            <DropdownMenuLabel>Filter by Date</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem onClick={() => handleDateFilter('all')}>
                All Time
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleDateFilter('today')}>
                Today
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleDateFilter('week')}>
                This Week
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleDateFilter('month')}>
                This Month
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleDateFilter('quarter')}>
                Last 3 Months
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleDateFilter('year')}>
                This Year
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              <span>Category</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-40">
            <DropdownMenuLabel>Filter by Category</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem onClick={() => handleCategoryFilter('all')}>
                All Categories
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleCategoryFilter('food')}>
                Food & Dining
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleCategoryFilter('transport')}>
                Transportation
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleCategoryFilter('shopping')}>
                Shopping
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleCategoryFilter('entertainment')}>
                Entertainment
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleCategoryFilter('bills')}>
                Bills & Utilities
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleCategoryFilter('subscriptions')}>
                Subscriptions
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleCategoryFilter('income')}>
                Income
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              <span>Source</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-36">
            <DropdownMenuLabel>Filter by Source</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem onClick={() => handleSourceFilter('all')}>
                All Sources
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleSourceFilter('bank')}>
                Bank
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleSourceFilter('email')}>
                Email
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleSourceFilter('sms')}>
                SMS
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleSourceFilter('manual')}>
                Manual Entry
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
        
        <Button variant="outline" onClick={exportTransactions} className="flex items-center gap-2">
          <Download className="h-4 w-4" />
          <span>Export</span>
        </Button>
      </div>
    </div>
  );
};

export default TransactionFilters;
