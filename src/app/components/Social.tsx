import { Instagram } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'motion/react';

const instagramPosts = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1764641405208-8f4116556901?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbG93ZXIlMjBib3VxdWV0JTIwaGFuZHMlMjBlbGVnYW50fGVufDF8fHx8MTc3OTgxNjExOHww&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1779093318168-04d0cf490643?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxMHx8cGluayUyMGZsb3dlcnMlMjBzdW5saWdodCUyMHJvbWFudGljJTIwZ2FyZGVuJTIwZHJlYW15fGVufDF8fHx8MTc3OTgxNjExNXww&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1764963299015-03ae5469a23c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw2fHxwaW5rJTIwZmxvd2VycyUyMHN1bmxpZ2h0JTIwcm9tYW50aWMlMjBnYXJkZW4lMjBkcmVhbXl8ZW58MXx8fHwxNzc5ODE2MTE1fDA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1752151730411-54367cf8c85f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw5fHxwaW5rJTIwZmxvd2VycyUyMHN1bmxpZ2h0JTIwcm9tYW50aWMlMjBnYXJkZW4lMjBkcmVhbXl8ZW58MXx8fHwxNzc5ODE2MTE1fDA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1778513949640-efbe4911e9fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxmbG93ZXIlMjBib3VxdWV0JTIwaGFuZHMlMjBlbGVnYW50fGVufDF8fHx8MTc3OTgxNjExOHww&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1759419281557-ebdca33c9263?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw2fHxmbG93ZXIlMjBib3VxdWV0JTIwaGFuZHMlMjBlbGVnYW50fGVufDF8fHx8MTc3OTgxNjExOHww&ixlib=rb-4.1.0&q=80&w=1080'
  }
];

export default function Social() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Content wrapper with decorative elements */}
        <div className="relative">
          {/* Decorative circles */}
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#A8C5A2]/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#F3A6B6]/10 rounded-full blur-3xl" />

          <div className="relative text-center mb-12">
            <h2 className="text-5xl lg:text-6xl mb-6 text-[#224A34]" style={{ fontFamily: 'var(--font-serif)', fontWeight: 400 }}>
              Follow us & get inspired
            </h2>

            <p className="text-lg text-[#224A34]/70 mb-8 max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}>
              Join our community for daily floral inspiration, styling tips, and exclusive behind-the-scenes moments
            </p>

            <div className="flex justify-center gap-4 mb-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#F3A6B6] to-[#F3A6B6]/80 hover:from-[#F3A6B6]/90 hover:to-[#F3A6B6]/70 text-white px-8 py-6 rounded-full transition-all hover:scale-105 shadow-lg"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                <Instagram className="w-5 h-5 mr-2" />
                @lule.lu
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-2 border-[#224A34] text-[#224A34] hover:bg-[#224A34] hover:text-white px-8 py-6 rounded-full transition-all hover:scale-105"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                </svg>
                TikTok
              </Button>
            </div>
          </div>

          {/* Instagram feed grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {instagramPosts.map((post, index) => (
              <motion.div
                key={post.id}
                className="relative aspect-square overflow-hidden rounded-2xl group cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <img
                  src={post.image}
                  alt={`Instagram post ${post.id}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Instagram overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#224A34]/90 via-[#224A34]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <Instagram className="w-10 h-10 text-white" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to action */}
          <div className="text-center mt-16">
            <p className="text-[#224A34] italic mb-4" style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem' }}>
              "Every flower is a soul blossoming in nature"
            </p>
            <p className="text-sm text-[#224A34]/60" style={{ fontFamily: 'var(--font-sans)' }}>
              Share your LULE.LU moments with #LuleLuFlowers
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
