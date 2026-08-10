import './Header.css'

function Header({ darkMode = false, toggleDarkMode = () => {} }) {
    return (
        <>
            <header>
                <section>
                    <div>
                        <a className="title" href="#">Furniture</a>
                    </div>
                    <div>
                        <nav>
                            <ul>
                                <li>
                                    <a href="#">Home</a>
                                </li>
                                <li>
                                    <a href="#">Services</a>
                                </li>
                                <li>
                                    <a href="#">Doctors</a>
                                </li>
                                <li>
                                    <a href="#">Products</a>
                                </li>
                                <li className="margin-right">
                                    <a href="#">Gallery</a>
                                </li>
                                <li>
                                    <button onClick={toggleDarkMode}>
                                        {darkMode ? '☀️ Light' : '🌙 Dark'}
                                    </button>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </section>
            </header>
        </>
    )
}

export default Header
