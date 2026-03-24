import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";


const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "900"],
  variable: "--font-montserrat",
})



export const metadata: Metadata = {
  title: "Flash FC | Official Website",
  description: "The next generation of football.",
};

export default function RootLayout({ children}: { children: React.ReactNode }) {
  return (<html lang="en" className="scroll-smooth">
      <body
        className={`${montserrat.variable} font-sans antialiased bg-black text-white`}
        suppressHydrationWarning
      >
        <Navbar />
          <div className="grow">
            {children}
          </div>
        <Footer />
   
      </body>
    </html>
  );
}
 

