import React from 'react'
import styled from 'styled-components';
import Spacer from 'components/Spacer';
import { Theme } from 'constants/theme';
import { Assets } from 'constants/images';
import { useTranslation } from 'contexts/Localization';

const desc =  `Through Callisto Bridge, Soy Finance expands its frontiers to the major blockchains ecosystems.`
const clodesc1 = `The Blockchain platform designed by the most experienced crypto-security experts.`
const clodesc2 = `Callisto Network has never been hacked or subjected to a 51% attack, making the dApps running on it the most secure of the blockchain ecosystem.`

const Community = () => {
    const { t } = useTranslation()

    return (
        <Container id="callistobridge">
            <Row>
                <Title3 align="center" color={Theme.colors.primary}>
                    {t('Callisto Bridge')}
                </Title3>
            </Row>
            <Spacer height="30px" />
            <HalfDiv>
                <Text align="center">
                    {t(desc)}
                </Text>
            </HalfDiv>
            <Spacer height="150px" />
            <OutCircleImg data-aos="fade-zoom-out" data-aos-delay="1000"/>
            <InnerCircleImg data-aos="rotate-ac" data-aos-delay="500" />
            <LogoImg src={Assets.logo2} alt="" data-aos="fade-zoom-in"/>
            <SmileImg src={Assets.smile1} alt="" data-aos="fade-zoom-in" data-aos-delay="1500"/>
            <EtcImg src={Assets.eth} alt="" data-aos="fade-zoom-in" data-aos-delay="1800"/>
            <CloImg src={Assets.clo} alt="" data-aos="fade-zoom-in" data-aos-delay="2100" />
            <EthImg src={Assets.etc} alt="" data-aos="fade-zoom-in" data-aos-delay="2400"/>
            
            <VBridgeImg src={Assets.mark10} alt="" data-aos="fade-zoom-in" data-aos-delay="2600"/>
            <BottomImg />
            <ETCMarkDiv data-aos="fade-zoom-in" data-aos-delay="500">
                <LeftAniImg src={Assets.mark12} alt="" />
                <Image src={Assets.line} alt=""/>
                <RightAniImg src={Assets.mark13} alt="" />
                <LeftStarImg src={Assets.starleft} alt="" />
                <RightStarImg src={Assets.starright} alt="" />
            </ETCMarkDiv>
            <ETCDescSection>
                <Title align="center" color={Theme.colors.primary} data-aos="fade-zoom-in" data-aos-delay="500">{t('Callisto Network')}</Title>
                <Spacer height="30px" />
                <Text align="center" pl="10px" data-aos="fade-zoom-in" data-aos-delay="500">
                    {t(clodesc1)}
                </Text>
                <Spacer height="20px" />
                <Text align="center" pl="20px" data-aos="fade-zoom-in" data-aos-delay="500">
                    {t(clodesc2)}
                </Text>
            </ETCDescSection>
            <CLOETHSection>
                <CLOSection>
                    <Row2>
                        <MarkImg1 src={Assets.mark8} alt="" data-aos="fade-zoom-in" data-aos-delay="2600"/>
                        <MarkBinanceImg src={Assets.bnb} alt="" data-aos="fade-zoom-in" data-aos-delay="2700" />
                    </Row2>
                    <Spacer height="30px" />
                    <TextDiv>
                        <Title2 color={Theme.colors.primary} data-aos="fade-zoom-in" data-aos-delay="3000">{t('Binance')}</Title2>
                        <Title2 color={Theme.colors.primary} data-aos="fade-zoom-in" data-aos-delay="3000">{t('Smart Chain')}</Title2>
                    </TextDiv>
                    <Spacer height="50px" />
                </CLOSection>
                <CLOSection>
                    <Row2>
                        <MarkImg2 src={Assets.mark9} alt="" data-aos="fade-zoom-in" data-aos-delay="2600"/>
                        <MarkPointImg src={Assets.point} alt="" data-aos="fade-zoom-in" data-aos-delay="2900" />
                    </Row2>
                    <TextDivETH>
                        <Title align="center" data-aos="fade-zoom-in" data-aos-delay="3000">{t('Ethereum')}</Title>
                        <Title align="center" data-aos="fade-zoom-in" data-aos-delay="3000">{t('Classic')}</Title>
                    </TextDivETH>
                </CLOSection>
                <StarLeftImg src={Assets.starclo} alt=""/>
            </CLOETHSection>
            <BNBSection >
                <BNBInnerSection>
                    <MarkImg3 src={Assets.mark6} alt="" data-aos="fade-zoom-in" data-aos-delay="2600"/>
                    <Spacer height="175px" />
                    <TextDivBNB>
                        <Title align="left" data-aos="fade-zoom-in" data-aos-delay="3000">{t('Ethereum')}</Title>
                    </TextDivBNB>
                    <Spacer height="45px" />
                    <Row2>
                        <MarkImg4 src={Assets.mark7} alt="" data-aos="fade-zoom-in" data-aos-delay="2600"/>
                        <SmileImg2 src={Assets.smile2} alt="" data-aos="fade-zoom-in" data-aos-delay="2800"/>
                    </Row2>
                    
                </BNBInnerSection>
                <StarRightImg src={Assets.starbnb} alt=""/>
            </BNBSection>
        </Container>
    )
}

