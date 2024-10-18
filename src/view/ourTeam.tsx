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
    <section id="ourTeam" className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-center text-3xl font-bold mb-12">Meet Our Team</h2>
        <div className="flex justify-center space-x-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 text-center max-w-xs"
            >
              <img
                src={member.picture}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-600">{member.position}</p>
              <a
                href={`mailto:${member.email}`}
                className="text-blue-500 hover:underline"
              >
                {member.email}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamPage;
