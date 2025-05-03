
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAuth } from '@/contexts/AuthContext';
import AccountSettings from '@/components/settings/AccountSettings';
import AppPreferences from '@/components/settings/AppPreferences';
import NotificationSettings from '@/components/settings/NotificationSettings';
import PrivacySecurity from '@/components/settings/PrivacySecurity';
import SubscriptionBilling from '@/components/settings/SubscriptionBilling';
import InsightsSettings from '@/components/settings/InsightsSettings';
import { useToast } from '@/components/ui/use-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Settings = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('account');
  const { toast } = useToast();

  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  const handleSettingsUpdate = (section: string) => {
    toast({
      title: "Settings Updated",
      description: `Your ${section} settings have been saved successfully.`,
      duration: 3000,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container py-8">
        <h1 className="text-3xl font-bold mb-6">Settings</h1>
        
        <div className="bg-white rounded-lg shadow-sm border">
          <Tabs 
            defaultValue="account" 
            value={activeTab} 
            onValueChange={handleTabChange}
            className="w-full"
          >
            <div className="flex flex-col md:flex-row">
              <div className="md:w-64 border-r">
                <TabsList className="flex md:flex-col h-auto p-0 bg-transparent">
                  <TabsTrigger 
                    value="account" 
                    className="justify-start w-full rounded-none border-b md:border-b-0 md:border-r-2 px-4 py-3 data-[state=active]:border-primary data-[state=active]:bg-muted"
                  >
                    Account Settings
                  </TabsTrigger>
                  <TabsTrigger 
                    value="preferences" 
                    className="justify-start w-full rounded-none border-b md:border-b-0 md:border-r-2 px-4 py-3 data-[state=active]:border-primary data-[state=active]:bg-muted"
                  >
                    App Preferences
                  </TabsTrigger>
                  <TabsTrigger 
                    value="notifications" 
                    className="justify-start w-full rounded-none border-b md:border-b-0 md:border-r-2 px-4 py-3 data-[state=active]:border-primary data-[state=active]:bg-muted"
                  >
                    Notification Settings
                  </TabsTrigger>
                  <TabsTrigger 
                    value="privacy" 
                    className="justify-start w-full rounded-none border-b md:border-b-0 md:border-r-2 px-4 py-3 data-[state=active]:border-primary data-[state=active]:bg-muted"
                  >
                    Privacy & Security
                  </TabsTrigger>
                  <TabsTrigger 
                    value="subscription" 
                    className="justify-start w-full rounded-none border-b md:border-b-0 md:border-r-2 px-4 py-3 data-[state=active]:border-primary data-[state=active]:bg-muted"
                  >
                    Subscription & Billing
                  </TabsTrigger>
                  <TabsTrigger 
                    value="insights" 
                    className="justify-start w-full rounded-none md:border-r-2 px-4 py-3 data-[state=active]:border-primary data-[state=active]:bg-muted"
                  >
                    Insights Settings
                  </TabsTrigger>
                </TabsList>
              </div>
              
              <div className="flex-1 p-6">
                <TabsContent value="account" className="m-0">
                  <AccountSettings user={user} onUpdate={() => handleSettingsUpdate('account')} />
                </TabsContent>
                <TabsContent value="preferences" className="m-0">
                  <AppPreferences onUpdate={() => handleSettingsUpdate('preferences')} />
                </TabsContent>
                <TabsContent value="notifications" className="m-0">
                  <NotificationSettings onUpdate={() => handleSettingsUpdate('notification')} />
                </TabsContent>
                <TabsContent value="privacy" className="m-0">
                  <PrivacySecurity onUpdate={() => handleSettingsUpdate('privacy and security')} />
                </TabsContent>
                <TabsContent value="subscription" className="m-0">
                  <SubscriptionBilling onUpdate={() => handleSettingsUpdate('subscription')} />
                </TabsContent>
                <TabsContent value="insights" className="m-0">
                  <InsightsSettings onUpdate={() => handleSettingsUpdate('insights')} />
                </TabsContent>
              </div>
            </div>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Settings;