const AnimatedImg = styled.img`
    animation-duration: 3s;
    animation-timing-function: ease;
    animation-delay: 0s;
    animation-iteration-count: infinite;
    animation-direction: normal;
    animation-fill-mode: none;
    animation-play-state: running;
    animation-name: hideshow;
`
const Container = styled.div`
    position: relative;
    width: 100%;
    margin: 0;
    background-image: url(${Assets.BG});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 100px 0px;
    background-color: #FFFFFF;

    @media screen and (max-width: 1430px) {
        padding: 100px 0px 200px 0;
    }
    @media screen and (max-width: 900px) {
    }
`;
const Image = styled.img`
    height: 80px;
    width: 33%;
    margin-left: 30%;
    margin-right: auto;
    @media screen and (max-width: 768px) {
    }
    @media screen and (max-width: 512px) {
    }

`;
const HalfDiv = styled.div`
    width: 40%;
    height: 60px;
`
const OutCircleImg = styled.div`
    width: 700px;
    height: 700px;
    background-image: url(${Assets.outcircle});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    @media screen and (max-width: 1600px) {
        width: 600px;
        height: 600px;
    }
    @media screen and (max-width: 1430px) {
        width: 500px;
        height: 500px;
    }
    @media screen and (max-width: 1166px) {
        display: none;
    }
`
const Row = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
`
const Row2 = styled.div`
    display: flex;
    width: 100%;
    position: relative;
    // justify-content: center;
`
const InnerCircleImg = styled.div`
    width: 550px;
    height: 550px;
    background-image: url(${Assets.innercircle});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 475px;
    animation: show1 2s linear;
    @media screen and (max-width: 1600px) {
        width: 460px;
        height: 460px;
    }
    @media screen and (max-width: 1430px) {
        width: 380px;
        height: 380px;
        top: 463px;
    }
    @media screen and (max-width: 1166px) {
        display: none;
    }
`
const LogoImg = styled.img`
    position: absolute;
    width: 150px;
    top: 620px;
    @media screen and (max-width: 1600px) {
        width: 120px;
        top: 590px;
    }
    @media screen and (max-width: 1430px) {
        width: 100px;
        top: 560px;
    }
    @media screen and (max-width: 1166px) {
        display: none;
    }
`
const SmileImg = styled.img`
    position: absolute;
    width: 70px;
    top: 415px;
    @media screen and (max-width: 1600px) {
        width: 60px;
        top: 415px;
    }
    @media screen and (max-width: 1430px) {
        width: 50px;
        top: 415px;
    }
    @media screen and (max-width: 1166px) {
        display: none;
    }
`
const SmileImg2 = styled.img`
    position: absolute;
    width: 80px;
    bottom: 25px;
    left: 20px;
    @media screen and (max-width: 1430px) {
        bottom: 20px;
        left: calc(20% + 14px);
        width: 70px;
    }
`
const EthImg = styled.img`
    position: absolute;
    height: 60px;
    top: 728px;
    left: calc(50% - 320px);
    @media screen and (max-width: 1600px) {
        height: 50px;
        top: 680px;
        left: calc(50% - 270px);
    }
    @media screen and (max-width: 1430px) {
        height: 45px;
        top: 630px;
        left: calc(50% - 220px);
    }
    @media screen and (max-width: 1166px) {
        display: none;
    }
`
const EtcImg = styled.img`
    position: absolute;
    height: 60px;
    top: 726px;
    right: calc(50% - 320px);
    @media screen and (max-width: 1600px) {
        height: 50px;
        top: 678px;
        right: calc(50% - 270px);
    }
    @media screen and (max-width: 1430px) {
        height: 45px;
        top: 630px;
        right: calc(50% - 230px);
    }
    @media screen and (max-width: 1166px) {
        display: none;
    }
`
const CloImg = styled.img`
    position: absolute;
    height: 45px;
    margin-left: 8px;
    top: 1032px;
    @media screen and (max-width: 1600px) {
        height: 35px;
        margin-left: 8px;
        top: 948px;
    }
    @media screen and (max-width: 1430px) {
        height: 30px;
        margin-left: 8px;
        top: 851px;
    }
    @media screen and (max-width: 1166px) {
        display: none;
    }
`
const VBridgeImg = styled.img`
    width: 120px;
    margin-top: -110px;
    @media screen and (max-width: 1600px) {
        width: 100px;
        margin-top: -90px;
    }
    @media screen and (max-width: 1430px) {
        width: 100px;
        margin-top: -88px;
    }
    @media screen and (max-width: 1166px) {
        display: none;
    }
`
const BottomImg = styled.div`
    width: 100%;
    height: 600px;
    background-image: url(${Assets.mark11});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    @media screen and (max-width: 1166px) {
        margin-top: 500px;
    }

`
const ETCMarkDiv = styled.div`
    width: 100%;
    position: absolute;
    bottom: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const LeftAniImg = styled.img`
    position: absolute;
    width: 20%;
    bottom: 10px;
    left: 8%;
`
const LeftStarImg = styled(AnimatedImg)`
    position: absolute;
    width: 20%;
    bottom: 10px;
    left: 5%;
`
const RightStarImg = styled(AnimatedImg)`
    position: absolute;
    width: 25%;
    bottom: 10px;
    right: 3%;
`
const RightAniImg = styled.img`
    position: absolute;
    width: 20%;
    right: 15%;
    bottom: -10px;
    animation: y-axis-animation 1s ease-in-out 0s infinite alternate;
`
const ETCDescSection = styled.div`
    position: absolute;
    top: 1270px;
    width: 28%;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (max-width: 1600px) {
        top: 1170px;
    }
    @media screen and (max-width: 1430px) {
        top: 1070px;
    }
`
const Title = styled.p<{align: string}>`
    width: 100%;
    display: inline-block;;
    padding: 0px;
    color: ${Theme.colors.white};
    font-family: ${Theme.fonts.text};
    font-weight: 700;
    font-size: 55px;
    line-height: 65px;
    letter-spacing: 0.84px;
    text-align: ${({align}) => align};
    @media screen and (max-width: 1430px) {
        font-size: 45px;
        line-height: 55px;
    }
    @media screen and (max-width: 998px) {
        font-size: 35px;
    }
    @media screen and (max-width: 768px) {
        font-size: 25px;
        text-align: center;
    }
`
const Title3 = styled.p<{align: string}>`
    width: 100%;
    display: inline-block;;
    padding: 0px;
    color: ${Theme.colors.white};
    font-family: ${Theme.fonts.text};
    font-weight: 700;
    font-size: 55px;
    line-height: 65px;
    letter-spacing: 0.84px;
    text-align: ${({align}) => align};
`
const Title2 = styled.p`
    color: ${Theme.colors.white};
    font-family: ${Theme.fonts.text};
    font-weight: 700;
    font-size: 55px;
    line-height: 65px;
    letter-spacing: 2%;
    text-align: center;
    @media screen and (max-width: 1430px) {
        font-size: 45px;
        line-height: 55px;
    }
    @media screen and (max-width: 768px) {
        font-size: 25px;
        text-align: center;
    }
`
const CLOETHSection = styled.div`
    position: absolute;
    width: 35%;
    left: 0;
    top: 350px;
    @media screen and (max-width: 1166px) {
        // width: 20%;
    }
`
const CLOSection = styled.div`
    width: 100%
`
const BNBInnerSection = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const MarkImg1 = styled.img`
    // position: absolute;
    // width: 75%;
    width: 416px;
`
const MarkImg2 = styled.img`
    // position: absolute;
    width: 336px;
`
const MarkImg3 = styled.img`
    // position: absolute;
    width: 100%;
    @media screen and (max-width: 1430px) {
        width: 80%;
        margin-left: auto;
    }
`
const MarkImg4 = styled.img`
    // position: absolute;
    width: 100%;
    margin-top: -100px;
    @media screen and (max-width: 1430px) {
        width: 80%;
        margin-left: auto;
        margin-top: -50px;
    }
`
const TextDiv = styled.div`
    width: 100%;
    padding-left: 15%;
    padding-right: 20px;
    margin-top: -140px;
`
const TextDivETH = styled.div`
    width: 100%;
    padding-left: 35%;
`
const TextDivBNB = styled.div`
    width: 100%;
    padding-left: 100px;
    padding-right: 20%;
    
    @media screen and (max-width: 1430px) {
        padding-left: 160px;
        margin-top: -5px;
    }
    @media screen and (max-width: 1288px) {
        padding-left: 250px;
        margin-top: -5px;
    }
    @media screen and (max-width: 1166px) {
        padding-left: 300px;
        margin-top: -5px;
    }
`
const MarkBinanceImg = styled.img`
    position: absolute;
    left: 340px;
    top: 15px;
    width: 60px;
`
const MarkPointImg = styled.img`
    position: absolute;
    left: 296px;
    top: 28px;
    width: 15px;
`
const BNBSection = styled.div`
    position: absolute;
    width: 550px;
    right: 0;
    top: 320px;

`
const StarRightImg = styled(AnimatedImg)`
    position: absolute;
    right: 50px;
    top: 100px;
    @media screen and (max-width: 998px) {
    }
    @media screen and (max-width: 768px) {
    }
`
const StarLeftImg = styled(AnimatedImg)`
    position: absolute;
    left: 50px;
    top: 300px;
    @media screen and (max-width: 998px) {
    }
    @media screen and (max-width: 768px) {
    }
`
const Text = styled.p<{align: string; pl?: string;}>`
    font-family: ${Theme.fonts.text};
    font-size: 21px;
    line-height: 30px;
    color: ${Theme.colors.white};
    text-align: ${({align}) => align};
    padding-left: ${({pl}) => pl};
    padding-right: ${({pl}) => pl};
    @media screen and (max-width: 768px) {
        font-size: 16px;
        padding-right: 0;
    }
`;

export default Community;
