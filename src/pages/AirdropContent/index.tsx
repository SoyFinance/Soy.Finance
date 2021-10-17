import React, { useEffect, useState } from 'react'
import { useWeb3React } from '@web3-react/core';
import { getAddress } from "@ethersproject/address";
import styled from 'styled-components'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'
import axios from 'axios';
import useAuth from 'hooks/useAuth';
import { useTranslation } from 'contexts/Localization'
import { Theme } from 'constants/theme'
import Spacer from 'components/Spacer'
import { Assets } from 'constants/images'
import contracts from 'constants/contracts';
import { registerToken } from 'hooks/wallet';
import { BIG_100, getBalanceAmount, GetAirdropInfo, getChecksumedAddress } from 'hooks/useTokenBalance';
import { BigNumber } from 'bignumber.js';
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
const AddButton = styled.button`
    display: flex;
    border: 2px solid #7EA224;
    background-color: #4B1510;
    align-items: center;
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
const Text = styled.p<{color: string; align?: string; weight?: string}>`
    color: ${({color}) => color};
    font-family: ${Theme.fonts.text};
    font-weight: ${({weight}) => weight};
    font-size: 14.38px;
    line-height: 18px;
    letter-space: 0.29px;
    text-align: ${({align}) => align};
    @media screen and (max-width: 768px ) {
    }
`
const TextB = styled.p<{color: string; align?: string}>`
    color: ${({color}) => color};
    font-family: ${Theme.fonts.text};
    font-weight: 700;
    font-size: 18px;
    line-height: 18px;
    letter-space: 0.29px;
    text-align: ${({align}) => align};
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
    align-items: flex-start;
    @media screen and (max-width: 768px) {
        padding: 10px;
    }
`

const Column= styled.div`
    display: flex;
    flex-direction: column;
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

const oneDaySeconds = 24 * 3600

