import React from 'react'
import Header from './header'
import Footer from './footer'
import './style.css'

const Layout = ({ background, children, fontColor, logo, title }) => (
  <section style={{ background: `${background}` }}>
    <div
      style={{
        maxWidth: '60rem',
        minHeight: '100vh',
        padding: '3rem 1rem',
        margin: 'auto'
      }}
    >
      <Header logo={logo} title={title} />
      {children}
      <Footer fontColor={fontColor} title={title} />
    </div>
  </section>
)

export default Layout
