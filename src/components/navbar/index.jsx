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

const options = ['Home', 'Sobre', 'Porftólio', 'Skills', 'Trabalhos'];

const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false);
    const [anchorElUser, setAnchorElUser] = useState(false);

    return (
        <AppBar position="static" sx={{ bgcolor: '#161E35' }}>
            <Container >
                <Toolbar disableGutters
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                    <Typography
                        variant="h6"
                        sx={{
                            display: 'flex',
                            fontFamily: 'Poppins, sans-serif',
                            fontWeight: 700,
                        }}
                    >
                        Diego <span style={{ color: '#F8032D', paddingLeft: '0.3rem' }}> Fernandes</span>
                    </Typography>
                    <Box
                        sx={{ display: { xs: 'none', md: 'flex' } }}
                    >
                        {options.map((option) => (
                            <Button
                                key={option}
                                onClick={() => setOpenMenu(false)}
                                sx={{ ml: 2, color: 'white', display: 'block' }}
                            >
                                {option}
                            </Button>
                        ))}
                    </Box>

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
                                <MenuItem key={option} onClick={() => setAnchorElUser(false)}>
                                    <Typography sx={{ mx: '30px' }}>{option}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Navbar