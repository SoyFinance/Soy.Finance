import React from 'react'
import styled from 'styled-components';
import Safelistheader from 'components/Header/Safelistheader';
import SafelistContent from './TokenomicContent';
import PageFooter from './PageFooter';
import 'aos/dist/aos.css';

const Container = styled.div`
    height: 100%;
    position: relative;
    overflow: hidden;
`
const Tokenomic: React.FC = () => {

    return (
        <Container>
            <Safelistheader />
            <SafelistContent />
            <PageFooter />
        </Container>
    )
}

export default Tokenomic;
