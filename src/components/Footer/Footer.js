import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { AiFillGithub, AiFillLinkedin, AiOutlineMail, AiOutlineTwitter } from 'react-icons/ai';

const sections = ['About', 'Projects', 'Tech', 'Certification', 'Contact'];

const Footer = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 600);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <footer
      style={{
        backgroundColor: '#121923',
        color: '#bbb',
        padding: isMobile ? '2rem 0.6rem' : '3rem 1.5rem',
        marginTop: '4rem',
        fontSize: isMobile ? '0.9rem' : '1.1rem',
        textAlign: 'center',
      }}
    >
      {/* Navigation Links */}
      <nav
        style={{
          marginBottom: isMobile ? '1.3rem' : '2rem',
          display: 'flex',
          flexWrap: isMobile ? 'wrap' : 'nowrap',
          justifyContent: 'center',
          gap: isMobile ? '0.7rem' : '2.2rem'
        }}
      >
        {sections.map((section, idx) => (
          <Link key={idx} href={`#${section.toLowerCase()}`}>
            <a
              style={{
                margin: 0,
                color: '#bbb',
                textDecoration: 'none',
                fontWeight: '500',
                fontSize: isMobile ? '1.1rem' : '1.6rem',
                transition: 'color 0.3s',
                padding: isMobile ? '0.6rem 0.3rem' : '0',
                whiteSpace: 'nowrap'
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#6D57E0')}
              onMouseLeave={e => (e.currentTarget.style.color = '#bbb')}
            >
              {section}
            </a>
          </Link>
        ))}
      </nav>

      {/* Social Icons and Contact */}
      <div style={{
        marginBottom: isMobile ? '1rem' : '1.8rem',
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: isMobile ? '1.2rem' : '1.6rem'
      }}>
        <a
          href="mailto:mayurnagpure90@gmail.com"
          style={{ color: '#bbb', fontSize: isMobile ? '1.4rem' : '1.8rem' }}
          aria-label="Email"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineMail />
        </a>
        <a
          href="https://github.com/Mayur-Nagpure"
          style={{ color: '#bbb', fontSize: isMobile ? '1.4rem' : '1.8rem' }}
          aria-label="GitHub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/mayur-nagpure-460021296?"
          style={{ color: '#bbb', fontSize: isMobile ? '1.4rem' : '1.8rem' }}
          aria-label="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillLinkedin />
        </a>
        <a
          href="https://twitter.com/yourhandle"
          style={{ color: '#bbb', fontSize: isMobile ? '1.4rem' : '1.8rem' }}
          aria-label="Twitter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineTwitter />
        </a>
      </div>

      {/* Copyright Notice */}
      <div style={{
        fontSize: isMobile ? '1.04rem' : '1.5rem',
        color: '#666',
        marginTop: isMobile ? '0.7rem' : '0',
        wordBreak: 'break-word'
      }}>
        © {new Date().getFullYear()} Mayur Nagpure. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
