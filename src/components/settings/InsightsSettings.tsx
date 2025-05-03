
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Calendar, Database, Settings, SlidersHorizontal } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

interface InsightsSettingsProps {
  onUpdate: () => void;
}

interface SpendingCategory {
  id: string;
  name: string;
  enabled: boolean;
  icon: string;
}

const InsightsSettings: React.FC<InsightsSettingsProps> = ({ onUpdate }) => {
  const [dataTracking, setDataTracking] = useState(true);
  const [budgetInsightFrequency, setBudgetInsightFrequency] = useState('weekly');
  const [spendingCategories, setSpendingCategories] = useState<SpendingCategory[]>([
    { id: '1', name: 'Food & Dining', enabled: true, icon: '🍕' },
    { id: '2', name: 'Shopping', enabled: true, icon: '🛍️' },
    { id: '3', name: 'Transportation', enabled: true, icon: '🚗' },
    { id: '4', name: 'Entertainment', enabled: true, icon: '🎬' },
    { id: '5', name: 'Travel', enabled: true, icon: '✈️' },
    { id: '6', name: 'Healthcare', enabled: true, icon: '⚕️' },
    { id: '7', name: 'Education', enabled: false, icon: '📚' },
    { id: '8', name: 'Personal Care', enabled: true, icon: '💇' },
    { id: '9', name: 'Utilities', enabled: true, icon: '💡' },
    { id: '10', name: 'Gifts & Donations', enabled: false, icon: '🎁' },
  ]);

  const handleSaveInsightsSettings = () => {
    console.log('Insights settings saved:', {
      dataTracking,
      budgetInsightFrequency,
      spendingCategories
    });
    onUpdate();
  };

  const handleResetInsightsSettings = () => {
    setDataTracking(true);
    setBudgetInsightFrequency('weekly');
    setSpendingCategories(spendingCategories.map(category => ({
      ...category,
      enabled: true
    })));
  };

  const handleCategoryToggle = (categoryId: string) => {
    setSpendingCategories(
      spendingCategories.map(category => 
        category.id === categoryId 
          ? { ...category, enabled: !category.enabled } 
          : category
      )
    );
  };

  const handleToggleAllCategories = (enabled: boolean) => {
    setSpendingCategories(
      spendingCategories.map(category => ({ ...category, enabled }))
    );
  };

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-semibold">Insights Settings</h2>

      {/* Data Tracking Preferences */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-xl">Data Tracking</CardTitle>
            <CardDescription>
              Control how Finthory uses your data to generate insights
            </CardDescription>
          </div>
          <div>
            <Database className="h-5 w-5 text-muted-foreground" />
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">Allow Personalized Insights</h4>
              <p className="text-sm text-muted-foreground">
                Let Finthory analyze your spending patterns to provide customized financial insights
              </p>
            </div>
            <Switch 
              checked={dataTracking} 
              onCheckedChange={setDataTracking}
            />
          </div>
          
          {!dataTracking && (
            <Alert>
              <AlertDescription>
                Disabling personalized insights will limit the app's ability to provide tailored financial advice and recommendations.
              </AlertDescription>
            </Alert>
          )}
        </CardContent>
      </Card>

      {/* Budget Insight Frequency */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-xl">Budget Insights</CardTitle>
            <CardDescription>
              How often you receive budget analysis and insights
            </CardDescription>
          </div>
          <div>
            <Calendar className="h-5 w-5 text-muted-foreground" />
          </div>
        </CardHeader>
        <CardContent>
          <RadioGroup 
            value={budgetInsightFrequency}
            onValueChange={setBudgetInsightFrequency}
            className="space-y-4 mt-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="daily" id="frequency-daily" />
              <Label htmlFor="frequency-daily">Daily (get insights at the end of each day)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="weekly" id="frequency-weekly" />
              <Label htmlFor="frequency-weekly">Weekly (get insights every Sunday)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="monthly" id="frequency-monthly" />
              <Label htmlFor="frequency-monthly">Monthly (get insights at the end of each month)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="none" id="frequency-none" />
              <Label htmlFor="frequency-none">Turn off automatic insights (only view on demand)</Label>
            </div>
          </RadioGroup>
        </CardContent>
      </Card>

      {/* Spending Category Control */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-xl">Spending Categories</CardTitle>
            <CardDescription>
              Choose which categories to include in your insights
            </CardDescription>
          </div>
          <div>
            <SlidersHorizontal className="h-5 w-5 text-muted-foreground" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between mb-4">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => handleToggleAllCategories(true)}
            >
              Select All
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => handleToggleAllCategories(false)}
            >
              Deselect All
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {spendingCategories.map(category => (
              <div 
                key={category.id} 
                className="flex items-center space-x-2 border p-3 rounded-md"
              >
                <Checkbox 
                  id={`category-${category.id}`} 
                  checked={category.enabled}
                  onCheckedChange={() => handleCategoryToggle(category.id)}
                />
                <Label htmlFor={`category-${category.id}`} className="flex items-center">
                  <span className="mr-2">{category.icon}</span>
                  {category.name}
                </Label>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Advanced Settings */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-xl">Advanced Insights Settings</CardTitle>
            <CardDescription>
              Configure additional insight parameters
            </CardDescription>
          </div>
          <div>
            <Settings className="h-5 w-5 text-muted-foreground" />
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">Goal Tracking</h4>
              <p className="text-sm text-muted-foreground">
                Include progress towards financial goals in insights
              </p>
            </div>
            <Switch defaultChecked />
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">Seasonal Spending Analysis</h4>
              <p className="text-sm text-muted-foreground">
                Compare spending patterns across different seasons
              </p>
            </div>
            <Switch defaultChecked />
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">Merchant Analysis</h4>
              <p className="text-sm text-muted-foreground">
                Analyze spending by individual merchants
              </p>
            </div>
            <Switch />
          </div>
        </CardContent>
      </Card>

      {/* Save/Reset Buttons */}
      <div className="flex justify-between">
        <Button variant="outline" onClick={handleResetInsightsSettings}>Reset to Default</Button>
        <Button onClick={handleSaveInsightsSettings}>Save Settings</Button>
      </div>
    </div>
  );
};

export default InsightsSettings;
