import React from 'react';

import CelularImage from './CelularImage';
import DownloadSection from './DownloadSection';
import HowItWorks from './HowItWorks';

const MainSection = () => {
  return (
    <div className="main-section">
      <div className='container'></div>
      <div className="side-by-side">
        <CelularImage />
        <DownloadSection />
      </div>
      <div className='one'>
      <HowItWorks/>
      </div>
    </div>
  );
};

export default MainSection;