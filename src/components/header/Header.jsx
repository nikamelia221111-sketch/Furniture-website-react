import burgerIcon from '../../assets/Burger-Icon.svg'
import burgerIconDark from '../../assets/burger-icon-dark.svg'
import { useState } from 'react';
import './Header.css';

function Header({ darkMode = false, toggleDarkMode = () => { } }) {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <header>
                <section>
                    <div>
                        <a className="title" href="#">Furniture</a>
                    </div>

                    <button
                        className={`burger ${menuOpen ? 'active' : ''}`}
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu">
                            
                        <img src={darkMode ? burgerIconDark : burgerIcon} alt="burger menu icon" />
                    </button>

                    <nav className={menuOpen ? 'open' : ''}>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Doctors</a></li>
                            <li><a href="#">Products</a></li>
                            <li><a href="#">Gallery</a></li>
                            <li>
                                <button className="margin-right" onClick={toggleDarkMode}>
                                    {darkMode ? '☀️ Light' : '🌙 Dark'}
                                </button>
                            </li>
                        </ul>
                    </nav>
                </section>
            </header>
        </>
    )
}

export default Header