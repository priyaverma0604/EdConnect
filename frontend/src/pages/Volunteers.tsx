import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Heart, Clock, Award, BookOpen } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Volunteers = () => {
  const navigate = useNavigate();

  const handleVolunteerSignup = () => {
    navigate('/register?tab=volunteer');
  };

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
              <Button size="lg" onClick={handleVolunteerSignup}>Sign Up as Volunteer</Button>
            </div>
          </div>
        </section>

        {/* Rest of your sections remain unchanged... */}
        {/* Benefits Section */}
        {/* Volunteer Process Section */}
      </main>
      <Footer />
    </div>
  );
};

export default Volunteers;
