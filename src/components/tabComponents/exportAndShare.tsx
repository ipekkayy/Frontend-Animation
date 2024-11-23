import React, { useState, useEffect } from 'react';
import Frame5 from '../../assets/images/Frame5.svg';
import Frame5_1 from '../../assets/images/Frame5_1.svg';
import Frame5_2 from '../../assets/images/Frame5_2.svg';
import Frame5_3 from '../../assets/images/Frame5_3.svg';
import Frame5_4 from '../../assets/images/Frame5_4.svg';

const ExportAndShare: React.FC = () => {
  const [showImage, setShowImage] = useState(false);
  const [showImage2, setShowImage2] = useState(false);
  const [showImage3, setShowImage3] = useState(false);
  const [showImage4, setShowImage4] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowImage(true);
    }, 300); 
    return () => clearTimeout(timer); 
  }, []);

  useEffect(() => {
    const timer2 = setTimeout(() => {
      setShowImage2(true);
    }, 500); 
    return () => clearTimeout(timer2);
  }, []);

  useEffect(() => {
    const timer3 = setTimeout(() => {
      setShowImage3(true);
    }, 700); 
    return () => clearTimeout(timer3);
  }, []);

  useEffect(() => {
    const timer3 = setTimeout(() => {
      setShowImage4(true);
    }, 900); 
    return () => clearTimeout(timer3);
  }, []);
  return (
    <div className="sign-and-stamps-container">
      <div className="phone-box">
        <img src={Frame5} alt="Phone5" className="img-active-tab" />
        {showImage && (
          <img
            src={Frame5_1}
            alt="Phone5_1"
            className="phone-box5_1 phone5_1"
          />
        )}
        {showImage2 && (
          <img
            src={Frame5_2}
            alt="Phone5_2"
            className="phone-box5_2 phone5_2"
          />
        )}
        {showImage3 && (
          <img
            src={Frame5_3}
            alt="Phone5_3"
            className="phone-box5_3 phone5_3"
          />
        )}
        {showImage4 && (
          <img
            src={Frame5_4}
            alt="Phone5_4"
            className="phone-box5_4 phone5_4"
          />
        )}
      </div>
    </div>
  );
};

export default ExportAndShare;
