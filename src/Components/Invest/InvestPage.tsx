import React from 'react'
import IntroInvest from './InvestIntro'
import InvestGlobal from './InvestGlobal'
import Footer from '../Top-Bottom/Footer'
import InvestStatement from './InvestStatement'


const MainInvest: React.FC<{}> = () => {
  return (
    <>
    <IntroInvest />
    <InvestGlobal />
    <InvestStatement />
    <Footer />
    </>
  )
}

export default MainInvest
