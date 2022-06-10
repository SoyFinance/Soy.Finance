
import React from 'react'
import styled from 'styled-components'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Theme } from 'constants/theme';
import { Assets } from 'constants/images';
import './header.scss';
import { useTranslation } from 'contexts/Localization';
import { languages } from 'constants/localization/languages';

const langTitle = {
    'en-US': 'EN',
    'zh-CN': 'CH',
    'zh-TW': 'TW',
    'ru-RU': 'RU',
    'uk-UA': 'UK',
    'ko-KR': 'KO',
}

const Header: React.FC = () => {
    const { currentLanguage, setLanguage, t } = useTranslation()

    const handleChangeLang = (lg) => {
        setLanguage(languages[`${lg}`]);
    }

    return (
      
        <Navbar collapseOnSelect expand="md" className="navbar" variant="dark" sticky="top" >
            <Navbar.Brand href="/">
                <Logo>
                    <LogoImg src={Assets.logo} className="App-logo" alt="logo" />
                </Logo>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Li> 
                        <NavDropdown title={t('Soy Finance')} id="collasible-nav-dropdown">
                            <NavDropdown.Item href="https://clo.click/how_to" target="_blank">{t('Tutorials')}</NavDropdown.Item>
                            <NavDropdown.Item href="/roadmap">{t('Roadmap')}</NavDropdown.Item>
                            <NavDropdown.Item href="/tokenomic">{t('SOY Tokenomics')}</NavDropdown.Item>
                            <NavDropdown.Item href="/safelist">{t('Safelisting')}</NavDropdown.Item>
                            <NavDropdown.Item href="https://bullsinvesting.club/" target="_blank">{t('BUSDT Stable Coin')}</NavDropdown.Item>
                        </NavDropdown>
                    </Li>
                    <Li>
                        <Nav.Link href="https://bridge.soy.finance/" target="_blank">{t('SOY Bridge')}</Nav.Link>
                    </Li>
                    <LiButton href="https://app.soy.finance/#/swap" target="_blank">
                        {t('Launch Soy Finance')}
                    </LiButton>
                    <Li>
                        <NavDropdown title={langTitle[`${currentLanguage.locale}`]} id="collasible-nav-dropdown">
                            <NavDropdown.Item onClick={()=>handleChangeLang('en-US')}>EN</NavDropdown.Item>
                            <NavDropdown.Item onClick={()=>handleChangeLang('zh-CN')}>CH</NavDropdown.Item>
                            <NavDropdown.Item onClick={()=>handleChangeLang('zh-TW')}>TW</NavDropdown.Item>
                            <NavDropdown.Item onClick={()=>handleChangeLang('ru-RU')}>RU</NavDropdown.Item>
                            <NavDropdown.Item onClick={()=>handleChangeLang('uk-UA')}>UK</NavDropdown.Item>
                            <NavDropdown.Item onClick={()=>handleChangeLang('ko-KR')}>KO</NavDropdown.Item>
                        </NavDropdown>
                    </Li>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

const Logo = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
    margin-bottom: 15px;
    @media(max-width: 768px) {
    }
`;

const LogoImg = styled.img`
    z-index: 1;
    margin-left: 20px;
    min-width: 130px;
    max-width: 130px;
    @media screen and (max-width: 1050px) {
    }
    @media (max-width: 510px) {
    }
`;
const Li = styled.div`
    display: flex;
    align-items: center;
    color: ${Theme.colors.primary};
    font-size: 18px;
    padding: 0 20px;
    z-index: 1500;
    @media (max-width: 1300px) {
        padding: 0 10px;
    }
    @media (max-width: 1160px) {
        padding: 0 5px;
    }
    @media (max-width: 1100px) {
        padding: 0;
    }
`;
const LiButton = styled.a`
    color: white;
    background-color: ${Theme.colors.bgscondary};
    font-size: 16px;
    font-weight: 700;
    font-family: ${Theme.fonts.text};
    height: 30px;
    padding: 5px 20px;
    padding-top: 6px;
    border-radius: 30px;
    text-decoration: none !important;
    white-space: nowrap;
    z-index: 9;
    margin-top: 3px;
    margin-left: 20px;
    margin-right: 20px;
    &:hover {
        color: #000;
    }
    @media screen and (max-width: 768px) {
        display: none;
        margin: 0px;
        max-width: 180px;
    }
`
export default Header;