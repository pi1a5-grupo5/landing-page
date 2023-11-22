import React from 'react';

import CelularImage from './CelularImage';
import DownloadSection from './DownloadSection';
import HowItWorks from './HowItWorks';

const MainSection = () => {
  return (
    <div className='back'>
      <div className='container'>
    <div className="main-section">
      
      <div className="side-by-side">
        <CelularImage />
        <DownloadSection />
      </div>
      </div>
      <div className='one'>
      <HowItWorks/>
    </div>
    </div>
    </div>
    
  );
};

export default MainSection;