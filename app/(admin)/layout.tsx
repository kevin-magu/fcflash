import NavbarAdmin from "@/components/admin/NavbarAdmin";
import AdminFooter from "@/components/admin/FooterAdmin";
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen bg-white text-neutral-900">
       <NavbarAdmin/>
       <main className="flex-grow pt-20">
         {children}
       </main>
       <AdminFooter/>
    </div>
  );
}