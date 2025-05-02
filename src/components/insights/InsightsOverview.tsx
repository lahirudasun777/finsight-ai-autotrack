
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { ArrowDown, ArrowUp, TrendingDown, TrendingUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import { generateMockOverviewData } from '@/lib/mockInsights';

interface InsightsOverviewProps {
  privacyMode: boolean;
  timeRange: string;
}

const InsightsOverview: React.FC<InsightsOverviewProps> = ({
  privacyMode,
  timeRange
}) => {
  const overviewData = generateMockOverviewData(timeRange);
  
  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
      {/* Income Overview */}
      <Card>
        <CardContent className="p-6">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Income</p>
              <h3 className={cn(
                "text-2xl font-bold mt-1",
                privacyMode ? "blur-sm hover:blur-none transition-all" : ""
              )}>
                ${overviewData.income.toFixed(2)}
              </h3>
            </div>
            
            <div className={cn(
              "p-2 rounded-full",
              overviewData.incomeChange >= 0 
              ? "bg-green-100 dark:bg-green-900/20" 
              : "bg-red-100 dark:bg-red-900/20"
            )}>
              {overviewData.incomeChange >= 0 
                ? <TrendingUp className="h-5 w-5 text-green-600 dark:text-green-400" /> 
                : <TrendingDown className="h-5 w-5 text-red-600 dark:text-red-400" />
              }
            </div>
          </div>
          
          <div className={cn(
            "flex items-center gap-1 mt-3 text-sm",
            overviewData.incomeChange >= 0 ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"
          )}>
            {overviewData.incomeChange >= 0 ? (
              <ArrowUp className="h-3 w-3" />
            ) : (
              <ArrowDown className="h-3 w-3" />
            )}
            <span>
              {Math.abs(overviewData.incomeChange)}% from last {timeRange}
            </span>
          </div>
        </CardContent>
      </Card>

      {/* Expenses Overview */}
      <Card>
        <CardContent className="p-6">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Expenses</p>
              <h3 className={cn(
                "text-2xl font-bold mt-1",
                privacyMode ? "blur-sm hover:blur-none transition-all" : ""
              )}>
                ${overviewData.expenses.toFixed(2)}
              </h3>
            </div>
            
            <div className={cn(
              "p-2 rounded-full",
              overviewData.expensesChange <= 0 
              ? "bg-green-100 dark:bg-green-900/20" 
              : "bg-red-100 dark:bg-red-900/20"
            )}>
              {overviewData.expensesChange <= 0 
                ? <TrendingDown className="h-5 w-5 text-green-600 dark:text-green-400" /> 
                : <TrendingUp className="h-5 w-5 text-red-600 dark:text-red-400" />
              }
            </div>
          </div>
          
          <div className={cn(
            "flex items-center gap-1 mt-3 text-sm",
            overviewData.expensesChange <= 0 ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"
          )}>
            {overviewData.expensesChange <= 0 ? (
              <ArrowDown className="h-3 w-3" />
            ) : (
              <ArrowUp className="h-3 w-3" />
            )}
            <span>
              {Math.abs(overviewData.expensesChange)}% from last {timeRange}
            </span>
          </div>
        </CardContent>
      </Card>

      {/* Predicted Balance */}
      <Card>
        <CardContent className="p-6">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Predicted End-of-Month</p>
              <h3 className={cn(
                "text-2xl font-bold mt-1",
                privacyMode ? "blur-sm hover:blur-none transition-all" : ""
              )}>
                ${overviewData.predictedBalance.toFixed(2)}
              </h3>
            </div>
            
            <div className={cn(
              "p-2 rounded-full",
              overviewData.balanceChange >= 0 
              ? "bg-green-100 dark:bg-green-900/20" 
              : "bg-red-100 dark:bg-red-900/20"
            )}>
              {overviewData.balanceChange >= 0 
                ? <TrendingUp className="h-5 w-5 text-green-600 dark:text-green-400" /> 
                : <TrendingDown className="h-5 w-5 text-red-600 dark:text-red-400" />
              }
            </div>
          </div>
          
          <div className="flex items-center gap-1 mt-3 text-sm text-gray-500">
            <span>Based on spending patterns</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default InsightsOverview;
