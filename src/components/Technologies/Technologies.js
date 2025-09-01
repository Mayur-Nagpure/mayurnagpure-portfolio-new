import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { DiReact, DiJava, DiGit } from 'react-icons/di';
import { AiOutlineDatabase } from 'react-icons/ai';
import { GiArtificialIntelligence } from 'react-icons/gi';

import {
  SiSpringboot,
  SiPython,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiRabbitmq,
  SiIntellijidea,
} from 'react-icons/si';
import { RiShieldKeyholeFill } from 'react-icons/ri';
import { FiLock } from 'react-icons/fi';

import {
  Section,
  SectionDivider,
  SectionText,
} from '../../styles/GlobalComponents';
import {
  List,
  ListItem,
  ListContainer,
  ListParagraph,
  ListTitle,
} from './TechnologiesStyles';

import styles from './Technologies.module.css'; // Import CSS module

// Slide-in animation variants
const slideIn = (direction = 'left') => ({
  hidden: { opacity: 0, x: direction === 'left' ? -100 : 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
});

// Fade up animation for texts
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

// Scrolling icons
const trainIcons = [
  { icon: DiJava, color: '#83cd29', key: 'java' },
  { icon: SiSpringboot, color: '#6DB33F', key: 'springboot' },
  { icon: SiPython, color: '#3776AB', key: 'python' },
  { icon: SiMysql, color: '#00758F', key: 'mysql' },
  { icon: SiPostgresql, color: '#336791', key: 'postgresql' },
  { icon: SiMongodb, color: '#47A248', key: 'mongodb' },
  { icon: RiShieldKeyholeFill, color: '#4B9CD3', key: 'keycloak' },
  { icon: SiRabbitmq, color: '#FF6600', key: 'rabbitmq' },
  { icon: SiIntellijidea, color: '#000000', key: 'intellij' },
  { icon: DiGit, color: '#F05032', key: 'git' },
  { icon: FiLock, color: '#000000', key: 'authorization' },
];

// Loop animation for train
const scrollingAnimationLoop = {
  animate: {
    x: ['0%', '-50%'],
    transition: {
      duration: 15,
      ease: 'linear',
      repeat: Infinity,
    },
  },
};

const Technologies = () => {
  // observe the section
  const { ref, inView } = useInView({
    triggerOnce: false, // animate every time
    threshold: 0.2,
  });

  return (
    <Section id="tech" ref={ref} style={{ position: 'relative', overflow: 'visible' }}>
      <SectionDivider />

      {/* Section Title */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <h2
          className={styles.sectionTitle} // Apply responsive CSS module class here
          style={{
            marginTop: '6rem',
            lineHeight: 1.2,
            fontWeight: 'bold',
            position: 'relative',
            zIndex: 1,
          }}
        >
          Technologies
        </h2>
      </motion.div>

      {/* Section Text */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        transition={{ delay: 0.2 }}
      >
        <SectionText style={{ position: 'relative', zIndex: 1 }}>
          "Gained practical experience in building, integrating, and optimizing web and AI-based applications leveraging modern web technologies."
        </SectionText>
      </motion.div>

      {/* List */}
      <List style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          variants={slideIn('left')}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          transition={{ delay: 0.3 }}
        >
          <ListItem>
            <DiReact size="3rem" color="#61dafb" />
            <ListContainer>
              <ListTitle>Frontend</ListTitle>
              <ListParagraph>
                Skill-based practice building projects with React, HTML, CSS,
                JavaScript
              </ListParagraph>
            </ListContainer>
          </ListItem>
        </motion.div>

        <motion.div
          variants={slideIn('right')}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          transition={{ delay: 0.4 }}
        >
          <ListItem>
            <DiJava size="3rem" color="#83cd29" />
            <ListContainer>
              <ListTitle>Backend</ListTitle>
              <ListParagraph>
                Hands-on experience building projects with Java, Spring Boot,
                Keykloack, RabbitMQ
              </ListParagraph>
            </ListContainer>
          </ListItem>
        </motion.div>

        <motion.div
          variants={slideIn('left')}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          transition={{ delay: 0.5 }}
        >
          <ListItem>
            <AiOutlineDatabase size="3rem" color="#f59e0b" />
            <ListContainer>
              <ListTitle>Database</ListTitle>
              <ListParagraph>
                Active involvement in building projects with MongoDB, SQL,
                Postgres
              </ListParagraph>
            </ListContainer>
          </ListItem>
        </motion.div>

        <motion.div
          variants={slideIn('right')}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          transition={{ delay: 0.6 }}
        >
          <ListItem>
            <GiArtificialIntelligence size="3rem" color="#a78bfa" />
            <ListContainer>
              <ListTitle>AI</ListTitle>
              <ListParagraph>
                Hands-on experience integrating AI into projects using Python
                and the AI API.
              </ListParagraph>
            </ListContainer>
          </ListItem>
        </motion.div>
      </List>

      {/* Label */}
      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        transition={{ delay: 0.7 }}
        style={{
          color: '#ccc',
          textAlign: 'center',
          marginTop: '3rem',
          marginBottom: '0.5rem',
          position: 'relative',
          zIndex: 1,
        }}
      >
        My Tech Stack & Tools
      </motion.p>
      <br />

      {/* Scrolling "train" */}
      <div
        style={{
          overflow: 'hidden',
          width: '100%',
          whiteSpace: 'nowrap',
          marginTop: '0',
          marginBottom: '3rem',
          position: 'relative',
        }}
      >
        <motion.div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2rem',
          }}
          {...scrollingAnimationLoop}
        >
          {[...trainIcons, ...trainIcons].map(
            ({ icon: IconComp, color, key }, index) => (
              <motion.span
                key={`${key}-${index}`}
                whileHover={{ scale: 1.2 }}
                transition={{ type: 'spring', stiffness: 300 }}
                style={{ cursor: 'pointer' }}
              >
                <IconComp size={36} color={color} />
              </motion.span>
            )
          )}
        </motion.div>
      </div>
    </Section>
  );
};

export default Technologies;
