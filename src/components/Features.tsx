
import React from 'react';
import { School, UserCheck, Video, Clock, Star, BarChart, Bot, Award, Languages, Bell } from 'lucide-react';

const features = [
  {
    icon: School,
    title: 'School Registration',
    description: 'Schools can easily create accounts and upload the topics or syllabus they need assistance with.'
  },
  {
    icon: UserCheck,
    title: 'Volunteer Registration',
    description: 'Volunteers can register, browse available topics, and sign up to teach based on their expertise.'
  },
  {
    icon: Video,
    title: 'Session Types',
    description: 'Support for live interactive sessions and pre-recorded sessions that can be played later by students.'
  },
  {
    icon: Clock,
    title: 'Session Tracking',
    description: 'Log the number of hours volunteers spend teaching and track student participation.'
  },
  {
    icon: Star,
    title: 'Feedback System',
    description: 'Schools and students can provide feedback on the sessions to ensure quality education.'
  },
  {
    icon: BarChart,
    title: 'Reporting',
    description: 'Track key metrics such as sessions conducted, volunteer hours, and student engagement.'
  }
];

const advancedFeatures = [
  {
    icon: Bot,
    title: 'AI-Based Matching',
    description: 'Intelligent matching of volunteers to schools based on subject expertise and availability.'
  },
  {
    icon: Award,
    title: 'Gamification & Badges',
    description: 'Reward volunteers with badges and certificates for their valuable contributions.'
  },
  {
    icon: Languages,
    title: 'Multi-Language Support',
    description: 'Enable content delivery in multiple languages to reach a broader audience.'
  },
  {
    icon: Bell,
    title: 'Automated Reminders',
    description: 'Notify volunteers and students about upcoming live sessions and deadlines.'
  }
];

const FeatureCard = ({ Icon, title, description }) => (
  <div className="bg-white rounded-lg shadow-md p-6 card-hover">
    <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
      <Icon size={24} className="text-primary" />
    </div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

const Features = () => {
  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Platform Features</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our platform is designed to create a seamless connection between schools and volunteers,
            with powerful features to manage educational sessions effectively.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              Icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Advanced Features</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-10">
            With our premium features, we're taking educational support to the next level.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advancedFeatures.map((feature, index) => (
              <FeatureCard 
                key={index}
                Icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
