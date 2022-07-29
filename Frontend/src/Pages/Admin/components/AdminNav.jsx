import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {useNavigate} from "react-router-dom";

export default function AdminNav({adminName}) {
    const navigate = useNavigate()

    const logout = () => {
        localStorage.removeItem('access-token')
        navigate('/adminLogin')
    }
    
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="sticky">
                <Toolbar sx={{ display : 'flex', bgcolor : '#00d3ca', color : '#000' }}>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Box sx={{ display : 'flex', flex : '1', justifyContent : 'flex-end' }}>
                        <Typography variant="h6" component="div">
                            {adminName} 관리자님
                        </Typography>
                        <Button color="inherit" onClick={logout}>Logout</Button>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

