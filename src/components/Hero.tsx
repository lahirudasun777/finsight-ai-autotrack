
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  return (
    <section className="py-20 md:py-32 overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-6 animate-fade-in">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                <span className="gradient-text">Your Finance, Simplified.</span>
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Track everything. Touch nothing. Your wallet's new best friend.
              </p>
            </div>
            <div className="space-y-3">
              <p className="max-w-[600px] text-gray-600 dark:text-gray-400">
                FinSight is a zero-input, AI-powered personal finance tracker that automatically reads your bank alerts, SMS, and email receipts to build budgets, track spending, and forecast your financial future — all with zero effort.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" className="bg-finsight-primary hover:bg-finsight-dark">
                Start for Free
              </Button>
              <Button size="lg" variant="outline" className="border-finsight-primary text-finsight-primary hover:bg-finsight-light">
                How it Works
              </Button>
            </div>
          </div>
          <div className="mx-auto w-full max-w-[500px] aspect-video lg:max-w-none animate-float">
            <div className="relative w-full h-full bg-gradient-to-br from-finsight-primary to-finsight-secondary rounded-lg p-1">
              <div className="absolute inset-[3px] bg-white dark:bg-gray-950 rounded-md overflow-hidden flex items-center justify-center">
                <div className="p-4 md:p-8">
                  <img 
                    src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                    alt="Financial dashboard preview" 
                    className="rounded-md shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
