'use client'; 

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

// Define the Work component
const Work = ({ title, description, imageUrl, link, isImageOnRight }) => {
  return (
    <div className={`work-item flex ${isImageOnRight ? 'md:flex-row-reverse' : 'md:flex-row'} mb-6 border border-gray-200 rounded-lg shadow-lg overflow-hidden`}>
      {/* Image Section */}
      {imageUrl && (
        <div className="w-full md:w-1/2 flex-shrink-0">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-64 md:h-80 lg:h-96 object-cover" 
          />
        </div>
      )}

      {/* Details Section */}
      <div className="w-full md:w-1/2 p-4 flex flex-col justify-between bg-white md:pl-4 md:pr-4">
        {/* Title Section */}
        {title && (
          <h2 className="text-xl font-bold text-gray-800 mb-2">{title}</h2>
        )}

        {/* Description Section */}
        {description && (
          <p className="text-gray-600 mb-4 flex-grow">{description}</p>
        )}

        {/* Link Section */}
        {link && (
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-600 hover:text-blue-800 flex items-center font-semibold"
          >
            View Site
            <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
          </a>
        )}
      </div>
    </div>
  );
};

// Define the Portfolio page component
const Portfolio = () => {
  const [isImageOnRight, setIsImageOnRight] = useState(false);

  const workItems = [
    {
      title: 'Mutech Training Institute',
      description: 'Mutech Training Institute is a TVETA and NITA accredited institute that offers high-quality competence-based programs in various disciplines. We focus on technical education and skills development for students after their secondary school exams. Mutech collaborates with local and international partners to create a development hub and offers practical on-the-job training, engineering and production services, and custom-designed products. We have two locations for training programs in mechanical engineering, automotive engineering, electrical engineering at Kitui Campus and aeronautical engineering at Wilson Airport Nairobi.',
      imageUrl: '/assets/images/Untitledesign.png',
      link: 'https://www.mutech-training.com/'
    },
    {
      title: 'EDAS Consulting Services',
      description: 'At EDAS Consulting Services, we pride ourselves in offering comprehensive career management services designed to help individuals navigate their professional journey with confidence and success. We understand that building a fulfilling and prosperous career requires a strategic approach, and thats why we offer a range of services tailored to meet the unique needs of each client.',
      imageUrl: '/assets/images/Untitled design (1).png',
      link: 'https://edasconsulting.co.ke/'
    },
    {
      title: 'Project C',
      description: 'A brief description of Project C, emphasizing its unique aspects and benefits.',
      imageUrl: '/assets/images/Untitled design (2).png',
      link: '/assets/images/Untitled design (2).png'
    }
  ];

  return (
    <section>
      <div className="p-4 max-w-screen-2xl mx-auto lg:px-16 md:px-10 px-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Our Recent Work</h1>
        <div className="work-list">
          {workItems.map((item, index) => {
            // Toggle image position for alternating layout
            const isImageOnRightNow = index % 2 !== 0;
            return (
              <Work
                key={index}
                title={item.title}
                description={item.description}
                imageUrl={item.imageUrl}
                link={item.link}
                isImageOnRight={isImageOnRightNow}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;




