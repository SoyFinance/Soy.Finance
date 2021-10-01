import React, { useEffect, useRef } from 'react'
import styled from 'styled-components';
import Safelistheader from 'components/Header/Safelistheader';
import { Assets } from 'constants/images';
import 'aos/dist/aos.css';

const Container = styled.div`
    height: 100%;
    position: relative;
    overflow: hidden;
`
const Img = styled.img`
    width: 100%;
    margin-top: 100px;
    @media screen and (max-width: 768px) {
        margin-top: 80px;
    }
`
const Roadmap: React.FC = () => {

    const pageEndRef = useRef(null);
    
    const scrollToBottom = () => {
        pageEndRef.current.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        setTimeout(() => {
            scrollToBottom();
        }, 1000)
    }, [pageEndRef])


    return (
        <Container>
            <Safelistheader />
            <Img src={Assets.roadmap} alt="" />
            <div ref={pageEndRef} />
        </Container>
    )
}

export default Roadmap;
