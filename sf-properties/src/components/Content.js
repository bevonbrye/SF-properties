import React from 'react';
import style from 'styled-components';
import { Button } from './Button';

const Section = style.section``
const Container = style.div``
const ColumnLeft = style.div``
const ColumnRight = style.div``

const Content = ({ heading, paragraphOne, paragraphTwo, buttonLabel, reverse, image}) => {
    return (
        <div>
            <Section>
                <Container>
                    <ColumnLeft>
                    <h1> {heading} </h1>
                    <p> {paragraphOne} </p>
                    <p> {paragraphTwo}</p>
                    <Button to='/homes'> {buttonLabel} </Button>
                    </ColumnLeft>
                    <ColumnRight reverse={reverse}>
                        <img src='' alt='home' />
                    </ColumnRight>
                </Container>

            </Section>
        </div>
    )
}

export default Content
