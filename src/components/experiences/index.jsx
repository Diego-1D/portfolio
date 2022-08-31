import React from 'react'
import { AppBar, Box, Container, Typography } from '@mui/material'
import { Description, SubTitle, Title } from '../../theme/styles'
import { theme } from '../../theme/muiTheme'

const wrapper = {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: '1.5rem'
}

const Experiences = () => {
    return (
        <Container 
        id='experiences'
        sx={{
            minHeight: 'auto',
            paddingTop: '1rem',
            paddingBottom: '2rem'
        }}>
            <Title>Experiências</Title>
            <Box sx={wrapper}>
                <Typography
                    variant='h6'
                    sx={{
                        color: theme.palette.light,
                        fontWeight: 'bold'
                    }}>
                    Acadêmica
                </Typography>
                <SubTitle>Universidade:
                    <Description> Centro Universitário Luterano de Santarém · Ceuls/Ulbra</Description>
                </SubTitle>
                <SubTitle>Curso:
                    <Description> Bacharelado em Sistemas de Informação </Description>
                </SubTitle>
                <SubTitle>Período:
                    <Description> Agosto de 2017 · Junho de 2021 </Description>
                </SubTitle>
            </Box>
            <Box sx={wrapper}>
                <Typography
                    variant='h6'
                    sx={{
                        color: theme.palette.light,
                        fontWeight: 'bold'
                    }}>
                    Profissional
                </Typography>
                <SubTitle>Empresa:
                    <Description> Tracktus</Description>
                </SubTitle>
                <SubTitle>Localidade:
                    <Description> Rio Grande do Sul, Brasil · Remoto</Description>
                </SubTitle>
                <SubTitle>Cargo: <Description> Desenvolvedor de front-end · Freelance</Description>
                </SubTitle>
                <SubTitle>Período:
                    <Description> Jun de 2022 - Jul de 2022 · 2 meses</Description>
                </SubTitle>
                <SubTitle>Descrição:
                    <Description> Desenvolvimento de aplicações web utilizando o NextJS, React e Material UI.</Description>
                </SubTitle>
                <SubTitle>Competências: <Description> Next.js · React.js · Javascript/Typescript · Material-UI</Description>
                </SubTitle>
            </Box>
        </Container>
    )
}

export default Experiences