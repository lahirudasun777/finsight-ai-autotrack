
import { faker } from '@faker-js/faker';

// Define transaction categories
const categories = [
  'Food & Dining', 
  'Transportation', 
  'Shopping', 
  'Entertainment', 
  'Bills & Utilities', 
  'Subscriptions', 
  'Travel', 
  'Health', 
  'Income'
];

// Define merchants by category
const merchantsByCategory: Record<string, string[]> = {
  'Food & Dining': ['Starbucks', 'McDonald\'s', 'Chipotle', 'Uber Eats', 'Whole Foods', 'Local Restaurant'],
  'Transportation': ['Uber', 'Lyft', 'Shell', 'Chevron', 'Public Transit', 'Parking Fee'],
  'Shopping': ['Amazon', 'Target', 'Walmart', 'Best Buy', 'Apple Store', 'Nike'],
  'Entertainment': ['Netflix', 'Spotify', 'AMC Theaters', 'GameStop', 'Steam', 'Disney+'],
  'Bills & Utilities': ['AT&T', 'Verizon', 'Comcast', 'PG&E', 'Water Bill', 'Electricity Provider'],
  'Subscriptions': ['Adobe', 'Microsoft', 'Amazon Prime', 'YouTube Premium', 'Gym Membership', 'New York Times'],
  'Travel': ['Airbnb', 'Marriott', 'United Airlines', 'Expedia', 'Hertz', 'American Airlines'],
  'Health': ['CVS', 'Walgreens', 'Fitness App', 'Doctor Visit', 'Pharmacy', 'Dental Care'],
  'Income': ['Salary Deposit', 'Freelance Payment', 'Investment Return', 'Venmo Transfer', 'Tax Refund', 'Bonus']
};

// Define source types
const sourceTypes = ['bank', 'email', 'sms', 'manual'];

// Define recurring items
const recurringItems = [
  'Netflix',
  'Spotify',
  'Gym Membership',
  'Adobe',
  'Microsoft',
  'Amazon Prime',
  'YouTube Premium',
  'Internet Provider',
  'Phone Bill',
  'Insurance'
];

interface MockTransaction {
  id: string;
  merchantName: string;
  amount: number;
  date: string;
  category: string;
  description: string;
  isRecurring: boolean;
  hasReceipt: boolean;
  source: string;
  originalMessage?: string;
  aiInsight?: string;
}

// Generate a mock transaction
const generateTransaction = (date?: Date): MockTransaction => {
  // Select a random category
  const category = faker.helpers.arrayElement(categories);
  
  // Select a merchant for that category
  const merchantName = faker.helpers.arrayElement(merchantsByCategory[category]);
  
  // Determine if it's recurring
  const isRecurring = recurringItems.some(item => merchantName.toLowerCase().includes(item.toLowerCase()));
  
  // Generate amount based on category (Income is positive, others are negative)
  let amount: number;
  if (category === 'Income') {
    amount = parseFloat(faker.finance.amount(500, 5000, 2));
  } else {
    amount = -parseFloat(faker.finance.amount(5, 500, 2));
  }
  
  // Generate transaction date
  const transactionDate = date || faker.date.recent({ days: 60 });
  
  // Generate AI insight for some transactions
  let aiInsight;
  if (faker.datatype.boolean(0.3)) {
    const insights = [
      `This is ${isRecurring ? 'a recurring payment' : 'higher than your usual spending'} at ${merchantName}.`,
      `You've spent ${Math.abs(amount) > 100 ? 'significantly more' : 'about the same'} compared to last month in this category.`,
      `This merchant has increased their price by ${faker.number.int({ min: 5, max: 25 })}% since your last visit.`,
      `This is your ${faker.number.int({ min: 2, max: 5 })}th transaction at ${merchantName} this month.`,
      `Based on your spending patterns, you might want to consider setting a budget for ${category.toLowerCase()}.`
    ];
    aiInsight = faker.helpers.arrayElement(insights);
  }
  
  return {
    id: faker.string.uuid(),
    merchantName,
    amount,
    date: transactionDate.toISOString(),
    category,
    description: faker.helpers.arrayElement([
      `Purchase at ${merchantName}`, 
      `Payment to ${merchantName}`,
      `${category} expense`,
      `${isRecurring ? 'Monthly' : 'One-time'} ${category.toLowerCase()} payment`,
      `${merchantName} - ${faker.location.city()}`
    ]),
    isRecurring,
    hasReceipt: faker.datatype.boolean(0.3),
    source: faker.helpers.arrayElement(sourceTypes),
    aiInsight
  };
};

// Generate transactions for the past few months, with more recent dates having more transactions
export const generateMockTransactions = (): MockTransaction[] => {
  const transactions: MockTransaction[] = [];
  
  // Current month: 30-45 transactions
  const currentMonthCount = faker.number.int({ min: 30, max: 45 });
  
  // Previous month: 25-40 transactions
  const prevMonthCount = faker.number.int({ min: 25, max: 40 });
  
  // Two months ago: 15-30 transactions
  const twoMonthsAgoCount = faker.number.int({ min: 15, max: 30 });
  
  // Generate current month transactions
  const now = new Date();
  for (let i = 0; i < currentMonthCount; i++) {
    const date = faker.date.between({ 
      from: new Date(now.getFullYear(), now.getMonth(), 1), 
      to: now 
    });
    transactions.push(generateTransaction(date));
  }
  
  // Generate previous month transactions
  for (let i = 0; i < prevMonthCount; i++) {
    const date = faker.date.between({ 
      from: new Date(now.getFullYear(), now.getMonth() - 1, 1), 
      to: new Date(now.getFullYear(), now.getMonth(), 0) 
    });
    transactions.push(generateTransaction(date));
  }
  
  // Generate transactions from two months ago
  for (let i = 0; i < twoMonthsAgoCount; i++) {
    const date = faker.date.between({ 
      from: new Date(now.getFullYear(), now.getMonth() - 2, 1), 
      to: new Date(now.getFullYear(), now.getMonth() - 1, 0) 
    });
    transactions.push(generateTransaction(date));
  }
  
  // Sort transactions by date, newest first
  transactions.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  
  return transactions;
};
