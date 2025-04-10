import React from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ Added
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Book, Upload, Calendar, MessageSquare } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Schools = () => {
  const navigate = useNavigate(); // ✅ Hook for navigation

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-slate-100 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">For Schools</h1>
              <p className="text-lg text-muted-foreground mb-8">
                Connect with qualified volunteers to enhance your curriculum delivery and provide students with expert guidance.
              </p>
              <Button size="lg" onClick={() => navigate('/register?tab=school')}>
                Register Your School
              </Button>
            </div>
          </div>
        </section>
        
        {/* Benefits Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">How Schools Benefit</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card>
                <CardHeader>
                  <Book className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Complete Curriculum</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Ensure all subjects are covered completely with expert volunteer teachers.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Upload className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Upload Needs</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Easily upload your curriculum needs and get matched with qualified volunteers.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Calendar className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Flexible Scheduling</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Schedule sessions at times that work best for your students and infrastructure.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <MessageSquare className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Progress Tracking</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Track student engagement and learning outcomes through our reporting dashboard.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Get Started Section */}
        <section className="bg-slate-100 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-muted-foreground mb-8">
                Join hundreds of schools already benefiting from our volunteer network.
              </p>
              <Button size="lg" onClick={() => navigate('/register?tab=school')}>
                Register Now
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Schools;
