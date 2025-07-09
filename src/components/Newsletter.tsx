
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <section className="bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">
          Subscribe to Our Newsletter for Design Insights
        </h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Stay updated with the latest design trends, tips, and exclusive offers from our design experts.
        </p>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex gap-4">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 bg-white"
            required
          />
          <Button type="submit" className="bg-white text-gray-900 hover:bg-gray-100">
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
