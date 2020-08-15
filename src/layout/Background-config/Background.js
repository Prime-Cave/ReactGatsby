import React from 'react'
import particleJs from 'particle.js';
import styled from 'styled-components'

const animate = particleJs.load('particles-js','particles.json',function(){
    console.log('particles.json loaded...')
})

const Background = () => {
    return (
      <Wrap>
        <div id="particles-js">{console.log(animate)}</div>
      </Wrap>
    )
}

const Wrap = styled.div`
    #particles-js{
        background-color: firebrick;
        height: 400px;
    }
`

export default Background
