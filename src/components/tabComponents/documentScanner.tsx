import React from 'react';
import Phone from '../../assets/images/Frame.svg';

const DocumentScanner: React.FC = () => {
  return (
    <div className="phone-box">
      <img src={Phone} className="img-active-tab" />
      <div className="hidden"></div>
    </div>
  );
};

export default DocumentScanner;
