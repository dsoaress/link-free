import React from 'react'

const Header = ({ logo }) => (
  <header style={{ width: '100%' }}>
    {logo && (
      <img src={logo} style={{ maxWidth: '16rem', margin: 'auto' }} alt="" />
    )}
  </header>
)

export default Header
