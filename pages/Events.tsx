import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Clock, ArrowRight, Loader2 } from 'lucide-react';
import { useToast } from '../components/Layout';

const Events: React.FC = () => {
  const { showToast } = useToast();
  const [registeringId, setRegisteringId] = useState<string | null>(null);
  
  // Timer State
  const [timeLeft, setTimeLeft] = useState({ days: 14, hours: 6, mins: 30 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.mins > 0) return { ...prev, mins: prev.mins - 1 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, mins: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, mins: 59 };
        return prev;
      });
    }, 60000); // Update every minute to save resources
    return () => clearInterval(timer);
  }, []);

  const handleRegister = (eventName: string, id: string) => {
    setRegisteringId(id);
    setTimeout(() => {
      setRegisteringId(null);
      showToast(`Successfully registered for ${eventName}!`);
    }, 1500);
  };

  return (
    <div className="w-full pt-20 pb-20 bg-white">
       {/* Featured Event */}
       <section className="px-4 py-8 md:px-8">
         <div className="max-w-7xl mx-auto bg-slate-900 rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden flex flex-col lg:flex-row gap-12 items-center">
            <div className="relative z-10 flex-1 space-y-8">
              <div className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary font-bold text-xs uppercase tracking-wider border border-primary/20">
                Upcoming Major Event
              </div>
              <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-none">
                SUMMER <br /> RETREAT <span className="text-primary">'24</span>
              </h1>
              <p className="text-gray-400 text-lg max-w-md">Experience a weekend of connection, worship, and unfiltered conversation.</p>
              
              <div className="flex gap-4">
                 {[
                   { val: timeLeft.days, label: "Days" },
                   { val: timeLeft.hours, label: "Hrs" },
                   { val: timeLeft.mins, label: "Mins" },
                 ].map((t, i) => (
                   <div key={i} className="bg-white/10 backdrop-blur rounded-xl p-4 w-20 text-center border border-white/10">
                     <div className="text-2xl font-bold text-primary">{t.val.toString().padStart(2, '0')}</div>
                     <div className="text-[10px] uppercase font-bold text-gray-400">{t.label}</div>
                   </div>
                 ))}
              </div>

              <div className="flex gap-4">
                <button 
                  onClick={() => handleRegister('Summer Retreat', 'retreat')}
                  disabled={registeringId === 'retreat'}
                  className="bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-primary-hover transition-colors shadow-lg shadow-primary/25 min-w-[160px] flex justify-center"
                >
                  {registeringId === 'retreat' ? <Loader2 className="animate-spin" /> : "Register Now"}
                </button>
              </div>
            </div>

            <div className="flex-1 w-full h-[400px] lg:h-[500px] rounded-3xl overflow-hidden relative">
               <img src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" alt="Retreat" />
               <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur p-4 rounded-2xl shadow-lg border border-white/50 flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl text-primary">
                    <MapPin />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-500 uppercase">Location</p>
                    <p className="text-slate-900 font-bold">Camp Cedar Lake, CA</p>
                  </div>
               </div>
            </div>
         </div>
       </section>

       {/* Events List */}
       <section className="px-4 py-12 max-w-7xl mx-auto">
         <div className="flex items-end justify-between mb-8">
           <h2 className="text-3xl font-extrabold text-slate-900">Happening Soon</h2>
           <button onClick={() => showToast("Calendar view coming soon!")} className="text-primary font-bold flex items-center gap-1 hover:gap-2 transition-all">
             View Calendar <ArrowRight size={18} />
           </button>
         </div>

         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { id: 'e1', date: "12", month: "AUG", title: "Worship Night: Unplugged", time: "7:00 PM", cat: "Worship", img: "https://images.unsplash.com/photo-1510915362694-98438f2676aa" },
              { id: 'e2', date: "15", month: "AUG", title: "The Shift: Friday Hangout", time: "6:30 PM", cat: "Youth", img: "https://images.unsplash.com/photo-1543269865-cbf427effbad" },
              { id: 'e3', date: "18", month: "AUG", title: "Community Core: Food Drive", time: "9:00 AM", cat: "Outreach", img: "https://images.unsplash.com/photo-1593113598332-cd288d649433" },
              { id: 'e4', date: "20", month: "AUG", title: "Morning Devo & Coffee", time: "10:00 AM", cat: "Bible Study", img: "https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d" }
            ].map((e, i) => (
              <div key={i} className="group bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all overflow-hidden flex flex-col">
                 <div className="relative aspect-[4/3] overflow-hidden">
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur rounded-xl p-3 text-center min-w-[60px] z-10 shadow-sm">
                      <div className="text-xs font-bold text-primary">{e.month}</div>
                      <div className="text-2xl font-black text-slate-900 leading-none">{e.date}</div>
                    </div>
                    <img src={`${e.img}?q=80&w=600&auto=format&fit=crop`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt={e.title} />
                 </div>
                 <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded uppercase">{e.cat}</span>
                      <span className="flex items-center gap-1 text-xs font-bold text-slate-400"><Clock size={12} /> {e.time}</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">{e.title}</h3>
                    <button 
                      onClick={() => handleRegister(e.title, e.id)}
                      disabled={registeringId === e.id}
                      className="mt-auto pt-4 text-primary font-bold text-sm text-left hover:underline flex items-center gap-2"
                    >
                      {registeringId === e.id ? <Loader2 size={16} className="animate-spin" /> : "Register"} &rarr;
                    </button>
                 </div>
              </div>
            ))}
         </div>
       </section>
    </div>
  );
};

export default Events;