import React from 'react'
import { Technologies } from '../../data/technologies'
import { SubTitle, Title } from '../../theme/styles'
import { AppBar, Box, Container } from '@mui/material'

const container = {
    minHeight: 'auto',
    paddingY: '3rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
}

const wrapper = {
    width: { xs: '80%', md: '58%' },
    paddingY: '2.5rem',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '4rem',
}

const Skills = () => {
    return (
        <Container id='skills' sx={container}>
            <Title>Software Skills</Title>
            <Box sx={wrapper}>
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
    )
}

export default Skills