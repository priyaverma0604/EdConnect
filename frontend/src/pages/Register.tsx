import React, { useEffect, useState } from 'react';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import axios from 'axios';

const Register = () => {
  const navigate = useNavigate(); 
  const [tabValue, setTabValue] = useState<string>('school');
  const handleVolunteerSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    const first_name = (document.getElementById('volunteer-firstname') as HTMLInputElement).value;
    const last_name = (document.getElementById('volunteer-lastname') as HTMLInputElement).value;
    const email = (document.getElementById('volunteer-email') as HTMLInputElement).value;
    const password = (document.getElementById('volunteer-password') as HTMLInputElement).value;
    const expertise = (document.getElementById('volunteer-expertise') as HTMLInputElement).value;
  
    try {
      const response = await axios.post<{ id: number }>('/api/volunteers/', {
        first_name,
        last_name,
        email,
        password,
        expertise,
      });
  
      const newVolunteerId = response.data.id;
      navigate(`/volunteers/${newVolunteerId}`);
    } catch (error) {
      console.error('Error registering volunteer:', error);
      alert('Registration failed');
    }
  };
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center bg-slate-50 py-12">
        <div className="container px-4">
          <Card className="max-w-md mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Create an Account</CardTitle>
              <CardDescription>
                Join EdConnect to start making a difference
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs value={tabValue} onValueChange={setTabValue} className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8">
                  <TabsTrigger value="school">Register School</TabsTrigger>
                  <TabsTrigger value="volunteer">Register Volunteer</TabsTrigger>
                </TabsList>

                <TabsContent value="school">
                  <form>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="school-name">School Name</Label>
                        <Input id="school-name" placeholder="School Name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="school-type">School Type</Label>
                        <Select>
                          <SelectTrigger id="school-type">
                            <SelectValue placeholder="Select Type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="zp">Zilla Parishad School</SelectItem>
                            <SelectItem value="govt">Government School</SelectItem>
                            <SelectItem value="private">Private School</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="school-location">Location</Label>
                        <Select>
                          <SelectTrigger id="school-location">
                            <SelectValue placeholder="Select City" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="pune">Pune</SelectItem>
                            <SelectItem value="mumbai">Mumbai</SelectItem>
                            <SelectItem value="hyderabad">Hyderabad</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="school-email">Email</Label>
                        <Input id="school-email" type="email" placeholder="school@example.com" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="school-password">Password</Label>
                        <Input id="school-password" type="password" />
                      </div>
                      <div className="flex items-start space-x-2">
                        <Checkbox id="school-terms" />
                        <Label htmlFor="school-terms" className="text-sm font-normal">
                          I agree to the <Link to="/terms" className="text-primary hover:underline">Terms of Service</Link> and <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>
                        </Label>
                      </div>
                      <Button type="submit" className="w-full">
                        Register School
                      </Button>
                    </div>
                  </form>
                </TabsContent>

                <TabsContent value="volunteer">
                  <form onSubmit={handleVolunteerSubmit}>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="volunteer-firstname">First Name</Label>
                          <Input id="volunteer-firstname" placeholder="First Name" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="volunteer-lastname">Last Name</Label>
                          <Input id="volunteer-lastname" placeholder="Last Name" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="volunteer-expertise">Subject Expertise</Label>
                        <Select>
                          <SelectTrigger id="volunteer-expertise">
                            <SelectValue placeholder="Select Subject" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="math">Mathematics</SelectItem>
                            <SelectItem value="science">Science</SelectItem>
                            <SelectItem value="english">English</SelectItem>
                            <SelectItem value="social">Social Studies</SelectItem>
                            <SelectItem value="computer">Computer Science</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="volunteer-email">Email</Label>
                        <Input id="volunteer-email" type="email" placeholder="volunteer@example.com" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="volunteer-password">Password</Label>
                        <Input id="volunteer-password" type="password" />
                      </div>
                      <div className="flex items-start space-x-2">
                        <Checkbox id="volunteer-terms" />
                        <Label htmlFor="volunteer-terms" className="text-sm font-normal">
                          I agree to the <Link to="/terms" className="text-primary hover:underline">Terms of Service</Link> and <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>
                        </Label>
                      </div>
                      <Button type="submit" className="w-full">
                        Register as Volunteer
                      </Button>
                    </div>
                  </form>
                </TabsContent>
              </Tabs>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <div className="text-sm text-center text-muted-foreground">
                Already have an account?{' '}
                <Link to="/login" className="text-primary hover:underline">
                  Log in
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

export default Register;