const AirdropContent = () => {
    const { t } = useTranslation()
    const { account, library } = useWeb3React()
    const { login, logout } = useAuth()

  const [lockPeriod, setLockPeriod] = useState(0);
  const [userInfo, setUserInfo] = useState(null);
  const [Airdrops, setAirdrops] = useState(null);
  const [balance, setBalance] = useState(0);
  const [showDetail, setShowDetail] = useState(false);

  const [userStatus, setUserStatus] = useState('');

    useEffect(() => {
        const init = async () => {
            const {
                lockperiod,
                userinfo,
                airdrops,
            } = await GetAirdropInfo(account, library);
            setLockPeriod(parseInt(lockperiod))
            setUserInfo(userinfo)
            setAirdrops(airdrops)
            const bigBalance = userinfo.reduce(reducer);
            setBalance(parseFloat(getBalanceAmount(new BigNumber(bigBalance.amount._hex)).toString()));
        }
        if (account){
            init();
        }
    }, [account, library])

    useEffect(() => {
        const getAccountStatus = () => {
            const acc = getChecksumedAddress(account);
            axios.get(`https://soy-airdrop.deta.dev/is_eligible/${acc}`).then((res) => {
                if(res.data) {
                    if( res.data.is_eligable && res.data.is_participant ) {
                        setUserStatus('You already participate.')
                    } else if (res.data.is_eligible && !res.data.is_participant) {
                        setUserStatus('You are eligible.')
                    } else {
                        setUserStatus('You are not eligible.')
                    }
                }
            })
        }
        if(account) {
            getAccountStatus();
        }
    }, [account])
    
    const reducer = (previousValue, currentValue) => previousValue.amount.add(currentValue.amount);
    const soyBalance = parseInt((balance * 100).toString()) / 100;

    const handleLogin = () => {
        if( account ) {
            setBalance(0);
            setShowDetail(false);
            setAirdrops(null);
            setLockPeriod(0);
            setUserStatus('');
            logout()
        } else {
            login(ConnectorNames.Injected)
        }
    }

    function toDateTime(secs) {
        const date = new Date(1970, 0, 1); // Epoch
        date.setSeconds(secs);
        return date;
    }
    
    return (
        <Container>
            <Img src={Assets.airback} alt="" />
            <ImgUFO src={Assets.ufo} alt="" />
            <StyledModal>
                <Title color={Theme.colors.white}>{t('Claim Your SOY Tokens')}</Title>
                {account && userStatus !== '' && <Spacer height="10px" />}
                {account && userStatus !== '' && <TextB color="#FFF" align="center">{t('User Status:')} {t(`${userStatus}`)}</TextB>}
                <Line />
                <GetButton onClick={() => handleLogin()}>
                    <Text align="center" color={Theme.colors.white} >{account? shortenAddress(account) : t('Connect Wallet')}</Text>
                </GetButton>
                <Spacer height="20px" />
                <Column>
                    <FlexBetween>
                        <div>
                            <Text align="left" color={Theme.colors.white} >{t('YOUR BALANCE:')}</Text>
                            <TextBold>{soyBalance.toFixed(2)}</TextBold>
                            <Spacer height="10px" />
                            <Row onClick={()=>{
                                if (!account) return;
                                setShowDetail(!showDetail)
                            }}>
                                <Text align="left" color={Theme.colors.white} weight="bold">{t('Details:')}:</Text>
                                {
                                    showDetail?
                                    <FiChevronUp color={Theme.colors.white} size={24} />:
                                    <FiChevronDown color={Theme.colors.white} size={24} />
                                }
                            </Row>
                            <Spacer height="2px" />
                        </div>
                        <img src={Assets.soywhite} alt="" />
                    </FlexBetween>
                    {
                        showDetail && account &&
                        <DetailContent>
                            <Row2>
                                <TbDiv>
                                    <Text align="left" color={Theme.colors.white} >{t('PhaseId')}</Text>
                                </TbDiv>
                                <TbDiv>
                                    <Text align="left" color={Theme.colors.white} >{t('Balance')}</Text>
                                </TbDiv>
                                <TbDiv2>
                                    <Text align="right" color={Theme.colors.white} >{t('Claim Date')}</Text>
                                </TbDiv2>
                            </Row2>
                            {
                                Airdrops?.map((item, index) => {
                                    // const duration = parseInt(item.duration._hex)
                                    // const daysPassed = parseInt(item.daysPassed._hex)
                                    const datetime = toDateTime(parseInt(userInfo[index].timestamp._hex) + lockPeriod * oneDaySeconds).toString();
                                    const b = parseInt((getBalanceAmount(new BigNumber(userInfo[index].amount._hex)).times(BIG_100).toString())) / 100;
                                    return (
                                        <Row2 key={(item.daysPassed)}>
                                            <TbDiv>
                                                <Text align="left" color={Theme.colors.white} >{index+1}</Text>
                                            </TbDiv>
                                            <TbDiv>
                                                <Text align="left" color={Theme.colors.white} >{b}</Text>
                                            </TbDiv>
                                            <TbDiv2>
                                                <Text align="right" color={Theme.colors.white} >{b === 0 ? '---' : datetime.substring(0, 15)}</Text>
                                            </TbDiv2>
                                        </Row2>
                                    )
                                })
                            }
                        </DetailContent>
                    }
                </Column>
                <Spacer height="20px" />
                <AddButton onClick={() => registerToken(contracts.soyToken, "SOY", 18)}>
                    <img src={Assets.token} alt="" style={{height: 30, marginRight: 10}}/>
                    <Text align="center" color={Theme.colors.white} >{t('Add to Metamask')}</Text>
                </AddButton>
                <Spacer height="20px" />
                <Text align="left" color={Theme.colors.white} >{t('The system checks your eligibility when you connect your wallet. Please refer to the Airdrop rules for details.')}</Text>
                <Spacer height="20px" />
                <TextB color="#7EA224">{t('Note:')}</TextB>
                <Spacer height="10px" />
                <Text align="left" color={Theme.colors.white} >&quot;{t('Balance is updated every 24 hours.')}&quot;</Text>
                <Spacer height="5px" />
                <Text align="left" color={Theme.colors.white} >&quot;{t('First Airdrop will starts on 15/10/2021.')}&quot;</Text>
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
const Row = styled.div`
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2px 5px;
    border-radius: 10px;
    border: 1px solid white;
    &:hover {
        cursor: pointer;
        background-color: #4B1510;
    }
`
const DetailContent = styled.div`
    width: 100%;
`
const Row2 = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2px 5px;
`
const TbDiv = styled.div`
    width: 25%;
`
const TbDiv2 = styled.div`
    width: 50%;
`
export default AirdropContent;
