import React from "react";
import Container from '@mui/material/Container';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Box from '@mui/material/Box';
import { Typography } from "@mui/material"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function SignUp(){
  return(
    <React.Fragment>
      <Container maxWidth="sm" sx={{bgcolor : '#eff0f2', height : '100vh'}}>
      <Box sx={{display:'flex', padding:'30px', justifyContent : 'center', alignItems:'center'}}>
        <ArrowBackIosIcon sx={{color : 'black'}}/>       
          <Typography component="h5" variant="h5" sx={{ flex : '1', textAlign : 'center', fontWeight : 'bold'}}>
            회원가입
          </Typography>
      </Box>
      <Box sx={{ display : 'flex', flexDirection : 'column', flex : '1'}}>
        <Box sx={{ my : 2 }}>
          <Typography sx={{ fontWeight : 'bold' }}>
            아이디
          </Typography>
          <TextField sx={{backgroundColor : 'white'}} fullWidth  id="fullWidth" />
        </Box>
        <Box sx={{ my : 2 }}>
          <Typography sx={{ fontWeight : 'bold' }}>
            비밀번호
          </Typography>
          <TextField sx={{backgroundColor : 'white'}} fullWidth id="fullWidth" />
        </Box>
        <Box sx={{ my : 2 }}>
          <Typography sx={{ fontWeight : 'bold' }}>
            비밀번호 확인
          </Typography>
          <TextField sx={{backgroundColor : 'white'}} fullWidth id="fullWidth" />
        </Box>
        <Box sx={{ my : 2 }}>
          <Typography sx={{ fontWeight : 'bold' }}>
            이메일
          </Typography>
          <TextField sx={{backgroundColor : 'white'}} fullWidth id="fullWidth" />
        </Box>
        <Box sx={{ my : 2 }}>
          <Typography sx={{ fontWeight : 'bold' }}>
            휴대전화
          </Typography>
          <TextField sx={{backgroundColor : 'white', mb: 1}} value="대한민국 +82" fullWidth id="fullWidth" />
          <Box sx={{ display : 'flex'}}>
            <TextField sx={{ pr : 1, flex : '3' }} id="outlined-basic" label="전화번호 입력" variant="outlined" />
            <Button style={{ backgroundColor : '#00d3ca' }} variant={"contained"} sx={{ flex : '1', color : 'black', fontWeight : 'bold' }}>인증번호 받기</Button>
          </Box>
          <TextField sx={{backgroundColor : 'white', mt: 1}} label="인증번호 입력" fullWidth id="fullWidth" />
        </Box>
      </Box>
      <Button style={{ backgroundColor : '#00d3ca' }} sx={{ color : 'black', fontWeight : 'bold' }} variant={"contained"} fullWidth>회원 가입</Button>
      </Container>
    </React.Fragment>
  )
}

export default SignUp;