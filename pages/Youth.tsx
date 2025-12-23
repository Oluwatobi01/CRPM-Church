import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Zap, Music, Users, Sun, Calendar, Instagram, Youtube, Twitter, ArrowDown } from 'lucide-react';

const Youth: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'subscribed'>('idle');
  const { scrollY } = useScroll();
  const rotate = useTransform(scrollY, [0, 500], [0, 10]);

  // Override body bg for this page via effect
  useEffect(() => {
    document.body.style.backgroundColor = '#102216'; // Dark green bg
    return () => { document.body.style.backgroundColor = ''; };
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubscribe = () => {
    if (!email) return;
    setStatus('subscribed');
    setEmail('');
    setTimeout(() => setStatus('idle'), 3000);
  };

  return (
    <div className="w-full min-h-screen bg-dark-youth text-white font-youth selection:bg-primary-youth selection:text-black overflow-hidden relative">
      {/* Noise Texture Overlay */}
      <div className="bg-noise" />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 min-h-screen flex items-center">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-youth/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full relative z-10">
           <div className="flex flex-col items-center text-center">
              <motion.div 
                 initial={{ opacity: 0, scale: 0.8 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{ duration: 0.8, ease: "circOut" }}
                 className="mb-8"
              >
                 <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 backdrop-blur-lg border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                    <span className="w-3 h-3 rounded-full bg-primary-youth animate-pulse shadow-[0_0_10px_#13ec5b]" />
                    <span className="text-sm font-bold uppercase tracking-widest text-primary-youth">Sundays @ 10AM • Main Hall</span>
                 </div>
              </motion.div>

              <h1 className="text-7xl md:text-9xl font-black uppercase tracking-tighter leading-[0.9] mb-8 relative">
                <span className="block text-stroke opacity-50 absolute top-1 left-1 -z-10 w-full">Next Gen</span>
                <span className="block">Next Gen</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-youth to-emerald-200">Rising</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
                Not just a church. A <span className="text-white font-bold bg-white/10 px-2 rounded">family</span>. Join a movement of young people discovering purpose in a chaotic world.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-6">
                 <button 
                   onClick={() => scrollToSection('join-squad')}
                   className="px-10 py-5 bg-primary-youth text-black font-extrabold text-xl rounded-2xl hover:scale-105 transition-transform shadow-[0_0_50px_rgba(19,236,91,0.4)] hover:shadow-[0_0_80px_rgba(19,236,91,0.6)]"
                 >
                    Join the Movement
                 </button>
                 <button 
                    onClick={() => scrollToSection('upcoming')}
                    className="px-10 py-5 bg-transparent border-2 border-white/20 text-white font-bold text-xl rounded-2xl hover:bg-white/5 transition-colors flex items-center gap-2"
                 >
                    Check Events <ArrowDown size={20} />
                 </button>
              </div>
           </div>
        </div>
      </section>

      {/* Infinite Ticker */}
      <div className="bg-primary-youth text-black py-4 overflow-hidden border-y-4 border-black rotate-[-2deg] scale-105 origin-left relative z-20 shadow-xl">
        <div className="animate-marquee whitespace-nowrap flex gap-12 items-center font-black text-2xl uppercase tracking-tighter">
            {[...Array(10)].map((_, i) => (
                <React.Fragment key={i}>
                    <span>Next Gen Rising</span>
                    <Zap size={24} fill="black" />
                    <span>Fridays 7PM</span>
                    <Zap size={24} fill="black" />
                    <span>Free Coffee</span>
                    <Zap size={24} fill="black" />
                </React.Fragment>
            ))}
        </div>
      </div>

      {/* Programs */}
      <section id="schedule" className="py-32 px-4 bg-white text-dark-youth relative z-10">
         <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-20">
               <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none">Find Your <br /><span className="text-primary-youth-hover underline decoration-wavy decoration-8">Squad</span></h2>
               <p className="text-xl font-bold max-w-sm text-right">Real community happens in circles, not just in rows. Find your people.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
               {[
                 { title: "Friday Night Live", icon: Zap, desc: "High energy worship, relevant teaching, and after-party vibes every Friday at 7PM." },
                 { title: "Small Groups", icon: Users, desc: "Connect deeper in intimate groups based on age and interests. Meets Wednesdays." },
                 { title: "Sunday Youth", icon: Sun, desc: "A dedicated service for youth during the main church gathering. 10AM." },
               ].map((p, i) => (
                 <motion.div 
                    key={i}
                    whileHover={{ y: -10, rotate: i % 2 === 0 ? 1 : -1 }}
                    className="bg-gray-100 p-10 rounded-[2.5rem] border-2 border-transparent hover:border-black hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 group"
                 >
                    <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center text-primary-youth mb-8 group-hover:rotate-12 transition-transform">
                       <p.icon size={32} strokeWidth={2.5} />
                    </div>
                    <h3 className="text-3xl font-black mb-4 uppercase">{p.title}</h3>
                    <p className="text-gray-600 font-bold text-lg leading-relaxed">{p.desc}</p>
                 </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* Events Scroller */}
      <section id="upcoming" className="py-32 bg-dark-youth relative overflow-hidden">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-youth/5 to-transparent pointer-events-none" />
         
         <div className="max-w-7xl mx-auto px-4 mb-16 flex flex-col md:flex-row md:items-center gap-6 justify-between relative z-10">
            <div>
                <h2 className="text-5xl md:text-6xl font-black text-white uppercase tracking-tighter">Upcoming <span className="text-stroke">Hype</span></h2>
            </div>
            <div className="flex gap-2">
                <span className="bg-primary-youth text-black px-4 py-1 text-sm font-black rounded-full uppercase tracking-widest animate-pulse">Live Updates</span>
            </div>
         </div>
         
         <div className="flex gap-8 overflow-x-auto px-4 pb-12 no-scrollbar snap-x">
            {[
              { title: "Summer Retreat", date: "JUL 15", img: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d" },
              { title: "Pizza & Game Night", date: "AUG 02", img: "https://images.unsplash.com/photo-1574126154517-d1e0d89e7344" },
              { title: "Worship Night", date: "AUG 09", img: "https://images.unsplash.com/photo-1501612780327-45045538702b" },
              { title: "Park Hangout", date: "AUG 15", img: "https://images.unsplash.com/photo-1519751138087-5bf79df62d58" }
            ].map((e, i) => (
              <motion.div 
                key={i} 
                whileHover={{ scale: 1.02 }}
                className="min-w-[320px] md:min-w-[400px] bg-white/5 border border-white/10 p-4 rounded-[2rem] hover:bg-white/10 transition-colors cursor-pointer snap-start"
              >
                 <div className="relative aspect-[16/10] rounded-3xl overflow-hidden mb-6">
                    <img src={`${e.img}?q=80&w=600&auto=format&fit=crop`} className="w-full h-full object-cover" alt={e.title} />
                    <div className="absolute top-4 left-4 bg-black/80 backdrop-blur px-4 py-2 rounded-xl text-sm font-black text-primary-youth border border-primary-youth/30">{e.date}</div>
                 </div>
                 <h3 className="text-2xl font-black text-white mb-2">{e.title}</h3>
                 <button className="w-full py-4 mt-2 bg-white text-black rounded-xl text-sm font-black uppercase tracking-wider hover:bg-primary-youth transition-colors">Save Spot</button>
              </motion.div>
            ))}
         </div>
      </section>

      {/* Footer Vibe */}
      <section id="join-squad" className="py-32 px-4 bg-black text-white relative">
         <div className="max-w-4xl mx-auto border border-white/20 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden bg-white/5 backdrop-blur-sm">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary-youth/30 blur-[150px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            
            <div className="relative z-10">
               <h2 className="text-5xl md:text-7xl font-black mb-8 uppercase italic">Don't Miss <br />the Move</h2>
               <p className="text-gray-400 mb-10 max-w-xl mx-auto text-lg">Get text updates on secret events, merch drops, and schedule changes. No spam, we promise.</p>
               
               <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email" 
                    className="h-16 rounded-2xl bg-black border border-white/20 px-8 w-full focus:ring-2 focus:ring-primary-youth outline-none text-white placeholder-gray-600 font-bold" 
                  />
                  <button 
                    onClick={handleSubscribe}
                    className="h-16 px-10 rounded-2xl bg-primary-youth text-black font-black whitespace-nowrap hover:scale-105 transition-transform shadow-[0_0_20px_rgba(19,236,91,0.3)] uppercase tracking-wide"
                  >
                     {status === 'subscribed' ? "Joined!" : "Join Squad"}
                  </button>
               </div>
            </div>
         </div>
         
         <div className="flex justify-center gap-8 mt-20">
            <a href="#" className="w-16 h-16 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-primary-youth hover:text-black hover:border-primary-youth transition-all hover:scale-110"><Instagram size={28} /></a>
            <a href="#" className="w-16 h-16 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-primary-youth hover:text-black hover:border-primary-youth transition-all hover:scale-110"><Youtube size={28} /></a>
            <a href="#" className="w-16 h-16 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-primary-youth hover:text-black hover:border-primary-youth transition-all hover:scale-110"><Twitter size={28} /></a>
         </div>
      </section>
    </div>
  );
};

export default Youth;