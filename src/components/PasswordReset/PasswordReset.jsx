import { Link, useNavigate } from 'react-router-dom'
import './PasswordReset.css'

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
        <h1>Reset Password</h1>
        <label>
          Email
          <input type="email" name="email" autoComplete="email" required />
        </label>
        <Link to="/ChangePassword"><button type="submit">Reset Password</button></Link>
      </form>
    </main>
  )
}

export default Login
