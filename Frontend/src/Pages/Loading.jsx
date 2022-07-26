import React from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';


function Loading(){
  return (
  <React.Fragment>
    <CssBaseline />
    <Container maxWidth="sm" sx={{ bgcolor: '#00d3ca', height: '100vh', display:'flex', justifyContent:'center', alignItems:'center' }}>
      <h1 style={{fontWeight:'bold'}}>에코원</h1>
    </Container>
  </React.Fragment>
  )
}



export default Loading;