
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';

interface User {
  email: string;
  name?: string;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string, remember?: boolean) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    // Check local storage for saved user
    const savedUser = localStorage.getItem('finsightUser');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (e) {
        console.error('Error parsing saved user', e);
        localStorage.removeItem('finsightUser');
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string, remember = false): Promise<boolean> => {
    setIsLoading(true);
    try {
      // Check for both the demo credentials and the new "user/123" credentials
      if ((email === 'demo@finsight.com' && password === 'password123') || 
          (email === 'user' && password === '123')) {
        
        // Set the appropriate user data based on which credential was used
        const userData = email === 'user' 
          ? { email: 'user', name: 'Regular User' }
          : { email, name: 'Demo User' };
        
        setUser(userData);
        
        // Save to localStorage if remember me is checked
        if (remember) {
          localStorage.setItem('finsightUser', JSON.stringify(userData));
        }
        
        toast({
          title: 'Welcome back!',
          description: 'You have successfully logged in.',
        });
        
        return true;
      }
      return false;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('finsightUser');
    toast({
      title: 'Logged out',
      description: 'You have been successfully logged out.',
    });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        login,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
