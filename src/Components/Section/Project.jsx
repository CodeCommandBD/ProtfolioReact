// import { ToggleButton, ToggleButtonGroup } from '@mui/material'
import React, { useState } from 'react'
import styled from 'styled-components'
import { projects } from "../../data/constants";
import ProjectCard from "../card/ProjectCard";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 16px;
    position: relative;
    z-index: 1;
    align-items: center;
    margin-top: 40px;
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
const ToggleButtonGroup = styled.div`
    display: flex;
    border: 1.5px solid ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
    font-size: 16px;
    border-radius: 12px;
    font-weight: 500;
    margin: 22px 0;
    @media screen and (max-width: 768px) {
        font-size: 12px;
    }
`
const ToggleButton = styled.div`
    padding: 8px 18px;
    border-radius: 6px;
    cursor: pointer;
    &:hover{
        background: ${({ theme }) => theme.primary + 20};
    }
    @media screen and (max-width: 768px) {
        border-radius: 4px;
        padding: 6px 8px;
    }
    ${({ active, theme }) => active && `
        background: ${theme.primary + 20}
    `}

`
const Divider = styled.div`
    width: 1.5px;
    background: ${({ theme }) => theme.primary};;
`
const CardContainer = styled.div`
   /* display: flex;
   align-items: center;
   justify-content: center;
   gap: 20px;
   flex-wrap: wrap; */
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    width: 100%;
    gap: 25px;
    justify-items: center;
`

const Project = () => {
    const [toggle, setToggle] = useState('all')
    return (
        <Container id='Project'>
            <Wrapper>
                <Title>Project</Title>
                <Desc
                    style={{
                        marginBottom: '40px'
                    }}
                >
                    I have worked on a wide range of projects. Here are some of my projects.
                </Desc>
                <ToggleButtonGroup>
                    <ToggleButton
                        active={toggle === "all"}
                        onClick={() => setToggle("all")}
                    >
                        ALL
                    </ToggleButton>
                    <Divider />
                    <ToggleButton
                        active={toggle === "web app"}
                        onClick={() => setToggle("web app")}
                    >
                        WEB APP"S
                    </ToggleButton>
                    <Divider />
                    <ToggleButton
                        active={toggle === "live web app"}
                        onClick={() => setToggle("live web app")}
                    >
                        LIVE WEB APP"S
                    </ToggleButton>
                </ToggleButtonGroup>
                <CardContainer>
                    {toggle === "all" &&
                        projects.map((project) => <ProjectCard project={project} />)}
                    {projects
                        .filter((item) => item.category === toggle)
                        .map((project) => (
                            <ProjectCard project={project} />
                        ))}
                </CardContainer>
            </Wrapper>
        </Container>
    )
}

export default Project