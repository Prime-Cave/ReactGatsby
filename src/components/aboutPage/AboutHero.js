import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import StyledHero from "../../utils/StyledHero"
import AboutContent from "./AboutContent"

const getImages = graphql `
  query {
    BackgroundImage: file(relativePath: { eq: "deep.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const AboutHero = () => {
    const data = useStaticQuery(getImages)
    return ( <
        StyledHero className = "styledHero"
        fluid = { data.BackgroundImage.childImageSharp.fluid }
        alt = "DESCRIPTION"
        home = "home" >
        <
        Wrap >
        <
        Title title = "Contact Page"
        subtitle = "barname" / >
        <
        /Wrap>{" "} <
        /StyledHero>
    )
}

const Wrap = styled.div `
  width: 200vw;
  height: 100vh;
  display: flex;
  flex-direction: colum;
  justify-content: center;
  align-items: center;
`

export default AboutHero