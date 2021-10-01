import React from 'react'
import { Theme } from 'constants/theme';
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const Text = styled.p`
    font-family: ${Theme.fonts.textBold};
    font-weight: 700;
    font-size: 50px;
    letter-spacing: 1px;
    line-height: 1.4;
    color: ${Theme.colors.secondary};
    @media screen and (max-width: 768px) {
        font-size: 25px;
    }
`
const Title = ({text}) => {
    return (
        <Container>
            <Text>{text}</Text>
        </Container>
    )
}

export default Title;
