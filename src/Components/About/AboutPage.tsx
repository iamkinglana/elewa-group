import React from 'react'
import Introduction from './Introduction'
import Mission from './Mission';
import Footer from '../Top-Bottom/Footer';
import Team from './Team';
import CultureValues from './CultureValues';
import MapLocation from './mapLocation';
import History from './History';

// This is the main container for the about section
const MainAbout: React.FC<{}> = () => {
  return (
    <>
    <Introduction />
    <Mission />
      <Team />
      <CultureValues />
      <MapLocation />
      <History />
      <Footer />
    </>
  )
}

export default MainAbout
