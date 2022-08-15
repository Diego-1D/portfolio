import React from 'react'
import { AppBar, Box, CardMedia, Container, Typography } from '@mui/material'
import profileImg from '../../Images/profile.svg'

const Home = () => {
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
                    <Box sx={{ paddingRight:{ xs: 0, md: 15 }}}>
                        <Typography variant='h3' sx={{ fontWeight: 700, color: '#CCC' }}>
                            Olá, Eu sou um<br />
                            <span style={{ color: '#FFF' }}>Desenvolvedor Front-End</span>
                        </Typography>
                        <Typography variant='h6' color='#FFF' sx={{ paddingTop: '0.8rem' }}>
                            Profissional formado na área de Sistemas de Informação,
                            com experiência na área de desenvolvimento de Front-End para aplicações Web.
                        </Typography>
                    </Box>
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
                </Box>
            </Container>
        </AppBar>
    )
}

export default Home