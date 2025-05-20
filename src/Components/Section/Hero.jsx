import React from 'react'
import styled from 'styled-components'
import { Bio } from '../../data/constants'
import TypeWriter from 'typewriter-effect'
import HeroImg from '../../images/img2.png'
import HeroBgAnimation from '../HeroBgAnimation'
import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion';
import { headContainerAnimation, headTextAnimation,headContentAnimation } from '../../utils/motion'
import StarCanvas from '../Canvas/Stars'
import Resume from '../../images/ResumeShanto.pdf'

const HeroContainer = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    padding: 80px 30px;
    z-index: 1;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
    @media screen and (max-width: 960px) {
        padding: 32px 16px;
    }
    @media screen and (max-width: 960px) {
        padding: 66px 16px;
    }
    @media screen and (max-width: 960px) {
        padding: 32px 16px;
    }
`;
const HeroInnerContainer = styled.div`
    display: flex;
    position: relative;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1100px;
    @media screen and (max-width: 960px) {
        flex-direction: column;
    }
`;
const HeroLeft = styled.div`
    width: 100%;
    order: 1;
   
    @media screen and (max-width: 960px) {
        order: 2;
        margin-bottom: 30px;
        display: flex;
        gap: 6px;
        flex-direction: column;
        align-items: center;
    }
`;
const HeroRight = styled.div`
    width: 95%;
    order: 2;
    display: flex;
    align-items: center;
    justify-content: end;
    
    @media screen and (max-width: 960px) {
        order: 1;
        margin-bottom: 80px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    @media screen and (max-width: 640px) {
        margin-bottom: 30px;
    }
`;

const Title = styled.div`
    font-size: 50px;
    font-weight: 700;
    color: ${({ theme }) => theme.text_primary};
    line-height: 68px;

    @media screen and (max-width: 960px) {
        text-align: center;
        
    }
    @media screen and (max-width: 640px) {
        font-size: 40px;
        line-height: 48px;
        margin-bottom: 8px;
    }
`;
const TextLoop = styled.div`
    font-size: 32px;
    font-weight: 600;
    display: flex;
    gap: 12px;
    color: ${({ theme }) => theme.text_primary};
    line-height: 68px;

    @media screen and (max-width: 960px) {
        text-align: center;
        
    }
    @media screen and (max-width: 640px) {
        font-size: 22px;
        line-height: 48px;
        margin-bottom: 16px;
    }
`;
const Span = styled.div`
    cursor: pointer;
    color: ${({ theme }) => theme.primary};

   
`;
const SubTitle = styled.div`
    font-size: 20px;
    line-height: 32px;
    margin-bottom: 40px;
    color: ${({ theme }) => theme.text_primary + 95};
    @media screen and (max-width: 960px) {
       text-align: center;
    }
    @media screen and (max-width: 640px) {
       font-size: 16px;
       line-height: 32px;
    }
`;
const ResumeButton = styled.a`
    -webkit-appearance: button;
    -moz-appearance: button;
    color: white;
    appearance: button;
    text-decoration: none;
    width: 95%;
    max-width: 300px;
    padding: 16px 0;
    text-align: center;
    background: hsla(271, 100%, 50%, 1);
    background: linear-gradient(
        255deg,
        hsla(271, 100%, 50%, 1) 0%,
        hsla(294, 100%, 50%, 1) 100%);
    background: -moz-linear-gradient(
        255deg,
        hsla(271, 100%, 50%, 1) 0%,
        hsla(294, 100%, 50%, 1) 100%);
    background: -webkit-linear-gradient(
        255deg,
        hsla(271, 100%, 50%, 1) 0%,
        hsla(294, 100%, 50%, 1) 100%
    );
    box-shadow: 20px 20px 60px #1f2634, -20px -20px 60px #1f2634;
    border-radius: 50px;
    font-size: 20px;
    font-weight: 600;
    cursor: pointer;
    &:hover{
        transform: scale(1.05);
        transition: .5s ease-in-out;
        box-shadow: 20px 20px 60px #1f2634;
        filter: brightness(1);
    }
    @media screen and (max-width: 640px){
        padding: 12px 0;
        font-size: 18px;
    }
`;
const Img = styled.img`
    border-radius: 50%;
    width: 100%;
    height: 100%;
    max-width: 400px;
    max-height: 400px;
    border: 2px solid ${({ theme }) => theme.primary};
    @media screen and (max-width: 640px){
        max-width: 280px;
        max-height: 280px;
    }
`;
const HeroBg = styled.div`
    position: absolute;
    display: flex;
    top: 50%;
    right: 0;
    bottom: 0;
    left: 50%;
    width: 100%;
    height: 100%;
    max-width: 1360px;
    justify-content: end;
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
    @media screen and (max-width: 960px){
        justify-content:center;
        padding: 0 ;
    }
`;

const Hero = () => {
    return (
        <div id='About'>
            <HeroContainer>
                <HeroBg>
                    <StarCanvas></StarCanvas>
                    <HeroBgAnimation></HeroBgAnimation>
                </HeroBg>
                <motion.div {...headContainerAnimation}>
                    <HeroInnerContainer>
                        <HeroLeft>
                            <motion.div {...headTextAnimation}>
                                <Title>Hi, I am <br /> {Bio.name}</Title>
                                <TextLoop>
                                    I am a
                                    <Span>
                                        <TypeWriter options={{
                                            strings: Bio.roles,
                                            autoStart: true,
                                            loop: true,
                                        }}>

                                        </TypeWriter>
                                    </Span>
                                </TextLoop>
                            </motion.div>

                            <motion.div {...headContentAnimation}>
                                <SubTitle>{Bio.description}</SubTitle>
                            </motion.div>
                            <ResumeButton href={Resume} target='_blank'>Check Resume</ResumeButton>
                        </HeroLeft>
                        <HeroRight>
                            <motion.div {...headContainerAnimation}>
                                <Tilt>
                                    <Img src={HeroImg} alt='Shanto Kumar'></Img>
                                </Tilt>
                            </motion.div>
                        </HeroRight>
                    </HeroInnerContainer>
                </motion.div>
            </HeroContainer>
        </div>
    )
}

export default Hero