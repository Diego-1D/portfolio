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
            <Container sx={container}>
                <Description>Santarém - Pará</Description>
                <Description>2022</Description>
                <Box sx={{ display: 'flex', gap: '1rem' }}>
                    <Link href="https://www.linkedin.com/in/diego-fernandes-dev" target='_blank' rel='noreferrer' color="inherit">
                        <LinkedIn fontSize='medium' />
                    </Link>
                    <Link href='https://mail.google.com/mail/u/1/#inbox?compose=DmwnWrRqgkFNbRdpWfTFzmkFSKtfFxvhVcjrhCTRRBQxdXWKplsNbnXthtdqBRRtJdFklKVPFNCv' target='_blank' rel='noreferrer' color="inherit">
                        <Email fontSize='medium' />
                    </Link>
                    <Link href="https://github.com/Diego-1D" target='_blank' rel='noreferrer' color="inherit">
                        <GitHub fontSize='medium' />
                    </Link>
                    <Link href="https://wa.me/5593992030706?text=Ol%C3%A1,%20Boa%20tarde" target='_blank' rel='noreferrer' color="inherit">
                        <WhatsApp fontSize='medium' />
                    </Link>
                </Box>
            </Container>
    )
}

export default Footer