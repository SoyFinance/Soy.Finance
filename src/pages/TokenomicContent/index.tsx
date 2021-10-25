import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'contexts/Localization'
import { Theme } from 'constants/theme'
import Spacer from 'components/Spacer'

const Container = styled.div`
    width: 100%;
    padding: 150px 15% 100px;
    background-color: white;
    @media screen and (max-width: 768px) {
        padding: 150px 20px 200px;
    }
    @media screen and (max-width: 390px) {
        padding: 150px 20px 300px;
    }
`

const TokenomicContent = () => {
    const { t } = useTranslation()

    return (
        <Container>
            <Title color={Theme.colors.primary}>{t('SOY Tokenomics')}</Title>
            <Spacer height="80px" />
            <TopDiv>
                <SubTitle color={Theme.colors.bgscondary}>{t('Supply and Distribution')}</SubTitle>
                <Spacer height="40px" />
                <SubTitle color={Theme.colors.bgscondary}>{t('Max Supply:')}<Text2 color={Theme.colors.primary}><b>&nbsp;{t('600 000 000 $SOY.')}</b></Text2></SubTitle>
                <Spacer height="40px" />
                <Text color='#767676'>{t('120 000 000 $SOY (20% of the max supply) will be created at the genesis and distributed as follows:')}</Text>
                <Spacer height="20px" />
                <Row>
                    <Circle />
                    <Text color='#767676'>{t('75% to Initial Dex Offering early investors. The funds raised will be moved to the distributed insurance system.')}</Text>
                </Row>
                <Spacer height="20px" />
                <Row>
                    <Circle />
                    <Text color='#767676'>{t('5% will be allocated to Callisto Enterprise.')}</Text>
                </Row>
                <Spacer height="20px" />
                <Row>
                    <Circle />
                    <Text color='#767676'>{t('5% will be allocated to the Callisto team members via a dynamic motivation system for the team members to support the project development in the time.')}</Text>
                </Row>
                <Spacer height="20px" />
                <Row>
                    <Circle />
                    <Text color='#767676'>{t('5% will be used for bug bounty programs to ensure high-security services.')}</Text>
                </Row>
                <Spacer height="20px" />
                <Row>
                    <Circle />
                    <Text color='#767676'>{t('10% will be airdropped in 7 consecutive phases, the details of each phase being announced at the time of its launch.')}</Text>
                </Row>
                <Spacer height="20px" />
                <Row2>
                    <Text color={Theme.colors.primary}><b>{t('Phase 1')}</b><Text2 color='#767676'>&nbsp;{t('- Sowing Soy - PancakeSwap Active Users Airdrop - 500 000 $SOY tokens - 15/10/21 to 30/10/21.')}</Text2></Text>
                </Row2>
                <Spacer height="10px" />
                <Row2>
                    <Text color={Theme.colors.primary}><b>{t('Phase 2')}</b><Text2 color='#767676'>&nbsp;{t('- Sowing Soy - Sushiswap Active Users Airdrop - 500 000 $SOY tokens - 01/11/21 to 15/11/21.')}</Text2></Text>
                </Row2>
                <Spacer height="10px" />
                <Row2>
                    <Text color={Theme.colors.primary}><b>{t('Phase 3')}</b><Text2 color='#767676'>&nbsp;{t('- Sowing Soy (3) - Details to be published on 10/11/21.')}</Text2></Text>
                </Row2>
                <Spacer height="10px" />
                <Row2>
                    <Text color={Theme.colors.primary}><b>{t('Phase 4')}</b><Text2 color='#767676'>&nbsp;{t('- Sowing Soy (4) - Details to be published on 25/11/21.')}</Text2></Text>
                </Row2>
                <Spacer height="10px" />
                <Row2>
                    <Text color={Theme.colors.primary}><b>{t('Phase 5')}</b><Text2 color='#767676'>&nbsp;{t('- Storing Soy - Details to be published on 10/12/21.')}</Text2></Text>
                </Row2>
                <Spacer height="10px" />
                <Row2>
                    <Text color={Theme.colors.primary}><b>{t('Phase 6')}</b><Text2 color='#767676'>&nbsp;{t('- Deep Freezing SOY - Details to be published on 25/12/21.')}</Text2></Text>
                </Row2>
                <Spacer height="10px" />
                <Row2>
                    <Text color={Theme.colors.primary}><b>{t('Phase 7')}</b><Text2 color='#767676'>&nbsp;{t('- Harvesting Soy - Details to be published on 10/01/22.')}</Text2></Text>
                </Row2>
                <Spacer height="40px" />
                <SubTitle color={Theme.colors.bgscondary}>{t('Transaction Fees Distribution')}</SubTitle>
                <Spacer height="40px" />
                <Text color='#767676'>{t('For each trade/swap performed in the SOY Finance platform, a commission fee is applied. Initially, 100% of the collected fee will be split among the liquidity providers. Over time, it will decrease to 55% by year 5 (phase 2).')}</Text>
                <Spacer height="20px" />
                <Text color='#767676'>{t('Thus, up to 20% of the trading fee will be shared among SOY token holders, 5% will be allocated to the insurance fund for its operation, and finally, 20% will be used to buy back SOY tokens and burn them.')}</Text>
                <Spacer height="40px" />
                <SubTitle color={Theme.colors.bgscondary}>{t('Fees Distribution Phases Details')}</SubTitle>
                <Spacer height="40px" />
                <Row3>
                    <Text3 color={Theme.colors.primary}><b>{t('Phase 0')}</b>&nbsp;&nbsp;&nbsp;</Text3>
                    <Text color='#767676'>&nbsp;{t('(Until 15/10/21) — The trading fee is set to 0.2% of the volume of each transaction.')}</Text>
                </Row3>
                <Spacer height="20px" />
                <Row3>
                    <Text3 color={Theme.colors.primary}><b>{t('Phase 1')}</b>&nbsp;&nbsp;&nbsp;</Text3>
                    <Text color='#767676'>&nbsp;{t('SOY Finance will use variable fees from 0.3% to 0.5% to audit the newly listed tokens and increase the platform’s liquidity (lower fee will be applied to larger trades).')}</Text>
                </Row3>
                <Spacer height="20px" />
                <Row3>
                    <Text3 color={Theme.colors.primary}><b>{t('Phase 2')}</b>&nbsp;&nbsp;&nbsp;</Text3>
                    <Text color='#767676'>&nbsp;{t('In this phase, the trading fee will vary between 0.3% and 0.15% for the audited tokens and the unaudited between 0.5%-0.35%.')}</Text>
                </Row3>
                <Spacer height="40px" />
                <SubTitle color={Theme.colors.bgscondary}>{t('Burning Mechanisms - “Buyback & Burn”')}</SubTitle>
                <Spacer height="40px" />
                <Text color='#767676'>{t('A set of burning mechanisms will be introduced to reward the SOY token holders and liquidity providers by decreasing inflation or lead to deflation depending on the system’s utilization, trading volume, and token price.')}</Text>
                <Spacer height="20px" />
                <Text color='#767676'>{t('The burning mechanism will receive a percentage ranging from 15% to 30% of the total trading fee.')}<Text color={Theme.colors.primary}>&nbsp;{t('Weekly, SOY tokens will be rebought and burned.')}</Text></Text>
                <Spacer height="20px" />
                <Text color='#767676'>{t('The system’s adoption and utilization through transaction volume define the size of the commission fees that will be distributed both to liquidity providers and burned.')}</Text>
                <Spacer height="40px" />
                <SubTitle color={Theme.colors.bgscondary}>{t('Addition Information')}</SubTitle>
                <Spacer height="40px" />
                <Text color='#767676'>{t('A full description of Soy Tokenomic can be found in the')}<StyledLi href="https://soy-finance.medium.com/soy-finance-monetary-policy-vision-4f07a1b48372" target="_blank" color='#615EFF'>&nbsp;{t('SOY Monetary Policy.')}</StyledLi></Text>
                <Spacer height="20px" />
            </TopDiv>
            <Spacer height="100px" />
        </Container>
    )
}
 
