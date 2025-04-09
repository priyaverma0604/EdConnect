
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, Users, Calendar } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background with gradient */}
      <div className="hero-gradient absolute inset-0 opacity-10"></div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
              Connecting Schools with <span className="text-primary">Expert Volunteers</span>
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
              Bridging the educational gap in Zilla Parishad schools through volunteer-led teaching sessions.
              Help complete the curriculum and enhance educational quality.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in" style={{animationDelay: '0.4s'}}>
              <Link to="/schools">
                <Button size="lg" className="font-medium">
                  I'm a School
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </Link>
              
              <Link to="/volunteers">
                <Button size="lg" variant="outline" className="font-medium">
                  I Want to Volunteer
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </Link>
            </div>
            
            <div className="mt-12 flex flex-wrap gap-8 justify-center md:justify-start">
              <div className="flex items-center gap-2 animate-fade-in" style={{animationDelay: '0.6s'}}>
                <div className="bg-primary/10 p-2 rounded-full">
                  <BookOpen size={20} className="text-primary" />
                </div>
                <div>
                  <p className="font-semibold">200+</p>
                  <p className="text-sm text-muted-foreground">Curriculum Topics</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2 animate-fade-in" style={{animationDelay: '0.7s'}}>
                <div className="bg-primary/10 p-2 rounded-full">
                  <Users size={20} className="text-primary" />
                </div>
                <div>
                  <p className="font-semibold">500+</p>
                  <p className="text-sm text-muted-foreground">Expert Volunteers</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2 animate-fade-in" style={{animationDelay: '0.8s'}}>
                <div className="bg-primary/10 p-2 rounded-full">
                  <Calendar size={20} className="text-primary" />
                </div>
                <div>
                  <p className="font-semibold">1,000+</p>
                  <p className="text-sm text-muted-foreground">Sessions Conducted</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex-1 animate-fade-in" style={{animationDelay: '0.5s'}}>
            <img 
              src="https://img.freepik.com/free-vector/online-tutorials-concept_52683-37480.jpg" 
              alt="EdConnect - Volunteer Teaching" 
              className="w-full max-w-md mx-auto rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
