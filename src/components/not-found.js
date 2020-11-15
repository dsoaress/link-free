import React from 'react'
import { Link } from 'gatsby'
import Button from './button'

const NotFound = ({
  borderRadius,
  buttonLabel,
  buttonsFontColor,
  buttonsColor,
  fontColor,
  message,
  title
}) => (
  <div
    style={{
      display: 'grid',
      gap: '3rem',
      margin: '6rem 0',
      color: `${fontColor}`
    }}
  >
    <h1 style={{ fontSize: '4rem' }}>{title}</h1>
    <p>{message}</p>
    <Link to="/">
      <Button
        borderRadius={borderRadius}
        buttonsFontColor={buttonsFontColor}
        buttonsColor={buttonsColor}
        label={buttonLabel}
      />
    </Link>
  </div>
)

export default NotFound
