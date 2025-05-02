
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChartBar, Wallet, Calendar } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-10">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-6">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
              <p className="text-gray-500 mt-1">Welcome to your FinSight dashboard!</p>
            </div>
            <Button className="bg-finsight-secondary hover:bg-finsight-secondary/90">
              Connect Account
            </Button>
          </div>
          
          <div className="grid gap-6 grid-cols-1 md:grid-cols-3 mb-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Total Balance</CardTitle>
                <Wallet className="h-4 w-4 text-finsight-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$12,580.35</div>
                <p className="text-sm text-green-600 mt-1">+2.5% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Monthly Spending</CardTitle>
                <ChartBar className="h-4 w-4 text-finsight-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$3,240.80</div>
                <p className="text-sm text-red-600 mt-1">+12.3% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Upcoming Bills</CardTitle>
                <Calendar className="h-4 w-4 text-finsight-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$580.00</div>
                <p className="text-sm text-gray-500 mt-1">Due this week</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid gap-6 grid-cols-1 lg:grid-cols-2 mb-6">
            <Card className="col-span-1 lg:col-span-2">
              <CardHeader>
                <CardTitle>Get Started with FinSight</CardTitle>
                <CardDescription>Complete these steps to set up your account</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="bg-finsight-light dark:bg-finsight-primary/20 rounded-full p-2">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-finsight-primary text-white">
                        1
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-medium">Connect your email account</h3>
                      <p className="text-gray-500">Allow FinSight to securely read your financial emails</p>
                    </div>
                    <Button>Connect</Button>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="bg-finsight-light dark:bg-finsight-primary/20 rounded-full p-2">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-finsight-primary text-white">
                        2
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-medium">Set up SMS integration</h3>
                      <p className="text-gray-500">Connect to receive and process bank alerts via SMS</p>
                    </div>
                    <Button variant="outline">Setup</Button>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="bg-finsight-light dark:bg-finsight-primary/20 rounded-full p-2">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-finsight-primary text-white">
                        3
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-medium">Personalize your experience</h3>
                      <p className="text-gray-500">Set your preferences and financial goals</p>
                    </div>
                    <Button variant="outline">Customize</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="flex items-center justify-center pt-10 pb-6">
            <div className="text-center max-w-md">
              <h3 className="text-lg font-medium mb-2">More coming soon!</h3>
              <p className="text-sm text-gray-500">
                The dashboard is currently in development. Connect your accounts to start seeing your financial data here!
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
