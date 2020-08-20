import React from "react"
import styled from "styled-components"
import Background from '../Background'
import AboutContent from './AboutContent'

const AboutHero = () => {
  return (
      <div>
        <Background />
          <AboutContent />
      </div>
  )
}

const Wrap = styled.div`
  width: 200vw;
  height: 100vh;
  display: flex;
  flex-direction: colum;
  justify-content: center;
  align-items: center;
`

export default AboutHero
