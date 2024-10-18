"use client";
import HeroSection from '@/views/heroSection';
import CompanyOverview from '@/views/companyOverview';
import ServicesSection from '@/views/serviceSection';
import OurClient from '@/views/ourClient';
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
        <nav className="fixed top-0 w-full bg-white text-black shadow z-50">
          <ul className="container mx-auto flex justify-between items-center py-4">
            <li><a href="#home" className="hover:text-blue-500 scroll-smooth">Ageka Konstruksi</a></li>
            <li><a href="#about" className="hover:text-blue-500 scroll-smooth">About Us</a></li>
            <li><a href="#services" className="hover:text-blue-500 scroll-smooth">Services</a></li>
            <li><a href="#team" className="hover:text-blue-500 scroll-smooth">Team</a></li>
          </ul>
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
