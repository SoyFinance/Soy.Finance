import React from 'react';
import Spacer from 'components/Spacer';
import { useTranslation } from 'contexts/Localization';
import { Assets } from "constants/images";
import { marketcapIds } from '../../constants';
import StyledCard, { Container, StyledText, WhiteCard, StyledImage } from "./styledCard";

const getShortenNumber = (value: number): number => {
  return (Math.floor(value * 100)) / 100 
}
const FirstCard = () => {
  
  return (
    <StyledCard>
      <Container img={Assets.news1} />
    </StyledCard>
  )
}

export const StakingCard = ({ apr }) => {
  const { t } = useTranslation()

  return (
    <StyledCard>
      <Container img={Assets.news2}>
        <StyledText fontWeight="bold" fontSize="30px" color="black">{t('Soy Staking')}</StyledText>
        <StyledText fontWeight="600" fontSize="21px" color="black">{t('Stake Soy, Earn SOY')}</StyledText>
        <Spacer height="30px" />
        <WhiteCard width="80%">
          <StyledImage src={Assets.token} alt="token" />
          <StyledText fontWeight="400" fontSize="16" color="black">{t(`APR: ${getShortenNumber(apr)}%`)}</StyledText>
        </WhiteCard>
      </Container>
    </StyledCard>
  )
}

export const FarmCard = ({ data }) => {
  const { t } = useTranslation()
  // console.log("farm data ::", data)
  return (
    <StyledCard>
      <Container img={Assets.news3}>
        <StyledText fontWeight="bold" fontSize="30px" color="black">{t('Yield Farming')}</StyledText>
        <StyledText fontWeight="600" fontSize="21px" color="black">{t('High APR Farms')}</StyledText>
        <Spacer height="20px" />
        {
          data?.map((item) => {
            const tkName = item.name.split('-')[1]
            const mkId = marketcapIds[`${tkName}`]
            const logo = mkId ? `https://s2.coinmarketcap.com/static/img/coins/64x64/${mkId}.png` : `images/${tkName}.png`

            return (<div key={item.name}>
              <Spacer height="10px" />
              <WhiteCard>
                <StyledImage src={Assets.token} alt="token" />
                <StyledText fontWeight="bold" fontSize="16" color="black" marginRight="20px">+</StyledText>
                <StyledImage src={logo} alt="token" />
                <div>
                  <StyledText fontWeight="bold" fontSize="16" color="black">{t(`${tkName}`)}</StyledText>
                  <StyledText fontWeight="400" fontSize="16" color="black">{getShortenNumber(item.apr)}</StyledText>
                </div>
              </WhiteCard>
            </div>)
          })
        }
      </Container>
    </StyledCard>
  )
}

export const BurnCard = ({burnedSoy}) => {
  const { t } = useTranslation()
  
  return (
    <StyledCard>
      <Container img={Assets.news4}>
        <StyledText fontWeight="bold" fontSize="30px" color="white">{t('Total Token Burn')}</StyledText>
        <StyledText fontWeight="bold" fontSize="30px" color="white">{t(`${burnedSoy} $SOY`)}</StyledText>
      </Container>
    </StyledCard>
  )
}

export default FirstCard
