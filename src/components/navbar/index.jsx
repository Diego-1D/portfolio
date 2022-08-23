import React, { useState } from 'react'
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
import { Link, animateScroll as scroll } from 'react-scroll'
import { theme } from '../../theme/muiTheme';
import MenuIcon from '@mui/icons-material/Menu';

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
        id: 'works',
        name: 'Trabalhos'
    },
    {
        id: 'skills',
        name: 'Skills'
    }
];

const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false);
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
                            Diego <span style={{ color: theme.palette.erro, paddingLeft: '0.3rem' }}> Fernandes</span>
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
                                        color: `${active === option.name ? theme.palette.erro : theme.palette.light}`,
                                        textDecoration: `${active === option.name ? 'underline' : 'none'}`,
                                        textDecorationColor: `${active === option.name ? theme.palette.erro : ''}`,
                                        display: 'block',
                                    }}
                                >{option.name}
                                </Button>
                            </Link>
                        ))}
                    </Box>

                    {/* Modo Responsivo */}
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <Tooltip title="Open menu">
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="open menu"
                                onClick={() => setOpenMenu(true)}
                            >
                                <MenuIcon />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={openMenu}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(openMenu)}
                            onClose={() => setOpenMenu(false)}
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
                                        onClick={() => setOpenMenu(false)}
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