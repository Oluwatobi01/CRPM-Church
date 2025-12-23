import React, { useState, useEffect } from 'react';
import { Outlet, NavLink, Link, useLocation, useOutletContext } from 'react-router-dom';
import { Menu, X, Church, Instagram, Youtube, Facebook, MapPin, Mail, Phone, ChevronRight, CheckCircle, AlertCircle } from 'lucide-react';
import { motion, useScroll, useSpring } from 'framer-motion';

// Context type for pages to use
type ContextType = {
  showToast: (message: string, type?: 'success' | 'error') => void;
};

// Helper hook for pages
export function useToast() {
  return useOutletContext<ContextType>();
}

const Layout: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Toast State
  const [toast, setToast] = useState<{message: string, type: 'success' | 'error'} | null>(null);

  // Footer Form State
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Determine theme based on path
  const isYouth = location.pathname.includes('/youth');
  const themeColor = isYouth ? 'text-primary-youth' : 'text-primary';
  const buttonBg = isYouth ? 'bg-primary-youth hover:bg-primary-youth-hover text-black' : 'bg-primary hover:bg-primary-hover text-white';
  const progressBarColor = isYouth ? '#13ec5b' : '#2badee';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const showToast = (message: string, type: 'success' | 'error' = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setEmail('');
      showToast('You are on the list! Welcome to the family.', 'success');
    }, 1500);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Sermons', path: '/sermons' },
    { name: 'Events', path: '/events' },
    { name: 'Youth', path: '/youth' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="flex min-h-screen flex-col font-sans relative">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 z-[60] origin-left"
        style={{ scaleX, backgroundColor: progressBarColor }}
      />

      {/* Navbar */}
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          isScrolled ? 'bg-white/80 backdrop-blur-xl shadow-sm border-b border-gray-100 py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className={`p-2 rounded-xl ${isScrolled ? 'bg-primary/10' : 'bg-white/20 backdrop-blur-md'} transition-all group-hover:scale-105`}>
                <Church className={`w-6 h-6 ${isScrolled ? 'text-primary' : 'text-primary'} transition-colors`} />
              </div>
              <span className={`text-xl font-extrabold tracking-tight ${isScrolled ? 'text-slate-900' : 'text-slate-900 lg:text-slate-900'}`}>
                CRPM
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-sm font-bold transition-all hover:text-primary relative group ${
                      isActive ? 'text-primary' : isScrolled ? 'text-slate-600' : 'text-slate-600' 
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.name}
                      <span className={`absolute -bottom-1 left-0 w-full h-0.5 rounded-full bg-primary origin-left transition-transform duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                    </>
                  )}
                </NavLink>
              ))}
              <Link
                to="/contact"
                className={`px-5 py-2.5 rounded-xl text-sm font-bold shadow-lg shadow-primary/20 transition-all hover:scale-105 active:scale-95 ${buttonBg}`}
              >
                Plan a Visit
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-slate-800"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-gray-100 p-4 shadow-xl"
          >
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-lg font-bold text-slate-800 py-3 border-b border-gray-50 hover:pl-2 transition-all"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className={`w-full text-center py-4 rounded-xl font-bold ${buttonBg}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Plan a Visit
              </Link>
            </nav>
          </motion.div>
        )}
      </header>

      {/* Main Content with Context */}
      <main className="flex-1">
        <Outlet context={{ showToast }} />
      </main>

      {/* Footer */}
      <footer className="bg-dark text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <Church className="text-primary w-8 h-8" />
                <span className="text-2xl font-bold">CRPM</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Helping people find their purpose and place in God's story. A home for the authentic.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all hover:scale-110">
                  <Instagram size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all hover:scale-110">
                  <Youtube size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all hover:scale-110">
                  <Facebook size={18} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-4 text-sm text-gray-400">
                <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                <li><Link to="/sermons" className="hover:text-primary transition-colors">Sermons</Link></li>
                <li><Link to="/events" className="hover:text-primary transition-colors">Events</Link></li>
                <li><Link to="/youth" className="hover:text-primary-youth transition-colors">Youth Ministry</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6">Visit Us</h4>
              <ul className="space-y-4 text-sm text-gray-400">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary shrink-0" />
                  <span>123 Redemption Way<br />Los Angeles, CA 90012</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary shrink-0" />
                  <span>hello@crpm.church</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary shrink-0" />
                  <span>(555) 123-4567</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6">Stay Updated</h4>
              <p className="text-gray-400 text-sm mb-4">Weekly inspiration right to your inbox.</p>
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address" 
                  required
                  className="bg-white/10 border-none rounded-lg px-4 py-2 text-sm w-full focus:ring-2 focus:ring-primary outline-none text-white placeholder-gray-500 transition-all focus:bg-white/20"
                />
                <button 
                  disabled={isSubmitting}
                  className="bg-primary p-2 rounded-lg text-white hover:bg-primary-hover transition-colors disabled:opacity-50"
                >
                  <ChevronRight />
                </button>
              </form>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
            <p>&copy; 2024 Christ Redemption Power Mission. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Toast Component */}
      {toast && (
        <motion.div 
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          className={`fixed bottom-6 right-6 z-[60] px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 ${
            toast.type === 'success' ? 'bg-slate-900 text-white' : 'bg-red-500 text-white'
          }`}
        >
          {toast.type === 'success' ? <CheckCircle size={20} className="text-primary" /> : <AlertCircle size={20} />}
          <p className="font-bold text-sm">{toast.message}</p>
        </motion.div>
      )}
    </div>
  );
};

export default Layout;