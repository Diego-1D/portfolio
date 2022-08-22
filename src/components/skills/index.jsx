import React from 'react'
import { Technologies } from '../../data/technologies'
import { SubTitle, Title } from '../../theme/styles'
import {
    AppBar,
    Box,
    Container,
    Typography,
} from '@mui/material'

const Skills = () => {
    return (
        <AppBar id='skills' position="static" sx={{ bgcolor: '#161E35', boxShadow: 0 }}>
            <Container
                sx={{
                    minHeight: '100vh',
                    height: 'auto',
                    paddingY: '3.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}>
                <Title>Software Skills</Title>
                <Box
                    sx={{
                        width:  { xs: '80%', md: '58%' },
                        paddingY: '2.5rem',
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '4rem',
                    }}
                >
                    {Technologies.map((index) => (
                        <Box
                            key={index.id}
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: '0.5rem'
                            }}
                        >
                            <img
                                src={index.icon}
                                style={{
                                    width: '45px',
                                    height: '45px',
                                }}
                            />
                            <SubTitle>{index.name}</SubTitle>
                        </Box>
                    ))}
                </Box>
            </Container>
        </AppBar>
    )
}

export default Skills