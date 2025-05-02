
import React, { useState } from 'react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { 
  Card,
  CardContent
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  ChevronDown, 
  ChevronUp, 
  Repeat, 
  Edit, 
  Paperclip, 
  EyeOff, 
  Trash2, 
  CircleDollarSign 
} from 'lucide-react';
import TransactionDetails from './TransactionDetails';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { mockTransactions } from '@/lib/mockTransactions';

interface TransactionsListProps {
  filters: {
    searchTerm: string;
    dateRange: string;
    category: string;
    amountRange: { min: number; max: number };
    source: string;
  };
}

const TransactionsList: React.FC<TransactionsListProps> = ({ filters }) => {
  const [expandedTransaction, setExpandedTransaction] = useState<string | null>(null);
  const [selectedTransactions, setSelectedTransactions] = useState<string[]>([]);
  const [privacyMode, setPrivacyMode] = useState(false);
  
  // In a real app, this would be fetched from API based on filters
  const transactions = mockTransactions;
  
  const toggleExpand = (id: string) => {
    if (expandedTransaction === id) {
      setExpandedTransaction(null);
    } else {
      setExpandedTransaction(id);
    }
  };
  
  const toggleSelectTransaction = (id: string) => {
    if (selectedTransactions.includes(id)) {
      setSelectedTransactions(selectedTransactions.filter(txId => txId !== id));
    } else {
      setSelectedTransactions([...selectedTransactions, id]);
    }
  };
  
  const handleBulkDelete = () => {
    console.log('Deleting transactions:', selectedTransactions);
    // Implementation for bulk delete
    setSelectedTransactions([]);
  };
  
  // Filter transactions based on filters
  const filteredTransactions = transactions.filter(tx => {
    // Search term filter (merchant name or description)
    if (filters.searchTerm && !tx.merchantName.toLowerCase().includes(filters.searchTerm.toLowerCase()) && 
        !tx.description.toLowerCase().includes(filters.searchTerm.toLowerCase())) {
      return false;
    }
    
    // Category filter
    if (filters.category !== 'all' && tx.category !== filters.category) {
      return false;
    }
    
    // Source filter
    if (filters.source !== 'all' && tx.source !== filters.source) {
      return false;
    }
    
    // Amount range filter
    if (tx.amount < filters.amountRange.min || tx.amount > filters.amountRange.max) {
      return false;
    }
    
    // Date range filter would be implemented here
    
    return true;
  });
  
  // Group transactions by month
  const groupByMonth = (transactions: any[]) => {
    return transactions.reduce((groups: any, transaction) => {
      const date = new Date(transaction.date);
      const month = date.toLocaleString('default', { month: 'long', year: 'numeric' });
      
      if (!groups[month]) {
        groups[month] = [];
      }
      groups[month].push(transaction);
      
      return groups;
    }, {});
  };
  
  const groupedTransactions = groupByMonth(filteredTransactions);
  
  const getCategoryIcon = (category: string) => {
    // This would return the appropriate icon based on category
    return <CircleDollarSign className="h-5 w-5" />;
  };
  
  const getAmountColor = (amount: number) => {
    return amount < 0 ? 'text-red-500' : 'text-green-500';
  };
  
  return (
    <div className="space-y-6">
      {selectedTransactions.length > 0 && (
        <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg flex justify-between items-center">
          <span>{selectedTransactions.length} transactions selected</span>
          <div className="flex gap-2">
            <Button 
              variant="destructive" 
              size="sm" 
              onClick={handleBulkDelete}
              className="flex items-center gap-1"
            >
              <Trash2 className="h-4 w-4" />
              <span>Delete</span>
            </Button>
          </div>
        </div>
      )}
      
      <div className="flex justify-between items-center">
        <div className="text-sm text-gray-500">
          {filteredTransactions.length} transactions found
        </div>
        <Button 
          variant="outline" 
          size="sm" 
          onClick={() => setPrivacyMode(!privacyMode)}
          className="flex items-center gap-1"
        >
          <EyeOff className="h-4 w-4" />
          <span>{privacyMode ? 'Show Amounts' : 'Hide Amounts'}</span>
        </Button>
      </div>
      
      {Object.keys(groupedTransactions).length > 0 ? (
        Object.entries(groupedTransactions).map(([month, transactions]: [string, any]) => (
          <div key={month} className="space-y-2">
            <h3 className="text-lg font-semibold sticky top-16 bg-white dark:bg-gray-900 py-2 z-10">
              {month}
            </h3>
            
            <Card>
              <CardContent className="p-0">
                <Table>
                  <TableBody>
                    {transactions.map((transaction: any) => (
                      <React.Fragment key={transaction.id}>
                        <TableRow className="cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800">
                          <TableCell className="w-6">
                            <input
                              type="checkbox"
                              checked={selectedTransactions.includes(transaction.id)}
                              onChange={() => toggleSelectTransaction(transaction.id)}
                              onClick={(e) => e.stopPropagation()}
                              className="rounded"
                            />
                          </TableCell>
                          <TableCell className="w-10">
                            <div className="rounded-full bg-gray-100 dark:bg-gray-800 p-2">
                              {getCategoryIcon(transaction.category)}
                            </div>
                          </TableCell>
                          <TableCell 
                            className="w-full"
                            onClick={() => toggleExpand(transaction.id)}
                          >
                            <div>
                              <div className="font-medium">{transaction.merchantName}</div>
                              <div className="text-sm text-gray-500">
                                {transaction.description}
                              </div>
                              <div className="flex gap-2 mt-1">
                                {transaction.isRecurring && (
                                  <Badge variant="outline" className="flex items-center gap-1 bg-blue-50 text-blue-700 border-blue-200">
                                    <Repeat className="h-3 w-3" /> Recurring
                                  </Badge>
                                )}
                                <Badge variant="outline" className="bg-gray-50 text-gray-700 border-gray-200">
                                  {transaction.category}
                                </Badge>
                                {transaction.hasReceipt && (
                                  <Badge variant="outline" className="flex items-center gap-1 bg-gray-50 text-gray-700 border-gray-200">
                                    <Paperclip className="h-3 w-3" /> Receipt
                                  </Badge>
                                )}
                              </div>
                            </div>
                          </TableCell>
                          <TableCell 
                            className="text-right whitespace-nowrap"
                            onClick={() => toggleExpand(transaction.id)}
                          >
                            <div>
                              <div 
                                className={`font-medium ${getAmountColor(transaction.amount)}`}
                              >
                                {privacyMode ? (
                                  <span className="blur-sm hover:blur-none transition-all">
                                    ${Math.abs(transaction.amount).toFixed(2)}
                                  </span>
                                ) : (
                                  `$${Math.abs(transaction.amount).toFixed(2)}`
                                )}
                              </div>
                              <div className="text-xs text-gray-500">
                                {new Date(transaction.date).toLocaleDateString()}
                              </div>
                            </div>
                          </TableCell>
                          <TableCell className="w-10">
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              onClick={() => toggleExpand(transaction.id)}
                              className="p-0 h-auto"
                            >
                              {expandedTransaction === transaction.id ? (
                                <ChevronUp className="h-5 w-5 text-gray-500" />
                              ) : (
                                <ChevronDown className="h-5 w-5 text-gray-500" />
                              )}
                            </Button>
                          </TableCell>
                        </TableRow>
                        <Collapsible open={expandedTransaction === transaction.id}>
                          <CollapsibleContent>
                            <TransactionDetails transaction={transaction} />
                          </CollapsibleContent>
                        </Collapsible>
                      </React.Fragment>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        ))
      ) : (
        <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg text-center">
          <p className="text-gray-500 dark:text-gray-400">No transactions found matching your filters.</p>
        </div>
      )}
    </div>
  );
};

export default TransactionsList;
