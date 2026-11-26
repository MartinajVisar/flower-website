import { motion } from 'motion/react';

export default function About() {
  return (
    <section className="py-24 px-6 bg-[#F7F5ED]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image side with arch frame */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            {/* Decorative arch */}
            <div className="absolute -top-6 -left-6 w-full h-full">
              <svg viewBox="0 0 400 500" fill="none" className="w-full h-full opacity-20">
                <path
                  d="M50 450C50 200 200 50 450 50"
                  stroke="#224A34"
                  strokeWidth="3"
                  fill="none"
                />
              </svg>
            </div>

            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1779085221976-6313aa4ae75f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3RhbmljYWwlMjBnYXJkZW4lMjBncmVlbmhvdXNlJTIwdmludGFnZXxlbnwxfHx8fDE3Nzk4MTYxMTl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Vintage greenhouse with lush plants"
                className="w-full h-[500px] object-cover"
              />
            </div>

            {/* Floating accent circle */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#F3A6B6]/30 rounded-full blur-3xl" />
          </motion.div>

          {/* Text content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div>
              <h2 className="text-5xl lg:text-6xl mb-6 text-[#224A34]" style={{ fontFamily: 'var(--font-serif)', fontWeight: 400, lineHeight: 1.2 }}>
                Beauty in every journey
              </h2>

              <div className="w-24 h-1 bg-[#F3A6B6] rounded-full mb-8" />

              <p className="text-lg text-[#224A34]/80 mb-6 leading-relaxed" style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}>
                LULE.LU is a flower vending experience created to bring beauty, emotion, and spontaneous gifting into everyday moments.
              </p>

              <p className="text-lg text-[#224A34]/80 leading-relaxed" style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}>
                Whether you're welcoming someone home, surprising a loved one, celebrating a milestone, or simply brightening someone's day — fresh flowers are now just moments away.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="space-y-2">
                <div className="w-12 h-12 rounded-full bg-[#224A34]/10 flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-[#224A34]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h4 className="text-[#224A34]" style={{ fontFamily: 'var(--font-sans)', fontWeight: 600 }}>Tirana Airport</h4>
                <p className="text-sm text-[#224A34]/70" style={{ fontFamily: 'var(--font-sans)' }}>Conveniently located</p>
              </div>

              <div className="space-y-2">
                <div className="w-12 h-12 rounded-full bg-[#224A34]/10 flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-[#224A34]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-[#224A34]" style={{ fontFamily: 'var(--font-sans)', fontWeight: 600 }}>24/7 Available</h4>
                <p className="text-sm text-[#224A34]/70" style={{ fontFamily: 'var(--font-sans)' }}>Anytime, any day</p>
              </div>

              <div className="space-y-2">
                <div className="w-12 h-12 rounded-full bg-[#224A34]/10 flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-[#224A34]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h4 className="text-[#224A34]" style={{ fontFamily: 'var(--font-sans)', fontWeight: 600 }}>Fresh Daily</h4>
                <p className="text-sm text-[#224A34]/70" style={{ fontFamily: 'var(--font-sans)' }}>Premium quality</p>
              </div>

              <div className="space-y-2">
                <div className="w-12 h-12 rounded-full bg-[#224A34]/10 flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-[#224A34]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h4 className="text-[#224A34]" style={{ fontFamily: 'var(--font-sans)', fontWeight: 600 }}>Every Occasion</h4>
                <p className="text-sm text-[#224A34]/70" style={{ fontFamily: 'var(--font-sans)' }}>Love, joy, apologies</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
