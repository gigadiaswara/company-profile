"use client";
import HeroSection from '@/views/heroSection';
import CompanyOverview from '@/views/companyOverview';
import ServicesSection from '@/views/serviceSection';
import OurClient from '@/views/OurClient';
import TeamPage from '@/views/ourTeam';
import { ReactNode } from 'react';
import './globals.css';

const Layout = ({ children }: { children: ReactNode }) => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <html lang="en">
      <body>
        <div className="flex flex-col min-h-screen">

        <header>
           <nav className="w-full max-w-4xl fixed top-0 inset-x-0 mx-auto z-50 flex justify-around py-4 bg-white text-black shadow-lg">
            <a href="#" onClick={() => scrollToSection("heroSection")} className="hover:text-yellow-400 mx-4 ">Home</a>
            <a href="#" onClick={() => scrollToSection("aboutUs")} className="hover:text-yellow-400 mx-4 ">About Us</a>
            <a href="#" onClick={() => scrollToSection("ourServices")} className="hover:text-yellow-400 mx-4">Services</a>
            <a href="#" onClick={() => scrollToSection("ourTeam")} className="hover:text-yellow-400 mx-4">Team</a>
          </nav>
        </header>

          <main className="flex-1 container mx-auto p-8">{children}</main>

          <footer className="bg-gray-900 text-white text-center py-4 mt-8">
            <div>&copy; 2023 Ageka Konstruksi. All rights reserved.</div>
          </footer>
        </div>
      </body>
    </html>
  );
};

export default Layout;
