import React from 'react';
import { Link } from 'react-router-dom';
import { PlayCircle, ArrowRight, Info, Baby, Users, MapPin, Clock, Star } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Home: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  return (
    <div className="w-full overflow-hidden">
      {/* Parallax Hero Section */}
      <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ y: y1 }}
          className="absolute inset-0 bg-cover bg-center z-0 scale-110"
        >
             <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ 
                    backgroundImage: `url('https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop')` 
                }}
            />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-gray-50" />
        </motion.div>

        <motion.div 
          style={{ y: y2 }}
          className="relative z-10 max-w-5xl mx-auto px-4 text-center mt-16"
        >
          <motion.div 
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center gap-6"
          >
            <span className="px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-widest hover:bg-white/20 transition-colors cursor-default">
              Welcome Home
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tight leading-tight drop-shadow-lg">
              Belong Before <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-300 to-white animate-pulse">You Believe.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-100 max-w-2xl font-medium leading-relaxed drop-shadow-md">
              A vibrant community of young believers chasing purpose, finding authentic connection, and exploring faith in the city.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto">
              <Link to="/sermons" className="group h-14 px-8 rounded-2xl bg-primary hover:bg-primary-hover text-white text-base font-bold shadow-xl shadow-primary/30 hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
                <PlayCircle size={20} className="group-hover:rotate-12 transition-transform" />
                Watch Online
              </Link>
              <Link to="/contact" className="h-14 px-8 rounded-2xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white text-base font-bold transition-all flex items-center justify-center">
                Join Us Sunday
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Marquee Strip */}
      <div className="bg-primary py-3 overflow-hidden relative z-20 -mt-10 rotate-1 shadow-xl">
        <div className="animate-marquee whitespace-nowrap flex gap-8 items-center text-white font-extrabold tracking-widest text-sm uppercase">
            {[...Array(10)].map((_, i) => (
                <React.Fragment key={i}>
                    <span>Welcome Home</span>
                    <Star size={12} fill="currentColor" />
                    <span>Real People</span>
                    <Star size={12} fill="currentColor" />
                    <span>Real Faith</span>
                    <Star size={12} fill="currentColor" />
                </React.Fragment>
            ))}
        </div>
      </div>

      {/* New Here Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">New Here?</h2>
            <p className="text-slate-500 text-lg">We know walking into a new place can be intimidating. Here is what you can expect.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Info, title: "What to Expect", desc: "Relaxed atmosphere, casual dress, free coffee, and practical teaching that actually makes sense." },
              { icon: Baby, title: "CRPM Kids", desc: "Safe, fun, and energetic environments for your children to learn about Jesus on their level." },
              { icon: Users, title: "Meet the Team", desc: "Get to know our leadership team and hear their heart for this city and your life." }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
                className="group p-8 rounded-[2rem] bg-white border border-gray-100 shadow-sm transition-all cursor-pointer"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <item.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Times & Location */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="rounded-[2.5rem] overflow-hidden bg-gray-50 shadow-sm border border-gray-100 flex flex-col md:flex-row lg:flex-col h-full group cursor-pointer"
            >
              <div 
                className="h-64 md:h-auto lg:h-80 w-full md:w-1/2 lg:w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1510915228340-29c85a43f753?q=80&w=2070&auto=format&fit=crop')` }}
              />
              <div className="p-10 md:w-1/2 lg:w-full flex flex-col justify-center relative">
                <div className="flex items-center gap-2 text-primary font-bold uppercase text-xs tracking-wider mb-2">
                  <Clock size={16} /> Service Times
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-2">Sundays</h3>
                <p className="text-slate-500 mb-1 text-lg">9:00 AM & 11:00 AM (In-Person)</p>
                <p className="text-slate-500 font-medium">11:00 AM (Online Stream)</p>
              </div>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="rounded-[2.5rem] overflow-hidden bg-gray-50 shadow-sm border border-gray-100 flex flex-col md:flex-row lg:flex-col h-full group cursor-pointer"
            >
              <div 
                className="h-64 md:h-auto lg:h-80 w-full md:w-1/2 lg:w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop')` }}
              />
              <div className="p-10 md:w-1/2 lg:w-full flex flex-col justify-center relative">
                <div className="flex items-center gap-2 text-primary font-bold uppercase text-xs tracking-wider mb-2">
                  <MapPin size={16} /> Location
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-2">The City Campus</h3>
                <p className="text-slate-500 mb-6 text-lg">123 Redemption Way, Cityville, ST 90210</p>
                <Link to="/contact" className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all text-lg">
                  Get Directions <ArrowRight size={20} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Latest Messages Carousel Preview */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-extrabold text-slate-900">Latest Messages</h2>
              <p className="text-slate-500 mt-2">Catch up on what you missed.</p>
            </div>
            <Link to="/sermons" className="text-primary font-bold hidden sm:block hover:underline">View All</Link>
          </div>
          
          <div className="flex gap-6 overflow-x-auto pb-8 no-scrollbar snap-x p-2">
             {[
               { title: "Purpose Driven Life", series: "Found", img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745" },
               { title: "Worship Night Rec", series: "Special Event", img: "https://images.unsplash.com/photo-1514525253440-b393452e8d26" },
               { title: "Why Community Matters", series: "Together", img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac" },
               { title: "Walking by Faith", series: "Sunday Service", img: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3" }
             ].map((msg, i) => (
               <Link to="/sermons" key={i} className="min-w-[280px] md:min-w-[340px] snap-start group cursor-pointer">
                 <div className="relative aspect-video rounded-2xl overflow-hidden mb-4 shadow-sm group-hover:shadow-xl transition-all duration-300">
                   <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10 flex items-center justify-center">
                     <PlayCircle className="text-white opacity-0 group-hover:opacity-100 transition-all transform group-hover:scale-110 drop-shadow-lg" size={56} />
                   </div>
                   <img src={`${msg.img}?q=80&w=600&auto=format&fit=crop`} alt={msg.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                 </div>
                 <h3 className="font-bold text-xl text-slate-900 group-hover:text-primary transition-colors line-clamp-1">{msg.title}</h3>
                 <p className="text-slate-500 text-sm font-medium">{msg.series}</p>
               </Link>
             ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;