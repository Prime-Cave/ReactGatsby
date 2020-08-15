import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import StyledHero from "../../utils/StyledHero"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import 'animate.css'

const getImages = graphql`
  query {
    BackgroundImage: file(relativePath: { eq: "binary.jpeg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const HomeHero = () => {
  const data = useStaticQuery(getImages)
  return (
    <StyledHero
      className="styledHero"
      fluid={data.BackgroundImage.childImageSharp.fluid}
      alt="DESCRIPTION"
      home="home"
    >
      <Wrap>
        <div className="title">
          <h1 className="animate__animated animate__bounceInUp animate__delay-3s">
            &lt;Tomisin /&gt;
          </h1>
          <h2 className="animate__animated animate__bounceInUp animate__delay-2s">
            - Software Developer -
          </h2>
          <AniLink
            paintDrip
            color="black"
            duration={1}
            to="/about"
            className="hbtn hb-border-bottom-br4 hbor3 hpad2 animate__animated animate__bounceInUp animate__delay-3s"
          >About Me</AniLink>
        </div>
      </Wrap>
    </StyledHero>
  )
}

const Wrap = styled.div`
  margin-top: -100vh;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: colum;
  justify-content: center;
  align-items: center;
  .title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  h1 {
    color: white;
    mix-blend-mode: difference;
    font-size: 13vw;
  }

  h2 {
    color: white;
    mix-blend-mode: difference;
    font-size: 6vw;
    padding-bottom:10px;
  }
  span {
    color: white;
    mix-blend-mode: difference;
    font-size: 10vw;
  }

  //button
  .hbtn {
    position: relative;
    box-sizing: border-box;
    display: inline-block;
    overflow: hidden;
    padding: 8px 20px;
    margin: 0px 3px 6px;
    text-align: center;
    border: 2px solid rgb(255, 255, 255);
    text-decoration: none;
    color: rgb(255, 255, 255);
    white-space: nowrap;
    z-index: 0;
  }

  .hbtn i {
    padding-right: 8px;
  }

  .hb-border-bottom-br4 {
    position: relative;
    transition-duration: 0.3s;
    overflow: visible;
    box-sizing: border-box;
    border: none;
    padding: 10px 22px;
  }

  .hb-border-bottom-br4::after {
    box-sizing: border-box;
    position: absolute;
    width: 100%;
    height: 100%;
    content: "";
    border: 2px solid rgb(255, 255, 255);
    z-index: 2;
    margin: 0px;
    left: 0px;
    bottom: 0px;
    border-top-width: 2px;
    transition: border-top-width 0.1s ease 0.2s, height 0.2s ease 0.1s,
      width 0.2s ease 0s, margin 0.2s ease 0s, border-bottom-width 0.2s ease 0s;
  }

  .hb-border-bottom-br4:hover::after {
    width: 60%;
    height: 0px;
    border-width: 0px 2px 4px;
    margin: 0px 20%;
    transition: border-top-width 0.1s ease 0s, height 0.2s ease 0.1s,
      width 0.2s ease 0.2s, margin 0.2s ease 0.2s,
      border-bottom-width 0.2s ease 0.2s;
  }

  .hbor3 {
    border-width: 3px;
  }

  .hbor3::before {
    border-width: 3px !important;
  }

  .hpad2 {
    padding: 12px 24px !important;
  }
`

export default HomeHero
