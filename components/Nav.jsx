"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getProviders } from "next-auth/react";
import { usePathname } from 'next/navigation';

const Logo = () => (
  <Link href='/' className='flex items-center'>
    <span className='font-bold'>
      <Image
        src='/assets/images/e81953c0-1fc1-4657-a3c3-c41adb76e851-removebg-preview.png'
        alt='logo'
        width={130}
        height={100}
        className='object-contain filter brightness-0 invert'
      />
    </span>
  </Link>
);

const NavLink = ({ href, children, isActive, className }) => (
  <Link href={href} className={`relative font-semibold text-slate-100 w-fit ${className} group`}>
    {children}
    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 ease-out group-hover:w-[80%]"></span>
  </Link>
);

const Nav = () => {
  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { href: '/about-us', label: 'About Us' },
    { href: '/services', label: 'Services' },
    { href: '/our-work', label: 'Our Work' },
    { href: '/tips-trends', label: 'Tips & Trends' }
  ];

  const renderNavLinks = (isMobile) => (
    links.map(({ href, label }) => (
      <NavLink 
        key={href} 
        href={href} 
        isActive={pathname === href}
        className={`py-2 ${isMobile ? 'text-lg' : 'text-base'} ${isMobile ? 'mb-2 px-6' : 'mb-0'}`}
      >
        {label}
      </NavLink>
    ))
  );

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#42038B] shadow-md' : 'bg-transparent'}`}>
      <div className='flex items-center justify-between max-w-screen-2xl mx-auto sm:px-10 p-4'>
        <Logo />

        {/* Desktop Navigation */}
        <div className='hidden sm:flex gap-4'>
          {renderNavLinks(false)}
        </div>

        {/* Contact Us Button */}
        <div className='hidden sm:flex'>
          <Link href='/create-prompt' className='white_outline_btn'>
            Contact Us
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div className='sm:hidden flex items-center'>
          <Image
            src={toggleDropdown ? '/assets/icons/close.svg' : '/assets/icons/menu.svg'}
            width={37}
            height={37}
            className='cursor-pointer'
            alt={toggleDropdown ? 'close menu' : 'menu'}
            onClick={() => setToggleDropdown(!toggleDropdown)}
            aria-label={toggleDropdown ? 'Close menu' : 'Open menu'}
          />
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {toggleDropdown && (
        <div className='fixed top-0 left-0 w-full h-full bg-custom-purple shadow-lg flex flex-col p-4 z-50 transition-transform duration-300 transform'>
          <div className='flex justify-between items-center mb-4'>
            <Logo />
            <Image
              src='/assets/icons/close.svg'
              width={30}
              height={30}
              className='cursor-pointer'
              alt='close menu'
              onClick={() => setToggleDropdown(false)}
              aria-label='Close menu'
            />
          </div>
          {renderNavLinks(true)}
          <Link href='/create-prompt' className='black_btn mt-4'>
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Nav;

