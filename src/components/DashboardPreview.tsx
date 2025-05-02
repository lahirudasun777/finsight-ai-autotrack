
import React from 'react';
import { Button } from '@/components/ui/button';

const DashboardPreview: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-finsight-light dark:from-gray-950 dark:to-gray-900">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-finsight-light px-3 py-1 text-sm text-finsight-primary dark:bg-finsight-primary/20 dark:text-finsight-secondary">
              Zero-Input Design
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              See your finances clearly without the manual work
            </h2>
            <p className="text-gray-500 md:text-xl/relaxed dark:text-gray-400">
              FinSight automatically analyzes your financial data from emails and text messages, so you never have to manually enter a transaction again.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
              <Button className="bg-finsight-primary hover:bg-finsight-dark">
                Try the Demo
              </Button>
              <Button variant="outline" className="border-finsight-primary text-finsight-primary hover:bg-finsight-light">
                Learn More
              </Button>
            </div>
          </div>
          <div className="mx-auto w-full max-w-[600px]">
            <div className="rounded-lg border bg-white p-2 shadow-lg dark:bg-gray-800 dark:border-gray-700">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="FinSight dashboard" 
                className="w-full h-auto rounded"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">Your finances at a glance</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Beautiful visualizations make complex financial data easy to understand.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;
