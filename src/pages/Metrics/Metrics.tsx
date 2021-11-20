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
                    <SubFlex>
                        <Div className="margin">
                            <StyledText2>{t('Total Transaction Volume')}</StyledText2>
                            <StyledText3>{t('(USD in 24 hours)')}</StyledText3>
                            <StyledText>${shortenNumber(metricsData.result.Volume_24h)}+</StyledText>
                        </Div>
                        <Div  className="margin">
                            <StyledText2>{t('Total Trades')}</StyledText2>
                            <Spacer height="20px" />
                            <StyledText>{shortenNumber(metricsData.result.Trades)}+</StyledText>
                        </Div>
                    </SubFlex>
                    <SubFlex>
                        <Div  className="margin">
                            <StyledText2>{t('Number of Users')}</StyledText2>
                            <Spacer height="20px" />
                            <StyledText>{shortenNumber(metricsData.result.Users)}+</StyledText>
                        </Div>
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
                    </SubFlex>
                </Flex>
                <Flex data-aos="fade-left">
                    <SubFlex>
                        <Div className="margin">
                            <StyledText2>{t('Total Value Locked')}</StyledText2>
                            <Spacer height="20px" />
                            <StyledText>${shortenNumber(metricsData.result.Volume)}+</StyledText>
                        </Div>
                        <Div className="margin">
                            <StyledText2>{t('SOY Token')}</StyledText2>
                            <StyledText3>{t('Circulating Supply')}</StyledText3>
                            <StyledText>${shortenNumber(metricsData.result.Soy_Circulating_Supply)}+</StyledText>
                        </Div>
                    </SubFlex>
                    <SubFlex>
                        <Div className="margin">
                            <StyledText2>{t('Insurance Funds')}</StyledText2>
                            <StyledText3>{t('(USD raised via SOY IDO)')}</StyledText3>
                            <StyledText>${shortenNumber(metricsData.result.Soy_IDO)}+</StyledText>
                        </Div>
                        <Div className="margin">
                            <StyledText2>{t('Total Value')}</StyledText2>
                            <StyledText3>{t('(USD Locked In Farms)')}</StyledText3>
                            <StyledText>${shortenNumber(metricsData.result.Total_Value_Locked_In_Farms)}+</StyledText>
                        </Div>
                    </SubFlex>
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
        margin: 0 10px;
    }
    @media screen and (max-width: 1460px) {
        flex-direction: column;
    }
    @media screen and (max-width: 768px) {
        width: calc(100%);
        justify-content: space-between;
        .margin {
            margin: 0;
        }
    }
    
`;
const SubFlex = styled.div`
    display: flex !important;
    justify-content: center;
    
    @media screen and (max-width: 1460px) {
        margin-bottom: 20px;
    }
    @media screen and (max-width: 768px) {
        
    }
    
`;
const StyledText = styled.p`
    color: ${Theme.colors.white};
    font-size: 25px;
    font-family: ${Theme.fonts.text};
    line-height: 38px;
    white-space: nowrap;
    letter-spacing: 5%;
    text-align: center;
    @media screen and (max-width: 1200px) {
    }
    @media screen and (max-width: 768px) {
        /* font-size: 44.2px;
        line-height: 53.04px; */
    }
`;
const StyledText2 = styled.p`
    color: ${Theme.colors.third};
    font-size: 18px;
    font-family: ${Theme.fonts.text};
    line-height: 25.2px;
    white-space: nowrap;
    letter-spacing: 5%;
    text-align: center;
    @media screen and (max-width: 980px) {
        /* font-size: 16px;
        line-height: 18px; */
    }
    @media screen and (max-width: 768px) {
        color: #b3d400;
        font-size: 16px;
        line-height: 18px;
    }
    @media screen and (max-width: 330px) {
        font-size: 14px;
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
