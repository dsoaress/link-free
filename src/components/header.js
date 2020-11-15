import React from 'react'

const Header = ({ logo, title }) => (
  <header style={{ width: '100%' }}>
    <img src={logo} style={{ maxWidth: '16rem', margin: 'auto' }} alt={title} />
  </header>
)

export default Header
