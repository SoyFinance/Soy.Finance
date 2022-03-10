import React from 'react'
import Header from 'components/Header';
import Spacer from 'components/Spacer';
import { Theme } from 'constants/theme';
import styled from 'styled-components';
import { Assets } from 'constants/images';
import { useTranslation } from 'contexts/Localization';
import TitleSection from './components/TitleSection';

const Intro = () => {

    const { t, currentLanguage } = useTranslation();

    const handleScroll = () => {
        window.scrollTo(0, 1.7*window.innerHeight);
    }

    const isEn = currentLanguage.code === "en" || currentLanguage.code === "ru";

    return (
        <Container id="home">
            <Header />
            <Spacer height="25%" />
            <TitleSection />
            <Spacer height="10px" />
            <Row>
                <Subtitle color={isEn ? Theme.colors.bgscondary : Theme.colors.primary} fw={isEn ? "700" : "400"}>{t('The DeFi Ecosystem')}</Subtitle>
                <Subtitle color={isEn ? Theme.colors.primary : Theme.colors.bgscondary} fw={isEn ? "400" : "700"}>{t('With a Real Emphasis on Security.')}</Subtitle>
            </Row>
            <Spacer height="50px" />
            
            <LiButton href="https://app.soy.finance/#/swap" target="_blank">
                {t('Launch Soy Finance')}
            </LiButton>
            <Spacer height="20px" />
            <LiButton2 href="/airdrop">
                {t('SOY Airdrop')}
            </LiButton2>
            <StyledVideo autoPlay muted loop id="main">
                <source src="Main.mp4" type="video/mp4"/>
            </StyledVideo>
            <StyledVideoMob autoPlay muted loop id="main">
                <source src="Mainmobile.mp4" type="video/mp4"/>
            </StyledVideoMob>
            <ScrollDiv onClick={handleScroll}>
                <SideImageMob src={Assets.scrolling} alt=""/>
            </ScrollDiv>
        </Container>
    )
}

const Container = styled.div`
    position: relative;
    height: calc(100vh);
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ScrollDiv = styled.div`
    position: absolute;
    bottom: 80px;
    left: calc(50% - 10px);
    width: 30px;
    height: 50px;
    border-radius: 5px;
    padding: 3px;
    z-index: 99999;
    &:hover {
        background-color: rgba(126, 162, 36, .7);
    }
    @media screen and (max-width: 768px) {
        display: none;
    }
`

const Subtitle = styled.p<{color: string; fw: string}>`
    font-size: 18px;
    line-height: 1.39;
    color: ${({color}) => color};
    // font-family: ${Theme.fonts.text};
    font-weight: ${({fw})=>fw};
    letter-spacing: 0.18px;
    text-align: center;
    z-index: 9;
    margin-left: 8px;
    @media (max-width: 510px) {
        margin-left: 0px;

    }
    @media (max-width: 510px) {
        font-size: 18px;
        line-height: 30px;
    }
`;
const StyledVideo = styled.video`
    width: 100%;
    height: 100vh;
    position: absolute;
    object-fit: cover;
    @media screen and (max-width: 560px) {
        display: none;
    }
`;

const StyledVideoMob = styled.video`
    width: 100%;
    height: 100vh;
    position: absolute;
    object-fit: cover;
    display: none;
    @media screen and (max-width: 560px) {
        display: block;
    }
`;

const SideImageMob = styled.img`
    @media screen and (max-width: 768px) {
    }
`;
const Row = styled.div`
    display: flex;
    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`
const LiButton = styled.a`
    color: white;
    background-color: ${Theme.colors.bgscondary};
    font-size: 16px;
    font-weight: 700;
    font-family: ${Theme.fonts.text};
    height: 40px;
    padding: 10px 30px;
    border-radius: 30px;
    text-decoration: none !important;
    white-space: nowrap;
    z-index: 9;
    display: none;

    &:hover {
        color: #000;
    }
    @media screen and (max-width: 768px) {
        display: block;

        margin: 0px;
        // max-width: 200px;
    }
`
const LiButton2 = styled.a`
    color: white;
    background-color: ${Theme.colors.bgscondary};
    font-size: 16px;
    font-weight: 700;
    font-family: ${Theme.fonts.text};
    height: 35px;
    padding: 10px 30px;
    border-radius: 30px;
    text-decoration: none !important;
    white-space: nowrap;
    z-index: 9;
    &:hover {
        color: #000;
    }
    @media screen and (max-width: 768px) {
        display: block;

        margin: 0px;
        // max-width: 200px;
    }
`
export default Intro;
