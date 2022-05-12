import styled from 'styled-components'

const CardGrid = styled.div`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(4, 1fr);
  padding-top: 24px;
  padding-bottom: 24px;
  @media screen and (max-width: 1500px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export default CardGrid
