import burgerIcon from '../../assets/Burger-Icon.svg'
import burgerIconDark from '../../assets/burger-icon-dark.svg'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header({ darkMode = false, toggleDarkMode = () => { }, user = null, onLogout = () => {}, }) {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <header>
                <section>
                    <div>
                        <a className="title" href="#"><Link to="/">Furniture</Link></a>
                    </div>

                    <button
                        className={`burger ${menuOpen ? 'active' : ''}`}
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu">
                            
                        <img src={darkMode ? burgerIconDark : burgerIcon} alt="burger menu icon" />
                    </button>

                    <nav className={menuOpen ? 'open' : ''}>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Doctors</a></li>
                            <li><a href="#">Products</a></li>
                            <li><a href="#">Gallery</a></li>
                            {user ? (
                                <li>
                                    <button onClick={onLogout}>Log Out</button>
                                </li>
                            ) : (
                                <>
                                    <li>
                                        <Link to="/register">Register</Link>
                                    </li>
                                </>
                            )}
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