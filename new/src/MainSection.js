import React from 'react';
import './App.css';

import CelularImage from './CelularImage';
import DownloadSection from './DownloadSection';
const MainSection = () => {
    return (
        <div className="home-page">
          <CelularImage />
          <DownloadSection />
        </div>
      );
};

export default MainSection;