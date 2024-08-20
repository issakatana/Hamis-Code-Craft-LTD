'use client'; // Ensures this component is client-side

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const IndustriesWeServe = () => {
  return (
    <section
      className="py-16 bg-cover bg-center relative"
      style={{
        backgroundImage: "url('/assets/images/pexels-jopwell-2422293.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-custom-purple opacity-90 z-10"></div>

      <div className="relative z-20 max-w-screen-xl mx-auto px-6 lg:px-16">
        <motion.p
          className="text-[#fbd647] text-lg font-medium"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
        >
          Industries We Serve
        </motion.p>
        
        <div className="my-12 flex flex-col md:flex-row items-start w-full">
          <motion.h1
            className="text-4xl text-white font-extrabold md:mr-8"
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true }}
          >
            IT services customized for your industry
          </motion.h1>
          <motion.p
            className="mt-4 text-white text-lg md:mt-0"
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true }}
          >
            No matter the business, Hamis Code Craft has you covered with industry-compliant solutions, customized to your company’s specific needs.
          </motion.p>
        </div>
        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
        >
          <motion.div
            className="border border-gray-300 p-6 rounded-lg hover:bg-purple-900 shadow-lg text-center flex items-center justify-center flex-col"
            variants={fadeInUp}
          >
            <img
              src="/assets/icons/industries.svg"
              alt="Industries & Manufacturing"
              className="mt-4"
            />
            <h2 className="text-xl text-white font-semibold mb-2">Industries & Manufacturing</h2>
          </motion.div>

          <motion.div
            className="border border-gray-300 p-6 rounded-lg hover:bg-purple-900 shadow-lg text-center flex items-center justify-center flex-col"
            variants={fadeInUp}
          >
            <img
              src="/assets/icons/education.svg"
              alt="Education & Health"
              className="mt-4"
            />
            <h2 className="text-xl text-white font-semibold mb-2">Education & Health</h2>
          </motion.div>

          <motion.div
            className="border border-gray-300 p-6 rounded-lg hover:bg-purple-900 shadow-lg text-center flex items-center justify-center flex-col"
            variants={fadeInUp}
          >
            <img
              src="/assets/icons/retail.svg"
              alt="Retail & Ecommerce"
              className="mt-4"
            />
            <h2 className="text-xl text-white font-semibold mb-2">Retail & Ecommerce</h2>
          </motion.div>

          <motion.div
            className="border border-gray-300 p-6 rounded-lg hover:bg-purple-900 shadow-lg text-center flex items-center justify-center flex-col"
            variants={fadeInUp}
          >
            <img
              src="/assets/icons/travel.svg"
              alt="Travel & Hospitality"
              className="mt-4"
            />
            <h2 className="text-xl text-white font-semibold mb-2">Travel & Hospitality</h2>
          </motion.div>
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
        >
          <Link
            href="/contact"
            className="inline-block text-white py-3 px-6 rounded-lg font-semibold hover:bg-purple-700 transition duration-300"
          >
            Need Technology Support? <span className="underline">Get Started Now</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default IndustriesWeServe;

