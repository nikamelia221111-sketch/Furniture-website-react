import './Register.css'
import { Link, useNavigate } from 'react-router-dom'

function Register({ onLogin }) {
    const navigate = useNavigate()

    function handleSubmit(event) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)

        onLogin({
            name: formData.get('name'),
            email: formData.get('email'),
        })
        navigate('/')
    }

    return (
        <main className="register-page">
            <form className="register-form" onSubmit={handleSubmit}>
                <h1>Create an account</h1>
                <label>
                    Name
                    <input type="text" name="name" autoComplete="name" required />
                </label>
                <label>
                    Email
                    <input type="email" name="email" autoComplete="email" required />
                </label>
                <label>
                    Password
                    <input type="password" name="password" autoComplete="new-password" minLength={8} maxLength={20} pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}" required />
                </label>
                <button type="submit">Register</button>
                <h2>already have an account? <Link to="/login">Log In</Link></h2>
            </form>
        </main>
    )
}

export default Register
