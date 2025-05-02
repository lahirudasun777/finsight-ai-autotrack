
import { faker } from '@faker-js/faker';

// Generate overview data with income, expenses, and predicted balance
export const generateMockOverviewData = (timeRange: string) => {
  // Base values that will be adjusted based on time range
  const baseIncome = 4500;
  const baseExpenses = 3200;
  
  // Adjust multipliers based on time range
  let multiplier = 1;
  switch(timeRange) {
    case 'week':
      multiplier = 0.25;
      break;
    case 'month':
      multiplier = 1;
      break;
    case 'quarter':
      multiplier = 3;
      break;
    case 'year':
      multiplier = 12;
      break;
    default:
      multiplier = 1;
  }
  
  const income = baseIncome * multiplier * (0.9 + Math.random() * 0.2);
  const expenses = baseExpenses * multiplier * (0.85 + Math.random() * 0.3);
  const predictedBalance = income - expenses + (income * 0.05);
  
  // Generate realistic changes (-15% to +15%)
  const incomeChange = faker.number.int({ min: -15, max: 15 });
  const expensesChange = faker.number.int({ min: -10, max: 20 });
  const balanceChange = incomeChange - expensesChange;
  
  return {
    income,
    expenses,
    predictedBalance,
    incomeChange,
    expensesChange,
    balanceChange
  };
};

// Generate category spending breakdown
export const generateMockCategoryData = (timeRange: string) => {
  // Define categories and their relative weights
  const categories = [
    { name: 'Housing', weight: 30 },
    { name: 'Food', weight: 15 },
    { name: 'Transportation', weight: 10 },
    { name: 'Entertainment', weight: 8 },
    { name: 'Shopping', weight: 12 },
    { name: 'Health', weight: 7 },
    { name: 'Utilities', weight: 10 },
    { name: 'Subscriptions', weight: 8 }
  ];
  
  // Get base expenses from overview
  const { expenses } = generateMockOverviewData(timeRange);
  
  // Calculate total weights
  const totalWeight = categories.reduce((sum, cat) => sum + cat.weight, 0);
  
  // Generate data
  const data = categories.map(category => {
    // Calculate base value from weight
    const baseValue = (category.weight / totalWeight) * expenses;
    
    // Add some randomness (±10%)
    const randomFactor = 0.9 + Math.random() * 0.2;
    const value = baseValue * randomFactor;
    
    // Calculate percentage
    const percentage = ((value / expenses) * 100).toFixed(1);
    
    return {
      name: category.name,
      value: Math.round(value * 100) / 100, // Round to 2 decimal places
      percentage
    };
  });
  
  return data;
};

// Generate AI insights
export const generateMockInsights = (timeRange: string) => {
  const timeframeText = timeRange === 'week' 
    ? 'this week' 
    : timeRange === 'month' 
      ? 'this month' 
      : timeRange === 'quarter' 
        ? 'this quarter' 
        : 'this year';

  const insights = [
    {
      type: 'increase',
      text: `You're spending ${faker.number.int({ min: 12, max: 35 })}% more on subscriptions ${timeframeText}.`,
      subtext: 'Consider reviewing your recurring payments.'
    },
    {
      type: 'decrease',
      text: `Groceries dropped by $${faker.number.int({ min: 40, max: 120 })} compared to last ${timeRange}.`,
      subtext: 'Great job on reducing food expenses!'
    },
    {
      type: 'alert',
      text: `High transaction detected: $${faker.number.int({ min: 500, max: 1200 })} on ${faker.commerce.department()}.`,
      subtext: null
    },
    {
      type: 'info',
      text: `Your average daily spending is $${faker.number.int({ min: 30, max: 150 })}, ${faker.number.int({ min: 5, max: 20 })}% ${faker.datatype.boolean() ? 'higher' : 'lower'} than usual.`,
      subtext: null
    },
    {
      type: faker.datatype.boolean() ? 'increase' : 'decrease',
      text: `Your ${faker.commerce.department()} spending ${faker.datatype.boolean() ? 'increased' : 'decreased'} by ${faker.number.int({ min: 8, max: 25 })}%.`,
      subtext: faker.datatype.boolean() ? 'This category has been trending up recently.' : null
    }
  ];
  
  // Shuffle and take first 4
  return shuffleArray(insights).slice(0, 4);
};

