import React from 'react'
import * as data from '../settings/site-metadata.json'

const Footer = ({ fontColor }) => (
  <footer style={{ fontSize: '0.8rem', color: `${fontColor}` }}>
    <p>
      {new Date().getFullYear()} © {data.title}
    </p>
  </footer>
)

export default Footer
