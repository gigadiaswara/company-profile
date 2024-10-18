import Image from "next/image";
import paboutus from "../public/paboutus.jpg"

const CompanyOverview = () => {
  return (
    
    <section id="aboutUs" className="min-h-screen p-8 flex items-center justify-center">
        <div className="max-w-xl mx-auto text-center ">
        <Image src="/paboutus.jpg"
            alt="About Us Image"
            width={600}
            height={400}
            objectFit="cover"
            className="w-full h-full object-cover"
            />
            <h1 className="text-3xl font-bold mb-4 text-black">About Us</h1>
            <p className="text-lg leading-relaxed text-black">
             We’re not your typical construction team; we’re the ones who step in when things go wrong, working behind the scenes to make sure everything is just right by the time you start your day. Think of us as the “Batman” of building maintenance. When there’s a problem, we’re on it, working quietly through the night so that come morning, no one ever realizes there was an issue in the first place. Our goal? To make sure your building always feels safe, functional, and problem-free. With a dedicated team and a passion for quality, we handle everything from minor fixes to major repairs. At Ageka Konstruksi, we believe that a well-maintained building is the foundation of a successful business. Let us take care of the details, so you can focus on what really matters.
            </p>
        </div>
    </section>
);
};
  export default CompanyOverview;