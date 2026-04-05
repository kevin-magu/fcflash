import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { Toaster } from 'sonner';

export default function UserLayout({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  return (
    <>
      <Navbar />
      <div className="grow">
        {children}
        <Toaster 
          position="top-center" 
          expand={false} 
          richColors 
          closeButton
          toastOptions={{
            style: { 
              background: 'white', 
              borderRadius: '12px',
              border: '1px solid #e5e5e5',
              fontFamily: 'var(--font-montserrat)' 
            },
          }}
        />
      </div>
      <Footer />
    </>
  );
}