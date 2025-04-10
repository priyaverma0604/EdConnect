
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/placeholder.svg" alt="EdConnect Logo" className="w-8 h-8 bg-white rounded" />
              <span className="text-xl font-bold">EdConnect</span>
            </div>
            <p className="text-slate-300 mb-4">
              Bridging the gap between schools and expert volunteers to enhance education.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-slate-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="/schools" className="text-slate-300 hover:text-white transition-colors">For Schools</a></li>
              <li><a href="/volunteers" className="text-slate-300 hover:text-white transition-colors">For Volunteers</a></li>
              <li><a href="/about" className="text-slate-300 hover:text-white transition-colors">About Us</a></li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">FAQs</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Success Stories</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-1" />
                <span className="text-slate-300">123 Education Street, Mumbai, Maharashtra, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} />
                <a href="mailto:contact@edconnect.org" className="text-slate-300 hover:text-white transition-colors">contact@edconnect.org</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} />
                <a href="tel:+919876543210" className="text-slate-300 hover:text-white transition-colors">+91 98765 43210</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-8 pt-6 text-center text-slate-400">
          <p>© {new Date().getFullYear()} EdConnect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
