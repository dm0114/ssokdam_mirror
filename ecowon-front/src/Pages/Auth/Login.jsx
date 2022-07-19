import React from "react";
import Container from '@mui/material/Container';
import { CssBaseline } from "@mui/material";
import Button from '@mui/material/Button';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Box from '@mui/material/Box';

function Login(){
  return(
    <React.Fragment>
      <CssBaseline/>
      <Container maxWidth="sm" sx={{bgcolor : '#00d3ca', height : '100vh'}}>
        <Box sx={{padding:'30px', justifyContent : 'center', alignItems:'center'}}>
          <ArrowBackIosIcon sx={{color : 'black'}}/>
        </Box>
        <Box sx={{display:'flex', flexDirection : 'column', justifyContent : 'center', alignItems:'flex-start', height: '' }}>
          <h2 style={{fontWeight : '500'}}>아름다운 흡연 습관</h2>
          <h1 style={{fontWeight : 'bold'}}>에코원</h1>
        </Box>
      </Container>
    </React.Fragment>
  )
}



export default Login;