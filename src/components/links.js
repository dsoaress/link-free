import React from 'react'
import Button from './button'

const Links = ({ links, buttonsFontColor, borderRadius, buttonsColor }) => (
  <ul
    style={{
      display: 'grid',
      gap: '1rem',
      padding: '3rem 0',
      listStyle: 'none'
    }}
  >
    {links.map((link, i) => (
      <li key={i}>
        <a
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none' }}
        >
          <Button
            borderRadius={borderRadius}
            buttonsFontColor={buttonsFontColor}
            buttonsColor={buttonsColor}
            label={link.label}
          />
        </a>
      </li>
    ))}
  </ul>
)

export default Links
