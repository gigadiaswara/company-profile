import Image from "next/image";
import paboutus from "../public/paboutus.jpg";

const CompanyOverview = () => {
  return (
    <section className="min-h-screen p-8 flex flex-col items-center justify-center">
      <div className="max-w-4xl mx-auto">
        <Image
          src="/paboutus.jpg"
          alt="About Us Image"
          width={1200}
          height={600}
          objectFit="cover"
          className="w-full h-auto object-cover mb-8"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-bold text-left text-black">About Us</h1>
          </div>

          <div className="text-lg leading-relaxed text-black text-justify">
            <p>
              We’re not your typical construction team; we’re the ones who step in when things go wrong, working behind the scenes to make sure everything is just right by the time you start your day. Think of us as the “Batman” of building maintenance. When there’s a problem, we’re on it, working quietly through the night so that come morning, no one ever realizes there was an issue in the first place. Our goal? To make sure your building always feels safe, functional, and problem-free. With a dedicated team and a passion for quality, we handle everything from minor fixes to major repairs. At <span className="font-bold">Ageka Konstruksi</span>, we believe that a well-maintained building is the foundation of a successful business. Let us take care of the details, so you can focus on what really matters.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;

