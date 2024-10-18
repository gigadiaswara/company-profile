import Image from "next/image";

const HeroSection = () => {
    return (
      <section className="min-h-screen flex items-center justify-center">
            <div className="max-w-xl mx-auto text-center">

                <Image src="/phero.png"
            alt="About Us Image"
            width={600}
            height={400}
            objectFit= "center"/>
                <p className="mt-2 text-lg text-black ">
                Your trusted partner for building repairs and maintenance since 2020.
                    
                </p>
            </div>
        </section>
    );
  };
  
  export default HeroSection;