
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { cn } from '@/lib/utils';
import { generateMockCategoryData } from '@/lib/mockInsights';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Badge } from '@/components/ui/badge';

interface CategoryBreakdownProps {
  privacyMode: boolean;
  timeRange: string;
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d', '#ffc658', '#8dd1e1'];

const CategoryBreakdown: React.FC<CategoryBreakdownProps> = ({
  privacyMode,
  timeRange
}) => {
  const categoryData = generateMockCategoryData(timeRange);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
  const handlePieEnter = (_: any, index: number) => {
    setActiveIndex(index);
  };

  const handlePieLeave = () => {
    setActiveIndex(null);
  };
  
  const config = {
    primary: { theme: { light: "#333", dark: "#fff" } },
    secondary: { theme: { light: "#666", dark: "#aaa" } },
  };

  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold">Category Breakdown</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] sm:h-[400px] flex flex-col sm:flex-row">
          <div className="relative h-full w-full">
            <ChartContainer 
              config={config} 
              className="h-full w-full -ml-6"
            >
              <PieChart 
                margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
              >
                <Pie
                  data={categoryData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={({ activeIndex }) => activeIndex === activeIndex ? 100 : 90}
                  innerRadius={60}
                  fill="#8884d8"
                  paddingAngle={2}
                  onMouseEnter={handlePieEnter}
                  onMouseLeave={handlePieLeave}
                >
                  {categoryData.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={COLORS[index % COLORS.length]} 
                    />
                  ))}
                </Pie>
                <ChartTooltip 
                  content={<CustomTooltip privacyMode={privacyMode} />} 
                />
              </PieChart>
            </ChartContainer>
          </div>

          <div className="mt-4 sm:mt-0 sm:ml-6 flex flex-col justify-center">
            <div className="space-y-2">
              {categoryData.map((entry, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div
                      className="w-3 h-3 rounded-full mr-2"
                      style={{ backgroundColor: COLORS[index % COLORS.length] }}
                    />
                    <span className="text-sm">{entry.name}</span>
                  </div>
                  <span className={cn(
                    "text-sm font-medium",
                    privacyMode ? "blur-sm hover:blur-none transition-all" : ""
                  )}>
                    ${entry.value.toFixed(2)}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <div className="text-sm font-medium">Top Categories:</div>
              <div className="flex flex-wrap gap-2 mt-2">
                {categoryData
                  .sort((a, b) => b.value - a.value)
                  .slice(0, 3)
                  .map((category, index) => (
                    <Badge key={index} variant="secondary">
                      {category.name}
                    </Badge>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

interface CustomTooltipProps {
  active?: boolean;
  payload?: any[];
  privacyMode: boolean;
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload, privacyMode }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-background border border-border rounded-lg p-3 shadow-md">
        <p className="font-medium">{payload[0].name}</p>
        <p className={cn(
          "text-sm font-semibold",
          privacyMode ? "blur-sm hover:blur-none transition-all" : ""
        )}>
          ${payload[0].value.toFixed(2)}
        </p>
        <p className="text-xs text-muted-foreground">
          {payload[0].payload.percentage}% of total
        </p>
      </div>
    );
  }

  return null;
};

export default CategoryBreakdown;
