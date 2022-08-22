import React from 'react'
import { Description } from '../../theme/styles'
import { AppBar, Box, Button, CardMedia, Container, Typography } from '@mui/material'
import profileImg from '../../Images/profile.svg'

const Home = () => {
    return (
        <AppBar id='home' position='static' sx={{ bgcolor: '#161E35', boxShadow: 0 }}>
            <Container>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column-reverse', md: 'row' },
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingTop: '7rem',
                        paddingBottom: '2rem'
                    }}>
                    <Box
                        sx={{
                            flex: 0.8,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1rem',
                            paddingRight: { xs: 0, md: 5 },
                        }}>
                        <Typography
                            sx={{
                                fontSize: { xs: '2rem', sm: '2.4rem', md: '2.8rem' },
                                fontWeight: 700,
                                lineHeight: '3.2rem',
                                color: '#ACABBD'
                            }}>
                            Olá, Eu sou um<br />
                            <span style={{ color: '#FFF' }}>Desenvolvedor Front-End</span>
                        </Typography>
                        <Description>
                            Profissional formado na área de Sistemas de Informação,
                            com experiência na área de desenvolvimento de Front-End para aplicações Web.
                        </Description>
                        <Button
                            sx={{
                                width: '8rem',
                                backgroundColor: '#F8032D',
                                color: '#FFF',
                                borderRadius: '18px'
                            }}
                        >
                            Contate-me
                        </Button>
                    </Box>
                    <Box
                        sx={{
                            flex: 0.6,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: { xs: '250px', md: '380px' },
                            height: { xs: '250px', md: '380px' }
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
                </Box>
            </Container>
        </AppBar>
    )
}

export default Home