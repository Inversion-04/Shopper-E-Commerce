import React, { useState } from 'react'
import './NewsLetter.css'

// Newsletter component to get user email for exclusive offers
// It includes an input field and a subscribe button
// Basic validation is done to check for a valid email format
// On successful subscription, an alert is shown
// Error messages are displayed for invalid email inputs

function NewsLetter() {

  const [email, setEmail] = useState('')
  const [error, setError] = useState('')

  const handleSubscribe = () => {
    if (!email.includes('@')) {
      setError('Please enter a valid email address')
      return
    }
    setError('')
    alert(`Subscribed with ${email}`)
    setEmail('')
  }

  return (
    <div className='newsletter'>
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Subscribe to our newsletter and stay updated</p>

      <div className="newsletter-input">
        <input
          type="email"
          placeholder='Your Email id'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleSubscribe}>Subscribe</button>
      </div>

      {error && <span className="error">{error}</span>}
    </div>
  )
}

export default NewsLetter
