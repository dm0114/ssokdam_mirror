import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import DoorbellIcon from '@mui/icons-material/Doorbell';
import SettingsRemoteIcon from '@mui/icons-material/SettingsRemote';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import BrokenImageIcon from '@mui/icons-material/BrokenImage';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import {useState} from "react";
import {useEffect} from "react";
import { AdminBrokenDeviceManagement } from "../AdminBrokenDeviceManagement";
import { AdminCheckDevice } from "../AdminCheckDevice";
import { AdminComplaintManagement } from "../AdminComplaintManagement";
import { AdminExchange } from "../AdminExchange";
import { AdminNotice } from "../AdminNotice";
import { AdminUserManagement } from "../AdminUserManagement";
import { AdminMain } from "../AdminMain";

const drawerWidth = 240;

function AdminSideBar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const itemIconList = [<DoorbellIcon/>,<SettingsRemoteIcon/>,<RecordVoiceOverIcon/>,<BrokenImageIcon/>,<ManageAccountsIcon/>,<CurrencyExchangeIcon/>]
    const [mode,setMode] = useState('관리자 페이지')
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    let comp = <h1>관리자 페이지</h1>

    const onModeHandling = (text) => {
        console.log(mode)
        setMode(text)
    }

    if(mode === "관리자 페이지"){
        comp = <AdminMain/>
    }else if(mode === "공지사항 관리"){
        comp = <AdminNotice/>
    }else if(mode === "기기 정보 확인"){
        comp = <AdminCheckDevice/>
    }else if(mode === "접수된 불만 사항"){
        comp = <AdminComplaintManagement/>
    }else if(mode === "접수된 고장 신고"){
        comp = <AdminCheckDevice/>
    }else if(mode === "회원 관리"){
        comp = <AdminUserManagement/>
    }else if(mode === "포인트 전환"){
        comp = <AdminExchange/>
    }else{
        comp = <h1>잘못된 페이지</h1>
    }


    const drawer = (
        <div>
            <Box sx={{ display : 'flex', justifyContent : "center", alignItems : "center", height : '64px'}} >
                <Typography component="h2" variant="h6" style={{ cursor: 'pointer' }} onClick={(e) => {
                    onModeHandling("관리자 페이지")
                }}>
                 관리자 페이지
                </Typography>
            </Box>
            <Divider />
            <List>
                {['공지사항 관리', '기기 정보 확인', '접수된 불만 사항', '접수된 고장 신고', '회원 관리','포인트 전환'].map((text, index) => (
                    <ListItem key={text}  disablePadding>
                        <ListItemButton onClick={(e) => {
                            onModeHandling(text)
                        }}>
                            <ListItemIcon>
                                {itemIconList[index]}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>

        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>


            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box>
                {comp}
            </Box>
        </Box>
    );
}


export default AdminSideBar;
