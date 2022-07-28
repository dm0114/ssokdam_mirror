import React from 'react'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import AdminNav from './components/AdminNav'
import AdminSideBar from "./components/AdminSideBar";
import {useRecoilValue} from "recoil";
import { userInfo } from '../../atoms'
import {createTheme, ThemeProvider} from "@mui/material/styles";


const theme = createTheme(
    {
        palette: {
            black: {
                main: "#212121",
            },
        },
        typography: {
            fontFamily: [
                "-apple-system",
                "SCoreDream",
                "BlinkMacSystemFont",
                '"Segoe UI"',
                "Roboto",
                '"Helvetica Neue"',
                "Arial",
                "sans-serif",
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"',
            ].join(","),
        },
    }
);

function AdminHome(){
    const adminInfo = useRecoilValue(userInfo)

    return (
        <ThemeProvider theme={theme}>
            <React.Fragment>
                    <AdminNav adminName={adminInfo.userName}/>
                    <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
                        <AdminSideBar/>
                    </Box>
            </React.Fragment>
        </ThemeProvider>
    )
}

export default AdminHome;