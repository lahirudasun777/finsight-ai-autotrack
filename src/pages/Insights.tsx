
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import InsightsOverview from '@/components/insights/InsightsOverview';
import CategoryBreakdown from '@/components/insights/CategoryBreakdown';
import SmartInsights from '@/components/insights/SmartInsights';
import RecurringExpenses from '@/components/insights/RecurringExpenses';
import LargestExpenses from '@/components/insights/LargestExpenses';
import { Button } from '@/components/ui/button';
import { CalendarDays, DownloadIcon, EyeOff, Eye } from 'lucide-react';
import TimeRangeSelector from '@/components/insights/TimeRangeSelector';

const Insights = () => {
  const [privacyMode, setPrivacyMode] = useState(false);
  const [timeRange, setTimeRange] = useState('month');

  const togglePrivacyMode = () => {
    setPrivacyMode(!privacyMode);
  };

  const handleTimeRangeChange = (range: string) => {
    setTimeRange(range);
  };

  const handleExport = (format: 'pdf' | 'csv') => {
    console.log(`Exporting ${format}...`);
    // Implementation for export functionality
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container px-4 py-8 mx-auto">
        <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-finthory-primary">Insights</h1>
            <p className="text-gray-500 dark:text-gray-400 mt-1">
              AI-powered analytics for your financial health
            </p>
          </div>
          
          <div className="flex items-center gap-3 mt-4 md:mt-0">
            <TimeRangeSelector 
              currentRange={timeRange} 
              onRangeChange={handleTimeRangeChange} 
            />
            
            <Button
              variant="outline"
              size="sm"
              onClick={togglePrivacyMode}
              className="flex items-center gap-2"
            >
              {privacyMode ? (
                <>
                  <Eye className="h-4 w-4" />
                  <span className="hidden sm:inline">Show Values</span>
                </>
              ) : (
                <>
                  <EyeOff className="h-4 w-4" />
                  <span className="hidden sm:inline">Hide Values</span>
                </>
              )}
            </Button>
            
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleExport('pdf')}
              className="flex items-center gap-2"
            >
              <DownloadIcon className="h-4 w-4" />
              <span className="hidden sm:inline">Export</span>
            </Button>
          </div>
        </div>
        
        <div className="grid gap-6">
          <InsightsOverview privacyMode={privacyMode} timeRange={timeRange} />
          
          <div className="grid gap-6 grid-cols-1 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <CategoryBreakdown privacyMode={privacyMode} timeRange={timeRange} />
            </div>
            <div className="lg:col-span-1">
              <SmartInsights timeRange={timeRange} />
            </div>
          </div>
          
          <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
            <RecurringExpenses privacyMode={privacyMode} timeRange={timeRange} />
            <LargestExpenses privacyMode={privacyMode} timeRange={timeRange} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Insights;
