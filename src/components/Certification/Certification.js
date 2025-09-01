import React, { useState, useEffect, useRef } from 'react';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';

const AUTO_SLIDE_INTERVAL = 1800;

const certificates = [
  { image: '/images/Certificate0.png' },
  { image: '/images/Certificate1.png' },
  { image: '/images/Certificate2.png' },
  { image: '/images/Certificate3.png' },
  { image: '/images/Certificate4.png' },
];

const Certification = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [containerWidth, setContainerWidth] = useState(750);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);
  const slideInterval = useRef(null);

  useEffect(() => {
    // Responsive: detect mobile
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 650);
      setContainerWidth(Math.min(width * 0.9, 750));
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!isHovered) {
      slideInterval.current = setInterval(() => {
        setCurrentIdx(prevIdx => (prevIdx + 1) % certificates.length);
      }, AUTO_SLIDE_INTERVAL);
    }
    return () => clearInterval(slideInterval.current);
  }, [isHovered]);

  const cardWidth = containerWidth;
  const cardHeight = containerWidth * (isMobile ? 0.62 : 0.75);

  const prevCertificate = () =>
    setCurrentIdx(prev => (prev === 0 ? certificates.length - 1 : prev - 1));
  const nextCertificate = () =>
    setCurrentIdx(prev => (prev === certificates.length - 1 ? 0 : prev + 1));

  return (
    <Section
      id="certification"
      style={{
        position: 'relative',
        overflow: 'visible',
        maxWidth: '1200px',
        paddingBottom: isMobile ? '1rem' : '2rem',
        paddingLeft: isMobile ? '1.5rem' : '7rem',
        paddingRight: isMobile ? '1.5rem' : '0',
      }}
    >
      {/* Gradient line and title */}
      <div style={{
        marginBottom: isMobile ? '0.5rem' : '1rem'
      }}>
        <SectionDivider style={{
          width: isMobile ? '45px' : '80px',
          marginBottom: isMobile ? '0.5rem' : '1rem'
        }} />
        <SectionTitle
          style={{
            lineHeight: 1.15,
            fontSize: isMobile ? '2.3rem' : '5.5rem',
            fontWeight: 'bold',
            textAlign: isMobile ? 'center' : 'left',
            marginBottom: isMobile ? '1.2rem' : '2rem',
            marginTop: isMobile ? '2.2rem' : '6rem',
            letterSpacing: '-2px'
          }}
        >
          Certification
        </SectionTitle>
      </div>

      <div ref={containerRef} style={{
        maxWidth: isMobile ? '100vw' : '750px',
        margin: 'auto',
        padding: isMobile ? '0' : '',
      }}>
        {/* Carousel centered */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%'
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            style={{
              position: 'relative',
              width: `${cardWidth}px`,
              height: `${cardHeight}px`,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '1rem',
              overflow: 'hidden',
              background: isMobile ? '#181a20' : '',
            }}
          >
            {/* Previous Arrow */}
            <button
              onClick={prevCertificate}
              style={{
                position: 'absolute',
                left: isMobile ? '2px' : '16px',
                top: '50%',
                transform: 'translateY(-50%)',
                fontSize: isMobile ? '1.8rem' : '3rem',
                fontWeight: 'bold',
                background: 'rgba(0,0,0,0.6)',
                borderRadius: '50%',
                width: isMobile ? '33px' : '56px',
                height: isMobile ? '33px' : '56px',
                color: '#fff',
                cursor: 'pointer',
                boxShadow: '0 2px 8px rgba(0,0,0,0.6)',
                outline: 'none',
                border: 'none',
                userSelect: 'none',
                zIndex: 999,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              aria-label="Previous Certificate"
            >
              &#60;
            </button>
            {/* Certificate Image */}
            <img
              src={certificates[currentIdx].image}
              alt={`Certificate ${currentIdx + 1}`}
              style={{
                width: isMobile ? '95vw' : `${cardWidth}px`,
                height: isMobile ? 'auto' : `${cardHeight}px`,
                borderRadius: '20px',
                objectFit: 'contain',
                background: '#fff',
                boxShadow: '0 10px 40px rgba(0,0,0,0.4)',
                userSelect: 'none',
                cursor: 'default',
                transition: 'opacity 0.5s ease',
                zIndex: 10,
                opacity: 1,
                padding: isMobile ? '8px' : '0',
              }}
              draggable={false}
            />
            {/* Next Arrow */}
            <button
              onClick={nextCertificate}
              style={{
                position: 'absolute',
                right: isMobile ? '2px' : '16px',
                top: '50%',
                transform: 'translateY(-50%)',
                fontSize: isMobile ? '1.8rem' : '3rem',
                fontWeight: 'bold',
                background: 'rgba(0,0,0,0.6)',
                borderRadius: '50%',
                width: isMobile ? '33px' : '56px',
                height: isMobile ? '33px' : '56px',
                color: '#fff',
                cursor: 'pointer',
                boxShadow: '0 2px 8px rgba(0,0,0,0.6)',
                outline: 'none',
                border: 'none',
                userSelect: 'none',
                zIndex: 999,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              aria-label="Next Certificate"
            >
              &#62;
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Certification;
