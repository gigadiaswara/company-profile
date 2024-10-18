import HeroSection from '@/view/heroSection';
import CompanyOverview from '@/view/companyOverview';
import ServicesSection from '@/view/serviceSection';
import OurClient from '@/view/ourClient';
import TeamPage from '@/view/ourTeam';

const HomePage = () => {
  return (
    <>
      <section id="heroSection" className="h-screen flex items-center justify-center">
        <HeroSection />
      </section>
      <section id="aboutUs" className="h-screen flex items-center justify-center">
        <CompanyOverview />
      </section>
      <section id="ourServices" className="h-screen flex items-center justify-center">
        <ServicesSection />
      </section>
      <section id="ourClient" className="h-screen flex items-center justify-center overflow-x-scroll">
        <OurClient />
      </section>
      <section id="ourTeam" className="h-screen flex items-center justify-center overflow-x-scroll">
        <TeamPage />
      </section>
    </>
  );
};

export default HomePage;