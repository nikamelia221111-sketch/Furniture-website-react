import { useState } from 'react'
import './Register.css'
import { Link, useNavigate } from 'react-router-dom'

function Register({ onLogin }) {
    const navigate = useNavigate()
    const [activeTab, setActiveTab] = useState(0)
    const [formValues, setFormValues] = useState({ name: '', email: '', password: '' })

    function handleChange(event) {
        setFormValues({ ...formValues, [event.target.name]: event.target.value })
    }

    function handleContinue(event) {
        const form = event.currentTarget.form

        if (!form.checkValidity()) {
            form.reportValidity()
            return
        }

        setActiveTab(2)
    }

    function handleSubmit(event) {
        event.preventDefault()

        onLogin({
            name: formValues.name,
            email: formValues.email,
        })
        navigate('/')
    }

    return (
        <main className="register-page">
            <form className="register-form" onSubmit={handleSubmit}>
                {activeTab === 2 ? (
                    <div className="password-heading">
                        <button type="button" className="back-button" onClick={() => setActiveTab(0)} aria-label="Go back">
                            ←
                        </button>
                        <h1>Finish signing up</h1>
                    </div>
                ) : <h1>Create an account</h1>}
                {activeTab !== 2 && <div className="register-tabs">
                    <button type="button" className={activeTab === 0 ? 'active' : ''} onClick={() => setActiveTab(0)}>
                        Sign Up
                    </button>
                    <button type="button" className={activeTab === 1 ? 'active' : ''} onClick={() => setActiveTab(1)}>
                        Log In
                    </button>
                </div>}

                {activeTab === 0 ? (
                    <div className="register-panel">
                        <label>
                            Your name
                            <input type="text" name="name" value={formValues.name} onChange={handleChange} autoComplete="name" required />
                        </label>
                        <label>
                            Email
                            <input type="email" name="email" value={formValues.email} onChange={handleChange} autoComplete="email" required />
                        </label>
                        <button type="button" onClick={handleContinue}>Continue</button>
                    </div>
                ) : activeTab === 1 ? (
                    <div className="register-panel">
                        <label>
                            Email
                            <input type="email" name='email' value={formValues.email} onChange={handleChange} autoComplete='email' required />
                        </label>
                        <label>
                            Password
                            <input type="password" name="password" value={formValues.password} onChange={handleChange} autoComplete="new-password" minLength={8} maxLength={20} pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}" required />
                        </label>
                        <div className="tab-actions">
                            <button type="submit">Log In</button>
                        </div>
                        <h2>Forgot your password? <Link to="/PasswordReset">Reset Password</Link></h2>
                    </div>
                ) : (
                    <div className="register-panel">
                        <label>
                            Password
                            <input type="password" name="password" value={formValues.password} onChange={handleChange} autoComplete="new-password" minLength={8} maxLength={20} pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}" required />
                        </label>
                        <h2>Forgot your password? <Link to="/PasswordReset">Reset Password</Link></h2>
                        <div className="tab-actions">
                            <button type="submit">Register</button>
                        </div>
                    </div>
                )}
            </form>
        </main>
    )
}

export default Register
