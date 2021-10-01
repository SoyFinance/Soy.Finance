import { Theme } from 'constants/theme';
import styled from 'styled-components'

const SubTitle = styled.div<{ color: string, fontWeight: string }>`
    font-weight: ${({fontWeight}) => fontWeight};
    color: ${({color}) => color};
    font-family: ${Theme.fonts.text};
    font-size: 42px;
    line-height: 1.19;
    letter-spacing: 0.84px;
    @media screen and (max-width: 1200px) {
        font-size: 35px;
    }
    @media screen and (max-width: 768px) {
        font-size: 30px;
    }
    @media screen and (max-width: 560px) {
        font-size: 25px;
    }
`

export default SubTitle;
