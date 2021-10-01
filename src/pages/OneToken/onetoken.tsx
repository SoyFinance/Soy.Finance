import React from 'react'
import styled from 'styled-components';
import Spacer from 'components/Spacer';
import { Theme } from 'constants/theme';
import { Assets } from 'constants/images';
import { useTranslation } from 'contexts/Localization';

const desc = `Using the industry's most advanced token technology,\nSoy Finance introduces the "1-Click Swap" feature for the very first time,\nproviding users with an entirely new experience at 99% less cost than the leading competitors.`

const OneToken = () => {
    const { t } = useTranslation()
    return (
        <Container>
            <Wrapper >
                <SpaceRow>
                    <Title color={Theme.colors.primary}>
                        <Title color="#AEDD00">{t('SOY')}&nbsp;</Title>{t('Finance')}
                    </Title>
                </SpaceRow>
                <Spacer height="50px" />
                <Text>
                    {t(desc)}
                </Text>
                <Spacer height="50px" />
                <LiButton
                    href="https://app.soy.finance/"
                    target="_blank"
                >
                    {t('Launch SOY Finance')}
                </LiButton>
            </Wrapper>
            
            <BkImage1 src={Assets.back5} alt="" />
            <RockImage1 src={Assets.rock} alt="" />
            <LeftAniImg1 src={Assets.anileft} alt="" data-aos="fade-right"/>
            <RightAniImg1 src={Assets.aniright} alt="" data-aos="fade-left"/>

            <BkImage>
                <RockImage src={Assets.rock} alt="" />
                <LeftAniImg src={Assets.anileft} alt="" data-aos="fade-right"/>
                <RightAniImg src={Assets.aniright} alt="" data-aos="fade-left"/>
            </BkImage>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    width: 100%;
    padding: 100px 0 0;
    background-color: #FFFFFF;
    @media screen and (max-width: 768px) {
    }
`;
const BkImage1 = styled.img`
    width: 100%;
    margin-top: -250px;
    @media screen and (max-width: 1835px){
        display: none;
    }
`
const RockImage1 = styled.img`
    position: absolute;
    width: 300px;
    bottom: 30px;
    @media screen and (max-width: 1835px){
        display: none;
    }
`
const LeftAniImg1 = styled.img`
    position: absolute;
    width: 180px;
    left: 14%;
    bottom: 150px;
    @media screen and (max-width: 1835px){
        display: none;
    }
`
const RightAniImg1 = styled.img`
    position: absolute;
    width: 350px;
    right: 6%;
    bottom: 75px;
    @media screen and (max-width: 1835px){
        display: none;
    }
`
const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 9;
`
const SpaceRow = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
`
const Text = styled.p`
    font-family: ${Theme.fonts.text};
    font-size: 21px;
    line-height: 30px;
    color: #767676;
    text-align: center;
    width: 60%;
    white-space: pre-line;
    @media screen and (max-width: 768px) {
        font-size: 16px;
        width: calc(100% - 40px);
    }
`;
const Title = styled.p<{color: string}>`
    color: ${({color}) => color};
    font-family: ${Theme.fonts.text};
    font-weight: 700;
    font-size: 73.5px;
    line-height: 88.2px;
    letter-spacing: 5%;
    text-align: center;
    display: flex;
    @media screen and (max-width: 768px ) {
        font-size: 50px;
    }
`;
const LiButton = styled.a`
    color: white;
    background-color: ${Theme.colors.bgscondary};
    font-size: 18px;
    font-weight: 700;
    font-family: ${Theme.fonts.text};
    height: 40px;
    padding: 10px 50px;
    border-radius: 52px;
    text-decoration: none !important;

    z-index: 9;
    &:hover {
        color: #000;
    }
`
const BkImage = styled.div`
    width: 100%;
    margin-top: -250px;
    height: 900px;
    background-image: url(${Assets.back5});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    display: none;
    @media screen and (max-width: 1835px){
        display: block;
    }
    @media screen and (max-width: 708px){
        background-position: left;
        background-image: url(${Assets.mobback5});
        background-size: contain;
    }
`
const RockImage = styled.img`
    position: absolute;
    width: 300px;
    top: 670px;
    z-index: 999;
    @media screen and (max-width: 708px) {
        display: none;
    }
`
const LeftAniImg = styled.img`
    position: absolute;
    width: 160px;
    left: 13%;
    top: 60%;
    @media screen and (max-width: 1835px) {
        width: 160px;
        left: 13%;
        top: 480px;
    }
    @media screen and (max-width: 708px) {
        left: 31%;
        top: 55%;
        width: 20%;
    }
    @media screen and (max-width: 496px) {
        top: 490px;
    }
    @media screen and (max-width: 412px) {
        top: 480px;
    }
`
const RightAniImg = styled.img`
    position: absolute;
    width: 350px;
    right: 6%;
    bottom: 75px;
    @media screen and (max-width: 768px) {
        display: none;
    }
`
export default OneToken;
