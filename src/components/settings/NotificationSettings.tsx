
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Bell, Mail, FileText } from 'lucide-react';

interface NotificationSettingsProps {
  onUpdate: () => void;
}

const NotificationSettings: React.FC<NotificationSettingsProps> = ({ onUpdate }) => {
  const [emailNotifications, setEmailNotifications] = useState({
    transactions: true,
    insights: true,
    offers: false,
  });

  const [pushNotifications, setPushNotifications] = useState({
    tips: true,
    reminders: true,
  });

  const [monthlySummary, setMonthlySummary] = useState(true);

  const handleSaveNotifications = () => {
    const settings = {
      emailNotifications,
      pushNotifications,
      monthlySummary
    };
    console.log('Notification settings saved:', settings);
    onUpdate();
  };

  const handleResetNotifications = () => {
    setEmailNotifications({
      transactions: true,
      insights: true,
      offers: false,
    });
    setPushNotifications({
      tips: true,
      reminders: true,
    });
    setMonthlySummary(true);
  };

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-semibold">Notification Settings</h2>

      {/* Email Notifications */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-xl">Email Notifications</CardTitle>
            <CardDescription>Manage updates sent to your email</CardDescription>
          </div>
          <div>
            <Mail className="h-5 w-5 text-muted-foreground" />
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">Transaction Alerts</h4>
              <p className="text-sm text-muted-foreground">
                Receive email notifications for large or unusual transactions
              </p>
            </div>
            <Switch 
              checked={emailNotifications.transactions} 
              onCheckedChange={(checked) => setEmailNotifications({...emailNotifications, transactions: checked})}
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">Weekly Insights</h4>
              <p className="text-sm text-muted-foreground">
                Get weekly analysis of your spending habits
              </p>
            </div>
            <Switch 
              checked={emailNotifications.insights} 
              onCheckedChange={(checked) => setEmailNotifications({...emailNotifications, insights: checked})}
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">Promotional Offers</h4>
              <p className="text-sm text-muted-foreground">
                Exclusive deals and special offers from Finthory
              </p>
            </div>
            <Switch 
              checked={emailNotifications.offers} 
              onCheckedChange={(checked) => setEmailNotifications({...emailNotifications, offers: checked})}
            />
          </div>
        </CardContent>
      </Card>

      {/* Push Notifications */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-xl">Push Notifications</CardTitle>
            <CardDescription>Manage browser notifications</CardDescription>
          </div>
          <div>
            <Bell className="h-5 w-5 text-muted-foreground" />
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">Financial Tips</h4>
              <p className="text-sm text-muted-foreground">
                Timely tips based on your spending patterns
              </p>
            </div>
            <Switch 
              checked={pushNotifications.tips} 
              onCheckedChange={(checked) => setPushNotifications({...pushNotifications, tips: checked})}
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">Budget Reminders</h4>
              <p className="text-sm text-muted-foreground">
                Be notified when approaching budget limits
              </p>
            </div>
            <Switch 
              checked={pushNotifications.reminders} 
              onCheckedChange={(checked) => setPushNotifications({...pushNotifications, reminders: checked})}
            />
          </div>
        </CardContent>
      </Card>

      {/* Monthly Summary */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-xl">Monthly Summary Report</CardTitle>
            <CardDescription>Comprehensive monthly financial report</CardDescription>
          </div>
          <div>
            <FileText className="h-5 w-5 text-muted-foreground" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">Enable Monthly Report</h4>
              <p className="text-sm text-muted-foreground">
                Receive a detailed summary of your finances at the end of each month
              </p>
            </div>
            <Switch 
              checked={monthlySummary} 
              onCheckedChange={setMonthlySummary}
            />
          </div>
        </CardContent>
      </Card>

      {/* Save/Reset Buttons */}
      <div className="flex justify-between">
        <Button variant="outline" onClick={handleResetNotifications}>Reset to Default</Button>
        <Button onClick={handleSaveNotifications}>Save Settings</Button>
      </div>
    </div>
  );
};

export default NotificationSettings;
