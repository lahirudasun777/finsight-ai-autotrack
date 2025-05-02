
import React from 'react';
import { Button } from '@/components/ui/button';

const CTASection: React.FC = () => {
  return (
    <section className="py-16 bg-finsight-primary dark:bg-finsight-dark">
      <div className="container px-4 md:px-6 text-center">
        <div className="mx-auto max-w-[800px] space-y-6">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-white">
            Ready to simplify your financial life?
          </h2>
          <p className="text-white/80 md:text-xl/relaxed mx-auto max-w-[600px]">
            Join thousands of users who have already discovered the power of automated financial tracking.
          </p>
          <div className="flex flex-col gap-3 min-[400px]:flex-row justify-center pt-4">
            <Button size="lg" className="bg-white text-finsight-primary hover:bg-gray-100">
              Get Started for Free
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/20">
              Schedule a Demo
            </Button>
          </div>
          <p className="text-sm text-white/60 pt-4">
            No credit card required. Free plan includes up to 100 transactions per month.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
