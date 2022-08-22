import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import {
    AppBar,
    Box,
    Button,
    Container,
    IconButton,
    Menu,
    MenuItem,
    Toolbar,
    Tooltip,
    Typography
} from '@mui/material'
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const options = [
    {
        id: 'home',
        name: 'Home'
    },
    {
        id: 'about',
        name: 'Sobre'
    },
    {
        id: 'portfolio',
        name: 'Porftólio'
    },
    {
        id: 'skills',
        name: 'Skills'
    },
    {
        id: 'works',
        name: 'Trabalhos'
    }
];

const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false);
    const [anchorElUser, setAnchorElUser] = useState(false);

    const [active, setActive] = useState("Home")

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <AppBar sx={{ bgcolor: '#161E35', boxShadow: 0 }}>
            <Container>
                <Toolbar disableGutters
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}>
                    <Link to="/" onClick={toggleHome}>
                        <Typography
                            variant="h6"
                            sx={{
                                display: 'flex',
                                fontFamily: 'Poppins, sans-serif',
                                fontWeight: 700,
                                cursor: 'pointer'
                            }}
                        >
                            Diego <span style={{ color: '#F8032D', paddingLeft: '0.3rem' }}> Fernandes</span>
                        </Typography>
                    </Link>
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}                    >
                        {options.map((option) => (
                            <Link
                                to={option.id}
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-50}
                            >
                                <Button
                                    key={option.id}
                                    onClick={() => setActive(option.name)}
                                    sx={{
                                        ml: 2,
                                        color: `${active === option.name ? '#F8032D' : '#FFF'}`,
                                        textDecoration: `${active === option.name ? 'underline' : 'none'}`,
                                        textDecorationColor: `${active === option.name ? '#F8032D' : ''}`,
                                        display: 'block',
                                    }}
                                >{option.name}
                                </Button>
                            </Link>
                        ))}
                    </Box>

                    {/* Modo Responsivo */}
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <Tooltip title="Open settings">
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="open drawer"
                                onClick={() => setAnchorElUser(true)}
                            >
                                <MenuIcon />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={() => setAnchorElUser(false)}
                        >
                            {options.map((option) => (
                                <Link
                                    to={option.id}
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-50}
                                >
                                    <MenuItem
                                        key={option.id}
                                        onClick={() => setAnchorElUser(false)}
                                    >
                                        <Typography sx={{ mx: '30px' }}>{option.name}</Typography>
                                    </MenuItem>
                                </Link>
                            ))}
                        </Menu>
                    </Box>

                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Navbar