import styled from 'styled-components';
import { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
export const Img = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
  margin-bottom: 1rem;
`;



export const GridContainer = styled.section`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
padding: 3rem;
place-items: center;
column-gap: 2rem;
row-gap: 3rem;
@media ${(props) => props.theme.breakpoints.sm} {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  padding-bottom: 0;
}

`

const AnimatedCard = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Animate only once when visible
    threshold: 0.1,    // Trigger when 10% of the card is visible
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -100 }}  // Invisible and shifted left initially
      animate={inView ? { opacity: 1, x: 0 } : {}}  // Animate to visible & position zero
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
};

export const ProjectButton = styled.a`
  display: inline-block;
  font-size: 1.4rem;
  font-weight: 600;
  color: #fff;
  background: linear-gradient(90deg, #38bdf8 0%, #6366f1 100%);
  border: none;
  border-radius: 2rem;
  padding: 0.9rem 2.2rem;
  margin: 0 1rem 1rem 0;
  box-shadow: 0 4px 24px rgba(56, 189, 248, 0.10);
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background: linear-gradient(90deg, #6366f1 10%, #38bdf8 90%);
    transform: translateY(-3px) scale(1.07);
    box-shadow: 0 8px 36px rgba(99, 102, 241, 0.13);
  }
`;



export const BlogCard = styled.div`
  border-radius: 18px;
  background: rgba(30,40,52,0.55);
  box-shadow:
    0 4px 32px 0 rgba(56,189,248,0.09),
    0 1.5px 6px 2px rgba(56,189,248,0.12) inset;
  backdrop-filter: blur(7px);
  border: 1.5px solid rgba(56,189,248,0.18);
  text-align: center;
  width: 350px;
  min-height: 560px;
  color: #e4e6e7;
  padding: 1.5rem 1.5rem 2rem 1.5rem;   // Consistent padding (adjust as needed)
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;      // Distributes content evenly vertically
  overflow: hidden;

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    height: auto;
    padding: 1.2rem;
  }
`;





export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;

`;


export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #9cc9e3;
  padding: .5rem 0;
  font-size: ${(props) => props.title ? '3rem' : '2rem'};
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #d0bb57;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: 'Droid Serif', serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;


export const CardInfo = styled.p`
  margin: 1rem 0;
  color: #e4e6e7;
  max-height: 95px;
  display: -webkit-box;
  -webkit-line-clamp: 5;   // Limits to 5 lines
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-align: justify;
  overflow-y: auto;
`;





export const UtilityList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  list-style: none;
  margin: 1.2rem 0 0 0;
  padding: 0;
`;


export const ExternalLinks = styled.a`
color:#d4c0c0;
font-size: 1.6rem;
padding:1rem 1.5rem;
background: #6b3030;
border-radius: 15px;
transition: 0.5s;
&:hover{
  background: #801414;

}
`;

export const TagList = styled.ul`
display: flex;
justify-content: space-around;
padding: 2rem;
`
export const Tag = styled.li`
color: #d8bfbf;
font-size: 1.5rem;
`