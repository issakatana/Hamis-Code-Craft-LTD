import React from 'react';

// Sample testimonials data
const testimonials = [
  {
    name: 'Jane Doe',
    photoUrl: 'https://via.placeholder.com/100',
    testimonial: 'This service is fantastic! It exceeded all my expectations and the customer support was top-notch.',
  },
  {
    name: 'John Smith',
    photoUrl: 'https://via.placeholder.com/100',
    testimonial: 'I’m incredibly satisfied with the results. The team was professional and the process was smooth from start to finish.',
  },
  {
    name: 'Emily Johnson',
    photoUrl: 'https://via.placeholder.com/100',
    testimonial: 'A game-changer for my business. I highly recommend this to anyone looking for quality and reliability.',
  }
];

const Testimonials = () => {
  return (
    <section className="p-6 bg-gray-100">
      <div className="max-w-screen-lg mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">What Our Clients Say</h1>
        <div className="flex flex-wrap justify-center gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 w-full md:w-1/3 text-center"
            >
              {testimonial.photoUrl && (
                <img
                  src={testimonial.photoUrl}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
              )}
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{testimonial.name}</h2>
              <p className="text-gray-600">{testimonial.testimonial}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
