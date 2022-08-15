import React from 'react'
import { Projects } from '../../data/projects'
import { Description, Title } from '../../theme/styles'
import {
    AppBar,
    Box,
    Card,
    CardMedia,
    Container,
} from '@mui/material'

const Portfolio = () => {
    return (
        <AppBar position="static" sx={{ bgcolor: '#161E35' }}>
            <Container sx={{ paddingY: '1.5rem' }}>
                <Title>Portfólio</Title>
                <Box
                    sx={{
                        height: 'auto',
                        display: 'flex',
                        justifyContent: 'center',
                        flexWrap: 'wrap',
                    }}>
                    {Projects.map((index) => (
                        <Card
                            key={index.id}
                            sx={{
                                flex: '1 1 300px',
                                display: 'flex',
                                flexDirection: 'column',
                                margin: '20px',
                                border: '2px solid transparent',
                                backgroundColor: 'transparent',
                                transition: 'all 0.5s ease-in-out',
                                gap: '0.3rem',
                            }}>
                            <CardMedia
                                component="img"
                                height="180"
                                image={index.image}
                                alt={index.name}
                            />
                            <Description>{index.name}</Description>
                            <Box>
                                {index.technoUsed.map(techos => (
                                    <img
                                        src={techos}
                                        style={{
                                            width: '20px',
                                            height: '20px',
                                            paddingRight: '0.7rem'
                                        }}
                                    />
                                ))}
                            </  Box >
                        </Card>
                    ))}
                </Box>
            </Container>
        </AppBar>
    )
}

export default Portfolio