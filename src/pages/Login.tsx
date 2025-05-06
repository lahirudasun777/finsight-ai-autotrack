
import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { AlertCircle, Loader2, Mail, Lock, EyeOff, Eye, LogIn } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';

// Define form schema
const formSchema = z.object({
  email: z.string().min(1, { message: "Username or email is required" }),
  password: z.string().min(1, { message: "Password is required" }),
  rememberMe: z.boolean().default(false),
});

const Login = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { login } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState('');

  // Initialize form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setIsLoading(true);
      setLoginError('');
      
      const success = await login(values.email, values.password, values.rememberMe);
      
      if (success) {
        // Redirect to dashboard
        navigate('/dashboard');
      } else {
        // Failed login
        setLoginError('Invalid username/email or password');
      }
    } catch (error) {
      setLoginError('An error occurred. Please try again.');
      console.error('Login error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    setIsLoading(true);
    // Simulate Google auth flow (to be implemented with actual OAuth)
    setTimeout(() => {
      toast({
        title: "Google login",
        description: "Google authentication will be implemented with OAuth",
      });
      setIsLoading(false);
    }, 1000);
  };

  const handleDemoLogin = () => {
    form.setValue('email', 'demo@finsight.com');
    form.setValue('password', 'password123');
    form.setValue('rememberMe', true);
  };

  const handleSimpleLogin = () => {
    form.setValue('email', 'user');
    form.setValue('password', '123');
    form.setValue('rememberMe', true);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div className="flex justify-center">
            <Link to="/" className="flex items-center gap-2">
              <span className="text-xl font-bold text-finsight-primary">FinSight</span>
            </Link>
          </div>
          
          <div className="mt-8">
            <div className="text-center">
              <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
              <p className="mt-2 text-sm text-gray-600">
                Or{' '}
                <Link to="/register" className="font-medium text-finsight-secondary hover:text-finsight-secondary/80">
                  create a new account
                </Link>
              </p>
            </div>

            <div className="mt-6">
              {loginError && (
                <Alert variant="destructive" className="mb-6">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{loginError}</AlertDescription>
                </Alert>
              )}

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Username or Email</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                            <Input
                              {...field}
                              placeholder="Username or email"
                              type="text"
                              autoComplete="username"
                              className="pl-9"
                              disabled={isLoading}
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <div className="flex items-center justify-between">
                          <FormLabel>Password</FormLabel>
                          <div className="text-sm">
                            <Link
                              to="/forgot-password"
                              className="font-medium text-finsight-secondary hover:text-finsight-secondary/80"
                            >
                              Forgot password?
                            </Link>
                          </div>
                        </div>
                        <FormControl>
                          <div className="relative">
                            <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                            <Input
                              {...field}
                              type={showPassword ? 'text' : 'password'}
                              autoComplete="current-password"
                              className="pl-9 pr-10"
                              disabled={isLoading}
                            />
                            <button
                              type="button"
                              className="absolute inset-y-0 right-0 flex items-center pr-3"
                              onClick={() => setShowPassword(!showPassword)}
                            >
                              {showPassword ? (
                                <EyeOff className="h-4 w-4 text-gray-400" />
                              ) : (
                                <Eye className="h-4 w-4 text-gray-400" />
                              )}
                            </button>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="rememberMe"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            disabled={isLoading}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>Remember me</FormLabel>
                        </div>
                      </FormItem>
                    )}
                  />

                  <div>
                    <Button
                      type="submit"
                      className="w-full"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      ) : (
                        <LogIn className="mr-2 h-4 w-4" />
                      )}
                      Sign in
                    </Button>
                  </div>
                </form>
              </Form>
            </div>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-gray-50 px-2 text-gray-500">Quick login options</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                <Button
                  variant="outline"
                  type="button"
                  onClick={handleGoogleLogin}
                  disabled={isLoading}
                  className="w-full"
                >
                  Google
                </Button>
                <Button
                  variant="outline"
                  type="button"
                  onClick={handleDemoLogin}
                  disabled={isLoading}
                  className="w-full"
                >
                  Demo
                </Button>
                <Button
                  variant="outline"
                  type="button"
                  onClick={handleSimpleLogin}
                  disabled={isLoading}
                  className="w-full"
                >
                  Simple
                </Button>
              </div>
              
              <div className="mt-4 text-xs text-center text-gray-500">
                <p>Demo: demo@finsight.com / password123</p>
                <p>Simple: user / 123</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative hidden w-0 flex-1 lg:block">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-finsight-primary to-finsight-secondary opacity-90">
          <div className="flex h-full items-center justify-center p-12">
            <div className="text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Welcome to FinSight</h2>
              <p className="text-lg">Track, analyze and optimize your finances with our AI-powered tools.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
