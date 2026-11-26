import { Instagram, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#224A34] text-[#F7F5ED] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo and tagline */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              {/* Mini logo */}
              <div className="w-12 h-12">
                <svg viewBox="0 0 60 70" fill="none" className="w-full h-full">
                  <path
                    d="M10 60C10 33.222 31.722 11.5 58.5 11.5"
                    stroke="#F7F5ED"
                    strokeWidth="1.5"
                    fill="none"
                    transform="translate(-18.5, 0) scale(1.4)"
                  />
                  <circle cx="30" cy="22.5" r="4" fill="#F3A6B6" />
                  <circle cx="27" cy="19" r="3" fill="#F3A6B6" opacity="0.8" />
                  <circle cx="33" cy="19" r="3" fill="#F3A6B6" opacity="0.8" />
                </svg>
              </div>

              <h3 className="text-3xl tracking-wider" style={{ fontFamily: 'var(--font-serif)' }}>
                LULE.LU
              </h3>
            </div>

            <p className="text-[#F7F5ED]/70 leading-relaxed" style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}>
              Fresh flowers, spontaneous moments, endless beauty.
            </p>
          </div>

          {/* Location */}
          <div className="space-y-4">
            <h4 className="text-xl mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
              Find Us
            </h4>
            <div className="flex items-start gap-3 text-[#F7F5ED]/80">
              <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
              <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}>
                <p>Tirana International Airport</p>
                <p className="text-sm text-[#F7F5ED]/60">Terminal - Departure Hall</p>
                <p className="text-sm text-[#F7F5ED]/60 mt-2">Available 24/7</p>
              </div>
            </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h4 className="text-xl mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
              Connect
            </h4>

            <div className="space-y-3">
              <a
                href="mailto:hello@lule.lu"
                className="flex items-center gap-3 text-[#F7F5ED]/80 hover:text-[#F3A6B6] transition-colors"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                <Mail className="w-5 h-5" />
                <span>hello@lule.lu</span>
              </a>

              <a
                href="https://instagram.com/lule.lu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[#F7F5ED]/80 hover:text-[#F3A6B6] transition-colors"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                <Instagram className="w-5 h-5" />
                <span>@lule.lu</span>
              </a>

              <a
                href="https://tiktok.com/@lule.lu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[#F7F5ED]/80 hover:text-[#F3A6B6] transition-colors"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                </svg>
                <span>TikTok</span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#F7F5ED]/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-[#F7F5ED]/60" style={{ fontFamily: 'var(--font-sans)' }}>
              &copy; 2026 LULE.LU. All rights reserved.
            </p>

            <p className="text-[#F3A6B6] italic" style={{ fontFamily: 'var(--font-serif)', fontSize: '1.125rem' }}>
              Made with love, just for you.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
