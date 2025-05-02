
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingDown, TrendingUp, AlertCircle, Info } from 'lucide-react';
import { cn } from '@/lib/utils';
import { generateMockInsights } from '@/lib/mockInsights';

interface SmartInsightsProps {
  timeRange: string;
}

const SmartInsights: React.FC<SmartInsightsProps> = ({ timeRange }) => {
  const insights = generateMockInsights(timeRange);
  
  const getInsightIcon = (type: string) => {
    switch(type) {
      case 'increase':
        return <TrendingUp className="h-5 w-5 text-red-500" />;
      case 'decrease':
        return <TrendingDown className="h-5 w-5 text-green-500" />;
      case 'alert':
        return <AlertCircle className="h-5 w-5 text-amber-500" />;
      default:
        return <Info className="h-5 w-5 text-blue-500" />;
    }
  };
  
  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold">AI Insights</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {insights.map((insight, index) => (
            <li key={index} className="flex gap-3">
              <div className={cn(
                "mt-0.5 p-1.5 rounded-full",
                {
                  'bg-red-100 dark:bg-red-900/20': insight.type === 'increase',
                  'bg-green-100 dark:bg-green-900/20': insight.type === 'decrease',
                  'bg-amber-100 dark:bg-amber-900/20': insight.type === 'alert',
                  'bg-blue-100 dark:bg-blue-900/20': insight.type === 'info',
                }
              )}>
                {getInsightIcon(insight.type)}
              </div>
              <div>
                <p className="text-sm">{insight.text}</p>
                {insight.subtext && (
                  <p className="text-xs text-muted-foreground mt-1">{insight.subtext}</p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default SmartInsights;
