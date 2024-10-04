export { Layout }

import React from 'react'
import PropTypes from 'prop-types'
import { childrenPropType } from './PropTypeValues'
import logoUrl from './logo.svg'
import { PageContextProvider } from './usePageContext'
import { Link } from './Link'
import './css/index.css'
import './Layout.css'
import { Container } from '@mui/material'

Layout.propTypes = {
  pageContext: PropTypes.any,
  children: childrenPropType
}
function Layout({ pageContext, children }) {
  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <Container maxWidth={'xl'}>
          <TopBar />
          <Content>{children}</Content>
        </Container>
      </PageContextProvider>
    </React.StrictMode>
  )
}

const TopBar = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/star-wars">Data Fetching</Link>
    </div>
  )
}

Frame.propTypes = {
  children: childrenPropType
}
function Frame({ children }) {
  return (
    <div
      style={{
        display: 'flex',
        margin: 'auto'
      }}
    >
      {children}
    </div>
  )
}

Sidebar.propTypes = {
  children: childrenPropType
}
function Sidebar({ children }) {
  return (
    <div
      id="sidebar"
      style={{
        padding: 20,
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'column',
        lineHeight: '1.8em',
        borderRight: '2px solid #eee'
      }}
    >
      {children}
    </div>
  )
}

Content.propTypes = {
  children: childrenPropType
}
function Content({ children }) {
  return (
    <div id="page-container">
      <div
        id="page-content"
        style={{
          padding: 20,
          paddingBottom: 50,
          minHeight: '80vh'
        }}
      >
        {children}
      </div>
    </div>
  )
}
