import React, { useState, useMemo } from 'react';
import { Search, Play, Mic, Music, BookOpen, Pause } from 'lucide-react';
import { useToast } from '../components/Layout';

const Sermons: React.FC = () => {
  const { showToast } = useToast();
  const [filter, setFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSermon, setActiveSermon] = useState<any>(null); // Defaults to featured if null
  const [isPlaying, setIsPlaying] = useState(false);

  const filters = ['All', 'Trending', 'Sunday Service', 'Youth', 'Podcasts'];

  const allUploads = [
    { id: 1, title: "Faith in the Digital Age", speaker: "Pastor Michael", date: "Yesterday", duration: "48:10", tags: ["#Digital", "#Faith"], img: "https://images.unsplash.com/photo-1478147427282-58a87a120781", featured: true },
    { id: 2, title: "Finding Peace in Chaos", speaker: "Pastor Michael", date: "2 days ago", duration: "45:20", tags: ["#Anxiety", "#Peace"], img: "https://images.unsplash.com/photo-1534447677768-be436bb09401", category: "Trending" },
    { id: 3, title: "Community & Belonging", speaker: "Rev. Sarah Jenkins", date: "5 days ago", duration: "32:15", tags: ["#Community"], img: "https://images.unsplash.com/photo-1511632765486-a01980e01a18", category: "Sunday Service" },
    { id: 4, title: "The Power of Prayer", speaker: "Main Sanctuary", date: "1 week ago", duration: "58:00", tags: ["#Worship", "#Prayer"], img: "https://images.unsplash.com/photo-1507692049790-de58293a469d", category: "Trending" },
    { id: 5, title: "Youth: Summer Vibes", speaker: "Youth Leader Josh", date: "1 week ago", duration: "25:10", tags: ["#Youth", "#Fun"], img: "https://images.unsplash.com/photo-1523580494863-6f3031224c94", category: "Youth" },
    { id: 6, title: "Deep Dive Podcast Ep. 4", speaker: "Creative Team", date: "2 weeks ago", duration: "60:00", tags: ["#Podcast"], img: "https://images.unsplash.com/photo-1478737270239-2f02b77ac6d5", category: "Podcasts" }
  ];

  // Logic to filter sermons
  const filteredSermons = useMemo(() => {
    return allUploads.filter(s => {
      const matchesFilter = filter === 'All' || s.category === filter;
      const matchesSearch = s.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            s.speaker.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesFilter && matchesSearch && !s.featured;
    });
  }, [filter, searchQuery]);

  const featuredSermon = allUploads[0];
  const current = activeSermon || featuredSermon;

  const handlePlay = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying) {
      showToast(`Now playing: ${current.title}`);
    }
  };

  const handleAction = (action: string) => {
    showToast(`${action} started...`);
  };

  return (
    <div className="w-full pt-20 bg-gray-50 min-h-screen">
      {/* Featured Hero */}
      <section className="px-4 py-8 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6">
          <div 
            className="relative w-full lg:w-2/3 aspect-video rounded-3xl overflow-hidden group cursor-pointer shadow-lg bg-black"
            onClick={handlePlay}
          >
            {isPlaying ? (
              <div className="absolute inset-0 flex items-center justify-center">
                 <p className="text-white font-bold animate-pulse">Simulating Video Player Playback...</p>
                 {/* In a real app, iframe or video tag goes here */}
              </div>
            ) : (
              <>
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                     style={{ backgroundImage: `url('${current.img}?q=80&w=2070&auto=format&fit=crop')` }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="text-white fill-white ml-1" size={32} />
                  </div>
                </div>
                <div className="absolute bottom-8 left-8 text-white">
                   <span className="bg-primary px-3 py-1 rounded-md text-xs font-bold uppercase mb-3 inline-block">
                     {activeSermon ? 'Now Watching' : 'Latest Sermon'}
                   </span>
                   <h1 className="text-3xl md:text-5xl font-extrabold mb-2">{current.title}</h1>
                   <p className="text-gray-200 font-medium">Speaker: {current.speaker}</p>
                </div>
              </>
            )}
          </div>
          
          <div className="w-full lg:w-1/3 flex flex-col gap-6">
             <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Next Steps</h3>
                  <div className="space-y-3">
                    <button 
                      onClick={() => handleAction('Download')}
                      className="w-full p-4 bg-gray-50 rounded-xl flex items-center gap-3 hover:bg-gray-100 transition-colors text-left"
                    >
                      <BookOpen size={20} className="text-primary" />
                      <span className="font-bold text-slate-700 text-sm">Download Study Guide</span>
                    </button>
                    <button 
                      onClick={() => handleAction('Joining Group')}
                      className="w-full p-4 bg-gray-50 rounded-xl flex items-center gap-3 hover:bg-gray-100 transition-colors text-left"
                    >
                      <Mic size={20} className="text-primary" />
                      <span className="font-bold text-slate-700 text-sm">Join Discussion Group</span>
                    </button>
                  </div>
                </div>
                <button className="w-full py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary-hover transition-colors">
                  View Series Archive
                </button>
             </div>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="sticky top-[72px] z-40 bg-white/80 backdrop-blur-xl border-y border-gray-100 py-4 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 items-center justify-between">
           <div className="relative w-full md:w-96">
             <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
             <input 
               type="text" 
               value={searchQuery}
               onChange={(e) => setSearchQuery(e.target.value)}
               placeholder="Search sermons, topics..." 
               className="w-full h-12 pl-12 pr-4 rounded-xl bg-gray-100 border-none focus:ring-2 focus:ring-primary outline-none" 
             />
           </div>
           <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
             {filters.map(f => (
               <button 
                key={f}
                onClick={() => setFilter(f)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-colors ${filter === f ? 'bg-slate-900 text-white' : 'bg-white border border-gray-200 text-slate-600 hover:bg-gray-50'}`}
               >
                 {f}
               </button>
             ))}
           </div>
        </div>
      </section>

      {/* Recent Grid */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
           <span className="w-2 h-8 bg-primary rounded-full block" /> 
           {searchQuery ? `Searching "${searchQuery}"` : 'Recent Uploads'}
        </h2>
        {filteredSermons.length === 0 ? (
          <div className="text-center py-20 text-gray-500">No sermons found. Try a different search.</div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
             {filteredSermons.map((item) => (
               <div 
                 key={item.id} 
                 className="group cursor-pointer"
                 onClick={() => {
                   setActiveSermon(item);
                   setIsPlaying(false);
                   window.scrollTo({ top: 0, behavior: 'smooth' });
                 }}
               >
                 <div className="relative aspect-video rounded-2xl overflow-hidden mb-4 bg-gray-200">
                   <img src={`${item.img}?q=80&w=600&auto=format&fit=crop`} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                   <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                     <Play className="text-white fill-white opacity-0 group-hover:opacity-100 transition-opacity" />
                   </div>
                   <span className="absolute bottom-2 right-2 bg-black/70 text-white text-xs font-bold px-2 py-1 rounded">{item.duration}</span>
                 </div>
                 <h3 className="font-bold text-lg text-slate-900 group-hover:text-primary transition-colors">{item.title}</h3>
                 <div className="flex items-center gap-2 text-sm text-slate-500 mt-1">
                   <span>{item.speaker}</span> • <span>{item.date}</span>
                 </div>
                 <div className="flex gap-2 mt-3">
                   {item.tags.map(t => (
                     <span key={t} className="text-xs font-bold bg-white border border-gray-200 px-2 py-1 rounded-md text-slate-600">{t}</span>
                   ))}
                 </div>
               </div>
             ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Sermons;