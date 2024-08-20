import React from 'react';

const plans = [
  {
    title: 'Basic',
    description: 'Perfect for individuals who need a basic plan.',
    price: '$9.99',
    features: ['1 User', '5 GB Storage', 'Email Support']
  },
  {
    title: 'Standard',
    description: 'Great for small teams or growing businesses.',
    price: '$29.99',
    features: ['5 Users', '50 GB Storage', 'Priority Support']
  },
  {
    title: 'Premium',
    description: 'The best choice for large organizations.',
    price: '$99.99',
    features: ['Unlimited Users', '500 GB Storage', '24/7 Support']
  }
];

const Pricing = () => {
  return (
    <section className="p-6 bg-gray-100">
      <div className="max-w-screen-lg mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">Pricing Plans</h1>
        <div className="flex flex-wrap justify-center gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 w-full md:w-1/3 text-center"
            >
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">{plan.title}</h2>
              <p className="text-gray-600 mb-4">{plan.description}</p>
              <div className="text-3xl font-bold text-gray-900 mb-4">{plan.price}</div>
              <ul className="list-disc list-inside text-left text-gray-600 mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
