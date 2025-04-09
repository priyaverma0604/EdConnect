
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center bg-slate-50 py-12">
        <div className="container px-4">
          <Card className="max-w-md mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Log in to EdConnect</CardTitle>
              <CardDescription>
                Enter your credentials to access your account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="school" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8">
                  <TabsTrigger value="school">School</TabsTrigger>
                  <TabsTrigger value="volunteer">Volunteer</TabsTrigger>
                </TabsList>
                
                <TabsContent value="school">
                  <form>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="school-email">School Email</Label>
                        <Input id="school-email" type="email" placeholder="school@example.com" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <Label htmlFor="school-password">Password</Label>
                          <Link to="/forgot-password" className="text-sm text-primary hover:underline">
                            Forgot password?
                          </Link>
                        </div>
                        <Input id="school-password" type="password" />
                      </div>
                      <Button type="submit" className="w-full">
                        Log In as School
                      </Button>
                    </div>
                  </form>
                </TabsContent>
                
                <TabsContent value="volunteer">
                  <form>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="volunteer-email">Email</Label>
                        <Input id="volunteer-email" type="email" placeholder="volunteer@example.com" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <Label htmlFor="volunteer-password">Password</Label>
                          <Link to="/forgot-password" className="text-sm text-primary hover:underline">
                            Forgot password?
                          </Link>
                        </div>
                        <Input id="volunteer-password" type="password" />
                      </div>
                      <Button type="submit" className="w-full">
                        Log In as Volunteer
                      </Button>
                    </div>
                  </form>
                </TabsContent>
              </Tabs>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <div className="text-sm text-center text-muted-foreground">
                Don't have an account?{' '}
                <Link to="/register" className="text-primary hover:underline">
                  Sign up
                </Link>
              </div>
            </CardFooter>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
