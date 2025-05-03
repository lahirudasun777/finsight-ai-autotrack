
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Shield, Activity, Download, Trash2 } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface PrivacySecurityProps {
  onUpdate: () => void;
}

interface Session {
  id: string;
  device: string;
  ip: string;
  location: string;
  lastActive: string;
  current: boolean;
}

interface ActivityLog {
  id: string;
  action: string;
  date: string;
  ip: string;
  device: string;
}

const PrivacySecurity: React.FC<PrivacySecurityProps> = ({ onUpdate }) => {
  const [sessions, setSessions] = useState<Session[]>([
    { 
      id: '1', 
      device: 'Chrome on MacOS', 
      ip: '192.168.1.1', 
      location: 'San Francisco, CA', 
      lastActive: 'Current session', 
      current: true 
    },
    { 
      id: '2', 
      device: 'Safari on iPhone', 
      ip: '192.168.1.2', 
      location: 'San Francisco, CA', 
      lastActive: '2 hours ago', 
      current: false 
    },
    { 
      id: '3', 
      device: 'Firefox on Windows', 
      ip: '192.168.1.3', 
      location: 'New York, NY', 
      lastActive: '2 days ago', 
      current: false 
    },
  ]);

  const [activityLogs] = useState<ActivityLog[]>([
    { id: '1', action: 'Login', date: 'May 3, 2025 10:30 AM', ip: '192.168.1.1', device: 'Chrome on MacOS' },
    { id: '2', action: 'Password change', date: 'Apr 28, 2025 3:15 PM', ip: '192.168.1.1', device: 'Chrome on MacOS' },
    { id: '3', action: 'Profile update', date: 'Apr 25, 2025 11:45 AM', ip: '192.168.1.2', device: 'Safari on iPhone' },
    { id: '4', action: 'Login', date: 'Apr 23, 2025 8:20 AM', ip: '192.168.1.3', device: 'Firefox on Windows' },
  ]);

  const [clearDialogOpen, setClearDialogOpen] = useState(false);

  const handleClearHistory = () => {
    console.log('Clearing history and cache');
    setClearDialogOpen(false);
    onUpdate();
  };

  const handleExportData = () => {
    console.log('Exporting user data');
    onUpdate();
  };

  const handleRevokeSession = (sessionId: string) => {
    setSessions(sessions.filter(session => session.id !== sessionId));
    console.log(`Session ${sessionId} revoked`);
    onUpdate();
  };

  const handleRevokeAllOtherSessions = () => {
    setSessions(sessions.filter(session => session.current));
    console.log('All other sessions revoked');
    onUpdate();
  };

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-semibold">Privacy & Security</h2>

      {/* Session Management */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-xl">Active Sessions</CardTitle>
            <CardDescription>
              Manage your active sessions and devices
            </CardDescription>
          </div>
          <div>
            <Shield className="h-5 w-5 text-muted-foreground" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Device</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Last Active</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sessions.map((session) => (
                  <TableRow key={session.id}>
                    <TableCell className="font-medium">
                      {session.device}
                      {session.current && (
                        <Badge variant="outline" className="ml-2">Current</Badge>
                      )}
                    </TableCell>
                    <TableCell>
                      {session.location}
                      <div className="text-xs text-muted-foreground">{session.ip}</div>
                    </TableCell>
                    <TableCell>{session.lastActive}</TableCell>
                    <TableCell>
                      {session.current ? (
                        <Badge variant="secondary">Current Session</Badge>
                      ) : (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleRevokeSession(session.id)}
                        >
                          Revoke
                        </Button>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          {sessions.length > 1 && (
            <div className="mt-4">
              <Button 
                variant="secondary"
                onClick={handleRevokeAllOtherSessions}
              >
                Revoke All Other Sessions
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Activity Log */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-xl">Activity Log</CardTitle>
            <CardDescription>
              Recent account activity
            </CardDescription>
          </div>
          <div>
            <Activity className="h-5 w-5 text-muted-foreground" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Activity</TableHead>
                  <TableHead>Date & Time</TableHead>
                  <TableHead>Device</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {activityLogs.map((log) => (
                  <TableRow key={log.id}>
                    <TableCell className="font-medium">{log.action}</TableCell>
                    <TableCell>{log.date}</TableCell>
                    <TableCell>
                      {log.device}
                      <div className="text-xs text-muted-foreground">{log.ip}</div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="mt-4 flex justify-end">
            <Button variant="outline" size="sm">
              View Full Activity Log
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Data Management */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-xl">Data Management</CardTitle>
            <CardDescription>
              Control your data within Finthory
            </CardDescription>
          </div>
          <div>
            <Download className="h-5 w-5 text-muted-foreground" />
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h4 className="font-medium mb-2">Export Your Data</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Download a copy of your Finthory data, including transaction history, 
              budget settings, and personal information.
            </p>
            <div className="flex gap-2">
              <Button onClick={handleExportData}>
                Export as JSON
              </Button>
              <Button variant="outline" onClick={handleExportData}>
                Export as CSV
              </Button>
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-2">Clear History & Cache</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Clear your local browsing history and cache for Finthory application.
              This won't delete any of your account data.
            </p>
            <Dialog open={clearDialogOpen} onOpenChange={setClearDialogOpen}>
              <DialogTrigger asChild>
                <Button variant="outline">
                  <Trash2 className="h-4 w-4 mr-2" />
                  Clear History & Cache
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Clear History & Cache</DialogTitle>
                  <DialogDescription>
                    This will clear all locally stored data for Finthory. Your account data will remain intact.
                  </DialogDescription>
                </DialogHeader>
                <Alert className="mt-4">
                  <AlertTitle>You'll need to sign in again</AlertTitle>
                  <AlertDescription>
                    After clearing the cache, you'll be signed out and will need to log in again.
                  </AlertDescription>
                </Alert>
                <DialogFooter className="mt-4">
                  <Button variant="outline" onClick={() => setClearDialogOpen(false)}>
                    Cancel
                  </Button>
                  <Button variant="destructive" onClick={handleClearHistory}>
                    Clear Data
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PrivacySecurity;
