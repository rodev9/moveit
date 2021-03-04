import React from 'react'

import Logo from '../assets/logo-full.svg'

import { Container } from '../styles/components/Footer'

const Footer: React.FC = () => {
  return (
    <Container>
      <Logo />

      <a href="https://storyset.com/" target="_blank" rel="noopener noreferrer">
        Illustrations by Freepik Storyset
      </a>
    </Container>
  )
}

export default Footer
