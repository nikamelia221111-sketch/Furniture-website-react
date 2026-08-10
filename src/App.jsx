import { useState } from 'react'
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/Herosection';
import HeaderInfo from './components/HeaderInfo/Headerinfo';
import InspirationCollection from './components/InspirationCollection/inspirationCollection';
import BeautifyYourSpace from './components/BeautifyYourSpace/beautifyYourSpace';
import BrowseRange from './components/BrowseRange/BrowseRange';
import HowItWorks from './components/HowItWorks/HowItWorks';
import MailingList from './components/MailingList/MailingList';
import Footer from './components/Footer/footer';
import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={darkMode ? 'theme-dark' : 'theme-light'}>
      <Header
        darkMode={darkMode}
        toggleDarkMode={() => setDarkMode(!darkMode)}
      />
      <HeroSection />
      <HeaderInfo darkMode={darkMode} />
      <main>
        <InspirationCollection />
        <BeautifyYourSpace />
        <BrowseRange />
        <HowItWorks />
        <MailingList />
      </main>
      <Footer />
    </div>
  )
}

export default App