const Title = styled.p<{color: string}>`
    color: ${({color}) => color};
    font-family: ${Theme.fonts.text};
    font-weight: 700;
    font-size: 73.5px;
    line-height: 88.2px;
    letter-spacing: 5%;
    text-align: center;
    @media screen and (max-width: 1102px) {
        font-size: 50px;
    }
    @media screen and (max-width: 768px ) {
        font-size: 50px;
        line-height: 60px;
    }
    @media screen and (max-width: 573px ) {
        font-size: 40px;
        line-height: 60px;
    }
`
const TopDiv = styled.div`
    width: 100%;
`
const SubTitle = styled.p<{color: string}>`
    color: ${({color}) => color};
    font-family: ${Theme.fonts.text};
    font-weight: 700;
    font-size: 25px;
    line-height: 30px;
    letter-spacing: 5%;
    @media screen and (max-width: 768px ) {
    }
`
const Text = styled.p<{color: string}>`
    color: ${({color}) => color};
    font-family: ${Theme.fonts.text};
    font-weight: 400;
    font-size: 21px;
    line-height: 30px;
    @media screen and (max-width: 768px ) {
    }
`
const Text3 = styled.p<{color: string}>`
    color: ${({color}) => color};
    font-family: ${Theme.fonts.text};
    font-weight: 400;
    font-size: 21px;
    line-height: 30px;
    white-space: nowrap;
    @media screen and (max-width: 768px ) {
    }
`
const Text2 = styled.p<{color: string}>`
    color: ${({color}) => color};
    font-family: ${Theme.fonts.text};
    font-weight: 400;
    font-size: 21px;
    line-height: 30px;
    white-space: pre-line;
    word-break: break-all;
    display: inline;
    @media screen and (max-width: 1428px ) {
        
    }
    @media screen and (max-width: 768px ) {
    }
`
const StyledLi = styled.a<{color: string}>`
    color: ${({color}) => color};
    font-family: ${Theme.fonts.text};
    font-weight: 400;
    font-size: 21px;
    line-height: 30px;
    white-space: pre-line;
    word-break: break-all;
    display: inline;
`
const Row = styled.div`
    display: flex;
    padding-left: 50px;
    align-items: center;
    width: 100%;
    @media screen and (max-width: 768px) {
        width: 100%;
        padding-left: 20px;
    }
`
const Row3 = styled.div`
    display: flex;
    width: 100%;
`
const Row2 = styled.div`
    padding-left: 118px;
    @media screen and (max-width: 768px) {
        padding-left: 58px;
    }
`
const Circle = styled.div`
    min-width: 18px;
    min-height: 18px;
    border-radius: 9px;
    background-color: ${Theme.colors.bgscondary};
    margin-right: 50px;
`
export default TokenomicContent;
