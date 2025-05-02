
import { faker } from '@faker-js/faker';

export interface Transaction {
  id: string;
  date: string;
  description: string;
  amount: number;
  category: string;
  source: string;
  merchantName: string;
  isRecurring: boolean;
  hasReceipt: boolean;
  originalMessage?: string;
  aiInsight?: string;
}

const generateTransaction = (): Transaction => {
  // Use fractionDigits instead of precision
  const amount = faker.number.float({ min: 5, max: 1000, fractionDigits: 2 });
  const type = faker.helpers.arrayElement(['income', 'expense']);
  const actualAmount = type === 'expense' ? -amount : amount;
  const date = faker.date.between({ from: '2023-01-01', to: '2023-12-31' });
  
  return {
    id: faker.string.uuid(),
    date: date.toLocaleDateString(), // Use the actual Date object's method
    description: faker.commerce.productName(),
    amount: actualAmount,
    category: faker.commerce.department(),
    source: faker.company.name(),
    merchantName: faker.company.name(),
    isRecurring: faker.datatype.boolean(),
    hasReceipt: faker.datatype.boolean()
  };
};

export const mockTransactions = Array.from({ length: 50 }, () => generateTransaction());

// Export the function that generates mock transactions
export const generateMockTransactions = (): Transaction[] => {
  return Array.from({ length: 50 }, () => generateTransaction());
};

// Mock data for insights
export const mockInsightsData = {
  totalIncome: faker.number.float({ min: 5000, max: 10000, fractionDigits: 2 }),
  totalExpenses: faker.number.float({ min: 3000, max: 8000, fractionDigits: 2 }),
  netBalance: faker.number.float({ min: -2000, max: 5000, fractionDigits: 2 }),
  incomeByCategory: [
    { category: 'Salary', amount: faker.number.float({ min: 3000, max: 6000, fractionDigits: 2 }) },
    { category: 'Investments', amount: faker.number.float({ min: 1000, max: 3000, fractionDigits: 2 }) },
    { category: 'Other', amount: faker.number.float({ min: 500, max: 1500, fractionDigits: 2 }) },
  ],
  expensesByCategory: [
    { category: 'Housing', amount: faker.number.float({ min: 1000, max: 2500, fractionDigits: 2 }) },
    { category: 'Food', amount: faker.number.float({ min: 500, max: 1500, fractionDigits: 2 }) },
    { category: 'Transportation', amount: faker.number.float({ min: 300, max: 800, fractionDigits: 2 }) },
    { category: 'Entertainment', amount: faker.number.float({ min: 200, max: 600, fractionDigits: 2 }) },
    { category: 'Other', amount: faker.number.float({ min: 300, max: 1000, fractionDigits: 2 }) },
  ],
  recurringExpenses: [
    { name: 'Rent', amount: faker.number.float({ min: 1000, max: 2500, fractionDigits: 2 }), dueDate: faker.date.future() },
    { name: 'Internet', amount: faker.number.float({ min: 50, max: 150, fractionDigits: 2 }), dueDate: faker.date.future() },
    { name: 'Subscription', amount: faker.number.float({ min: 20, max: 100, fractionDigits: 2 }), dueDate: faker.date.future() },
  ],
  largestExpenses: Array.from({ length: 5 }, () => ({
    name: faker.commerce.productName(),
    amount: faker.number.float({ min: 100, max: 500, fractionDigits: 2 }),
    date: new Date(faker.date.between({ from: '2023-01-01', to: '2023-12-31' })).toLocaleDateString(),
  })),
};
