import React from 'react'

const Footer = ({ fontColor, title }) => (
  <footer style={{ fontSize: '0.8rem', color: `${fontColor}` }}>
    <p>
      {new Date().getFullYear()} © {title}
    </p>
  </footer>
)

export default Footer
