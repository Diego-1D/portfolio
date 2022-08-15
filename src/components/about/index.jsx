import React from 'react'
import { AppBar, Box, CardMedia, Container, Typography } from '@mui/material'
import profileImg from '../../Images/profileII.png'
import { Description, SubTitle, Title } from '../../theme/styles'

const About = () => {
    return (
        <AppBar position="static" sx={{ bgcolor: '#161E35' }}>
            <Container>
                <Box
                    sx={{
                        display: { xs: 'block', md: 'flex' },
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingY: '3rem',
                    }}>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        <CardMedia
                            component="img"
                            image={profileImg}
                            alt="Paella dish"
                            sx={{ objectFit: 'cover', width: '320px' }}
                        />
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.8rem',
                        paddingLeft: { xs: 0, md: 15 }
                    }}>
                        <Title>Sobre mim</Title>
                        <Description>
                            Profissional formado na área de Sistemas de Informação, com experiência na área de desenvolvimento de Front-End para aplicações Web.
                            Atualmente, possuo pequenos projetos realizados com desenvolvimento utilizando principalmente: ReactJs, Firebase, Frameworks para CSS,
                            como Styled-Components e Ant Design, além do próprio CSS.<br />
                            Como desenvolvedor, sempre busco novas formas e métodos para criações de interfaces, não se limitando as tecnologias, possuindo
                            facilidade de aprender novas tecnologias.
                        </Description>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                        >
                            <SubTitle>Nome:  <Description>Diego Fernandes Andrade</Description> </SubTitle>
                            <SubTitle>Idade: <Description>24 anos</Description></SubTitle>
                            <SubTitle>Telefone: <Description>(93) 99203-0706</Description></SubTitle>
                            <SubTitle>E-mail: <Description>diegodfafernandes@gmail.com</Description></SubTitle>
                            <SubTitle>LinkedIn: <Description>https://www.linkedin.com/in/diego-fernandes-dev</Description></SubTitle>
                            <SubTitle>GitHub: <Description>https://github.com/Diego-1D</Description></SubTitle>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </AppBar>
    )
}

export default About