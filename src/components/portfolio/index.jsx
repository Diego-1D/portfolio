import React, { useEffect, useState } from 'react'
import projectsList from '../../utils/projects'
import { Description, Title } from '../../theme/styles'
import {
    AppBar,
    Box,
    Card,
    CardMedia,
    Container,
    Pagination,
    Stack,
} from '@mui/material'

const cardImage = {
    flex: '1 1 300px',
    display: 'flex',
    flexDirection: 'column',
    margin: '25px',
    border: '1px solid transparent',
    backgroundColor: 'transparent',
    transition: 'all 0.3s ease-in-out',
    cursor: 'pointer',

    ":hover": {
        border: '1px solid #F8032D',
        transition: 'all 0.3s ease-in-out',
    }
}

const pageSize = 6

const Portfolio = () => {

    const [projects, setProjects] = useState([])
    const [pagination, setPagination] = useState({
        count: 0,
        from: 0,
        to: pageSize
    })

    useEffect(() => {
        projectsList.getData({ from: pagination.from, to: pagination.to }).then(response => {
            setPagination({ ...pagination, count: response.count })
            setProjects(response.data)
        })
    }, [pagination.from, pagination.to])

    const handlePageChange = (event, page) => {
        const from = (page - 1) * pageSize
        const to = (page - 1) * pageSize + pageSize

        setPagination({ ...pagination, from: from, to: to })
    }


    return (
        <AppBar id='portfolio' position="static" sx={{ bgcolor: '#161E35', boxShadow: 0 }}>
            <Container sx={{
                minHeight: 'auto',
                paddingY: '1.5rem'
            }}>
                <Title>Portfólio</Title>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                }}>
                    {projects.map((index) => (
                        <Card
                            key={index.id}
                            sx={cardImage}>
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
                            </Box >
                        </Card>
                    ))}
                </Box>
                <Stack spacing={2}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                    }}>
                    <Pagination
                        count={Math.ceil(pagination.count / pageSize)}
                        onChange={handlePageChange}
                        shape="rounded"
                        color="error"
                    />
                </Stack>
            </Container>
        </AppBar>
    )
}

export default Portfolio