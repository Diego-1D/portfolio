import React from 'react'
import { AppBar, Box, Container, Link } from '@mui/material'
import { Description } from '../../theme/styles'
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
        <AppBar position="static" sx={{ bgcolor: '#161E35', boxShadow: 0 }}>
            <Container sx={container}>
                <Description>Santarém - Pará</Description>
                <Description>2022</Description>
                <Box sx={{ display: 'flex', gap: '1rem' }}>
                    <Link href="https://www.linkedin.com/in/diego-fernandes-dev" color="inherit">
                        <LinkedIn fontSize='medium' />
                    </Link>
                    <Link href="diegodfafernandes@gmail.com" color="inherit">
                        <Email fontSize='medium' />
                    </Link>
                    <Link href="https://github.com/Diego-1D" color="inherit">
                        <GitHub fontSize='medium' />
                    </Link>
                    <Link href="https://www.linkedin.com/in/diego-fernandes-dev" color="inherit">
                        <WhatsApp fontSize='medium' />
                    </Link>
                </Box>
            </Container>
        </AppBar>
    )
}

export default Footer