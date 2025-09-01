import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../assets/Video-Design.json';

const LottieAnimation = () => (
  <div style={{ width: 300, margin: '0 auto' }}>
    <Lottie animationData={animationData} loop={true} />
  </div>
);

export default LottieAnimation;
