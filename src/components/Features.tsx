
import React from 'react';
import { CalendarArrowUp, Wallet, ChartBar, Dollar, FileText, Save, Calendar } from 'lucide-react';

const features = [
  {
    icon: <CalendarArrowUp className="h-10 w-10 text-finsight-secondary" />,
    title: "Auto Extraction",
    description: "Connect Gmail, Outlook, or phone SMS and extract bank transactions and bills using AI parsers."
  },
  {
    icon: <Wallet className="h-10 w-10 text-finsight-secondary" />,
    title: "Privacy-First Architecture",
    description: "All data processed locally or encrypted end-to-end. No central storage unless user allows."
  },
  {
    icon: <ChartBar className="h-10 w-10 text-finsight-secondary" />,
    title: "Smart Spending Summaries",
    description: "Weekly/monthly spending summaries via simple visuals and clear recommendations."
  },
  {
    icon: <Dollar className="h-10 w-10 text-finsight-secondary" />,
    title: "Predictive Insights",
    description: "AI forecasts future expenses, suggests savings goals, and warns about dangerous trends."
  },
  {
    icon: <Calendar className="h-10 w-10 text-finsight-secondary" />,
    title: "Bill & Sub Reminder",
    description: "Detects recurring charges and reminds you before they renew."
  },
  {
    icon: <FileText className="h-10 w-10 text-finsight-secondary" />,
    title: "File Auto-Attach",
    description: "Detects and attaches invoice PDFs, e-receipts, and screenshots for each expense."
  }
];

const Features: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-finsight-light px-3 py-1 text-sm text-finsight-primary dark:bg-finsight-primary/20 dark:text-finsight-secondary">
              Features
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Everything you need, <span className="text-finsight-primary">nothing you don't</span>
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
              No manual entries, no confusing dashboards, no endless categorization. Just insights.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 pt-8 md:pt-12">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center justify-center space-y-4 rounded-lg border bg-white p-4 shadow-sm transition-all duration-300 card-hover-effect dark:bg-gray-800 dark:border-gray-700"
            >
              <div className="rounded-full bg-finsight-light p-2.5 dark:bg-finsight-primary/20">
                {feature.icon}
              </div>
              <div className="space-y-2 text-center">
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
