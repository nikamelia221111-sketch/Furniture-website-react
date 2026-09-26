import { useNavigate } from 'react-router-dom'
import './PasswordReset.css'

function Login({ onLogin }) {
  const navigate = useNavigate()

  function handleSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const email = formData.get('email')?.toString().trim()

    if (!email) {
      return
    }

    onLogin({ email })
    navigate('/ChangePassword')
  }

  return (
    <main className="login-page">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1>Reset Password</h1>
        <label>
          Email
          <input type="email" name="email" autoComplete="email" required />
        </label>
        <button type="submit">Reset Password</button>
      </form>
    </main>
  )
}

export default Login
