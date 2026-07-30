import { useState } from 'react'
import Header from './components/header/Header';
import HeroSection from './components/heroSection/Herosection';
import HeaderInfo from './components/headerinfo/Headerinfo';
import InspirationCollection from './components/inspirationCollection/inspirationCollection';
import BeautifyYourSpace from './components/beautifyYourSpace/beautifyYourSpace';
import BrowseRange from './components/browseRange/BrowseRange';
import HowItWorks from './components/HowItWorks/HowItWorks';
import MailingList from './components/MailingList/MailingList';
import Footer from './components/footer/footer';
import './App.css'

function App() {

  return (
    <>
      <Header/>
      <HeroSection />
      <HeaderInfo />
      <main>
        <InspirationCollection />
        <BeautifyYourSpace />
        <BrowseRange />
        <HowItWorks />
        <MailingList />
      </main>
      <Footer />
    </>
  )
}

export default App
