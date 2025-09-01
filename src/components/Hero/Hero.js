import React, { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import LottieAnimation from '../LottieAnimation';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size for responsiveness
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Section
      row={!isMobile}
      nopadding
      style={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: isMobile ? '1rem' : '2rem',
        paddingBottom: '6rem',
        width: '100%',
      }}
    >
      {/* Left: Text */}
      <LeftSection
        style={{
          flex: '1 1 100%',
          maxWidth: isMobile ? '100vw' : '600px',
          paddingRight: isMobile ? 0 : '2rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          minHeight: isMobile ? 'auto' : '400px',
          paddingLeft: isMobile ? '1rem' : 0,
          paddingTop: isMobile ? '3rem' : 0,
        }}
      >
        <SectionTitle
          main
          style={{
            fontSize: isMobile ? '2.6rem' : '6rem',
            fontWeight: 'bold',
            lineHeight: 1.1,
            maxWidth: '100%',
            wordBreak: 'break-word',
          }}
        >
          <TypeAnimation
            sequence={[
              'Snapshot',
              1000,
            ]}
            speed={40}
            style={{ display: 'block' }}
            repeat={0}
            cursor={true}
            wrapper="span"
          />
        </SectionTitle>

        <SectionText
          style={{
            fontSize: isMobile ? '1.4rem' : '1.75rem',
            maxWidth: '100%',
            marginTop: '1rem',
            color: '#e2e2e2',
            minHeight: '150px',
          }}
        >
          <TypeAnimation
            sequence={[
              `I’m Mayur Nagpure, a developer with expertise in Java, backend development, databases, and APIs, along with a keen interest in AI. I focus on building practical web applications and constantly exploring innovative technologies. Take a look at my projects to see my work in action.`,
              1000,
            ]}
            speed={80}
            style={{ display: 'block' }}
            repeat={0}
            cursor={true}
            wrapper="span"
          />
        </SectionText>

        <Button
          size="small"
          style={{ marginTop: '2rem' }}
          onClick={() => window.location.href = '#projects'}
        >
          What I’ve Done!
        </Button>
      </LeftSection>

      {/* Right: Animation */}
      {!isMobile && (
        <div
          style={{
            flex: '1 1 100%',
            maxWidth: '400px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '550px',
          }}
        >
          <LottieAnimation />
        </div>
      )}
    </Section>
  );
};

export default Hero;
