import React, { useState, useEffect } from 'react';

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
  ProjectButton,
} from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { motion } from 'framer-motion';
import { projects } from '../../constants/constants';

const Projects = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const userAgent = typeof navigator === 'undefined' ? '' : navigator.userAgent;
      setIsMobile(/Mobi|Android/i.test(userAgent) || window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Section nopadding id="projects">
      <SectionDivider />
      <SectionTitle main>Projects</SectionTitle>
      <GridContainer>
        {projects.map(({ id, image, title, description, tags, source, visit }, index) => (
          <motion.div
            key={id}
            initial={{
              opacity: 0,
              x: index % 2 === 0 ? -100 : 100, // Left cards from left; right cards from right
            }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }} // animate every time cards enter viewport
            transition={{ duration: 0.8, ease: 'easeOut' }}
            whileHover={
              !isMobile
                ? { scale: 1.05, boxShadow: '0 15px 40px rgba(56,189,248,0.3)' }
                : { scale: 1.02 }
            }
            whileTap={isMobile ? { scale: 0.95 } : {}}
          >
            <BlogCard>
              <Img src={image} />
              <TitleContent>
                <HeaderThree title>{title}</HeaderThree>
                <Hr />
              </TitleContent>
              <CardInfo>{description}</CardInfo>
              <div>
                <br />
                <TitleContent>Stack</TitleContent>
                <TagList>
                  {tags.map((tag, i) => (
                    <Tag key={i}>{tag}</Tag>
                  ))}
                </TagList>
              </div>
              <UtilityList>
                <ProjectButton href={visit} target="_blank" rel="noopener noreferrer">
                  View Project
                </ProjectButton>
                <ProjectButton href={source} target="_blank" rel="noopener noreferrer">
                  Full Documentation
                </ProjectButton>
              </UtilityList>
            </BlogCard>
          </motion.div>
        ))}
      </GridContainer>
    </Section>
  );
};

export default Projects;
