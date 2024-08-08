import React from 'react';
import Lottie from 'lottie-react';
import loadingCar from '../../assets/laodingCar.json';
const Loading = () => {
  return <Lottie animationData={loadingCar} loop={true} />;
};

export default Loading;
