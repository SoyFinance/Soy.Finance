import React from 'react'
import { Theme } from 'constants/theme';
import styled from 'styled-components';
import { useTranslation } from 'contexts/Localization';

const TitleSection = () => {
    const { t } = useTranslation()
    return (
        <TitleArea>
            <Title>
                <Titlepre>{t('Safety On Yields')}</Titlepre>
            </Title>
        </TitleArea>
    )
}

const TitleArea = styled.div`
    z-index: 9;
    @media (max-width: 1044px) {
        width: 100%;
    }
    @media (max-width: 320px) {
        // margin-top: 100px;
    }
`;

const Title = styled.div`
    display: flex;
    @media (max-width: 596px) {
        display: block;
    }
`;
const Titlepre = styled.p`
    font-size: 79px;
    line-height: 157px;
    color: ${Theme.colors.primary};
    font-family: Beautiful;
    width: 100%;
    text-align: center;
    letter-spacing: 0.05em;
    @media (max-width: 1044px) {
        font-size: 60px;
    }
    @media (max-width: 768px) {
        font-size: 40.9px;
        line-height: 97.17px;
        margin-bottom: 20px;
    }
    
`;

export default TitleSection;
