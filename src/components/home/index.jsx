import React from 'react'
import { Description } from '../../theme/styles'
import { AppBar, Box, Button, CardMedia, Container, Typography } from '@mui/material'
import profileImg from '../../Images/profile.svg'

const Home = () => {
    return (
        <AppBar position='static' sx={{ bgcolor: '#161E35' }}>
            <Container>
                <Box
                    sx={{
                        display: { xs: 'block', md: 'flex' },
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingY: '3.5rem',
                    }}>
                    <Box
                        sx={{
                            flex: 0.8,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1rem',
                            paddingRight: { xs: 0, md: 5 },
                        }}>
                        <Typography variant='h3' sx={{ fontWeight: 700, color: '#ACABBD' }}>
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
                            alignItems: 'center'
                        }}>
                        <CardMedia
                            component='img'
                            image={profileImg}
                            alt='Paella dish'
                            sx={{ objectFit: 'cover', width: '320px' }}
                        />
                    </Box>
                </Box>
            </Container>
        </AppBar>
    )
}

export default Home