import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiFillGithub, AiFillLinkedin, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const navItems = [
  { label: "Projects", href: "#projects" },
  { label: "Technologies", href: "#tech" },
  { label: "Certification", href: "#certification" },
  { label: "About", href: "#about" }
];

const Header = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 700);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Container
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: isMobile ? '0.7rem 1.5rem' : '1.5rem 6vw',
        position: 'relative'
      }}
    >
      {/* Logo */}
      <Div1
        style={{
          flex: isMobile ? '1 0 auto' : undefined,
          minWidth: 0,
          overflow: 'hidden',
        }}
      >
        <Link href="/">
          <a
            style={{
              display: "flex",
              alignItems: "center",
              color: 'white',
              fontWeight: 'bold',
              fontSize: isMobile ? '1.3rem' : '2rem',
              lineHeight: '1',
              maxWidth: isMobile ? 90 : undefined,
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            <DiCssdeck size={isMobile ? "2rem" : "3.5rem"} />
            <span style={{ marginLeft: '0.3rem' }}>Portfolio</span>
          </a>
        </Link>
      </Div1>

      {/* Hamburger Icon and Social Icons (Mobile Only!) */}
      {isMobile ? (
        <div style={{ display: 'flex', alignItems: 'center', flex: '0 0 auto' }}>
          <span
            style={{ marginRight: '1rem', cursor: 'pointer' }}
            onClick={() => setShowMobileNav(v => !v)}
          >
            {showMobileNav ? <AiOutlineClose size="2.2rem" /> : <AiOutlineMenu size="2.2rem" />}
          </span>
          <SocialIcons href="https://github.com/Mayur-Nagpure" target="_blank" style={{ marginRight: '0.4rem' }}>
            <AiFillGithub size="2rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/mayur-nagpure-460021296?" target="_blank">
            <AiFillLinkedin size="2rem" />
          </SocialIcons>
        </div>
      ) : (
        <>
          {/* Desktop Nav */}
          <Div2>
            {navItems.map((item) => (
              <li key={item.href} style={{ marginRight: '3.5rem' }}>
                <Link href={item.href}>
                  <NavLink style={{ fontSize: '2rem' }}>{item.label}</NavLink>
                </Link>
              </li>
            ))}
          </Div2>
          <Div3>
            <SocialIcons href="https://github.com/Mayur-Nagpure" target="_blank" style={{ marginRight: '0.5rem' }}>
              <AiFillGithub size="2.5rem" />
            </SocialIcons>
            <SocialIcons href="https://www.linkedin.com/in/mayur-nagpure-460021296?" target="_blank">
              <AiFillLinkedin size="2.5rem" />
            </SocialIcons>
          </Div3>
        </>
      )}

      {/* Mobile Dropdown Nav */}
      {isMobile && showMobileNav && (
        <Div2
          style={{
            position: 'absolute',
            top: '60px',
            left: 0,
            width: '100vw',
            background: '#23273a',
            flexDirection: 'column',
            padding: '1.2rem 0',
            zIndex: 99,
          }}
        >
          {navItems.map((item) => (
            <li key={item.href} style={{ margin: '1rem 0', textAlign: 'center' }}>
              <Link href={item.href}>
                <NavLink
                  style={{ fontSize: '1.5rem' }}
                  onClick={() => setShowMobileNav(false)}
                >
                  {item.label}
                </NavLink>
              </Link>
            </li>
          ))}
        </Div2>
      )}
    </Container>
  );
};

export default Header;
