import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/Herosection';
import HeaderInfo from './components/HeaderInfo/Headerinfo';
import InspirationCollection from './components/InspirationCollection/inspirationCollection';
import BeautifyYourSpace from './components/BeautifyYourSpace/beautifyYourSpace';
import BrowseRange from './components/BrowseRange/BrowseRange';
import HowItWorks from './components/HowItWorks/HowItWorks';
import MailingList from './components/MailingList/MailingList';
import Footer from './components/Footer/footer';
import Register from './components/Register/Register';
import Login from './components/PasswordReset/PasswordReset';
import ChangePassword from './components/ChangePassword/ChangePassword';
import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user"))
  )
  function handleLogin(userData) {
    localStorage.setItem("user", JSON.stringify(userData))
    setUser(userData)
  }
  function handleLogout() {
    localStorage.removeItem("user")
    setUser(null)
  }

  return (
    <div className={darkMode ? 'theme-dark' : 'theme-light'}>
      <Header
        darkMode={darkMode}
        toggleDarkMode={() => setDarkMode(!darkMode)}
        user={user}
        onLogout={handleLogout}
      />
      <Routes>
        <Route path='/ChangePassword' element={<ChangePassword onLogin={handleLogin} />} />
        <Route path="/PasswordReset" element={<Login onLogin={handleLogin} />} />
        <Route path="/register" element={<Register onLogin={handleLogin} />} />
        <Route path="*" element={
          <>
            <HeroSection user={user} />
            <HeaderInfo darkMode={darkMode} />
            <main>
              <InspirationCollection />
              <BeautifyYourSpace />
              <BrowseRange />
              <HowItWorks />
              <MailingList />
            </main>
          </>
        } />
      </Routes>
      <Footer />
    </div>
  )
}

export default App