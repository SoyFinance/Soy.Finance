import { Theme } from 'constants/theme';
import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'contexts/Localization';
import Spacer from 'components/Spacer';
import { useGetBurnedSoy, useGetStakingAPR, useGetFarmsApr } from 'hooks/useMetrics';
import CardGrid from './cardGrid';
import FirstCard, { BurnCard, FarmCard, StakingCard } from './cards';

const News = () => {
  const { t } = useTranslation()
  const burnedSoy = useGetBurnedSoy()
  const stakingAPR = useGetStakingAPR()
  const data = useGetFarmsApr()

  return (
    <Container>
      <Line />
      <Spacer height="50px" />
      <Title color={Theme.colors.primary}>
        {t(`What's new on `)}&nbsp;<Title color="#AEDD00">{t('SOY?')}</Title>
      </Title>
      <CardGrid>
        <FirstCard />
        <StakingCard apr = {stakingAPR}/>
        <FarmCard data = {data}/>
        <BurnCard burnedSoy = {burnedSoy}/>
      </CardGrid>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 100px 10% 50px;
  background-color: #FFFFFF;
  @media screen and (max-width: 768px) {
  }
`
const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #AEDD00;
`
const Title = styled.p<{color: string}>`
  color: ${({color}) => color};
  font-family: ${Theme.fonts.text};
  font-weight: 700;
  font-size: 73.5px;
  line-height: 88.2px;
  letter-spacing: 5%;
  text-align: center;
  display: flex;
  @media screen and (max-width: 768px ) {
      font-size: 50px;
  }
`;

export default News
