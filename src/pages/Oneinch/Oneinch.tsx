import React from 'react'
import styled from 'styled-components';
import Spacer from 'components/Spacer';
import { Theme } from 'constants/theme';
import { Assets } from 'constants/images';
import { useTranslation } from 'contexts/Localization';

const desc = `Combining a safelist for audited tokens, decentralized insurance, and the most advanced token standard, SOY Finance adopts the industry’s best practices and technologies to provide the community with a rock-solid platform.`

const OneToken = () => {
    const { t } = useTranslation()

    return (
        <Container>
            <BkImage />
            <MobBkImage src={Assets.mobmark3} alt="" />
            <LeftAniImg src={Assets.char} alt="" data-aos="fade-right"/>

            <SpaceRow>
                <div className="col-lg-6 col-md-6" data-aos="fade-right" data-aos-delay="300">
                    <Title color={Theme.colors.primary}>
                        <Title color="#AEDD00">{t('Defi')}&nbsp;</Title>{t('Made Safe')}
                    </Title>
                    <Spacer height="20px" />
                    <Text>
                        {t(desc)}
                    </Text>
                </div>
                <div className="col-lg-6 col-md-6" data-aos="fade-left" data-aos-delay="300">
                    <StyledVideo autoPlay muted loop id="totems">
                        <source src="Totems.webm" type="video/mp4"/>
                    </StyledVideo>
                </div>
            </SpaceRow>
            
            <Spacer height="50px" />
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    width: 100%;
    padding: 0;
    background-color: #FFF;
    @media screen and (max-width: 768px) {
    }
`;
const StyledVideo = styled.video`
    width: 100%;
    object-fit: cover;
    @media screen and (max-width: 768px) {
    }
`;
const SpaceRow = styled.div`
    display: flex;
    margin-top: 400px;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 0 5% 0 12%;
    @media screen and (max-width: 768px) {
        flex-direction: column;
        margin-top: 160px;
        padding: 0 10px;
    }
`
const Text = styled.p`
    font-family: ${Theme.fonts.text};
    font-size: 21px;
    line-height: 25.2px;
    color: #767676;
    line-height: 1.67;
    letter-spacing: 0.45px;
    @media screen and (max-width: 768px) {
        font-size: 16px;
    }
`;
const Title = styled.p<{color: string}>`
    display: inline;
    color: ${({color}) => color};
    font-family: ${Theme.fonts.text};
    font-weight: 700;
    font-size: 73.5px;
    line-height: 88.2px;
    letter-spacing: 5%;
    @media screen and (max-width: 900px ) {
        font-size: 38px;
        line-height: 52px;
    }
    @media screen and (max-width: 768px ) {
        // font-size: 18px;
    }
`;
const BkImage = styled.div`
    position: absolute;
    width: 100%;
    height: 500px;
    min-height: 500px;
    top: -130px;
    background-image: url(${Assets.mark3});
    background-position: left;
    background-repeat: no-repeat;
    background-size: cover;
    @media screen and (max-width: 1400px) {
        background-size: cover;
    }
    @media screen and (max-width: 768px) {
        display: none;
    }
`
const MobBkImage = styled.img`
    position: absolute;
    width: 100%;
    height: 100px;
    min-height: 200px;
    top: -60px;
    display: none;
    @media screen and (max-width: 768px) {
        display: block;
    }
`
const LeftAniImg = styled.img`
    position: absolute;
    top: 150px;
    left: 33%;
    @media screen and (max-width: 1400px) {
        left: 43%;
    }
    @media screen and (max-width: 1140px) {
        left: 53%;
    }
    @media screen and (max-width: 900px) {
        left: 63%;
    }
    @media screen and (max-width: 768px) {
        left: 63%;
        top: 70px;
        width: 100px;
    }
`
export default OneToken;
