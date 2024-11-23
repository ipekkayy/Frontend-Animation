import React, { useState, useEffect } from 'react';
import Phone4 from '../../assets/images/Frame4.svg';
import Phone4_1 from '../../assets/images/Frame4_1.svg';
import Phone4_2 from '../../assets/images/Frame4_2.svg';

const AdvancedFilters: React.FC = () => {
  const [showImage, setShowImage] = useState(false);
  const [showImage2, setShowImage2] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowImage(true);
    }, 500); 
    return () => clearTimeout(timer); 
  }, []);

  useEffect(() => {
    const timer2 = setTimeout(() => {
      setShowImage2(true);
    }, 700); 
    return () => clearTimeout(timer2);
  }, []);

  return (
    <div className="sign-and-stamps-container">
      <div className="phone-box">
        <img src={Phone4} alt="Frame2" className="img-active-tab" />
        {showImage && (
          <img
            src={Phone4_1}
            alt="Phone2_1"
            className="phone-box4_1 phone4_1"
          />
        )}
        {showImage2 && (
          <img
            src={Phone4_2}
            alt="Phone2_2"
            className="phone-box4_2 phone4_2"
          />
        )}
      </div>
    </div>
  );
};

export default AdvancedFilters;
