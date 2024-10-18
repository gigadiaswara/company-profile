import HeroSection from '@/view/heroSection';
import CompanyOverview from '@/view/companyOverview';
import ServicesSection from '@/view/serviceSection';
import OurClient from '@/view/ourClient';
import TeamPage from '@/view/ourTeam';

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