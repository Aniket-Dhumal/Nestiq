
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Linkedin, Twitter, Instagram, Github } from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      designation: 'Lead Interior Designer',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description: 'Expert in modern and contemporary design with 10+ years of experience.',
      social: {
        linkedin: 'https://linkedin.com/in/sarah-johnson',
        twitter: 'https://twitter.com/sarah_design',
        instagram: 'https://instagram.com/sarah_interiors'
      }
    },
    {
      name: 'Michael Chen',
      designation: 'Senior Architect',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description: 'Specializes in sustainable architecture and space optimization.',
      social: {
        linkedin: 'https://linkedin.com/in/michael-chen',
        github: 'https://github.com/michael-chen',
        twitter: 'https://twitter.com/mike_architect'
      }
    },
    {
      name: 'Emily Rodriguez',
      designation: 'Creative Director',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description: 'Leading creative vision and innovative design solutions.',
      social: {
        linkedin: 'https://linkedin.com/in/emily-rodriguez',
        instagram: 'https://instagram.com/emily_creative',
        twitter: 'https://twitter.com/emily_designs'
      }
    },
    {
      name: 'David Kim',
      designation: 'Project Manager',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description: 'Ensures seamless project execution and client satisfaction.',
      social: {
        linkedin: 'https://linkedin.com/in/david-kim',
        twitter: 'https://twitter.com/david_pm',
        github: 'https://github.com/david-kim'
      }
    },
  ];

  return (
    <section id="about" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Designing Your Dream With Brilliance
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our design team is passionate about creating beautiful, functional spaces that reflect your unique style and personality. We work closely with our clients to understand their vision and bring it to life through thoughtful design and careful attention to detail.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-gray-900 rounded-full mt-2"></div>
                <p className="text-gray-600">
                  Innovative design solutions tailored to your lifestyle
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-gray-900 rounded-full mt-2"></div>
                <p className="text-gray-600">
                  Expert project management from concept to completion
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-gray-900 rounded-full mt-2"></div>
                <p className="text-gray-600">
                  Sustainable and eco-friendly design practices
                </p>
              </div>
            </div>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
              Learn More
            </Button>
          </div>
          <div className="relative">
            <div className="w-full h-96 bg-gray-200 rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Interior Design Studio" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white rounded-lg shadow-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">15+</div>
                <div className="text-xs text-gray-600">Years</div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Expert Team</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our talented team of designers and architects brings creativity, expertise, and passion to every project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="group overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl border-0 bg-gradient-to-br from-white to-gray-50 aspect-square">
              <CardContent className="p-6 h-full flex flex-col justify-between">
                <div className="text-center flex-grow flex flex-col justify-center">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 mx-auto mb-4 relative overflow-hidden rounded-full ring-4 ring-gradient-to-r from-blue-500 to-purple-500 ring-offset-2 group-hover:ring-offset-4 transition-all duration-300">
                      <Avatar className="w-full h-full">
                        <AvatarImage 
                          src={member.image} 
                          alt={member.name}
                          className="object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-500 text-white font-semibold text-sm">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                    {member.name}
                  </h4>
                  <p className="text-gray-600 text-sm font-medium group-hover:text-blue-600 transition-colors duration-300 mb-4">
                    {member.designation}
                  </p>
                </div>
                
                {/* Social Media Links */}
                <div className="flex justify-center space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {member.social.linkedin && (
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center transition-colors duration-200"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a
                      href={member.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-sky-500 hover:bg-sky-600 text-white rounded-full flex items-center justify-center transition-colors duration-200"
                    >
                      <Twitter className="h-4 w-4" />
                    </a>
                  )}
                  {member.social.instagram && (
                    <a
                      href={member.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-pink-600 hover:bg-pink-700 text-white rounded-full flex items-center justify-center transition-colors duration-200"
                    >
                      <Instagram className="h-4 w-4" />
                    </a>
                  )}
                  {member.social.github && (
                    <a
                      href={member.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-gray-800 hover:bg-gray-900 text-white rounded-full flex items-center justify-center transition-colors duration-200"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
