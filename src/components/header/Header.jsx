import './header.css'

function header() {




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
                            </ul>
                        </nav>
                    </div>
                </section>
            </header>
        </>
    )
}


export default header
