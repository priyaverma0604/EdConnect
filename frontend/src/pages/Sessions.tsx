
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Video, Monitor, Clock, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Sample sessions data
const upcomingSessions = [
  {
    id: 1,
    title: "Mathematics - Algebra Basics",
    school: "ZP School, Pune",
    volunteer: "Priya Sharma",
    date: "2025-04-12",
    time: "10:00 AM - 11:30 AM",
    type: "Live"
  },
  {
    id: 2,
    title: "Science - Light and Reflection",
    school: "ZP School, Mumbai",
    volunteer: "Rahul Verma",
    date: "2025-04-13",
    time: "2:00 PM - 3:00 PM",
    type: "Live"
  },
  {
    id: 3,
    title: "History - Mughal Empire",
    school: "ZP School, Hyderabad",
    volunteer: "Arjun Singh",
    date: "2025-04-15",
    time: "11:00 AM - 12:30 PM",
    type: "Live"
  }
];

const recordedSessions = [
  {
    id: 4,
    title: "English Grammar - Tenses",
    school: "ZP School, Pune",
    volunteer: "Meera Patel",
    uploadedOn: "2025-04-01",
    duration: "45 minutes",
    views: 120
  },
  {
    id: 5,
    title: "Geography - Solar System",
    school: "ZP School, Mumbai",
    volunteer: "Sanjay Kumar",
    uploadedOn: "2025-03-28",
    duration: "50 minutes",
    views: 95
  },
  {
    id: 6,
    title: "Computer Science - Basic Programming",
    school: "ZP School, Hyderabad",
    volunteer: "Ananya Das",
    uploadedOn: "2025-03-25",
    duration: "60 minutes",
    views: 150
  }
];

const Sessions = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-slate-100 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Teaching Sessions</h1>
              <p className="text-lg text-muted-foreground mb-8">
                Browse upcoming live sessions and recorded lessons from our volunteer teachers.
              </p>
              <Button size="lg">Schedule a Session</Button>
            </div>
          </div>
        </section>
        
        {/* Session Types */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">Session Types</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card>
                <CardHeader>
                  <Video className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Live Interactive Sessions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Real-time interactive classes where students can ask questions and engage directly with volunteer teachers.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Direct interaction with experts</li>
                    <li>Q&A opportunities</li>
                    <li>Collaborative activities</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <Monitor className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Recorded Sessions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Pre-recorded lessons that students can access anytime, perfect for self-paced learning and review.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Watch anytime, anywhere</li>
                    <li>Pause and replay difficult concepts</li>
                    <li>Access to a growing library</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Sessions List */}
        <section className="bg-slate-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">Browse Sessions</h2>
            
            <Tabs defaultValue="upcoming" className="max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="upcoming">Upcoming Live Sessions</TabsTrigger>
                <TabsTrigger value="recorded">Recorded Sessions</TabsTrigger>
              </TabsList>
              
              <TabsContent value="upcoming">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {upcomingSessions.map(session => (
                    <Card key={session.id} className="card-hover">
                      <CardContent className="pt-6">
                        <div className="flex items-start justify-between mb-4">
                          <h3 className="font-semibold">{session.title}</h3>
                          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                            {session.type}
                          </span>
                        </div>
                        <div className="space-y-3 text-sm">
                          <div className="flex items-center gap-2">
                            <Clock size={16} className="text-muted-foreground" />
                            <span>{session.time}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar size={16} className="text-muted-foreground" />
                            <span>{session.date}</span>
                          </div>
                          <p className="text-muted-foreground">
                            School: {session.school}
                          </p>
                          <p className="text-muted-foreground">
                            Volunteer: {session.volunteer}
                          </p>
                          <Button variant="outline" className="w-full mt-2">Join Session</Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="recorded">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {recordedSessions.map(session => (
                    <Card key={session.id} className="card-hover">
                      <CardContent className="pt-6">
                        <div className="flex items-start justify-between mb-4">
                          <h3 className="font-semibold">{session.title}</h3>
                          <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                            Recorded
                          </span>
                        </div>
                        <div className="space-y-3 text-sm">
                          <div className="flex items-center gap-2">
                            <Clock size={16} className="text-muted-foreground" />
                            <span>Duration: {session.duration}</span>
                          </div>
                          <p className="text-muted-foreground">
                            Uploaded: {session.uploadedOn}
                          </p>
                          <p className="text-muted-foreground">
                            School: {session.school}
                          </p>
                          <p className="text-muted-foreground">
                            Volunteer: {session.volunteer}
                          </p>
                          <p className="text-muted-foreground">
                            Views: {session.views}
                          </p>
                          <Button variant="outline" className="w-full mt-2">Watch Video</Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Sessions;
