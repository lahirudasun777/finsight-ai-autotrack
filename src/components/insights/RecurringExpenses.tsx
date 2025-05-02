
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LabelList 
} from 'recharts';
import { cn } from '@/lib/utils';
import { generateMockRecurringData } from '@/lib/mockInsights';
import { ChartContainer } from "@/components/ui/chart";

interface RecurringExpensesProps {
  privacyMode: boolean;
  timeRange: string;
}

const RecurringExpenses: React.FC<RecurringExpensesProps> = ({
  privacyMode,
  timeRange
}) => {
  const recurringData = generateMockRecurringData(timeRange);
  
  const config = {
    primary: { theme: { light: "#333", dark: "#fff" } },
    secondary: { theme: { light: "#666", dark: "#aaa" } },
    bar: { theme: { light: "#6366f1", dark: "#818cf8" } },
  };
  
  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold">Recurring Expenses</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ChartContainer config={config} className="h-full w-full">
            <BarChart
              data={recurringData}
              layout="vertical"
              margin={{ top: 20, right: 30, left: 60, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" horizontal={false} />
              <XAxis 
                type="number"
                tickFormatter={(value) => privacyMode ? "***" : `$${value}`}
              />
              <YAxis 
                dataKey="name" 
                type="category" 
                width={100} 
                tick={{ fontSize: 12 }} 
              />
              <Tooltip
                formatter={(value: number) => privacyMode 
                  ? ['***'] 
                  : [`$${value.toFixed(2)}`, 'Amount']
                }
              />
              <Bar 
                dataKey="amount" 
                fill="#6366f1" 
                radius={[0, 4, 4, 0]} 
              />
            </BarChart>
          </ChartContainer>
        </div>
        
        <div className="mt-4 text-xs text-center text-muted-foreground">
          Total recurring monthly expenses: 
          <span className={cn(
            "font-medium ml-1",
            privacyMode ? "blur-sm hover:blur-none transition-all" : ""
          )}>
            ${recurringData.reduce((sum, item) => sum + item.amount, 0).toFixed(2)}
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export default RecurringExpenses;
