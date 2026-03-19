import Hero from '@/components/homepage/Hero';
import GalleryGrid from '@/components/homepage/GalleryGrid';
import AboutSection from '@/components/homepage/AboutSection';
import NextMatch from '@/components/homepage/NextMatch';
export default function Home() {
  return (
    <div>
      <Hero />
      <GalleryGrid />
      <AboutSection />
      <NextMatch />
    </div>

  );
}