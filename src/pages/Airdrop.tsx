import React from 'react'
import styled from 'styled-components';
import Safelistheader from 'components/Header/Safelistheader';
import AirdropContent from './AirdropContent';
import PageFooter from './PageFooter2';
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
            <AirdropContent />
            <PageFooter />
        </Container>
    )
}

export default Tokenomic;
