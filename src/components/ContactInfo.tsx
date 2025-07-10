
import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Let's Start a Conversation</h3>
        <p className="text-gray-600 mb-8">
          We're here to help bring your design dreams to life. Reach out to us through any of the following channels.
        </p>
      </div>

      <div className="space-y-6">
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
            <Phone className="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">Phone</h4>
            <p className="text-gray-600">+1 (555) 123-4567</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center">
            <Mail className="h-6 w-6 text-purple-600" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">Email</h4>
            <p className="text-gray-600">hello@nestiq.com</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center">
            <MapPin className="h-6 w-6 text-green-600" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">Address</h4>
            <p className="text-gray-600">123 Design Street, Creative District, NY 10001</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center">
            <Clock className="h-6 w-6 text-orange-600" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">Business Hours</h4>
            <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
          </div>
        </div>
      </div>

      <div className="relative h-64 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
        <img 
          src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
          alt="NESTIQ Design Studio" 
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default ContactInfo;
