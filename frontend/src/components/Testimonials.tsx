
import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    content: "EdConnect has transformed how we address teacher shortages. The volunteers are passionate and well-prepared, filling critical gaps in our science curriculum.",
    author: "Rajesh Sharma",
    role: "Principal, Zilla Parishad School, Pune",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    content: "As a volunteer, teaching through EdConnect has been incredibly fulfilling. The platform makes scheduling easy, and seeing students' progress motivates me to continue contributing.",
    author: "Priya Desai",
    role: "Software Engineer & Math Volunteer",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    content: "The structured approach to volunteer teaching has significantly improved our students' comprehension of complex topics. The reporting features help us track progress effectively.",
    author: "Anand Patil",
    role: "Education Officer, Hyderabad",
    image: "https://randomuser.me/api/portraits/men/62.jpg"
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What People Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear from schools and volunteers who have experienced the impact of EdConnect.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6 relative">
              <div className="absolute -top-4 -left-4 bg-primary rounded-full p-2 text-white">
                <Quote size={20} />
              </div>
              
              <p className="text-muted-foreground mb-6 pt-3">"{testimonial.content}"</p>
              
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
