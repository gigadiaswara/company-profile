import HeroSection from '@/views/heroSection';
import CompanyOverview from '@/views/companyOverview';
import ServicesSection from '@/views/serviceSection';
import OurClient from '@/views/ourClient';
import TeamPage from '@/views/ourTeam';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <CompanyOverview />
      <ServicesSection />
      <OurClient />
      <TeamPage />
    </>
  );
};

export default HomePage;