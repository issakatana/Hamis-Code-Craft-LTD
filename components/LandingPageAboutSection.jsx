'use client'; 

import React from 'react';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


const ServiceItem = ({ imageSrc, title, description }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`flex items-center mb-5 transform transition-transform duration-1000 ease-out ${
        inView
          ? 'opacity-100 translate-y-0 scale-100'
          : 'opacity-0 translate-y-10 scale-90'
      }`}
    >
      <div className="flex-shrink-0 w-1/4 p-2 bg-white flex items-center justify-center">
        <img src={imageSrc} alt={title} className="w-20 h-20 object-cover" />
      </div>
      <div className="flex-grow pl-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

const LandingPageAboutSection = () => {
  const { ref: imageRef, inView: imageInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: textRef, inView: textInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    delay: 500, 
  });

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-screen-2xl mx-auto lg:px-16 md:px-10 px-6">
        <div className="flex flex-col-reverse lg:flex-row items-center">
          <div className="relative lg:w-1/2">
            <div
              ref={imageRef}
              className={`w-full h-full overflow-hidden rounded-lg transform transition-transform duration-1000 ease-out ${
                imageInView ? 'translate-x-0' : '-translate-x-full'
              }`}
            >
              <img
                src="/assets/images/pexels-photo-3184287.jpeg"
                alt="About Us"
                className="w-3/4 h-auto object-contain"
              />
            </div>
            <div
              ref={textRef}
              className={`absolute top-1/2 right-0 transform -translate-y-1/2 bg-white rounded p-6 flex items-center lg:w-1/2 transition-transform duration-1000 ease-out ${
                textInView ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
              }`}
            >
              <div className="h-12 w-12 bg-custom-purple rounded-full flex items-center justify-center mr-4">
               
              </div>
              <div>
                <h1 className="text-slate-800 font-semibold">New Features</h1>
                <p className="text-slate-600">Grow your business fast</p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 lg:pl-8 mb-8 lg:mb-0">
            <h1 className="text-4xl font-extrabold mb-4 text-custom-purple">
              IT solutions for <br /> startups and enterprises
            </h1>

            <ServiceItem
              imageSrc="/assets/images/home_webdeveloper_pic1.png"
              title="Solutions Development"
              description="We specialize in custom software development that meets your unique needs. From web to mobile and desktop applications, our team delivers reliable and high-quality software to help your business succeed."
            />

            <ServiceItem
              imageSrc="/assets/images/home_webdeveloper_pic2.png"
              title="Business Consulting"
              description="Our consulting services focus on organizations of all sizes, whether private or public, in all sectors, covering key business and operation areas, responding to critical business needs."
            />

            <ServiceItem
              imageSrc="/assets/icons/notification1.svg"
              title="SEO"
              description="Our SEO services help your business stand out online by optimizing your website for higher search rankings, attracting more visitors, and enhancing your visibility."
            />

            <Link
              href="/our-work"
              className="inline-block bg-custom-purple text-white py-3 px-6 rounded-lg font-semibold hover:bg-purple-700 transition duration-300"
            >
              View Our Work <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPageAboutSection;


















