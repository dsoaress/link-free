import React from 'react'

const Button = ({ buttonsFontColor, borderRadius, buttonsColor, label }) => (
  <button
    style={{
      width: '100%',
      fontSize: '1rem',
      fontWeight: 'bold',
      border: 'none',
      padding: '1.5rem',
      cursor: 'pointer',
      color: `${buttonsFontColor}`,
      background: `${buttonsColor}`,
      borderRadius: `${borderRadius + 'px'}`
    }}
  >
    {label}
  </button>
)

export default Button
