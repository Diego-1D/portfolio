import React from 'react'
import { AppBar, Box, Container, Link } from '@mui/material'
import { Description } from '../../theme/styles'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Footer = () => {
    return (
        <AppBar position="static" sx={{ bgcolor: '#161E35' }}>
            <Container
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '1.5rem',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Description>Santarém - Pará</Description>
                <Description>2022</Description>
                <Box sx={{ display: 'flex', gap: '1rem' }}>
                    <Link href="https://www.linkedin.com/in/diego-fernandes-dev" color="inherit">
                        <LinkedInIcon fontSize='large' />
                    </Link>
                    <Link href="diegodfafernandes@gmail.com" color="inherit">
                        <EmailIcon fontSize='large' />
                    </Link>
                    <Link href="https://github.com/Diego-1D" color="inherit">
                        <GitHubIcon fontSize='large' />
                    </Link>
                    <Link href="https://www.linkedin.com/in/diego-fernandes-dev" color="inherit">
                        <WhatsAppIcon fontSize='large' />
                    </Link>
                </Box>
            </Container>
        </AppBar>
    )
}

export default Footer