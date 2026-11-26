import { Instagram, MapPin } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#F7F5ED]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1746850727110-08ea093eea80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaW5rJTIwZmxvd2VycyUyMHN1bmxpZ2h0JTIwcm9tYW50aWMlMjBnYXJkZW4lMjBkcmVhbXl8ZW58MXx8fHwxNzc5ODE2MTE1fDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Dreamy pink flowers in sunlight"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F7F5ED]/30 via-[#F7F5ED]/50 to-[#F7F5ED]" />
      </div>

      {/* Airplane silhouette in background */}
      <div className="absolute top-20 right-10 opacity-20">
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" className="text-[#224A34]">
          <path d="M60 30L80 50L60 45L40 50L60 30Z" fill="currentColor" opacity="0.3"/>
          <path d="M60 45L80 50L85 70L60 65L35 70L40 50L60 45Z" fill="currentColor" opacity="0.2"/>
        </svg>
      </div>

      {/* Floating floral elements */}
      <div className="absolute top-32 left-10 opacity-40">
        <div className="w-24 h-24 rounded-full bg-[#F3A6B6]/30 blur-2xl animate-pulse" />
      </div>
      <div className="absolute bottom-40 right-20 opacity-40">
        <div className="w-32 h-32 rounded-full bg-[#A8C5A2]/30 blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Logo */}
        <motion.div
          className="mb-12 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <div className="relative">
            {/* Arch with flower */}
            <div className="w-32 h-32 mx-auto mb-4">
              <svg viewBox="0 0 120 140" fill="none" className="w-full h-full">
                {/* Arch */}
                <path
                  d="M20 120C20 66.4446 63.4446 23 117 23C117 23 117 23 117 23C117 76.5554 73.5554 120 20 120Z"
                  stroke="#224A34"
                  strokeWidth="2"
                  fill="none"
                  transform="translate(-37, 0) scale(1.4)"
                />
                {/* Simple flower */}
                <circle cx="60" cy="45" r="8" fill="#F3A6B6" />
                <circle cx="54" cy="38" r="6" fill="#F3A6B6" opacity="0.8" />
                <circle cx="66" cy="38" r="6" fill="#F3A6B6" opacity="0.8" />
                <circle cx="54" cy="52" r="6" fill="#F3A6B6" opacity="0.8" />
                <circle cx="66" cy="52" r="6" fill="#F3A6B6" opacity="0.8" />
                <line x1="60" y1="53" x2="60" y2="75" stroke="#224A34" strokeWidth="2" />
                <path d="M60 65 L52 68 L60 70" stroke="#224A34" strokeWidth="1.5" fill="none" />
              </svg>
            </div>

            {/* Brand name */}
            <h1 className="text-6xl md:text-7xl mb-2 tracking-wider" style={{ fontFamily: 'var(--font-serif)' }}>
              LULE.LU
            </h1>
            <p className="text-sm tracking-[0.3em] text-[#224A34]/70" style={{ fontFamily: 'var(--font-sans)' }}>
              FLOWERS. ANYTIME. ANYWHERE.
            </p>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl mb-6 text-[#224A34]"
          style={{ fontFamily: 'var(--font-serif)', fontWeight: 400, lineHeight: 1.3 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Flowers. Anytime. Anywhere.
        </motion.h2>

        {/* Subheadline */}
        <motion.p
          className="text-lg md:text-xl mb-12 text-[#224A34]/80 max-w-2xl mx-auto"
          style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Fresh flower bouquets available 24/7 at Tirana International Airport.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Button
            size="lg"
            className="bg-[#224A34] hover:bg-[#224A34]/90 text-[#F7F5ED] px-8 py-6 text-base rounded-full transition-all hover:scale-105"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            <MapPin className="w-5 h-5 mr-2" />
            Find the Machine
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-[#224A34] text-[#224A34] hover:bg-[#224A34] hover:text-[#F7F5ED] px-8 py-6 text-base rounded-full transition-all hover:scale-105"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            <Instagram className="w-5 h-5 mr-2" />
            Follow on Instagram
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#224A34]/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-[#224A34]/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
