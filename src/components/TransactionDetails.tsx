
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from '@/components/ui/form';
import { Edit, Save, Paperclip, Calendar, Lightbulb } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useForm } from 'react-hook-form';

interface TransactionDetailsProps {
  transaction: any;
}

const TransactionDetails: React.FC<TransactionDetailsProps> = ({ transaction }) => {
  const [editMode, setEditMode] = useState(false);
  const [showOriginalMessage, setShowOriginalMessage] = useState(false);
  
  // Create a form instance for editing transaction details
  const form = useForm({
    defaultValues: {
      merchantName: transaction.merchantName,
      category: transaction.category,
      amount: transaction.amount.toString(),
      date: transaction.date,
      description: transaction.description,
      isRecurring: transaction.isRecurring,
    }
  });

  const handleEdit = () => {
    setEditMode(!editMode);
  };
  
  const handleSave = () => {
    const values = form.getValues();
    console.log('Saving transaction updates', values);
    setEditMode(false);
  };
  
  const handleUploadReceipt = () => {
    console.log('Upload receipt');
    // Implementation for receipt upload
  };
  
  return (
    <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-b-lg border-t border-gray-200 dark:border-gray-700">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <h4 className="font-medium">Transaction Details</h4>
          </div>
          <div className="flex gap-2">
            {editMode ? (
              <Button onClick={handleSave} size="sm" className="flex items-center gap-1">
                <Save className="h-4 w-4" />
                <span>Save</span>
              </Button>
            ) : (
              <Button onClick={handleEdit} variant="outline" size="sm" className="flex items-center gap-1">
                <Edit className="h-4 w-4" />
                <span>Edit</span>
              </Button>
            )}
          </div>
        </div>
        
        {editMode ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Form {...form}>
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="merchantName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Merchant</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Category</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="amount"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Amount</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
            </Form>
            
            <Form {...form}>
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="date"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Date</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="isRecurring"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox 
                          checked={field.value} 
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <FormLabel>Mark as recurring transaction</FormLabel>
                    </FormItem>
                  )}
                />
              </div>
            </Form>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6">
            <div className="space-y-3">
              <div>
                <div className="text-sm text-gray-500">Merchant</div>
                <div className="font-medium">{transaction.merchantName}</div>
              </div>
              
              <div>
                <div className="text-sm text-gray-500">Category</div>
                <div className="font-medium">{transaction.category}</div>
              </div>
              
              <div>
                <div className="text-sm text-gray-500">Amount</div>
                <div className={`font-medium ${transaction.amount < 0 ? 'text-red-500' : 'text-green-500'}`}>
                  ${Math.abs(transaction.amount).toFixed(2)}
                </div>
              </div>
              
              <div>
                <div className="text-sm text-gray-500">Source</div>
                <div className="font-medium capitalize">{transaction.source}</div>
              </div>
            </div>
            
            <div className="space-y-3">
              <div>
                <div className="text-sm text-gray-500">Date</div>
                <div className="font-medium">
                  {new Date(transaction.date).toLocaleDateString('en-US', { 
                    weekday: 'long',
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric'
                  })}
                </div>
              </div>
              
              <div>
                <div className="text-sm text-gray-500">Description</div>
                <div className="font-medium">{transaction.description}</div>
              </div>
              
              <div>
                <div className="text-sm text-gray-500">Transaction ID</div>
                <div className="font-medium">{transaction.id}</div>
              </div>
            </div>
          </div>
        )}
        
        {/* AI Insights */}
        <Card className="bg-blue-50 border-blue-200 dark:bg-blue-900/20 dark:border-blue-800">
          <CardContent className="p-3 flex items-start gap-3">
            <Lightbulb className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
            <div>
              <div className="font-medium text-blue-700 dark:text-blue-300">AI Insight</div>
              <div className="text-sm text-blue-600 dark:text-blue-400">
                {transaction.aiInsight || "This appears to be a regular transaction for this merchant. Last month you spent about the same amount."}
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Receipt section */}
        <div>
          <div className="flex justify-between items-center">
            <h4 className="font-medium flex items-center gap-2">
              <Paperclip className="h-4 w-4" />
              <span>Receipts & Attachments</span>
            </h4>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleUploadReceipt}
              className="text-xs"
            >
              Upload
            </Button>
          </div>
          
          {transaction.hasReceipt ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 mt-3">
              <div className="border rounded-md bg-white p-1 h-24">
                <img 
                  src="https://via.placeholder.com/150" 
                  alt="Receipt" 
                  className="w-full h-full object-cover rounded" 
                />
              </div>
            </div>
          ) : (
            <div className="text-sm text-gray-500 mt-2">
              No receipts or attachments found for this transaction.
            </div>
          )}
        </div>
        
        {/* Original message */}
        <Collapsible>
          <div className="flex justify-between items-center">
            <h4 className="font-medium">Original Message</h4>
            <CollapsibleTrigger 
              onClick={() => setShowOriginalMessage(!showOriginalMessage)}
              className="text-sm text-blue-500 flex items-center gap-1 focus:outline-none"
            >
              {showOriginalMessage ? 'Hide' : 'Show'} original
            </CollapsibleTrigger>
          </div>
          
          <CollapsibleContent>
            <div className="mt-2 p-3 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-md text-sm font-mono whitespace-pre-wrap">
              {transaction.originalMessage || "Transaction from Chase bank on 09/12/2023: A charge of $75.50 from NETFLIX has been processed on your account ending in 1234."}
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </div>
  );
};

export default TransactionDetails;
