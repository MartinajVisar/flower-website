import { motion } from 'motion/react';

const galleryImages = [
  {
    url: 'https://images.unsplash.com/photo-1779093318168-04d0cf490643?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxMHx8cGluayUyMGZsb3dlcnMlMjBzdW5saWdodCUyMHJvbWFudGljJTIwZ2FyZGVuJTIwZHJlYW15fGVufDF8fHx8MTc3OTgxNjExNXww&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Clusters of delicate pink roses',
    size: 'large'
  },
  {
    url: 'https://images.unsplash.com/photo-1770321569819-5da14acfbff8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw4fHxwaW5rJTIwZmxvd2VycyUyMHN1bmxpZ2h0JTIwcm9tYW50aWMlMjBnYXJkZW4lMjBkcmVhbXl8ZW58MXx8fHwxNzc5ODE2MTE1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Close-up of vibrant pink flowers',
    size: 'medium'
  },
  {
    url: 'https://images.unsplash.com/photo-1762508899481-e6b31282be2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxib3RhbmljYWwlMjBnYXJkZW4lMjBncmVlbmhvdXNlJTIwdmludGFnZXxlbnwxfHx8fDE3Nzk4MTYxMTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Glass greenhouses with clear sky',
    size: 'medium'
  },
  {
    url: 'https://images.unsplash.com/photo-1759419312960-cccfb9e85111?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw4fHxmbG93ZXIlMjBib3VxdWV0JTIwaGFuZHMlMjBlbGVnYW50fGVufDF8fHx8MTc3OTgxNjExOHww&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Hands arranging white flowers',
    size: 'small'
  },
  {
    url: 'https://images.unsplash.com/photo-1745817548591-096878875e67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxwaW5rJTIwZmxvd2VycyUyMHN1bmxpZ2h0JTIwcm9tYW50aWMlMjBnYXJkZW4lMjBkcmVhbXl8ZW58MXx8fHwxNzc5ODE2MTE1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Pink cherry blossoms in spring',
    size: 'large'
  },
  {
    url: 'https://images.unsplash.com/photo-1471914395157-f9d1b9dc59d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw3fHxwaW5rJTIwZmxvd2VycyUyMHN1bmxpZ2h0JTIwcm9tYW50aWMlMjBnYXJkZW4lMjBkcmVhbXl8ZW58MXx8fHwxNzc5ODE2MTE1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Pink petaled flowers',
    size: 'small'
  },
  {
    url: 'https://images.unsplash.com/photo-1759579483398-552ea6dd4b4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw4fHxib3RhbmljYWwlMjBnYXJkZW4lMjBncmVlbmhvdXNlJTIwdmludGFnZXxlbnwxfHx8fDE3Nzk4MTYxMTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Old greenhouse with large windows',
    size: 'medium'
  },
  {
    url: 'https://images.unsplash.com/photo-1551546859-2daa2fb3d7fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxmbG93ZXIlMjBib3VxdWV0JTIwaGFuZHMlMjBlbGVnYW50fGVufDF8fHx8MTc3OTgxNjExOHww&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'White petaled flower close-up',
    size: 'medium'
  }
];

export default function Gallery() {
  return (
    <section className="py-24 bg-[#F7F5ED]">
      {/* Section title */}
      <div className="text-center mb-16 px-6">
        <h2 className="text-5xl lg:text-6xl mb-6 text-[#224A34]" style={{ fontFamily: 'var(--font-serif)', fontWeight: 400 }}>
          Moments in bloom
        </h2>
        <div className="w-24 h-1 bg-[#F3A6B6] rounded-full mx-auto" />
      </div>

      {/* Masonry grid */}
      <div className="w-full">
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 px-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              className={`mb-4 break-inside-avoid group cursor-pointer ${
                image.size === 'large' ? 'h-[500px]' : image.size === 'medium' ? 'h-[350px]' : 'h-[250px]'
              }`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <div className="relative w-full h-full overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[#224A34]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
