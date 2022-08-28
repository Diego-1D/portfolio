import React from 'react'
import { Description } from '../../theme/styles'
import { AppBar, Box, Button, CardMedia, Container, Typography } from '@mui/material'
import profileImg from '../../Images/profile.svg'
import { theme } from '../../theme/muiTheme'

const container = {
    display: 'flex',
    flexDirection: { xs: 'column-reverse', md: 'row' },
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '7rem',
}

const Home = () => {
    return (
            <Container sx={container}>
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
                        color: theme.palette.light,
                        borderRadius: '18px'
                    }}>
                        Contate-me
                    </Button>
                </Box>
                <Box sx={{
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
            </Container>
    )
}

export default Home