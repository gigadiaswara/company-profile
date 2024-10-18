"use client";

import { useState, useEffect } from 'react';

interface TeamMember {
  name: string;
  email: string;
  phone: string;
  picture: string;
}

const TeamPage = () => {
  const [members, setMembers] = useState<TeamMember[]>([]);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      const response = await fetch('https://randomuser.me/api/?results=4');
      const data = await response.json();
      setMembers(data.results.map((user: any) => ({
        name: `${user.name.first} ${user.name.last}`,
        email: user.email,
        phone: user.phone,
        picture: user.picture.medium,
      })));
    };

    fetchTeamMembers();
  }, []);

  return (
    <main className="text-center text-black">
      
      <section className="min-h-screen flex flex col items-center justify-center">
        <h1 className="text-3xl font-bold mb-8">Meet Our Team</h1>
        <div className="flex flex-wrap justify-center items-start space-x-6">
          {members.map((member, index) => (
            <div key={index} className="flex flex-col items-center bg-white p-4 shadow-lg rounded-lg w-60">
              <img
                src={member.picture}
                alt={member.name}
                className="rounded-full w-24 h-24 mb-4"
              />
              <h2 className="text-xl font-semibold">{member.name}</h2>
              <p className="text-gray-600">Email: {member.email}</p>
              <p className="text-gray-600">Phone: {member.phone}</p>
            </div>
          ))}
        </div>
      </section>
      
    </main>
  );
};

export default TeamPage;
