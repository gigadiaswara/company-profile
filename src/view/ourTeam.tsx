"use client";
import React, { useState, useEffect } from 'react';

interface TeamMember {
  name: string;
  email: string;
  picture: string;
  position: string;
}
const TeamPage = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);

  useEffect(() => {
     fetch('https://randomuser.me/api/?results=4')
      .then((response) => response.json())
      .then((data) => {
        setTeamMembers(
          data.results.map((member: { name: { first: any; last: any; }; email: any; picture: { large: any; }; }) => ({
            name: `${member.name.first} ${member.name.last}`,
            email: member.email,
            picture: member.picture.large,
            position: 'Software Engineer', 
          }))
        );
      });
  }, []);

  return (
    <section id="ourTeam" className="bg-white">
      <div>
        <h2 className="text-center text-9xl font-bold mb-12 text text-black">Meet Our Team</h2>
        <div className="flex justify-center space-x-8">
          {teamMembers.map((member, index) => (
            <div className="bg-white shadow-md rounded-lg p-6 text-center max-w-xs flex flex-col items-center">
            <img
              src={member.picture}
              alt={member.name}
              className="w-24 h-24 rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
            <p className="text-black mb-2">{member.position}</p>
            <p className="text-sm text-gray-500">{member.email}</p>            
          </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamPage;
