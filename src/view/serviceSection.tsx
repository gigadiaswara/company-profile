import Image from "next/image";

const ServicesSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center">
        <div className="max-w-xl mx-auto text-center">
            <h1 className="text-3xl font-bold mb-4 text-black">Our Services</h1>
            <p className="text-lg leading-relaxed text-black">
            At Ageka Konstruksi, we specialize in building repairs and maintenance, ensuring your property remains safe, functional, and well-kept. Whether it’s a small fix or a major repair, our team is dedicated to providing top-notch service to keep your building in the best possible condition. We’re not just about maintenance – we’re also ready to tackle new challenges in construction. Got a unique project or a tough problem? Bring it on! Our team thrives on finding creative solutions for anything related to building construction. Let Ageka Konstruksi be your go-to partner for all things building-related. We're here to make sure your property stays strong, reliable, and ready for whatever comes next.
            </p>
        </div>
          <div className="mx-4">
            <Image src="/b.jpg" alt="b Logo 2" width={900} height={75} />
          </div>
          <div className="mx-4">
            <Image src="/c.jpg" alt="c Logo 3" width={900} height={75} />
          </div>
          <div className="mx-4">
            <Image src="/d.jpg" alt="d Logo 4" width={900} height={75} />
          </div>
          
          
    </section>
);
};

  export default ServicesSection;