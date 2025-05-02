
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const pricingPlans = [
  {
    title: "Free",
    price: "$0",
    description: "For individuals just starting out",
    features: [
      "Core transaction tracking",
      "Basic insights",
      "Up to 100 transactions/month",
      "Email support",
      "Single account connection",
    ],
    cta: "Start Free",
    popular: false
  },
  {
    title: "Pro",
    price: "$3.99",
    description: "For personal finance enthusiasts",
    features: [
      "Unlimited transactions",
      "Smart alerts & notifications",
      "PDF invoice storage",
      "AI forecasting",
      "Multiple account connections",
      "Priority support"
    ],
    cta: "Go Pro",
    popular: true
  },
  {
    title: "Business",
    price: "$9.99",
    description: "For small teams and businesses",
    features: [
      "Everything in Pro",
      "Multiple user accounts",
      "Team finance tracking",
      "Custom categories",
      "API integrations",
      "Dedicated support",
      "Advanced analytics"
    ],
    cta: "Start Trial",
    popular: false
  }
];

const Pricing: React.FC = () => {
  return (
    <section className="py-16" id="pricing">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-finsight-light px-3 py-1 text-sm text-finsight-primary dark:bg-finsight-primary/20 dark:text-finsight-secondary">
              Pricing
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Simple, transparent pricing
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
              Choose the plan that's right for you
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index} 
              className={`flex flex-col p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg border transition-transform ${
                plan.popular ? 'border-finsight-secondary scale-105 relative' : 'border-gray-200 dark:border-gray-700'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 -mr-2 -mt-2 bg-finsight-secondary text-white text-xs font-medium px-3 py-1 rounded-full">
                  Popular
                </div>
              )}
              <div className="mb-4">
                <h3 className="text-xl font-bold">{plan.title}</h3>
                <div className="mt-2 flex items-baseline">
                  <span className="text-3xl font-extrabold">{plan.price}</span>
                  <span className="ml-1 text-sm text-gray-500 dark:text-gray-400">/mo</span>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{plan.description}</p>
              </div>
              <ul className="mb-6 flex-1 space-y-2">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="h-4 w-4 text-finsight-accent mr-2" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button 
                className={`mt-auto w-full ${
                  plan.popular 
                    ? 'bg-finsight-secondary hover:bg-finsight-secondary/90' 
                    : 'bg-finsight-primary hover:bg-finsight-primary/90'
                }`}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
