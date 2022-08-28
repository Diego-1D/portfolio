import React from 'react'
import { AppBar, Box, CardMedia, Container, Link } from '@mui/material'
import { Description, SubTitle, Title } from '../../theme/styles'
import profileImg from '../../Images/profileII.png'

const container = {
    minHeight: 'auto',
    paddingTop: '4rem',
    paddingBottom: { xs: '2rem', md: '3rem' },
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    justifyContent: 'center',
    alignItems: 'center'
}

const wrapper = {
    flex: 0.5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: { xs: '250px', md: '380px' },
    height: { xs: '250px', md: '380px' },
    marginBottom: '2.8rem'
}

const About = () => {
    return (
            <Container sx={container}>
                <Box sx={wrapper}>
                    <CardMedia
                        component="img"
                        image={profileImg}
                        alt="Paella dish"
                        sx={{
                            height: '100%',
                            width: '100%',
                            objectFit: 'contain'
                        }}
                    />
                </Box>
                <Box
                    sx={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        paddingLeft: { xs: 0, md: 15 },
                        gap: '0.8rem'
                    }}>
                    <Title>Sobre mim</Title>
                    <Description>
                        Sou um bacharel formado em Sistemas de Informação, atuando como desenvolvedor front-end,
                        possuindo experiência em desenvolvimento web. Trabalhei como freelancer em uma empresa, nos quais
                        atuei com NextJs, React, Javascript/Typescript e Material UI. <br />
                        Atualmente, possuo projetos pessoais desenvolvido principalmente em: React, Firebase, Frameworks 
                        para CSS, como Styled Components, Sass, Material UI e Ant Design, além do próprio CSS.
                    </Description>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}>
                        <SubTitle>Nome:  <Description>Diego Fernandes Andrade</Description> </SubTitle>
                        <SubTitle>Idade: <Description>24 anos</Description></SubTitle>
                        <SubTitle>Telefone:
                            <Link href="https://wa.me/5593992030706?text=Ol%C3%A1,%20Boa%20tarde" target='_blank' rel='noreferrer' sx={{ textDecorationLine: 'none' }}>
                                <Description>(93) 99203-0706</Description>
                            </Link>
                        </SubTitle>
                        <SubTitle>E-mail:
                            <Link href='https://mail.google.com/mail/u/1/#inbox?compose=DmwnWrRqgkFNbRdpWfTFzmkFSKtfFxvhVcjrhCTRRBQxdXWKplsNbnXthtdqBRRtJdFklKVPFNCv' target='_blank' rel='noreferrer' sx={{ textDecorationLine: 'none' }}>
                                <Description> diegodfafernandes@gmail.com</Description>
                            </Link>
                        </SubTitle>
                        <SubTitle>LinkedIn:
                            <Link href='https://www.linkedin.com/in/diego-fernandes-dev' target='_blank' rel='noreferrer' sx={{ textDecorationLine: 'none' }}>
                                <Description> https://www.linkedin.com/in/diego-fernandes-dev</Description>
                            </Link>
                        </SubTitle>
                        <SubTitle>GitHub:
                            <Link href='https://github.com/Diego-1D' target='_blank' rel='noreferrer' sx={{ textDecorationLine: 'none' }}>
                                <Description> https://github.com/Diego-1D</Description>
                            </Link>
                        </SubTitle>
                    </Box>
                </Box>
            </Container>
    )
}

export default About