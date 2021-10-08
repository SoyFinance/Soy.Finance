import React from 'react'
import { useWeb3React } from '@web3-react/core';
import { getAddress } from "@ethersproject/address";
import styled from 'styled-components'
import useAuth from 'hooks/useAuth';
import { useTranslation } from 'contexts/Localization'
import { Theme } from 'constants/theme'
import Spacer from 'components/Spacer'
import { Assets } from 'constants/images'
import { ConnectorNames } from '../../constants'

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    position: relative;
    margin: 80px 0px 0px;
    background-color: white;
    min-height: 650px;
`
const Img = styled.img`
    position: absolute;
    bottom: 0;
    width: 100%;
    // height: 800px;
`
const ImgUFO = styled.img`
    position: absolute;
    bottom: 0;
    left: 20%;
    // width: 100%;
    height: 550px;
    @media screen and (max-width: 1236px) {
        left: 10%;
    }
    @media screen and (max-width: 768px) {
        left: auto;
    }
`
const StyledModal = styled.div`
    max-width: 350px;
    padding: 30px 20px;
    background-color: #4B1510;
    box-shadow: 2px 3px 3px rgba(0,0,0,.1);
    z-index: 1;
    border-radius: 25px;
    margin-bottom: 80px;
    margin-top: 100px;
    margin-left: auto;
    margin-right: 20%;
    @media screen and (max-width: 1236px) {
        margin-right: 10%;
    }
    @media screen and (max-width: 480px) {
        // margin: 0 10px;
        margin-right: auto;
    }
    @media screen and (max-width: 370px) {
        margin-left: 10px;
        margin-right: 10px;
    }
`
const Line = styled.div`
    margin: 20px 0;
    border: 1px solid #FFFFFF;
`
const GetButton = styled.button`
    display: flex;
    flex-direction: column;
    background-color: #7EA224;
    align-items: center;
    border: none;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    padding: 5px 15px;
    border-radius: 10px;
    box-shadow: 2px 3px 3px rgba(228, 92, 49,.1);
    &:hover {
        cursor: pointer;
        background-color: rgba(126, 162, 36, .8);
    }
`
const Text = styled.p<{color: string; align?: string}>`
    color: ${({color}) => color};
    font-family: ${Theme.fonts.text};
    font-weight: 400;
    font-size: 14.38px;
    line-height: 18px;
    letter-space: 0.29px;
    text-align: ${({align}) => align};
    @media screen and (max-width: 768px ) {
    }
`
const TextB = styled.p<{color: string;}>`
    color: ${({color}) => color};
    font-family: ${Theme.fonts.text};
    font-weight: 700;
    font-size: 18px;
    line-height: 18px;
    letter-space: 0.29px;
    @media screen and (max-width: 768px ) {
    }
`
const TextBold = styled.p`
    color: ${Theme.colors.white};
    font-family: ${Theme.fonts.text};
    font-weight: 600;
    font-size: 42px;
    line-height: 50px;
    letter-space: 1px;
    @media screen and (max-width: 768px ) {
    }
`
const FlexBetween = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    background-color: #7EA224;
    border-radius: 20px;
    padding: 20px;
    align-items: flex-start;
    @media screen and (max-width: 768px) {
        padding: 10px;
    }
`

function isAddress(value) {
    try {
        return getAddress(value);
    } catch {
        return false;
    }
}
function shortenAddress(address, chars = 4) {
    const parsed = isAddress(address);
    if (!parsed) {
        throw Error(`Invalid 'address' parameter '${address}'.`);
    }
    return `${parsed.substring(0, chars + 2)}...${parsed.substring(42 - chars)}`;
}

const AirdropContent = () => {
    const { t } = useTranslation()
    const { account } = useWeb3React()
    const { login, logout } = useAuth()

    const soyBalance = '0.00'

    const handleLogin = () => {
        if( account ) {
            logout()
        } else {
            login(ConnectorNames.Injected)
        }
    }

    return (
        <Container>
            <Img src={Assets.airback} alt="" />
            <ImgUFO src={Assets.ufo} alt="" />
            <StyledModal>
                <Title color={Theme.colors.white}>{t('Claim Your SOY Tokens')}</Title>
                <Line />
                <GetButton onClick={() => handleLogin()}>
                    <Text align="center" color={Theme.colors.white} >{account? shortenAddress(account) : t('Connect Wallet')}</Text>
                </GetButton>
                <Spacer height="20px" />
                <FlexBetween>
                    <div>
                        <Text align="left" color={Theme.colors.white} >{t('YOUR BALANCE:')}</Text>
                        <TextBold>{soyBalance}</TextBold>
                        <Text align="left" color={Theme.colors.white} >{t('Details:')}</Text>
                    </div>
                    <img src={Assets.soywhite} alt="" />
                </FlexBetween>
                <Spacer height="5px" />
                <Text align="center" color={Theme.colors.white} >{t('Balance is updated every 24 hours.')}</Text>
                <Spacer height="10px" />
                <Text align="center" color={Theme.colors.white} >{t('First Airdrop will starts on 15/10/2021.')}</Text>
                <Spacer height="40px" />
                <TextB color="#7EA224">{t('Note:')}</TextB>
                <Spacer height="10px" />
                <Text align="left" color={Theme.colors.white} >{t('CLO coins are required to perform transactions on Callisto Network (1 CLO is enough).')}</Text>
                <Spacer height="20px" />
            </StyledModal>
            <Spacer height="100px" />
        </Container>
    )
}
 
const Title = styled.p<{color: string}>`
    color: ${({color}) => color};
    font-family: ${Theme.fonts.text};
    font-weight: 700;
    font-size: 28px;
    line-height: 33px;
    text-align: center;
    @media screen and (max-width: 1102px) {
    }
    @media screen and (max-width: 768px ) {
        font-size: 22px;
        line-height: 30px;
    }
    @media screen and (max-width: 573px ) {
    }
`
export default AirdropContent;
