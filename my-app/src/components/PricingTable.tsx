import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const PricingTable = () => {
    const pricingPlans = [
      {
        id: 1,
        name: 'Beginner Program',
        price: '$299/course',
        features: [
          '4 Weeks Duration',
          'Access to Basic Modules',
          'Certificate of Completion',
          'Email Support'
        ]
      },
      {
        id: 2,
        name: 'Professional Program',
        price: '$699/course',
        features: [
          '12 Weeks Duration',
          'Access to Intermediate Modules',
          'Portfolio Development',
          '1-on-1 Mentorship',
          'Priority Support'
        ]
      },
      {
        id: 3,
        name: 'Master Program',
        price: '$1499/course',
        features: [
          '24 Weeks Duration',
          'Access to Advanced Modules',
          'Personalized Portfolio Review',
          'Exclusive Industry Webinars',
          '24/7 Support',
          'Lifetime Access to Materials'
        ]
      }
    ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan) => (
            <div key={plan.id} className="text-black bg-gray-400 rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <p className="text-4xl font-bold mb-4">{plan.price}</p>
              <ul className="mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center mb-2">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-blue-500 mr-2 h-6 w-6" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingTable;