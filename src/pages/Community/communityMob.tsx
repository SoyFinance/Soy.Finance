import React, { useLayoutEffect, useState } from 'react'
import styled from 'styled-components';
import Spacer from 'components/Spacer';
import { Theme } from 'constants/theme';
import { Assets } from 'constants/images';
import { useTranslation } from 'contexts/Localization';

const desc =  `Through Callisto Bridge, Soy Finance expands its frontiers to the major blockchains ecosystems.`
const clodesc1 = `The Blockchain platform designed by the most experienced crypto-security experts.`
const clodesc2 = `Callisto Network has never been hacked or subjected to a 51% attack, making the dApps running on it the most secure of the blockchain ecosystem.`

const CommunityMob = () => {
    const { t } = useTranslation()
    const [innerW, setInnerW]  = useState(0);

    useLayoutEffect(() => {
        function updateSize() {
            setInnerW(window.innerWidth);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    })

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
            <Spacer height="100px" />
            <BottomImg />
            <ETCMarkDiv data-aos="fade-zoom-in">
                <LeftAniImg src={Assets.mark12} alt="" />
                <Image src={Assets.line} alt=""/>
                <RightAniImg src={Assets.mark13} alt="" />
                <LeftStarImg src={Assets.starleft} alt="" />
                <RightStarImg src={Assets.starright} alt="" />
            </ETCMarkDiv>
            <ETCDescSection>
                <MarkImgClo src={Assets.clo} alt=""/>
                <Spacer height="10px" />
                <Title align="center" color={Theme.colors.primary} data-aos="fade-zoom-in" >{t('Callisto Network')}</Title>
                <Spacer height="30px" />
                <Text align="center" pl="10px" data-aos="fade-zoom-in">
                    {t(clodesc1)}
                </Text>
                <Spacer height="20px" />
                <Text align="center" pl="20px" data-aos="fade-zoom-in">
                    {t(clodesc2)}
                </Text>
            </ETCDescSection>
            <CLOETHSection>
                <CLOSection>
                    <Row2>
                        <MarkImg1 sw={innerW} src={Assets.mark8} alt="" data-aos="fade-zoom-in"/>
                        <MarkBinanceImg src={Assets.bnb} alt="" data-aos="fade-zoom-in"/>
                    </Row2>
                    <Spacer height="30px" />
                    <TextDiv>
                        <Title2 color={Theme.colors.primary} data-aos="fade-zoom-in">{t('Binance')}</Title2>
                        <Title2 color={Theme.colors.primary} data-aos="fade-zoom-in">{t('Smart Chain')}</Title2>
                    </TextDiv>
                    <Spacer height="50px" />
                </CLOSection>
                <BNBInnerSection>
                    <Spacer height="45px" />
                    <Row2>
                        <MarkImg4 sw={innerW} src={Assets.mark7} alt="" data-aos="fade-zoom-in"/>
                        <SmileImg3 sw={innerW} src={Assets.eth} alt="" data-aos="fade-zoom-in"/>
                    </Row2>
                    <Spacer height="50px" />
                    <TextDivBNB>
                        <Title align="left" data-aos="fade-zoom-in" >{t('Ethereum')}</Title>
                    </TextDivBNB>
                    
                    <Spacer height="50px" />
                </BNBInnerSection>
                <SmileRightImg src={Assets.smile2} alt="" />
                <StarRightImg src={Assets.starbnb} alt=""/>
                <CLOSection>
                    <Row2>
                        <MarkImg2 sw={innerW} src={Assets.mark9} alt="" data-aos="fade-zoom-in"/>
                        <MarkPointImg sw={innerW} src={Assets.etc} alt="" data-aos="fade-zoom-in"/>
                    </Row2>
                    <TextDivETH>
                        <Title align="center" data-aos="fade-zoom-in">{t('Ethereum')}</Title>
                        <Title align="center" data-aos="fade-zoom-in">{t('Classic')}</Title>
                    </TextDivETH>
                </CLOSection>
                <StarLeftImg src={Assets.starclo} alt=""/>
            </CLOETHSection>
            <BNBSection >
                <BNBInnerSection2>
                    <MarkImg3/>
                    <Spacer height="175px" />
                    <TextDivBNB>
                        <Title align="left" data-aos="fade-zoom-in" >{t('Ethereum')}</Title>
                    </TextDivBNB>
                    <Spacer height="45px" />
                    <Row2>
                        <MarkImg4 sw={innerW} src={Assets.mark7} alt="" data-aos="fade-zoom-in"/>
                        <SmileImg2 sw={innerW} src={Assets.eth} alt="" data-aos="fade-zoom-in"/>
                    </Row2>
                    
                </BNBInnerSection2>
                <StarRightImg src={Assets.starbnb} alt=""/>
            </BNBSection>
        </Container>
    )
}

const MarkImgClo = styled.img`

`
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
    @media screen and (max-width: 768px) {
        padding: 100px 0px 200px 0;
    }
    @media screen and (max-width: 538px) {
        // padding: 100px 0px 100px 0;
    }
    @media screen and (max-width: 330px) {
        padding: 100px 0px 250px 0;
    }
`;
const Image = styled.img`
    height: 80px;
    width: 33%;
    margin-left: 30%;
    margin-right: auto;
    @media screen and (max-width: 768px) {
        display: none;
    }

`;
const HalfDiv = styled.div`
    width: 40%;
    height: 60px;
    @media screen and (max-width: 768px) {
        width: calc(100% - 40px);
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
const SmileImg2 = styled.img<{sw?: number}>`
    position: absolute;
    bottom: 15px;
    left: 25px;
    width: 40px;
`
const SmileImg3 = styled.img<{sw?: number}>`
    position: absolute;
    bottom: 15px;
    width: 40px;
    @media screen and (max-width: 768px) {
        right: ${({sw}) => sw/2 - 48}px;
    }
    @media screen and (max-width: 714px) {
        right: ${({sw}) => sw/2 - 20}px;
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
        margin-top: 650px;
    }
    @media screen and (max-width: 768px) {
        margin-top: 950px;
        background-image: url(${Assets.mobart});
        background-size: contain;
    }
    @media screen and (max-width: 558px) {
        margin-top: 850px;
        height: 800px;
    }
    @media screen and (max-width: 500px) {
        margin-top: 800px;
    }
    @media screen and (max-width: 384px) {
        margin-top: 750px;
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
    @media screen and (max-width: 768px) {
        display: none;
    }
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
    
    @media screen and (max-width: 768px) {
        width: 200px;
        right: calc(50% - 100px);
        bottom: -30px;
    }
    @media screen and (max-width: 500px) {
        width: 150px;
        right: calc(50% - 75px);
    }
`
const ETCDescSection = styled.div`
    position: absolute;
    top: 1270px;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (max-width: 1600px) {
        top: 1170px;
    }
    @media screen and (max-width: 1430px) {
        top: 1100px;
    }
    @media screen and (max-width: 768px) {
        top: 1430px;
        width: 60%;
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
        font-size: 45px;
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
    @media screen and (max-width: 768px) {
        font-size: 45px;
    }
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
        // font-size: 25px;
        text-align: center;
    }
`
const CLOETHSection = styled.div`
    position: absolute;
    width: 35%;
    left: 0;
    top: 350px;
    @media screen and (max-width: 768px) {
        width: 100%;
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
    display: none;
    @media screen and (max-width: 768px) {
        display: block;
        margin-left: auto;
    }
`
const BNBInnerSection2 = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const MarkImg1 = styled.img<{sw: number}>`
    // position: absolute;
    // width: 75%;
    width: 416px;
    min-width: 416px;
    @media screen and (max-width: 768px) {
        margin-left: -${({sw}) =>416 - sw/2 - 45}px;
    }
`
const MarkImg2 = styled.img<{sw: number}>`
    width: 400px;
    min-width: 400px;
    @media screen and (max-width: 768px) {
        margin-left: -${({sw}) =>400 - sw/2 - 38}px;
    }
`
const MarkImg3 = styled.div`
    width: 80%;
    margin-left: auto;
`
const MarkImg4 = styled.img<{sw?: number}>`
    // position: absolute;
    width: 400px;
    min-width: 400px;
    margin-top: -100px;
    @media screen and (max-width: 768px) {
        margin-left: auto;
        margin-right: -${({sw}) =>400 - sw/2 - 45}px;
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
    @media screen and (max-width: 768px) {
        padding-left: 0;
    }
`
const TextDivBNB = styled.div`
    width: 100%;
    padding-left: 100px;
    padding-right: 20%;
    
    @media screen and (max-width: 768px) {
        // padding-left: 300px;
        // margin-top: -5px;
    }
`
const MarkBinanceImg = styled.img`
    width: 60px;
    height: 60px;
    margin-left: -75px;
    margin-top: 15px;
`
const MarkPointImg = styled.img<{sw?: number}>`
    position: absolute;
    left: 345px;
    top: 23px;
    width: 25px;
    @media screen and (max-width:768px) {
        width: 25px;
        left: ${({sw}) => sw/2 - 36}px;
        top: 23px;
    }
    @media screen and (max-width:714px) {
        left: ${({sw}) => sw/2 - 15}px;
    }
`
const BNBSection = styled.div`
    position: absolute;
    width: 35%;
    right: 0;
    top: 320px;
    @media screen and (max-width: 768px) {
        display: none;
    }

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
const SmileRightImg = styled(AnimatedImg)`
    position: absolute;
    left: 50px;
    top: 350px;
    @media screen and (max-width: 768px) {
        width: 50px;
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
    @media screen and (max-width: 384px) {
        line-height: 24px;
    }
`;

export default CommunityMob;
