import React, { useState } from 'react';
import { MapPin, Mail, Phone, Clock, MessageCircle, Loader2 } from 'lucide-react';
import { useToast } from '../components/Layout';

const Contact: React.FC = () => {
  const { showToast } = useToast();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.firstName || !formData.email || !formData.message) {
      showToast('Please fill in all required fields.', 'error');
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      showToast("Message sent! We'll get back to you shortly.");
      setFormData({ firstName: '', lastName: '', email: '', message: '' });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="w-full pt-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center max-w-2xl mx-auto mb-16">
           <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Connect with CRPM</h1>
           <p className="text-lg text-slate-500">We'd love to see you this Sunday. Whether you're new to faith or looking for a home, join us.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
           <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex flex-col items-center text-center hover:-translate-y-1 transition-transform">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
                <MapPin size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Location</h3>
              <p className="text-slate-500">123 Faith Avenue<br />Los Angeles, CA 90001</p>
           </div>
           <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex flex-col items-center text-center hover:-translate-y-1 transition-transform">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
                <Clock size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Service Times</h3>
              <p className="text-slate-500">Sundays: 9 & 11 AM<br />Wednesdays: 7 PM</p>
           </div>
           <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex flex-col items-center text-center hover:-translate-y-1 transition-transform">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
                <MessageCircle size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Contact</h3>
              <p className="text-slate-500">(555) 123-4567<br />hello@crpm.church</p>
           </div>
        </div>

        {/* Map Placeholder */}
        <div className="w-full h-[400px] bg-gray-200 rounded-3xl overflow-hidden relative shadow-inner mb-16 group">
            <div className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700"
                 style={{ backgroundImage: `url('https://images.unsplash.com/photo-1496442226666-8d4a0e62e6e9?q=80&w=2070&auto=format&fit=crop')` }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
               <div className="bg-white p-4 rounded-2xl shadow-xl text-center">
                  <div className="text-primary font-bold">CRPM Church</div>
                  <div className="text-xs text-slate-500">Los Angeles</div>
               </div>
               <div className="w-4 h-4 bg-white rotate-45 absolute -bottom-2 left-1/2 -translate-x-1/2"></div>
            </div>
        </div>

        {/* Form */}
        <div className="bg-white rounded-[2.5rem] border border-gray-100 p-8 md:p-16 shadow-lg">
           <div className="grid lg:grid-cols-2 gap-16">
              <div>
                 <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Have a prayer request?</h2>
                 <p className="text-slate-500 mb-8">Send us a message and our team will get back to you.</p>
                 <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-900">First Name</label>
                        <input 
                          type="text" 
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          className="w-full h-12 bg-gray-50 border-none rounded-xl px-4 focus:ring-2 focus:ring-primary outline-none" 
                          placeholder="Jane" 
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-900">Last Name</label>
                        <input 
                          type="text" 
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          className="w-full h-12 bg-gray-50 border-none rounded-xl px-4 focus:ring-2 focus:ring-primary outline-none" 
                          placeholder="Doe" 
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-900">Email</label>
                        <input 
                          type="email" 
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full h-12 bg-gray-50 border-none rounded-xl px-4 focus:ring-2 focus:ring-primary outline-none" 
                          placeholder="jane@example.com" 
                          required
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-900">Message</label>
                        <textarea 
                          rows={4} 
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full bg-gray-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-primary outline-none resize-none" 
                          placeholder="How can we help?" 
                          required
                        />
                    </div>
                    <button 
                      disabled={isSubmitting}
                      className="h-14 px-8 bg-slate-900 text-white font-bold rounded-xl hover:bg-black transition-colors w-full md:w-auto flex items-center justify-center gap-2 disabled:opacity-70"
                    >
                      {isSubmitting ? <Loader2 className="animate-spin" /> : "Send Message"}
                    </button>
                 </form>
              </div>
              <div className="space-y-6">
                 <h3 className="text-xl font-bold text-slate-900">First time?</h3>
                 <div className="space-y-4">
                    <div className="border border-gray-100 rounded-2xl p-6">
                       <h4 className="font-bold text-slate-900 mb-2">What should I wear?</h4>
                       <p className="text-slate-500 text-sm">Come as you are! Jeans and a t-shirt are totally fine. We care more about you than what you're wearing.</p>
                    </div>
                    <div className="border border-gray-100 rounded-2xl p-6">
                       <h4 className="font-bold text-slate-900 mb-2">Is there parking?</h4>
                       <p className="text-slate-500 text-sm">Yes! We have a large parking lot directly behind the main building with spots reserved for first-time guests.</p>
                    </div>
                    <div className="border border-gray-100 rounded-2xl p-6">
                       <h4 className="font-bold text-slate-900 mb-2">What about my kids?</h4>
                       <p className="text-slate-500 text-sm">We have an awesome CRPM Kids program for infants through 5th grade. Safe, fun, and age-appropriate learning!</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;