import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineMail,
  AiOutlineFilePdf,
} from 'react-icons/ai';
import {
  Section,
  SectionDivider,
  SectionTitle,
  SectionText,
} from '../../styles/GlobalComponents';
import styles from './AboutMe.module.css';

const iconStyle = {
  fontSize: '2.3rem',
  color: '#bbb',
  marginRight: '2rem',
  transition: 'color 0.3s, transform 0.3s',
  cursor: 'pointer',
  verticalAlign: 'middle',
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -70 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const iconFadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeInOut' },
  },
};

const AboutMe = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 650);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Section
      id="about"
      ref={ref}
      style={{
        position: 'relative',
        overflow: 'visible',
        color: '#eee',
        paddingLeft: isMobile ? '1rem' : '4rem',
        paddingRight: isMobile ? '1rem' : '4rem',
      }}
    >
      <SectionDivider style={{ width: isMobile ? '50px' : '80px', marginBottom: isMobile ? '0.7rem' : '1rem' }} />

      {/* Section Title */}
      <SectionTitle
        style={{
          marginTop: isMobile ? '2.5rem' : '6rem',
          lineHeight: 1.1,
          fontSize: isMobile ? '2.5rem' : '6rem',
          fontWeight: 'bold',
          textAlign: isMobile ? 'center' : 'left',
          marginBottom: isMobile ? '2.5rem' : '6rem',
          letterSpacing: '-2px'
        }}
      >
        About Me
      </SectionTitle>

      <div
        style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: 'center',
          gap: isMobile ? '1.4rem' : '3.5rem',
          flexWrap: 'wrap',
          maxWidth: isMobile ? '100vw' : '1100px',
          margin: isMobile ? '0 auto 1.5rem auto' : 'auto',
          marginBottom: isMobile ? '2rem' : '6rem',
        }}
      >
        {/* Profile Image */}
        <motion.div
          className={styles.profileContainer}
          variants={slideInLeft}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          style={{
            margin: isMobile ? '0 auto' : '0',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: isMobile ? '80vw' : 'auto',
          }}
        >
          <img
            src="/images/FinalProfile1.jpg"
            alt="Profile"
            className={styles.profileImage}
            loading="lazy"
            style={{
              maxWidth: isMobile ? '230px' : '340px',
              // width: '100%',
              // borderRadius: '24px',
              // marginBottom: isMobile ? '1.8rem' : '0',
              // boxShadow: '0 0 18px 4px rgba(56,189,248,0.14)'
            }}
          />
        </motion.div>

        {/* Text block */}
        <motion.div
          style={{
            flex: 1,
            minWidth: isMobile ? 'auto' : 340,
            textAlign: isMobile ? 'center' : 'left',
            padding: isMobile ? '0 0.5rem' : '0',
          }}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          transition={{ delay: 0.2 }}
        >
          <h3
            style={{
              fontSize: isMobile ? '1.2rem' : '2rem',
              color: '#e2e2e2',
              fontWeight: 600,
              marginBottom: isMobile ? '1rem' : '1.5rem',
              textAlign: isMobile ? 'center' : 'left'
            }}
          >
            Scalable web and backend solutions | Java • Spring Boot • APIs • AI
          </h3>

          <SectionText
            style={{
              fontSize: isMobile ? '1.1rem' : '2rem',
              lineHeight: 1.65,
              color: '#e2e2e2',
              fontWeight: 400,
              textAlign: isMobile ? 'center' : 'left',
              marginBottom: isMobile ? '1.2rem' : '1.8rem',
            }}
          >
            I’m Mayur, a developer focused on creating high-performance web and backend applications using Java, Spring Boot, APIs, and AI technologies. I’m passionate about problem-solving, innovation, and contributing to the tech community.
          </SectionText>

          {/* Social and resume icons */}
          <motion.div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: isMobile ? 'center' : 'flex-start'
            }}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={{
              visible: { transition: { staggerChildren: 0.3 } }
            }}
          >
            {[
              {
                href: '/images/Mayur-Nagpure.pdf',
                ariaLabel: 'Resume PDF',
                icon: <AiOutlineFilePdf />,
                hoverColor: '#8e6dfd',
                tooltip: 'Resume',
              },
              {
                href: 'mailto:mayurnagpure90@gmail.com',
                ariaLabel: 'Email',
                icon: <AiOutlineMail />,
                hoverColor: '#49D0A2',
                tooltip: 'Email',
              },
              {
                href: 'https://github.com/Mayur-Nagpure',
                ariaLabel: 'GitHub',
                icon: <AiFillGithub />,
                hoverColor: '#6D57E0',
                tooltip: 'GitHub',
                external: true,
              },
              {
                href: 'https://www.linkedin.com/in/mayur-nagpure-460021296?',
                ariaLabel: 'LinkedIn',
                icon: <AiFillLinkedin />,
                hoverColor: '#2867B2',
                tooltip: 'LinkedIn',
                external: true,
              },
            ].map(({ href, ariaLabel, icon, hoverColor, tooltip, external }) => (
              <motion.span
                className={styles.iconWrapper}
                variants={iconFadeUp}
                key={tooltip}
              >
                <a
                  href={href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                  style={iconStyle}
                  aria-label={ariaLabel}
                  onMouseEnter={(e) => (e.currentTarget.style.color = hoverColor)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#bbb')}
                >
                  {icon}
                </a>
                <span className={styles.iconTooltip}>{tooltip}</span>
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
};

export default AboutMe;
