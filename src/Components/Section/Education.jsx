import React from 'react'
import styled from 'styled-components'
import { education } from '../../data/constants'
import { VerticalTimeline } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import EducationCard from '../Card/EducationCard'
import EarthCanvas from '../Canvas/Earth'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    background: transparent;
    
`   

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1100px;
    gap: 12px;
    @media screen and (max-width: 960px) {
        flex-direction: column;
    }
`
const Title = styled.div`
    font-size: 52px;
    text-align: center;
    font-weight: 600;
    margin-top: 20px;
    color: ${({ theme }) => theme.text_primary};
    @media screen and (max-width: 960px) {
        margin-top: 12px;
        font-size: 32px;
    }
`
const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    font-weight: 600;
    color: ${({ theme }) => theme.text_secondary};
    @media screen and (max-width: 960px) {
        font-size: 16px;
    }
`



const Education = () => {
    console.log("Education component rendering"); 
    return (
        <Container id='Education'>
            <Wrapper>
                
                    <Title>
                        Education
                    </Title>
                    <Desc style={{
                        marginBottom: '40px',
                    }}>
                        My education has been a journey of self-discovery educational details are as follows.
                    </Desc>
                    <VerticalTimeline>
                        {
                            education.map((edu, index) => (
                                <EducationCard key={`edu-${index}`} education={edu} />
                            ))
                        }
                    </VerticalTimeline>
                    <EarthCanvas></EarthCanvas>
            </Wrapper>
        </Container>
    )
}

export default Education