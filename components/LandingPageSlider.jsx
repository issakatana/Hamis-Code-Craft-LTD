"use client";

import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useInView } from "react-intersection-observer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


const fadeInUp = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
};

const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
        },
    },
};

const Section = ({ title, description, imgSrc, imgAlt }) => {
    const { ref, inView } = useInView({
        triggerOnce: false, 
        threshold: 0.1, 
    });

    return (
        <div className="flex flex-col lg:flex-row items-center justify-center min-h-[100vh]  max-w-screen-2xl mx-auto sm:px-10 p-4" ref={ref}>
        <motion.div
            className="text-center lg:text-left lg:w-1/2 lg:pl-10 lg:mt-4 mt-24"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
        >
            <motion.h1 className="head_text" variants={fadeInUp}>
            <span className="block mb-4 orange_gradient">{title}</span>
            </motion.h1>
            <motion.p className="text-lg text-slate-200 mb-4" variants={fadeInUp}>
            {description}
            </motion.p>
            <div className="flex justify-center lg:justify-start gap-4 mt-10">
            <motion.a
                href="#"
                className="black_btn w-fit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                variants={fadeInUp}
            >
                Pricing
            </motion.a>
            <motion.a
                href="#"
                className="white_outline_btn w-fit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                variants={fadeInUp}
            >
                View Our Work <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </motion.a>
            </div>
        </motion.div>
        <motion.div
            className="lg:w-1/2 flex justify-center items-center lg:mt-5"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
        >
            <img src={imgSrc} alt={imgAlt} className="w-full h-auto object-cover mt-6 lg:mt-2" />
        </motion.div>
        </div>
    );
};

const LandingPageSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
        pauseOnHover: false,
        arrows: true, 
    };
  
  return (
    <section>
      <Slider {...settings} className="bg-[#53038B]">
        <Section
          title="Innovative Solutions for Every Challenge."
          description="We're committed to making a positive impact for everyone. Our passionate team turns vision into reality every day. Together, we blend innovation and expertise to achieve extraordinary outcomes."
          imgSrc="/assets/images/hero-img.png"
          imgAlt="AI Prompts"
        />
        <Section
          title="Your problem solver developer team."
          description="At HCC, we have the tools and experience to bring your ideas to life while staying within your budget."
          imgSrc="/assets/icons/hero-img.svg"
          imgAlt="AI Prompts"
        />
        <Section
          title="Whatever you do, can be done better."
          description="Any business that you do, can grow faster with a website. Take your business online today by getting a professional website."
          imgSrc="/assets/images/hero-img-grow-bus-removebg-preview.png"
          imgAlt="AI Prompts"
        />
      </Slider>
    </section>
  );
};

export default LandingPageSlider;
