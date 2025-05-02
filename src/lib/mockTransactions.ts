import { faker } from '@faker-js/faker';

interface Transaction {
  id: string;
  date: string;
  description: string;
  amount: number;
  category: string;
  source: string;
}

const generateTransaction = (): Transaction => {
  const amount = faker.number.float({ min: 5, max: 1000, precision: 2 });
  const type = faker.helpers.arrayElement(['income', 'expense']);
  const actualAmount = type === 'expense' ? -amount : amount;
  const date = faker.date.between({ from: '2023-01-01', to: '2023-12-31' });

  return {
    id: faker.string.uuid(),
    date: faker.date.toLocaleDateString(date),
    description: faker.commerce.productName(),
    amount: actualAmount,
    category: faker.commerce.department(),
    source: faker.company.name(),
  };
};

export const mockTransactions = Array.from({ length: 50 }, () => generateTransaction());

// Mock data for insights
export const mockInsightsData = {
  totalIncome: faker.number.float({ min: 5000, max: 10000, precision: 2 }),
  totalExpenses: faker.number.float({ min: 3000, max: 8000, precision: 2 }),
  netBalance: faker.number.float({ min: -2000, max: 5000, precision: 2 }),
  incomeByCategory: [
    { category: 'Salary', amount: faker.number.float({ min: 3000, max: 6000, precision: 2 }) },
    { category: 'Investments', amount: faker.number.float({ min: 1000, max: 3000, precision: 2 }) },
    { category: 'Other', amount: faker.number.float({ min: 500, max: 1500, precision: 2 }) },
  ],
  expensesByCategory: [
    { category: 'Housing', amount: faker.number.float({ min: 1000, max: 2500, precision: 2 }) },
    { category: 'Food', amount: faker.number.float({ min: 500, max: 1500, precision: 2 }) },
    { category: 'Transportation', amount: faker.number.float({ min: 300, max: 800, precision: 2 }) },
    { category: 'Entertainment', amount: faker.number.float({ min: 200, max: 600, precision: 2 }) },
    { category: 'Other', amount: faker.number.float({ min: 300, max: 1000, precision: 2 }) },
  ],
  recurringExpenses: [
    { name: 'Rent', amount: faker.number.float({ min: 1000, max: 2500, precision: 2 }), dueDate: faker.date.future() },
    { name: 'Internet', amount: faker.number.float({ min: 50, max: 150, precision: 2 }), dueDate: faker.date.future() },
    { name: 'Subscription', amount: faker.number.float({ min: 20, max: 100, precision: 2 }), dueDate: faker.date.future() },
  ],
  largestExpenses: Array.from({ length: 5 }, () => ({
    name: faker.commerce.productName(),
    amount: faker.number.float({ min: 100, max: 500, precision: 2 }),
    date: faker.date.toLocaleDateString(faker.date.between({ from: '2023-01-01', to: '2023-12-31' })),
  })),
};
