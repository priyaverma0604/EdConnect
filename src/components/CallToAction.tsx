
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="bg-slate-900 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-40 h-40 rounded-full bg-blue-500" style={{filter: 'blur(60px)'}}></div>
            <div className="absolute bottom-0 right-0 w-60 h-60 rounded-full bg-purple-500" style={{filter: 'blur(80px)'}}></div>
          </div>
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Ready to Make a Difference?</h2>
            <p className="text-lg text-slate-300 mb-8">
              Join our community of schools and volunteers to bridge the educational gap and create a brighter future for students.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/schools">
                <Button size="lg" variant="outline" className="font-medium bg-white hover:bg-slate-100 text-slate-900 border-white">
                  Register Your School
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </Link>
              
              <Link to="/volunteers">
                <Button size="lg" className="font-medium bg-primary hover:bg-primary/90">
                  Become a Volunteer
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
