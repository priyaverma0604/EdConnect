
import React from 'react';
import { School, Users, Video, Clock } from 'lucide-react';

const stats = [
  {
    icon: School,
    value: "100+",
    label: "Schools",
    color: "text-blue-600"
  },
  {
    icon: Users,
    value: "500+",
    label: "Volunteers",
    color: "text-green-600"
  },
  {
    icon: Video,
    value: "1,000+",
    label: "Sessions",
    color: "text-purple-600"
  },
  {
    icon: Clock,
    value: "5,000+",
    label: "Teaching Hours",
    color: "text-orange-600"
  }
];

const Stats = () => {
  return (
    <section className="py-12 md:py-16 hero-gradient text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="bg-white/20 rounded-full p-4 mb-4">
                <stat.icon size={24} />
              </div>
              <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-lg opacity-80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
