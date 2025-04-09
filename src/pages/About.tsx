
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Target, Heart, Users, BookOpen } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// Sample team members data
const teamMembers = [
  {
    name: "Anjali Patel",
    role: "Founder & CEO",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    bio: "Former education officer with 15 years of experience in the education sector."
  },
  {
    name: "Vikram Singh",
    role: "Technical Director",
    image: "https://randomuser.me/api/portraits/men/42.jpg",
    bio: "Software engineer passionate about using technology to solve educational challenges."
  },
  {
    name: "Meera Desai",
    role: "School Relations",
    image: "https://randomuser.me/api/portraits/women/22.jpg",
    bio: "Former school principal with extensive network in rural education."
  },
  {
    name: "Rajesh Kumar",
    role: "Volunteer Coordinator",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
    bio: "Community organizer with experience mobilizing volunteers for educational initiatives."
  }
];

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-slate-100 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">About EdConnect</h1>
              <p className="text-lg text-muted-foreground">
                We're on a mission to bridge the educational gap in Zilla Parishad schools through volunteer-led teaching.
              </p>
            </div>
          </div>
        </section>
        
        {/* Our Story */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Our Story</h2>
              
              <p className="text-lg mb-6">
                EdConnect was born out of a critical observation: many Zilla Parishad schools across Pune, Mumbai, and Hyderabad 
                face a shortage of skilled teachers, resulting in incomplete curriculum coverage and compromised educational quality.
              </p>
              
              <p className="text-lg mb-6">
                What began as a small initiative to connect a few volunteer teachers with nearby schools has evolved into a 
                comprehensive platform that systematically addresses this gap. We believe that every student deserves access 
                to quality education, regardless of their school's resources.
              </p>
              
              <p className="text-lg mb-6">
                Our platform transforms the previously ad hoc volunteer teaching process into a structured, scalable system 
                that benefits both schools and volunteers while making a real difference in students' educational journeys.
              </p>
            </div>
          </div>
        </section>
        
        {/* Our Values */}
        <section className="bg-slate-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">Our Values</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <Card className="text-center">
                <CardHeader className="flex flex-col items-center">
                  <Target className="h-12 w-12 text-primary mb-2" />
                  <CardTitle>Educational Equity</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We believe all students deserve quality education regardless of their school's resources.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader className="flex flex-col items-center">
                  <Heart className="h-12 w-12 text-primary mb-2" />
                  <CardTitle>Community Impact</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We're committed to creating meaningful change in educational communities through volunteerism.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader className="flex flex-col items-center">
                  <Users className="h-12 w-12 text-primary mb-2" />
                  <CardTitle>Empowerment</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We empower both students through education and volunteers through meaningful contribution opportunities.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader className="flex flex-col items-center">
                  <BookOpen className="h-12 w-12 text-primary mb-2" />
                  <CardTitle>Quality Learning</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We maintain high standards for educational content and teaching methodologies.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Our Team */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">Meet Our Team</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-48 object-cover object-center"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-lg">{member.name}</h3>
                    <p className="text-primary text-sm mb-2">{member.role}</p>
                    <p className="text-muted-foreground text-sm">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Impact Stats */}
        <section className="bg-slate-900 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">Our Impact So Far</h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold mb-2">100+</div>
                  <p className="text-slate-300">Schools Supported</p>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">500+</div>
                  <p className="text-slate-300">Active Volunteers</p>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">10,000+</div>
                  <p className="text-slate-300">Students Reached</p>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">5,000+</div>
                  <p className="text-slate-300">Hours of Teaching</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
