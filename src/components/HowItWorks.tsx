
import React from 'react';
import { ClipboardList, UserCheck, Calendar, Video, MessageSquare, BarChart } from 'lucide-react';

const steps = [
  {
    icon: ClipboardList,
    title: 'Schools Register Needs',
    description: 'Schools sign up and list the subjects and topics they need assistance with.',
    color: 'bg-blue-500'
  },
  {
    icon: UserCheck,
    title: 'Volunteers Sign Up',
    description: 'Expert volunteers create profiles and select topics they can teach.',
    color: 'bg-green-500'
  },
  {
    icon: Calendar,
    title: 'Schedule Sessions',
    description: 'Schools and volunteers coordinate to schedule live or recorded teaching sessions.',
    color: 'bg-purple-500'
  },
  {
    icon: Video,
    title: 'Conduct Sessions',
    description: 'Volunteers conduct interactive teaching sessions with students.',
    color: 'bg-orange-500'
  },
  {
    icon: MessageSquare,
    title: 'Feedback & Rating',
    description: 'Schools and students provide feedback on the sessions conducted.',
    color: 'bg-pink-500'
  },
  {
    icon: BarChart,
    title: 'Track Progress',
    description: 'Track educational progress and volunteer contributions through reports.',
    color: 'bg-cyan-500'
  }
];

const HowItWorks = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How EdConnect Works</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our platform follows a simple process to connect schools with volunteers and
            facilitate effective knowledge transfer to students.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className={`${step.color} w-16 h-16 rounded-full flex items-center justify-center mb-4 text-white`}>
                <step.icon size={32} />
              </div>
              
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute mt-8 ml-32">
                  <svg width="80" height="24" viewBox="0 0 80 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M80 12L60 0.226497V23.7735L80 12ZM0 14H62V10H0V14Z" fill="#CBD5E1"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
