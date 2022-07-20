import React from "react";
import Container from '@mui/material/Container';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ToggleButton from '@mui/material/ToggleButton';
import Box from '@mui/material/Box';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import { Typography } from "@mui/material";
import { useState } from "react";


function Home(){
  const [time, setTime] = useState("00:00:00")

  return (
    <React.Fragment>
      <Container maxWidth="sm" sx={{bgcolor : "#00d3ca", height : "100vh", px:"25px"}}>
        <Box sx={{ display : "flex" }}>
          <Box sx={{flex : '3'}}>
            <h2 style={{marginTop : "50px", marginBottom : "0"}}>에코원 님이</h2>
            <h2 style={{marginTop : "0"}}>바다를 지켜준 횟수</h2>
          </Box>
          <Box sx={{flex : '1', display : 'flex', justifyContent : 'center', alignItems : 'center'}}>
            <NotificationsNoneIcon/>
            <ToggleButton value="justify" aria-label="justified" sx={{ border : "0" }}>
              <FormatAlignJustifyIcon />
            </ToggleButton>
          </Box>
        </Box>
        <Box sx={{ display : 'flex', justifyContent : 'center', bgcolor : 'white', borderRadius : "30px" }}>
          <Box sx={{ display : 'flex', justifyContent : 'center', alignItems : 'center', flexDirection : 'column' }}>
            <Typography component="h4" variant="h5">
              다음 이용까지
            </Typography>
            <Typography component="h4" variant="h5">
              { time }
            </Typography>
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  )
}

export default Home;
