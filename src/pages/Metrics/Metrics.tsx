import React from 'react'
import styled from 'styled-components';
import { Theme } from 'constants/theme';
import { Assets } from 'constants/images';
import { useTranslation } from 'contexts/Localization';
import Spacer from 'components/Spacer';
import { useMetrics } from 'hooks/useMetrics';


function shortenNumber(value: number) {
    if( value === undefined) return "0"
    const parsed1: string = value.toString();
    const parsed: string = parseInt(parsed1).toString();
    
    if (parsed.length < 4) {
        return parsed;
    } 
    if( parsed.length < 7) {
      const newValue = (value/10)
      const ret = newValue.toString()
      const realRet = parseInt(ret) / 100
      return `${realRet}K`
    }
    if( parsed.length < 10 ) {
      const newValue = (value/10000)
      const ret = newValue.toString()
      const realRet = parseInt(ret) / 100
      return `${realRet}M`
    }
    const newValue = (value/10000000)
    const ret = newValue.toString()
    const realRet = parseInt(ret) / 100
    return `${realRet}B`
}

const Metrics = () => {
    const metricsData = useMetrics()

    const { t, currentLanguage } = useTranslation()
    const isEn = currentLanguage.code === "en";

    return (
        <Container id="about">
            <Content>
                <Flex data-aos="fade-right">
                    <Div className="margin">
                        <StyledText2>{t('Total Volume')}</StyledText2>
                        <Spacer height="20px" />
                        <StyledText>${shortenNumber(metricsData.result.Volume)}</StyledText>
                    </Div>
                    <Div>
                        <StyledText2>{t('Total Users')}</StyledText2>
                        <Spacer height="20px" />
                        <StyledText>{shortenNumber(metricsData.result.Users)}+</StyledText>
                    </Div>
                </Flex>
                <Flex data-aos="fade-left">
                    <Div className="margin">
                        {
                            isEn ?
                            <StyledText2>{t('Supported Networks*')}</StyledText2>:
                            <StyledText3>{t('Supported Networks*')}</StyledText3>
                        }
                        {
                            isEn ?
                            <StyledText3>{t('*Via Callisto Bridge')}</StyledText3>:
                            <StyledText2>{t('*Via Callisto Bridge')}</StyledText2>
                        }
                        <StyledText>4</StyledText>
                    </Div>
                    <Div>
                        <StyledText2>{t('Total Trades')}</StyledText2>
                        <Spacer height="20px" />
                        <StyledText>{shortenNumber(metricsData.result.Trades)}+</StyledText>
                    </Div>
                </Flex>
            </Content>
            <BackImg src={Assets.metricbg} alt="" />
            <BackImgMob src={Assets.mobmetricbg} alt="" />
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    position: relative;
    // background-image: url(${Assets.metricbg});
    // background-position: center;
    // background-repeat: no-repeat;
    // background-size: cover;
    background-color: white;
    height: 500px;
    @media screen and (max-width: 768px) {
        height: 580px;
        // padding: 0 20px;
    }
`;
const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
`
const BackImg = styled.img`
    position: absolute;
    margin-top: -80px;
    height: 650px;
    width: 100%;
    object-fit: cover;
    @media screen and (max-width: 768px) {
        display: none;
    }
`
const BackImgMob = styled.img`
    position: absolute;
    margin-top: -80px;
    height: 650px;
    width: 100%;
    display: none;
    @media screen and (max-width: 768px) {
        display: block;
        object-fit: cover;
    }
`
const Content = styled.div`
    position: absolute;
    width: 100%;
    bottom: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 99;
    @media screen and (max-width: 768px) {
        flex-direction: column;
    }

`;
const Flex = styled.div`
    display: flex !important;
    padding: 10px;
    justify-content: center;
    .margin {
        margin: 0 80px;
    }
    @media screen and (max-width: 1200px) {
        .margin {
            margin: 0 40px;
        }
    }
    
    @media screen and (max-width: 980px) {
        .margin {
            margin: 0 20px;
        }
    }
    @media screen and (max-width: 768px) {
        width: calc(100%);
        justify-content: space-between;
        .margin {
            margin: 0;
        }
    }
    
`;
const StyledText = styled.p`
    color: ${Theme.colors.white};
    font-size: 65px;
    font-family: ${Theme.fonts.text};
    line-height: 78px;
    white-space: nowrap;
    letter-spacing: 5%;
    text-align: center;
    @media screen and (max-width: 1200px) {
    }
    @media screen and (max-width: 768px) {
        font-size: 44.2px;
        line-height: 53.04px;
    }
`;
const StyledText2 = styled.p`
    color: ${Theme.colors.third};
    font-size: 21px;
    font-family: ${Theme.fonts.text};
    line-height: 25.2px;
    white-space: nowrap;
    letter-spacing: 5%;
    text-align: center;
    @media screen and (max-width: 980px) {
        font-size: 16px;
        line-height: 18px;
    }
    @media screen and (max-width: 768px) {
        font-size: 12px;
        line-height: 18px;
    }
`;
const StyledText3 = styled.p`
    color: ${Theme.colors.third};
    font-size: 16px;
    font-family: ${Theme.fonts.text};
    line-height: 23.2px;
    white-space: nowrap;
    letter-spacing: 5%;
    text-align: center;
    @media screen and (max-width: 980px) {
        font-size: 16px;
        line-height: 18px;
    }
    @media screen and (max-width: 768px) {
        font-size: 12px;
        line-height: 18px;
    }
`;

export default Metrics;
