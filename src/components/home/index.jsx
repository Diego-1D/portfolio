import React from 'react'
import { Box, Button, CardMedia, Container, Link, Typography } from '@mui/material'
import { Description } from '../../theme/styles'
import { theme } from '../../theme/muiTheme'
import profileImg from '../../Images/profile.svg'

const container = {
    display: 'flex',
    flexDirection: { xs: 'column-reverse', md: 'row' },
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '7rem',
}

const Home = () => {
    return (
        <Container id='home' sx={container}>
            <Box sx={{
                flex: 0.8,
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                paddingRight: { xs: 0, md: 5 },
            }}>
                <Typography sx={{
                    fontSize: { xs: '2rem', sm: '2.4rem', md: '2.8rem' },
                    fontWeight: 700,
                    lineHeight: '3.2rem',
                    color: theme.palette.grey
                }}>
                    Olá, Eu sou um<br />
                    <span style={{ color: theme.palette.light }}>Desenvolvedor Front-End</span>
                </Typography>
                <Description>
                    Profissional formado na área de Sistemas de Informação,
                    com experiência na área de desenvolvimento de Front-End para aplicações Web.
                </Description>
                <Button sx={{
                    width: '8rem',
                    backgroundColor: theme.palette.erro,
                    borderRadius: '18px',
                    transition: '0.3s ease-in-out',

                    ':hover': {
                        backgroundColor: theme.palette.grey,
                        transition: '0.3s ease-in-out',
                    }
                }}>
                    <a href='mailto:diegodfafernandes@gmail.com?subject='
                        target='_blank'
                        style={{ color: theme.palette.light, textDecorationLine: 'none' }}
                    >
                        Contato
                    </a>
                </Button>
            </Box>
            <Box sx={{
                flex: 0.6,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: { xs: '230px', md: '360px' },
                height: { xs: '230px', md: '360px' }
            }}>
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
        </Container>
    )
}

export default Home