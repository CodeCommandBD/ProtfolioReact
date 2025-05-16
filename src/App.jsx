import './App.css'
import styled, { ThemeProvider } from 'styled-components'
import { darkTheme } from './utils/Themes'
import Navbar from './Components/Navbar'
import { BrowserRouter } from 'react-router-dom'
import Hero from './Components/Section/Hero'
import Skills from './Components/Section/Skills'
import Experience from './Components/Section/Experience'
import Education from './Components/Section/Education'
import StartCanvas from './Components/Canvas/Stars'
import Project from './Components/Section/Project'
import Contact from './Components/Section/Contact'
import Footer from './Components/Section/Footer'
const Body = styled.div`
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
  position: relative;
`
const Wrapper = styled.div`
  padding-bottom: 100px;
  background: linear-gradient(38.73deg, rgba(204,0,187,0.15) 0%, rgba(201,32,184,0) 50%),
  linear-gradient(141.27deg, rgba(0,70,209,0) 50%, rgba(0,70,209,0.15)100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);

`


function App() {


  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <BrowserRouter>
          <Navbar></Navbar>
          <Body>
            <StartCanvas />
            <div>
              <Hero></Hero>
              <Wrapper>
                <Skills></Skills>
                <Experience></Experience>
              </Wrapper>
              <Project></Project>
              <Wrapper>
                <Education></Education>
                <Contact></Contact>
              </Wrapper>
              <Footer></Footer>
            </div>
          </Body>
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App
