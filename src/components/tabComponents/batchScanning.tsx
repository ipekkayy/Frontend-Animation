import React, { useState, useEffect } from 'react';
import Frame3 from '../../assets/images/Frame3.svg';
import Frame3_1 from '../../assets/images/Frame3_1.svg';

const BatchScanning: React.FC = () => {
  const [showImage, setShowImage] = useState(false);
  const [showImage2, setShowImage2] = useState(false);
  const [showImage3, setShowImage3] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowImage(true);
    }, 500); 
    return () => clearTimeout(timer); 
  }, []);

  useEffect(() => {
    const timer2 = setTimeout(() => {
      setShowImage2(true);
    }, 1000); 
    return () => clearTimeout(timer2); 
  }, []);

  useEffect(() => {
    const timer3 = setTimeout(() => {
      setShowImage3(true);
    }, 1500); 
    return () => clearTimeout(timer3); 
  }, []);

  return (
    <div className="sign-and-stamps-container">
      <div className="phone-box">
        <img src={Frame3} alt="Frame3" className="img-active-tab" />
        {showImage && (
          <img
            src={Frame3_1}
            alt="Frame3_1"
            className="phone-box3_1 phone3_1"
          />
        )}
        {showImage2 && (
          <img
            src={Frame3_1}
            alt="Frame3_1"
            className="phone-box3_2 phone3_2"
          />
        )}
        {showImage3 && (
          <img
            src={Frame3_1}
            alt="Frame3_3"
            className="phone-box3_3 phone3_3"
          />
        )}
      </div>
    </div>
  );
};

export default BatchScanning;
