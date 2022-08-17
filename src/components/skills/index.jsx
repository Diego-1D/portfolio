import React from 'react'
import { Technologies } from '../../data/technologies'
import { Title } from '../../theme/styles'
import {
    AppBar,
    Box,
    Container,
    Typography,
} from '@mui/material'

const Skills = () => {
    return (
        <AppBar position="static" sx={{ bgcolor: '#161E35' }}>
            <Container
                sx={{
                    height: 'auto',
                    paddingY: '3.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                <Title>Software Skills</Title>
                <Box
                    sx={{
                        width: '70%',
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
                                alignItems: 'center'
                            }}
                        >
                            <img
                                src={index.icon}
                                style={{
                                    width: '45px',
                                    height: '45px',
                                }}
                            />
                            <Typography variant='h6'>{index.name}</Typography>
                        </Box>
                    ))}
                </Box>
            </Container>
        </AppBar>
    )
}

export default Skills