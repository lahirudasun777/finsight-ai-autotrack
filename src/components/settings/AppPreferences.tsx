
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Sun, Moon, Languages, Clock, DollarSign } from 'lucide-react';

interface AppPreferencesProps {
  onUpdate: () => void;
}

const AppPreferences: React.FC<AppPreferencesProps> = ({ onUpdate }) => {
  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('en');
  const [currency, setCurrency] = useState('USD');
  const [timeZone, setTimeZone] = useState('UTC');

  const handleSave = () => {
    console.log('App preferences saved:', { theme, language, currency, timeZone });
    onUpdate();
  };

  const handleReset = () => {
    setTheme('light');
    setLanguage('en');
    setCurrency('USD');
    setTimeZone('UTC');
  };

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-semibold">App Preferences</h2>

      {/* Theme Selection */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-xl">Theme Selection</CardTitle>
            <CardDescription>Choose how Finthory looks to you</CardDescription>
          </div>
          <div>
            {theme === 'light' ? (
              <Sun className="h-5 w-5 text-muted-foreground" />
            ) : theme === 'dark' ? (
              <Moon className="h-5 w-5 text-muted-foreground" />
            ) : (
              <div className="flex">
                <Sun className="h-5 w-5 text-muted-foreground" />
                <Moon className="h-5 w-5 text-muted-foreground" />
              </div>
            )}
          </div>
        </CardHeader>
        <CardContent>
          <RadioGroup
            value={theme}
            onValueChange={setTheme}
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            <div className="flex items-center space-x-2 border rounded-md p-4">
              <RadioGroupItem value="light" id="theme-light" />
              <Label htmlFor="theme-light" className="flex items-center">
                <Sun className="h-4 w-4 mr-2" /> Light Mode
              </Label>
            </div>
            <div className="flex items-center space-x-2 border rounded-md p-4">
              <RadioGroupItem value="dark" id="theme-dark" />
              <Label htmlFor="theme-dark" className="flex items-center">
                <Moon className="h-4 w-4 mr-2" /> Dark Mode
              </Label>
            </div>
            <div className="flex items-center space-x-2 border rounded-md p-4">
              <RadioGroupItem value="auto" id="theme-auto" />
              <Label htmlFor="theme-auto">Auto (System)</Label>
            </div>
          </RadioGroup>
        </CardContent>
      </Card>

      {/* Language Preference */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-xl">Language</CardTitle>
            <CardDescription>Choose your preferred language</CardDescription>
          </div>
          <div>
            <Languages className="h-5 w-5 text-muted-foreground" />
          </div>
        </CardHeader>
        <CardContent>
          <Select value={language} onValueChange={setLanguage}>
            <SelectTrigger className="w-full md:w-[250px]">
              <SelectValue placeholder="Select Language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en">English (US)</SelectItem>
              <SelectItem value="en-gb">English (UK)</SelectItem>
              <SelectItem value="es">Español (Spanish)</SelectItem>
              <SelectItem value="fr">Français (French)</SelectItem>
              <SelectItem value="de">Deutsch (German)</SelectItem>
              <SelectItem value="zh">中文 (Chinese)</SelectItem>
              <SelectItem value="ja">日本語 (Japanese)</SelectItem>
            </SelectContent>
          </Select>
          <p className="mt-2 text-sm text-muted-foreground">
            More languages coming soon.
          </p>
        </CardContent>
      </Card>

      {/* Currency Display Preference */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-xl">Currency</CardTitle>
            <CardDescription>Set your preferred currency display</CardDescription>
          </div>
          <div>
            <DollarSign className="h-5 w-5 text-muted-foreground" />
          </div>
        </CardHeader>
        <CardContent>
          <Select value={currency} onValueChange={setCurrency}>
            <SelectTrigger className="w-full md:w-[250px]">
              <SelectValue placeholder="Select Currency" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="USD">$ USD (US Dollar)</SelectItem>
              <SelectItem value="EUR">€ EUR (Euro)</SelectItem>
              <SelectItem value="GBP">£ GBP (British Pound)</SelectItem>
              <SelectItem value="JPY">¥ JPY (Japanese Yen)</SelectItem>
              <SelectItem value="CAD">$ CAD (Canadian Dollar)</SelectItem>
              <SelectItem value="AUD">$ AUD (Australian Dollar)</SelectItem>
              <SelectItem value="CHF">CHF (Swiss Franc)</SelectItem>
              <SelectItem value="CNY">¥ CNY (Chinese Yuan)</SelectItem>
            </SelectContent>
          </Select>
          <p className="mt-2 text-sm text-muted-foreground">
            This affects how currency values are displayed throughout Finthory.
          </p>
        </CardContent>
      </Card>

      {/* Time Zone Settings */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-xl">Time Zone</CardTitle>
            <CardDescription>Set your time zone for accurate reporting</CardDescription>
          </div>
          <div>
            <Clock className="h-5 w-5 text-muted-foreground" />
          </div>
        </CardHeader>
        <CardContent>
          <Select value={timeZone} onValueChange={setTimeZone}>
            <SelectTrigger className="w-full md:w-[350px]">
              <SelectValue placeholder="Select Time Zone" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="UTC">UTC (Coordinated Universal Time)</SelectItem>
              <SelectItem value="America/New_York">Eastern Time (ET) - New York</SelectItem>
              <SelectItem value="America/Los_Angeles">Pacific Time (PT) - Los Angeles</SelectItem>
              <SelectItem value="America/Chicago">Central Time (CT) - Chicago</SelectItem>
              <SelectItem value="Europe/London">Greenwich Mean Time (GMT) - London</SelectItem>
              <SelectItem value="Europe/Paris">Central European Time (CET) - Paris</SelectItem>
              <SelectItem value="Asia/Tokyo">Japan Standard Time (JST) - Tokyo</SelectItem>
              <SelectItem value="Asia/Shanghai">China Standard Time (CST) - Shanghai</SelectItem>
              <SelectItem value="Australia/Sydney">Australian Eastern Time (AET) - Sydney</SelectItem>
            </SelectContent>
          </Select>
          <p className="mt-2 text-sm text-muted-foreground">
            Reports, insights and scheduled events will use this time zone.
          </p>
        </CardContent>
      </Card>

      {/* Save/Reset Buttons */}
      <div className="flex justify-between">
        <Button variant="outline" onClick={handleReset}>Reset to Default</Button>
        <Button onClick={handleSave}>Save Preferences</Button>
      </div>
    </div>
  );
};

export default AppPreferences;
