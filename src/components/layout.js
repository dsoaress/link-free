import React from 'react'
import './style.css'

const Layout = ({ children, background }) => (
  <section style={{ background: `${background}` }}>
    <div
      style={{
        maxWidth: '60rem',
        height: '100vh',
        padding: '3rem 1rem',
        margin: 'auto'
      }}
    >
      {children}
    </div>
  </section>
)

export default Layout
