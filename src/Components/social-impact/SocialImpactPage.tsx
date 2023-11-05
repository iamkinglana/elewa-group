import React from 'react'
import SocialIntro from './SocialIntro'
import SocialBusiness from './SocialBusiness'
import SocialStatements from './SocialStatements'
import SocialOpen from './SocialOpen'
import Footer from '../Top-Bottom/Footer'
import SocialLast from './SocialLast'

// This is the main container for the social impact page
const MainSocial: React.FC<{}> = () => {
  return (
    <>
    <SocialIntro />
    <SocialBusiness />
    <SocialStatements />
    <SocialOpen />
    <SocialLast />
    <Footer />
    </>
  )
}

export default MainSocial