// Generate recurring expenses data
export const generateMockRecurringData = (timeRange: string) => {
  // Common recurring expenses
  const recurringItems = [
    { name: 'Rent/Mortgage', base: 1200 },
    { name: 'Utilities', base: 200 },
    { name: 'Phone Bill', base: 80 },
    { name: 'Internet', base: 70 },
    { name: 'Streaming Services', base: 50 },
    { name: 'Gym Membership', base: 40 },
    { name: 'Insurance', base: 120 }
  ];
  
  return recurringItems
    .map(item => ({
      name: item.name,
      amount: roundToDecimal(item.base * (0.95 + Math.random() * 0.1), 2)
    }))
    .sort((a, b) => b.amount - a.amount);
};

// Generate largest expenses
export const generateMockLargestExpenses = (timeRange: string) => {
  const largestExpenses = [];
  
  // Create between 5-7 large expenses
  for (let i = 0; i < 5; i++) {
    const category = faker.helpers.arrayElement([
      'Housing', 'Transportation', 'Shopping', 'Travel', 
      'Electronics', 'Healthcare', 'Food & Dining'
    ]);
    
    // Generate amount based on category
    let amount;
    switch(category) {
      case 'Housing':
        amount = faker.number.int({ min: 800, max: 2000 });
        break;
      case 'Electronics':
        amount = faker.number.int({ min: 300, max: 1500 });
        break;
      case 'Travel':
        amount = faker.number.int({ min: 400, max: 2000 });
        break;
      default:
        amount = faker.number.int({ min: 100, max: 500 });
    }
    
    // Make it negative since it's an expense
    amount = -Math.abs(amount);
    
    // Create appropriate merchant name based on category
    let merchantName;
    switch(category) {
      case 'Housing':
        merchantName = 'Rent Payment';
        break;
      case 'Transportation':
        merchantName = faker.helpers.arrayElement(['Car Repair Shop', 'Dealership', 'Auto Insurance']);
        break;
      case 'Shopping':
        merchantName = faker.company.name();
        break;
      case 'Travel':
        merchantName = faker.helpers.arrayElement(['Airline Tickets', 'Hotel Stay', 'Travel Agency']);
        break;
      case 'Electronics':
        merchantName = faker.helpers.arrayElement(['Apple Store', 'Best Buy', 'Amazon']);
        break;
      case 'Healthcare':
        merchantName = faker.helpers.arrayElement(['Medical Center', 'Hospital Bill', 'Pharmacy']);
        break;
      default:
        merchantName = faker.company.name();
    }
    
    // Generate a date within the specified time range
    let date;
    const now = new Date();
    switch(timeRange) {
      case 'week':
        date = faker.date.recent({ days: 7 });
        break;
      case 'month':
        date = faker.date.recent({ days: 30 });
        break;
      case 'quarter':
        date = faker.date.recent({ days: 90 });
        break;
      case 'year':
        date = faker.date.recent({ days: 365 });
        break;
      default:
        date = faker.date.recent({ days: 30 });
    }
    
    largestExpenses.push({
      merchantName,
      amount,
      date: date.toISOString(),
      category
    });
  }
  
  // Sort by absolute amount (largest first)
  return largestExpenses.sort((a, b) => Math.abs(b.amount) - Math.abs(a.amount));
};

// Helper function to shuffle an array
function shuffleArray(array: any[]) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

// Helper function to round to specific decimal places
function roundToDecimal(value: number, decimals: number) {
  const factor = Math.pow(10, decimals);
  return Math.round(value * factor) / factor;
}
