
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CircleDollarSign } from 'lucide-react';
import { cn } from '@/lib/utils';
import { generateMockLargestExpenses } from '@/lib/mockInsights';

interface LargestExpensesProps {
  privacyMode: boolean;
  timeRange: string;
}

const LargestExpenses: React.FC<LargestExpensesProps> = ({
  privacyMode,
  timeRange
}) => {
  const expenses = generateMockLargestExpenses(timeRange);
  
  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold">Largest Expenses</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {expenses.map((expense, index) => (
            <div 
              key={index} 
              className="flex items-center justify-between p-3 rounded-lg border border-border bg-background/50"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-gray-100 dark:bg-gray-800">
                  <CircleDollarSign className="h-5 w-5 text-finsight-primary" />
                </div>
                <div>
                  <div className="font-medium">{expense.merchantName}</div>
                  <div className="text-xs text-muted-foreground">{new Date(expense.date).toLocaleDateString()}</div>
                </div>
              </div>
              <div className="text-right">
                <div className={cn(
                  "font-bold",
                  privacyMode ? "blur-sm hover:blur-none transition-all" : ""
                )}>
                  ${Math.abs(expense.amount).toFixed(2)}
                </div>
                <Badge variant="outline" className="mt-1">
                  {expense.category}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default LargestExpenses;
