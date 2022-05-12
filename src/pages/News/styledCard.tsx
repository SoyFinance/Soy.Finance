import styled from 'styled-components'
import { Card, Text } from '@soy-libs/uikit'
import { Theme } from 'constants/theme'

const StyledCard = styled(Card)`
  position: relative;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
`
export const StyledImage = styled.img`
  width: 100%;
  transition: opacity 1s linear;
  object-fit: cover;
  width: 35px;
  margin: 0 20px 0 0;
`
export const Container = styled.div<{img?: string}>`
  position: relative;
  min-width: 320px;
  height: 100%;
  min-height: 360px;
  overflow: hidden;
  padding: 20px;
  background-image: ${({img}) => `url(${img})`};
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 20px;
  /* padding-bottom: 100%; */
`
export const StyledText = styled(Text)`
  /* color: ${Theme.colors.black}; */
  font-family: ${Theme.fonts.text};
  white-space: nowrap;
`;
export const WhiteCard = styled(Card)<{width?: string}>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, .6);
  padding: 10px 20px;
  border-radius: 20px;
  width: ${({width}) => width};
  margin-left: auto;
  margin-right: auto;
`
export default StyledCard
