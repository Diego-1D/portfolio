import React from 'react'
import { Box, CardMedia, Container, Link } from '@mui/material'
import { Description, SubTitle, Title } from '../../theme/styles'
import profileImg from '../../Images/profileII.png'
import { theme } from '../../theme/muiTheme'

const container = {
    minHeight: 'auto',
    paddingTop: '4rem',
    paddingBottom: { xs: '2rem', md: '2.5rem' },
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
    width: { xs: '230px', md: '360px' },
    height: { xs: '230px', md: '360px' },
    marginBottom: '2.8rem'
}

const About = () => {
    return (
        <Container id='about' sx={container}>
            <Box sx={wrapper}>
                <CardMedia
                    component='img'
                    image={profileImg}
                    alt='Paella dish'
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
                    possuo experiência em desenvolvimento web. Trabalhei como freelancer em uma empresa, na qual
                    atuei com NextJs, React, Javascript/Typescript e Material UI. <br />
                    Atualmente, possuo projetos pessoais desenvolvido principalmente em: React, Firebase, Frameworks
                    para CSS, como Styled Components, Sass, Material UI e Ant Design, além do próprio CSS. Como desenvolvedor,
                    sempre busco novas formas e métodos para criações de interfaces, não se limitando as tecnologias, possuindo
                    facilidade de aprender novas tecnologias.
                </Description>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                }}>
                    <SubTitle>Nome:  <Description>Diego Fernandes Andrade</Description> </SubTitle>
                    <SubTitle>Idade: <Description>24 anos</Description></SubTitle>
                    <SubTitle>Telefone:
                        <Link
                            href='https://api.whatsapp.com/send?phone=5593992030706&text=Ol%C3%A1%20%F0%9F%98%83%2C%20gostaria%20de%20tomar%20um%20caf%C3%A9%20%E2%98%95%20e%20conversarmos%20um%20pouco%3F'
                            target='_blank'
                            rel='noreferrer'
                            sx={{ textDecorationLine: 'none' }}
                        >
                            <Description> (93) 99203-0706</Description>
                        </Link>
                    </SubTitle>
                    <SubTitle>E-mail:
                        <a href='mailto:diegodfafernandes@gmail.com?subject='
                            target='_blank'
                            style={{ color: theme.palette.light, textDecorationLine: 'none' }}
                        >
                            <Description> diegodfafernandes@gmail.com</Description>
                        </a>
                    </SubTitle>
                    <SubTitle>LinkedIn:
                        <Link
                            href='https://www.linkedin.com/in/diego-fernandes-dev'
                            target='_blank'
                            rel='noreferrer'
                            sx={{ textDecorationLine: 'none' }}
                        >
                            <Description> https://www.linkedin.com/in/diego-fernandes-dev</Description>
                        </Link>
                    </SubTitle>
                    <SubTitle>GitHub:
                        <Link
                            href='https://github.com/Diego-1D'
                            target='_blank'
                            rel='noreferrer'
                            sx={{ textDecorationLine: 'none' }}
                        >
                            <Description> https://github.com/Diego-1D</Description>
                        </Link>
                    </SubTitle>
                </Box>
            </Box>
        </Container>
    )
}

export default About