import { Link, useNavigate } from 'react-router-dom'
import './LogIn.css'

function Login({ onLogin }) {
  const navigate = useNavigate()

  function handleSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)

    onLogin({ email: formData.get('email') })
    navigate('/')
  }

  return (
    <main className="login-page">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1>Log in</h1>
        <label>
          Email
          <input type="email" name="email" autoComplete="email" required />
        </label>
        <label>
          Password
          <input type="password" name="password" autoComplete="current-password" required />
        </label>
        <button type="submit">Log In</button>
        <p>
            <Link to="/PasswordReset">Forgot password?</Link>
        </p>
      </form>
    </main>
  )
}

export default Login