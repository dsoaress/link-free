import React from 'react'
import { Link } from 'gatsby'
import Button from './button'

const NotFound = ({
  title,
  message,
  buttonLabel,
  buttonsFontColor,
  borderRadius,
  buttonsColor,
  fontColor
}) => (
  <div
    style={{
      display: 'grid',
      gap: '4rem',
      margin: '6rem 0',
      color: `${fontColor}`
    }}
  >
    <h1 style={{ fontSize: '4rem' }}>{title}</h1>
    <p>{message}</p>
    <Link to="/">
      <Button
        label={buttonLabel}
        buttonsFontColor={buttonsFontColor}
        borderRadius={borderRadius}
        buttonsColor={buttonsColor}
      />
    </Link>
  </div>
)

export default NotFound
