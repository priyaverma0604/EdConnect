
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Heart, Clock, Award, BookOpen } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Volunteers = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-slate-100 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Become a Volunteer</h1>
              <p className="text-lg text-muted-foreground mb-8">
                Share your knowledge and make a real difference in students' lives by volunteering to teach.
              </p>
              <Button size="lg">Sign Up as Volunteer</Button>
            </div>
          </div>
        </section>
        
        {/* Benefits Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">Why Volunteer With Us</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card>
                <CardHeader>
                  <Heart className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Make an Impact</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Contribute directly to students' education and shape their future.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <Clock className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Flexible Hours</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Choose when you teach and how much time you can commit to volunteering.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <Award className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Earn Recognition</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Receive certificates and badges that recognize your valuable contributions.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <BookOpen className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Teach What You Know</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Choose topics that match your expertise and interests from our curriculum library.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Volunteer Process Section */}
        <section className="bg-slate-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">How to Volunteer</h2>
            
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white font-bold mb-4">1</div>
                <h3 className="text-xl font-semibold mb-2">Sign Up</h3>
                <p className="text-muted-foreground">Create your volunteer profile with your areas of expertise.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white font-bold mb-4">2</div>
                <h3 className="text-xl font-semibold mb-2">Choose Topics</h3>
                <p className="text-muted-foreground">Browse available topics that match your skills and interests.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white font-bold mb-4">3</div>
                <h3 className="text-xl font-semibold mb-2">Start Teaching</h3>
                <p className="text-muted-foreground">Schedule and conduct sessions with students who need your help.</p>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Button size="lg">Volunteer Now</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Volunteers;
