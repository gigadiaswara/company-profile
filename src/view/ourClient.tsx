import Image from 'next/image';

const OurClients = () => {
  return (
    <section className="py-12">
      <h2 className="text-center text-4xl font-bold mb-8">Our Clients</h2> 
      <div className="overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex">
          <div className="mx-4">
            <Image src="/1.jpg" alt="Client Logo 1" width={150} height={75} />
          </div>
          <div className="mx-4">
            <Image src="/2.png" alt="Client Logo 2" width={150} height={75} />
          </div>
          <div className="mx-4">
            <Image src="/3.png" alt="Client Logo 3" width={150} height={75} />
          </div>
          <div className="mx-4">
            <Image src="/4.png" alt="Client Logo 4" width={150} height={75} />
          </div>
          <div className="mx-4">
            <Image src="/5.jpg" alt="Client Logo 5" width={150} height={75} />
          </div>
          <div className="mx-4">
            <Image src="/6.png" alt="Client Logo 6" width={150} height={75} />
          </div>
          <div className="mx-4">
            <Image src="/7.png" alt="Client Logo 7" width={150} height={75} />
          </div>
          <div className="mx-4">
            <Image src="/8.png" alt="Client Logo 8" width={150} height={75} />
          </div>
          <div className="mx-4">
            <Image src="/9.png" alt="Client Logo 9" width={150} height={75} />
          </div>
          <div className="mx-4">
            <Image src="/10.jpg" alt="Client Logo 10" width={150} height={75} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurClients;
