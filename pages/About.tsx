import React, { useState } from 'react';
import { Heart, Users, Music, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="w-full pt-20">
      {/* Hero */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto rounded-3xl overflow-hidden relative min-h-[500px] flex items-center justify-center">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop')` }}
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 text-center max-w-3xl px-6">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              not just a church,<br />but a home.
            </h1>
            <p className="text-xl text-gray-200 mb-8 font-medium">
              Welcome to a community of radical love, authentic faith, and zero judgment.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-4 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-primary" /> Our Mission
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">We exist to redefine what church feels like.</h2>
            <div className="text-slate-500 text-lg leading-relaxed mb-6 space-y-4">
              <p>
                For too long, church has felt like a checklist. We're flipping the script. At CRPM, we are building a refuge for the weary, a charging station for the drained, and a launchpad for world-changers.
              </p>
              {isExpanded && (
                <div className="animate-fade-in-up space-y-4">
                  <p>
                    We believe in a God who meets us exactly where we are, but loves us too much to leave us there. Our mission isn't just to fill seats on Sunday, but to empty hell and fill heaven, one life at a time.
                  </p>
                  <p>
                    Whether you are a skeptic, a seeker, or a saint, you have a place at our table.
                  </p>
                </div>
              )}
            </div>
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all"
            >
              {isExpanded ? 'Read less' : 'Read full statement'} <ArrowRight size={18} className={isExpanded ? 'rotate-[-90deg]' : ''} />
            </button>
          </div>
          <div className="relative">
             <img 
               src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1000&auto=format&fit=crop" 
               alt="Community" 
               className="rounded-3xl shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500"
             />
             <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl max-w-xs border border-gray-100 hidden md:block">
               <p className="text-sm font-bold text-slate-900">"Finally found a place where I can just be me."</p>
               <div className="flex items-center gap-2 mt-2">
                 <div className="w-6 h-6 rounded-full bg-gray-200" />
                 <span className="text-xs text-slate-500">Sarah, member since '22</span>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Our DNA</h2>
            <p className="text-slate-500">The core values that shape everything we do.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Heart, title: "Radical Generosity", desc: "We give without expecting anything in return. Our love isn't a transaction; it's a reaction to Grace." },
              { icon: Users, title: "Authentic Faith", desc: "Real people, real struggles, real hope. No masks allowed. We value your true self." },
              { icon: Music, title: "Creative Worship", desc: "God is the ultimate creator. We express our love for Him through music, art, design, and innovation." }
            ].map((val, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all group">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <val.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{val.title}</h3>
                <p className="text-slate-500 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team CTA */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto bg-primary rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="relative z-10">
             <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">Come sit with us.</h2>
             <p className="text-white/90 text-xl max-w-2xl mx-auto mb-10">No awkward introductions, we promise. Just good coffee, great people, and a message that matters.</p>
             <div className="flex justify-center gap-4">
               <Link to="/contact" className="bg-white text-primary px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-colors shadow-lg">Plan a Visit</Link>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;