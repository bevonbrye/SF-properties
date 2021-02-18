import React from 'react';
import styled, { css } from 'styled-components/macro';


const HeroSec = styled.section`
    height: 100vh;
    max-height: 1100px;
    position: relative;
    overflow: hidden;
`;


const HeroWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`;



const Hero = () => {
    return (
        <HeroSec>
            <HeroWrap>
                <h1>hey</h1>
            </HeroWrap>
        </HeroSec>
    )
}

export default Hero
