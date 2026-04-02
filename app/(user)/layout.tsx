import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

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
      </div>
      <Footer />
    </>
  );
}