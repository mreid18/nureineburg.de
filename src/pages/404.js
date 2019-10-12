import React from 'react'

import SEO from '../components/seo'
import Navigation from '../components/Navigation'
import { Container } from '../utils/styles'

const NotFoundPage = () => (
  <>
    <SEO title="Page two" />
    <Navigation />
    <Container>
      <p>This page doesn't exist.</p>
    </Container>
  </>
)

export default NotFoundPage
