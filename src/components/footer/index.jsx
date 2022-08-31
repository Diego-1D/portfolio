import React from 'react'
import { AppBar, Box, Container, Link } from '@mui/material'
import { Description } from '../../theme/styles'
import { theme } from '../../theme/muiTheme';
import { LinkedIn, Email, GitHub, WhatsApp } from '@mui/icons-material';

const container = {
    display: 'flex',
    flexDirection: 'column',
    padding: '1.5rem',
    justifyContent: 'center',
    alignItems: 'center',
}

const Footer = () => {
    return (
        <Container sx={container}>
            <Description>Santarém - Pará</Description>
            <Description>2022</Description>
            <Box sx={{ display: 'flex', gap: '1rem', paddingTop: '0.8rem', }}>
                <Link
                    href='https://www.linkedin.com/in/diego-fernandes-dev'
                    target='_blank'
                    rel='noreferrer'
                    color={theme.palette.grey}
                >
                    <LinkedIn fontSize='medium' />
                </Link>
                <a href='mailto:diegodfafernandes@gmail.com?subject=Assunto%20aqui'
                    target='_blank'
                    style={{ color: theme.palette.grey, textDecorationLine: 'none' }}
                >
                    <Email fontSize='medium' />
                </a>
                <Link
                    href='https://github.com/Diego-1D'
                    target='_blank'
                    rel='noreferrer'
                    color={theme.palette.grey}
                >
                    <GitHub fontSize='medium' />
                </Link>
                <Link
                    href='https://api.whatsapp.com/send?phone=5593992030706&text=Ol%C3%A1%20%F0%9F%98%83%2C%20gostaria%20de%20tomar%20um%20caf%C3%A9%20%E2%98%95%20e%20conversarmos%20um%20pouco%3F'
                    target='_blank'
                    rel='noreferrer'
                    color={theme.palette.grey}
                >
                    <WhatsApp fontSize='medium' />
                </Link>
            </Box>
        </Container>
    )
}

export default Footer