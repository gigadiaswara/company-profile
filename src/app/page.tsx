// pages/index.tsx
import Layout from "./layout";

const Home: React.FC = () => {
  return (
    <Layout>
      <section id="about-us" className="min-h-screen p-8 bg-gray-100">
        <h2 className="text-3xl font-bold">About Us</h2>
        <p className="mt-4">Your trusted partner for building repairs and maintenance since 2020.</p>
      </section>

      <section id="services" className="min-h-screen p-8 bg-gray-200">
        <h2 className="text-3xl font-bold">Our Services</h2>
        <p className="mt-4">We specialize in building repairs and maintenance...</p>
      </section>

      <section id="team" className="min-h-screen p-8 bg-gray-300">
        <h2 className="text-3xl font-bold">Our Team</h2>
        <p className="mt-4">Meet the team behind our success!</p>
      </section>
    </Layout>
  );
};

export default Home;