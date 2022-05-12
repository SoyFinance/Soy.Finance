import React from 'react';
import Spacer from 'components/Spacer';
import { useTranslation } from 'contexts/Localization';
import { Assets } from "constants/images";
import StyledCard, { Container, StyledText, WhiteCard, StyledImage } from "./styledCard";

const FirstCard = () => {
  
  return (
    <StyledCard>
      <Container img={Assets.news1} />
    </StyledCard>
  )
}

export const StakingCard = () => {
  const { t } = useTranslation()

  return (
    <StyledCard>
      <Container img={Assets.news2}>
        <StyledText fontWeight="bold" fontSize="30px" color="black">{t('Soy Staking')}</StyledText>
        <StyledText fontWeight="600" fontSize="21px" color="black">{t('Stake Soy, Earn SOY')}</StyledText>
        <Spacer height="30px" />
        <WhiteCard width="80%">
          <StyledImage src={Assets.token} alt="token" />
          <StyledText fontWeight="400" fontSize="16" color="black">{t('APR: 153.60%')}</StyledText>
        </WhiteCard>
      </Container>
    </StyledCard>
  )
}

export const FarmCard = () => {
  const { t } = useTranslation()
  
  return (
    <StyledCard>
      <Container img={Assets.news3}>
        <StyledText fontWeight="bold" fontSize="30px" color="black">{t('Yield Farming')}</StyledText>
        <StyledText fontWeight="600" fontSize="21px" color="black">{t('High APR Farms')}</StyledText>
        <Spacer height="30px" />
        <WhiteCard>
          <StyledImage src="https://s2.coinmarketcap.com/static/img/coins/64x64/10030.png" alt="token" />
          <StyledText fontWeight="bold" fontSize="16" color="black" marginRight="20px">+</StyledText>
          <StyledImage src={Assets.token} alt="token" />
          <div>
            <StyledText fontWeight="bold" fontSize="16" color="black">{t('XMS - SOY')}</StyledText>
            <StyledText fontWeight="400" fontSize="16" color="black">{t('APR: 300.37%')}</StyledText>
          </div>
        </WhiteCard>
        <Spacer height="10px" />
        <WhiteCard>
          <StyledImage src="https://s2.coinmarketcap.com/static/img/coins/64x64/12252.png" alt="token" />
          <StyledText fontWeight="bold" fontSize="16" color="black" marginRight="20px">+</StyledText>
          <StyledImage src={Assets.token} alt="token" />
          <div>
            <StyledText fontWeight="bold" fontSize="16" color="black">{t('BCOIN - SOY')}</StyledText>
            <StyledText fontWeight="400" fontSize="16" color="black">{t('APR: 266.71%')}</StyledText>
          </div>
        </WhiteCard>
        <Spacer height="10px" />
        <WhiteCard>
          <StyledImage src="https://s2.coinmarketcap.com/static/img/coins/64x64/11020.png" alt="token" />
          <StyledText fontWeight="bold" fontSize="16" color="black" marginRight="20px">+</StyledText>
          <StyledImage src={Assets.token} alt="token" />
          <div>
            <StyledText fontWeight="bold" fontSize="16" color="black">{t('ZOO - SOY')}</StyledText>
            <StyledText fontWeight="400" fontSize="16" color="black">{t('APR: 248.19%')}</StyledText>
          </div>
        </WhiteCard>
      </Container>
    </StyledCard>
  )
}

export const BurnCard = () => {
  const { t } = useTranslation()
  
  return (
    <StyledCard>
      <Container img={Assets.news4}>
        <StyledText fontWeight="bold" fontSize="30px" color="white">{t('Total Token Burn')}</StyledText>
        <StyledText fontWeight="bold" fontSize="30px" color="white">{t('23 076 900 $SOY')}</StyledText>
      </Container>
    </StyledCard>
  )
}

export default FirstCard
