import React from 'react'
import styled from 'styled-components'
import { FiMail } from "react-icons/fi";
import Twitter from '../Icons/Twitter';
import Telegram from '../Icons/Telegram';

const Container = styled.div`
    display: flex;
    align-items: center;
    position: fixed;
    border: none;
    z-index: 9999;
    right: 30px;
    top: 10px;
    background-color: #5B5B5B;
    padding: 2px 8px;
    border-radius: 20px;
    @media (max-width: 768px) {
        display: none;
    }
`
const StyledLi = styled.a`
    margin: 5px;
`;
const StickyButton: React.FC = () => {

    return (
        <Container>
            <StyledLi href="https://t.me/cryptobotnetwork" target="_blank">
                <Telegram />
            </StyledLi>
            <StyledLi href="https://t.me/cryptobotnetwork" target="_blank">
                <Telegram />
            </StyledLi>
            <StyledLi href="https://twitter.com/cryptobotnetwork" target="_blank">
                <Twitter />
            </StyledLi>
        </Container>
    )
}
export default StickyButton;
