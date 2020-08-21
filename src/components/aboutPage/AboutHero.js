import React from "react"
import styled from "styled-components"
import Background from '../Background'
import AboutContent from './AboutContent'

const AboutHero = () => {
  return (
      <Wrap>
        <Background />
          <AboutContent />
      </Wrap>
  )
}

const Wrap = styled.div`

`

export default AboutHero
