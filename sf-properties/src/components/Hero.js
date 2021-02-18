import React from 'react';
import styled, { css } from 'styled-components/macro';
import { Button } from './Button';
import { IoMdArrowRoundFoward } from 'react-icons/io'
import {IoMdArrowFoward, IoArrow}


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

const HeroSlide = styled.div``
const HeroSlider = styled.div``
const HeroImage = styled.img``
const Arrow = styled.div``


const Hero = ({ slideData } ) => {
    return (
        <HeroSec>
            <HeroWrap>
                {slideData.map((item, index) => { 
                    return ( 
                        <HeroSlide key={index}>
                            <HeroSlider>
                                <HeroImage/>
                                <HeroContent>
                                    <h1> {item.title} </h1>
                                    <p>{item.price}</p>
                                    <Button path={item.path} primary='true'>
                                        {item.label}
                                        <Arrow/>
                                    </Button>
                                </HeroContent>
                            </HeroSlider>
                        </HeroSlide>
                    )
                })}
            </HeroWrap>
        </HeroSec>
    )
}

export default Hero
