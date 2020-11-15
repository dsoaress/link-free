import React from 'react'
import * as data from '../settings/siteMetadata.json'

const Footer = ({ fontColor }) => (
  <footer
    style={{ fontSize: '0.8rem', marginBottom: '3rem', color: `${fontColor}` }}
  >
    <p>
      {new Date().getFullYear()} © {data.title}
    </p>
  </footer>
)

export default Footer
