import { useState } from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Send } from 'lucide-react';
import { motion } from 'motion/react';

const bouquets = [
  {
    id: 1,
    title: 'Romantic Pink Roses',
    image: 'https://images.unsplash.com/photo-1764963299015-03ae5469a23c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw2fHxwaW5rJTIwZmxvd2VycyUyMHN1bmxpZ2h0JTIwcm9tYW50aWMlMjBnYXJkZW4lMjBkcmVhbXl8ZW58MXx8fHwxNzc5ODE2MTE1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    tag: "This Week's Favorite",
    tagColor: 'bg-[#F3A6B6]'
  },
  {
    id: 2,
    title: 'Wildflower Garden Mix',
    image: 'https://images.unsplash.com/photo-1752151730411-54367cf8c85f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw5fHxwaW5rJTIwZmxvd2VycyUyMHN1bmxpZ2h0JTIwcm9tYW50aWMlMjBnYXJkZW4lMjBkcmVhbXl8ZW58MXx8fHwxNzc5ODE2MTE1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    tag: 'Airport Bestseller',
    tagColor: 'bg-[#A8C5A2]'
  },
  {
    id: 3,
    title: 'Minimal White Bouquet',
    image: 'https://images.unsplash.com/photo-1764641405208-8f4116556901?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbG93ZXIlMjBib3VxdWV0JTIwaGFuZHMlMjBlbGVnYW50fGVufDF8fHx8MTc3OTgxNjExOHww&ixlib=rb-4.1.0&q=80&w=1080',
    tag: 'Limited Edition',
    tagColor: 'bg-[#224A34]'
  },
  {
    id: 4,
    title: 'Spring Pastel Bouquet',
    image: 'https://images.unsplash.com/photo-1778513949640-efbe4911e9fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxmbG93ZXIlMjBib3VxdWV0JTIwaGFuZHMlMjBlbGVnYW50fGVufDF8fHx8MTc3OTgxNjExOHww&ixlib=rb-4.1.0&q=80&w=1080',
    tag: 'New This Week',
    tagColor: 'bg-[#F3A6B6]'
  }
];

export default function WeeklyBouquets() {
  const [suggestion, setSuggestion] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (suggestion.trim()) {
      alert(`Thank you for your suggestion: "${suggestion}"! We'll consider it for next week.`);
      setSuggestion('');
    }
  };

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl mb-6 text-[#224A34]" style={{ fontFamily: 'var(--font-serif)', fontWeight: 400 }}>
            Every week blooms differently
          </h2>
          <div className="w-24 h-1 bg-[#F3A6B6] rounded-full mx-auto" />
        </div>

        {/* Bouquet cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {bouquets.map((bouquet, index) => (
            <motion.div
              key={bouquet.id}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="relative overflow-hidden rounded-3xl mb-4 aspect-[3/4] shadow-lg hover:shadow-2xl transition-all duration-500">
                <img
                  src={bouquet.image}
                  alt={bouquet.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#224A34]/80 via-[#224A34]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Tag badge */}
                <div className="absolute top-4 left-4">
                  <Badge className={`${bouquet.tagColor} text-white border-0 px-3 py-1.5 text-xs`} style={{ fontFamily: 'var(--font-sans)' }}>
                    {bouquet.tag}
                  </Badge>
                </div>
              </div>

              <h3 className="text-xl text-[#224A34] group-hover:text-[#F3A6B6] transition-colors" style={{ fontFamily: 'var(--font-serif)' }}>
                {bouquet.title}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* Suggestion section */}
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-[#F7F5ED] rounded-3xl p-10 text-center shadow-sm">
            <h3 className="text-3xl lg:text-4xl mb-4 text-[#224A34]" style={{ fontFamily: 'var(--font-serif)', fontWeight: 400 }}>
              What would you love to see next week?
            </h3>

            <p className="text-[#224A34]/70 mb-8" style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}>
              Your ideas help us create the perfect bouquets
            </p>

            <form onSubmit={handleSubmit} className="flex gap-3">
              <input
                type="text"
                value={suggestion}
                onChange={(e) => setSuggestion(e.target.value)}
                placeholder="Suggest a bouquet theme…"
                className="flex-1 px-6 py-4 rounded-full bg-white border border-[#224A34]/20 text-[#224A34] placeholder:text-[#224A34]/40 focus:outline-none focus:border-[#A8C5A2] transition-colors"
                style={{ fontFamily: 'var(--font-sans)' }}
              />
              <Button
                type="submit"
                className="bg-[#224A34] hover:bg-[#224A34]/90 text-white px-8 rounded-full transition-all hover:scale-105"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                <Send className="w-5 h-5" />
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
