// import { Description } from '@mui/icons-material';
import React from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import styled from 'styled-components';

const Top = styled.div`
  width: 100%;
  display: flex;
  max-width: 100%;
  gap: 12px;
`
const Image = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 10px;
  margin-top: 4px;
  @media (max-width: 768px){
    height: 40px;
  }
`
const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

`
const School = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary + 99};
  @media (max-width: 768px){
    font-size: 14px;
  }
`
const Degree = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary + 99};
  @media (max-width: 768px){
    font-size: 12px;
  }
`
const Date = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 80};
  @media (max-width: 768px){
    font-size: 10px;
  }
`

const Description = styled.div`
  width: 100%;
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 99};
  margin-bottom: 10px;
  @media (max-width: 768px){
    font-size: 12px;
  }
`

const Grade = styled.div`
 font-size: 14px;
 font-weight: 500;
 color: ${({ theme }) => theme.text_secondary + 99};
 @media (max-width: 768px){
    font-size: 12px;
  }
`

const Span = styled.div`
    display: -webkit-box;
    max-width: 100%;
`

const EducationCard = ({ education }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: '#1d1836',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        boxShadow: 'rgba(23,92,230,0.15) 0 4px 24px',
        border: '1px solid rgba(255,255,255,0.125)',
        borderRadius: '6px'
      }}
      contentArrowStyle={{ borderRight: '7px solid #232631' }}
      date={education.date}
      iconStyle={{ background: '#fff' }}
      icon={
        <img
          width="100%"
          height="100%"
          alt={education.school}
          style={{ borderRadius: '50%', objectFit: 'cover' }}
          src={education.img}
        />
      }
    >
      <Top>
        <Image src={education.img} />
        <Body>
          <School>{education.school}</School>
          <Degree>{education.degree}</Degree>
          <Date>{education.date}</Date>
        </Body>
      </Top>
      <Grade>
        <b>Grade:</b>
        {education.grade}
      </Grade>
      <Description>
        {education?.desc && <Span>{education.desc}</Span>}
        
      </Description>

    </VerticalTimelineElement>
  );
};

export default EducationCard;
