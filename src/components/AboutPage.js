import React from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import {DarkTheme} from './Themes';
import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
// import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte'
import astronaut from '../assets/Images/spaceman.png'
import Me from '../assets/Images/me.jpg'
import MyResume from '../assets/my-resume.pdf'

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
overflow: hidden;`
const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }`
const Spaceman = styled.div`
    position: absolute;
    top: 70%;
    right: 3%;
    width: 8vw;
    z-index: 4;
    animation: ${float} 4s ease infinite;
    img{
        width: 100%;
        height: auto;
    }`
const BushraPic = styled.div`
    position: relative;
    top: 55px;
    width: 9rem;
    height: 9rem;
    margin: 2rem auto 3rem;
    border-radius: 50%;
    overflow: hidden;
    display: -ms-grid;
    display: grid;
    border: 2px solid #fff;
    z-index: 10;
    img{
        width: 9rem;
        object-fit: cover;
        align-self: center;
        justify-self: center;
    }`
const Main =  styled.div`
    color: #fff;
    padding-top: 2rem;
    width: 80vw;
    height: 60vh;
    z-index: 3;
    line-height: 1.5;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: calc(0.6rem + 1vw);
    backdrop-filter: blur(5px); 
    position: absolute;
    left: calc(5rem + 5vw);
    top: 10rem;
    font-family: monospace;`
const Cv =  styled.div`
    position: absolute;
    top: 380px;
    text-align: center;
    left: 0%;
    border: 2px solid #fff;
    font-weight: lighter;
    padding: 10px 50px;
    color: #fff;
    margin-top: 35px;
    &:hover{
        border: 2px solid #00eaff;
    }`
const Resume = {
    'color': '#fff',
    'text-decoration': 'none'
}

const AboutPage = () => {
    return (
        <ThemeProvider theme={DarkTheme}>
            <Box>
                <LogoComponent theme='dark'/>
                <SocialIcons theme='dark'/>
                <PowerButton />
                {/* <ParticleComponent theme='dark' /> */}
                <Spaceman>
                    <img src={astronaut} alt="spaceman" />
                </Spaceman>
                <BushraPic>
                    <img src={Me} alt="BushraPic" />   
                </BushraPic>    
                <Main>
                    Hello there,
                    <br/> <br/>
                    My name is Bushra and I'm a ReactJS Developer with deep knowledge of javaScript and proven ability to deliver quality results while collaborating in work environments,
                    I'm interested in the whole frontend stack Like trying new things and building great projects. I'm an independent freelancer and blogger. I love to write blogs and read books.
                    I believe everything is an Art when you put your consciousness in it. You can connect with me via social links..
                    <Cv><a href={MyResume} style={Resume} target="_blank" rel="noreferrer">Resume</a></Cv>
                </Main>
                <BigTitle text="ABOUT" top="10%" left="5%" />
            </Box>
        </ThemeProvider>
    )
}

export default AboutPage
