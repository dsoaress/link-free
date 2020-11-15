import React from 'react'
import Header from './header'
import Footer from './footer'
import './style.css'

const Layout = ({ children, background, fontColor, logo }) => (
  <section style={{ background: `${background}` }}>
    <div
      style={{
        maxWidth: '60rem',
        height: '100vh',
        padding: '3rem 1rem',
        margin: 'auto'
      }}
    >
      <Header logo={logo} />
      {children}
      <Footer fontColor={fontColor} />
    </div>
  </section>
)

export default Layout
