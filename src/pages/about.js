import React from 'react'
import AboutHero from '../components/aboutPage/AboutHero'
import Layout from '../layout/layout';
import AboutContent from '../components/aboutPage/AboutContent'
import styled from "styled-components"

const contact = () => {
    return (
      <Layout>
        <Wrap>
          <AboutContent />
        </Wrap>
      </Layout>
    )
}

const Wrap = styled.div`
* {
  background-color: hsla(200deg, 50%, 50%, .1)
}
`

export default contact
