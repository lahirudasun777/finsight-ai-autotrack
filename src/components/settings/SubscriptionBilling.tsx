
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { CreditCard, Download, TrendingUp, Info } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface SubscriptionBillingProps {
  onUpdate: () => void;
}

interface PaymentMethod {
  id: string;
  type: string;
  last4: string;
  expiry: string;
  default: boolean;
}

interface Invoice {
  id: string;
  date: string;
  amount: string;
  status: 'paid' | 'pending' | 'failed';
}

const planFeatures = {
  free: [
    "Basic expense tracking",
    "Up to 50 transactions per month",
    "Monthly financial summary",
    "Mobile app access"
  ],
  pro: [
    "Unlimited transaction history",
    "Advanced analytics & insights",
    "Budget planning tools",
    "Recurring transaction tracking",
    "CSV/PDF export",
    "Premium support"
  ],
  enterprise: [
    "All Pro features",
    "Multi-user access",
    "Dedicated account manager",
    "Custom integrations",
    "API access",
    "Advanced data security",
    "White-labeled reports"
  ]
};

const SubscriptionBilling: React.FC<SubscriptionBillingProps> = ({ onUpdate }) => {
  const [currentPlan, setCurrentPlan] = useState('pro');
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([
    { id: '1', type: 'Visa', last4: '4242', expiry: '12/26', default: true },
    { id: '2', type: 'Mastercard', last4: '5555', expiry: '09/25', default: false },
  ]);
  
  const [invoices] = useState<Invoice[]>([
    { id: 'INV-2025-042', date: 'Apr 1, 2025', amount: '$15.00', status: 'paid' },
    { id: 'INV-2025-031', date: 'Mar 1, 2025', amount: '$15.00', status: 'paid' },
    { id: 'INV-2025-029', date: 'Feb 1, 2025', amount: '$15.00', status: 'paid' },
    { id: 'INV-2025-008', date: 'Jan 1, 2025', amount: '$15.00', status: 'paid' },
  ]);

  const [addingCard, setAddingCard] = useState(false);
  const [upgradePlanDialogOpen, setUpgradePlanDialogOpen] = useState(false);
  const [downgradePlanDialogOpen, setDowngradePlanDialogOpen] = useState(false);

  const handleSetDefaultPaymentMethod = (id: string) => {
    setPaymentMethods(paymentMethods.map(method => ({
      ...method,
      default: method.id === id
    })));
    console.log(`Payment method ${id} set as default`);
    onUpdate();
  };

  const handleRemovePaymentMethod = (id: string) => {
    setPaymentMethods(paymentMethods.filter(method => method.id !== id));
    console.log(`Payment method ${id} removed`);
    onUpdate();
  };

  const handleAddCard = () => {
    console.log('Adding new payment method');
    setAddingCard(false);
    onUpdate();
  };

  const handleUpgrade = () => {
    setCurrentPlan('enterprise');
    setUpgradePlanDialogOpen(false);
    onUpdate();
  };

  const handleDowngrade = () => {
    setCurrentPlan('free');
    setDowngradePlanDialogOpen(false);
    onUpdate();
  };

  const getPlanName = (planId: string) => {
    switch(planId) {
      case 'free': return 'Free';
      case 'pro': return 'Pro';
      case 'enterprise': return 'Enterprise';
      default: return planId;
    }
  };

  const getPlanPrice = (planId: string) => {
    switch(planId) {
      case 'free': return '$0/month';
      case 'pro': return '$15/month';
      case 'enterprise': return '$49/month';
      default: return '';
    }
  };

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-semibold">Subscription & Billing</h2>

      {/* Current Plan */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-xl">Current Plan</CardTitle>
            <CardDescription>
              Manage your subscription plan
            </CardDescription>
          </div>
          <div>
            <Info className="h-5 w-5 text-muted-foreground" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between pb-4">
            <div>
              <Badge variant={currentPlan === 'free' ? 'outline' : currentPlan === 'pro' ? 'secondary' : 'default'}>
                {getPlanName(currentPlan)} Plan
              </Badge>
              <p className="mt-2 font-medium text-lg">{getPlanPrice(currentPlan)}</p>
              <p className="text-sm text-muted-foreground">Renews on June 1, 2025</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              {currentPlan !== 'enterprise' && (
                <Dialog open={upgradePlanDialogOpen} onOpenChange={setUpgradePlanDialogOpen}>
                  <DialogTrigger asChild>
                    <Button className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4" />
                      Upgrade
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Upgrade to Enterprise</DialogTitle>
                      <DialogDescription>
                        Get access to all premium features and priority support
                      </DialogDescription>
                    </DialogHeader>
                    <div className="py-4">
                      <p className="font-medium mb-2">Enterprise Plan Includes:</p>
                      <ul className="list-disc pl-5 space-y-1">
                        {planFeatures.enterprise.map((feature, index) => (
                          <li key={index} className="text-sm">{feature}</li>
                        ))}
                      </ul>
                      <div className="mt-4 font-medium">
                        Price: $49/month
                      </div>
                    </div>
                    <DialogFooter>
                      <Button variant="outline" onClick={() => setUpgradePlanDialogOpen(false)}>
                        Cancel
                      </Button>
                      <Button onClick={handleUpgrade}>
                        Upgrade Now
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              )}
              {currentPlan !== 'free' && (
                <Dialog open={downgradePlanDialogOpen} onOpenChange={setDowngradePlanDialogOpen}>
                  <DialogTrigger asChild>
                    <Button variant="outline">Downgrade</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Downgrade to Free Plan</DialogTitle>
                      <DialogDescription>
                        You will lose access to premium features at the end of your billing period
                      </DialogDescription>
                    </DialogHeader>
                    <div className="py-4">
                      <p className="text-sm text-muted-foreground mb-4">
                        You will still have access to the following features:
                      </p>
                      <ul className="list-disc pl-5 space-y-1">
                        {planFeatures.free.map((feature, index) => (
                          <li key={index} className="text-sm">{feature}</li>
                        ))}
                      </ul>
                      <div className="mt-4 font-medium text-destructive">
                        The following features will be removed:
                      </div>
                      <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                        {currentPlan === 'pro' ? (
                          planFeatures.pro.slice(1).map((feature, index) => (
                            <li key={index} className="text-sm">{feature}</li>
                          ))
                        ) : (
                          planFeatures.enterprise.slice(1).map((feature, index) => (
                            <li key={index} className="text-sm">{feature}</li>
                          ))
                        )}
                      </ul>
                    </div>
                    <DialogFooter>
                      <Button variant="outline" onClick={() => setDowngradePlanDialogOpen(false)}>
                        Cancel
                      </Button>
                      <Button variant="destructive" onClick={handleDowngrade}>
                        Downgrade
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              )}
            </div>
          </div>

          <Tabs defaultValue="features">
            <TabsList className="mb-4">
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="options">Options</TabsTrigger>
            </TabsList>
            <TabsContent value="features">
              <ul className="list-disc pl-5 space-y-1">
                {currentPlan === 'free' && planFeatures.free.map((feature, index) => (
                  <li key={index} className="text-sm">{feature}</li>
                ))}
                {currentPlan === 'pro' && planFeatures.pro.map((feature, index) => (
                  <li key={index} className="text-sm">{feature}</li>
                ))}
                {currentPlan === 'enterprise' && planFeatures.enterprise.map((feature, index) => (
                  <li key={index} className="text-sm">{feature}</li>
                ))}
              </ul>
            </TabsContent>
            <TabsContent value="options">
              <div className="space-y-4">
                <div>
                  <p className="text-sm">Billing Cycle</p>
                  <p className="font-medium">Monthly</p>
                </div>
                <div>
                  <p className="text-sm">Next billing date</p>
                  <p className="font-medium">June 1, 2025</p>
                </div>
                <Button variant="outline" size="sm" className="mt-2">
                  Cancel Subscription
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Payment Methods */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-xl">Payment Methods</CardTitle>
            <CardDescription>
              Manage your payment methods
            </CardDescription>
          </div>
          <div>
            <CreditCard className="h-5 w-5 text-muted-foreground" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {paymentMethods.map((method) => (
              <div key={method.id} className="flex items-center justify-between border p-4 rounded-md">
                <div className="flex items-center">
                  <div className="mr-4">
                    {method.type === 'Visa' ? (
                      <div className="bg-blue-600 text-white w-10 h-6 flex items-center justify-center rounded">VISA</div>
                    ) : method.type === 'Mastercard' ? (
                      <div className="bg-red-600 text-white w-10 h-6 flex items-center justify-center rounded">MC</div>
                    ) : (
                      <div className="bg-gray-600 text-white w-10 h-6 flex items-center justify-center rounded">{method.type.substring(0, 2)}</div>
                    )}
                  </div>
                  <div>
                    <p className="font-medium">{method.type} •••• {method.last4}</p>
                    <p className="text-sm text-muted-foreground">Expires {method.expiry}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  {method.default && (
                    <Badge variant="outline" className="mr-2">Default</Badge>
                  )}
                  <div className="flex space-x-2">
                    {!method.default && (
                      <Button 
                        size="sm" 
                        variant="outline" 
                        onClick={() => handleSetDefaultPaymentMethod(method.id)}
                      >
                        Set Default
                      </Button>
                    )}
                    <Button 
                      size="sm" 
                      variant="ghost" 
                      onClick={() => handleRemovePaymentMethod(method.id)}
                    >
                      Remove
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Dialog open={addingCard} onOpenChange={setAddingCard}>
            <DialogTrigger asChild>
              <Button variant="outline" className="mt-4">
                Add Payment Method
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add Payment Method</DialogTitle>
                <DialogDescription>
                  Add a new card or payment method to your account
                </DialogDescription>
              </DialogHeader>
              <div className="py-4 space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Card Number</label>
                  <input
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div className="flex space-x-4">
                  <div className="space-y-2 flex-1">
                    <label className="text-sm font-medium">Expiry Date</label>
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  <div className="space-y-2 flex-1">
                    <label className="text-sm font-medium">CVC</label>
                    <input
                      type="text"
                      placeholder="123"
                      className="w-full p-2 border rounded"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Cardholder Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full p-2 border rounded"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setAddingCard(false)}>
                  Cancel
                </Button>
                <Button onClick={handleAddCard}>
                  Add Card
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </CardContent>
      </Card>

      {/* Billing History */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-xl">Billing History</CardTitle>
            <CardDescription>
              View and download your invoices
            </CardDescription>
          </div>
          <div>
            <Download className="h-5 w-5 text-muted-foreground" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Invoice</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {invoices.map((invoice) => (
                  <TableRow key={invoice.id}>
                    <TableCell className="font-medium">{invoice.id}</TableCell>
                    <TableCell>{invoice.date}</TableCell>
                    <TableCell>{invoice.amount}</TableCell>
                    <TableCell>
                      <Badge variant={
                        invoice.status === 'paid' ? 'outline' : 
                        invoice.status === 'pending' ? 'secondary' : 
                        'destructive'
                      }>
                        {invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        PDF
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SubscriptionBilling;
