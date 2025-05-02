
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { mockCategoryBreakdown, mockCategoryDetails } from '@/lib/mockInsights';

interface CategoryBreakdownProps {
  privacyMode: boolean;
  timeRange: string;
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 border rounded shadow text-xs">
        <p className="font-medium">{payload[0].name}</p>
        <p className="text-finsight-primary">${payload[0].value.toFixed(2)}</p>
        <p className="text-gray-500">{payload[0].payload.percentage}%</p>
      </div>
    );
  }
  return null;
};

const CategoryBreakdown: React.FC<CategoryBreakdownProps> = ({ privacyMode, timeRange }) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  // Get data based on the time range
  const data = mockCategoryBreakdown[timeRange] || mockCategoryBreakdown.month;

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    setDialogOpen(true);
  };

  // Fix for the TS2322 error by making the innerRadius function return a number explicitly
  const getInnerRadius = ({ activeIndex }: { activeIndex: number }): number => {
    return activeIndex ? 90 : 100;
  };

  return (
    <>
      <Card className="h-full">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">Spending by Category</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={90}
                  innerRadius={getInnerRadius}
                  fill="#8884d8"
                  dataKey={privacyMode ? "value" : "value"}
                  nameKey="name"
                  onClick={(entry) => handleCategoryClick(entry.name)}
                  className="cursor-pointer"
                >
                  {data.map((entry: any, index: number) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
                <Legend 
                  layout="horizontal" 
                  verticalAlign="bottom" 
                  align="center"
                  formatter={(value, entry) => (
                    <span className="text-xs">{value}</span>
                  )}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          
          <div className="mt-4 text-center text-xs text-gray-500">
            Click on a category to see detailed breakdown
          </div>
        </CardContent>
      </Card>
      
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{selectedCategory} Details</DialogTitle>
          </DialogHeader>
          
          {selectedCategory && mockCategoryDetails[selectedCategory] && (
            <div className="space-y-4 mt-2">
              {mockCategoryDetails[selectedCategory].map((item, index) => (
                <div key={index} className="flex items-center justify-between border-b pb-2">
                  <div>
                    <p className="font-medium">{item.merchant}</p>
                    <p className="text-xs text-gray-500">{item.date}</p>
                  </div>
                  <p className={`font-medium ${privacyMode ? 'blur-sm' : ''}`}>${item.amount.toFixed(2)}</p>
                </div>
              ))}
              
              <div className="flex justify-end pt-2">
                <Button onClick={() => setDialogOpen(false)} variant="outline">
                  Close
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CategoryBreakdown;
