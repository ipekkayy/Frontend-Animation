import React, { useState, useEffect } from 'react';
import Phone2 from '../../assets/images/Frame2.svg';
import Phone2_1 from '../../assets/images/Frame2_1.png';
import Phone2_2 from '../../assets/images/Frame2_2.png';

const SignAndStamps: React.FC = () => {
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
    }, 1000);
    return () => clearTimeout(timer2);
  }, []);

  return (
    <div className="sign-and-stamps-container">
      <div className="phone-box">
        <img src={Phone2} alt="Phone2" className="img-active-tab" />
        {showImage && (
          <img
            src={Phone2_1}
            alt="Phone2_1"
            className="phone-box2_1 phone2_1"
          />
        )}
        {showImage2 && (
          <img
            src={Phone2_2}
            alt="Phone2_2"
            className="phone-box2_2 phone2_2"
          />
        )}
      </div>
    </div>
  );
};

export default SignAndStamps;
