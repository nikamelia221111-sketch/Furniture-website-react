import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './ChangePassword.css'

function ChangePassword() {
  const navigate = useNavigate()

  const [formValues, setFormValues] = useState({
    password: '',
    confirmPassword: '',
  })
  const [passwordError, setPasswordError] = useState('')

  function handleChange(event) {
    const { name, value } = event.target
    setFormValues((prev) => ({ ...prev, [name]: value }))

    if (passwordError) {
      setPasswordError('')
    }
  }

  function handleSubmit(event) {
    event.preventDefault()

    if (!event.currentTarget.checkValidity()) {
      event.currentTarget.reportValidity()
      return
    }

    const confirmInput = event.currentTarget.querySelector('[name="confirmPassword"]')

    if (formValues.password !== formValues.confirmPassword) {
      confirmInput.setCustomValidity('Passwords do not match')
      setPasswordError('Passwords do not match')
      event.currentTarget.reportValidity()
      confirmInput.setCustomValidity('')
      return
    }

    setPasswordError('')
    navigate('/register')
  }

  return (
    <main className="change-password-page">
      <form className="change-password-form" onSubmit={handleSubmit}>
        <h1>Change Password</h1>

        <label>
          New password
          <input type="password" name="password" value={formValues.password} onChange={handleChange} autoComplete="new-password" minLength={8} maxLength={20}pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}" required/>
        </label>

        <label>
          Confirm Password
          <input type="password" name="confirmPassword" value={formValues.confirmPassword} onChange={handleChange} autoComplete="new-password" minLength={8} maxLength={20}pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}" required/>
        </label>

        {passwordError && <p className="password-error">{passwordError}</p>}

        <button type="submit">Update Password</button>
      </form>
    </main>
  )
}

export default ChangePassword