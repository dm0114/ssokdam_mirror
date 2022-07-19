import React from "react";
import Container from '@mui/material/Container';
import { CssBaseline, TextField, Typography } from "@mui/material";
import Button from '@mui/material/Button';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Box from '@mui/material/Box';

function Login(){
  return(
    <React.Fragment>
      <Container maxWidth="sm" sx={{bgcolor : '#00d3ca', height : '100vh'}} style={{ marginX : '0px'}}>
        <Box sx={{padding:'30px', justifyContent : 'center', alignItems:'center'}}>
          <ArrowBackIosIcon sx={{color : 'black'}}/>
        </Box>
        <Box sx={{display:'flex', flexDirection : 'column', justifyContent : 'center', alignItems:'flex-start', marginBottom:'100px'}}>
          <h2 style={{fontWeight : '500', marginBottom : '10px'}}>아름다운 흡연 습관</h2>
          <h1 style={{fontWeight : 'bold', marginTop : '0px'}}>에코원</h1>
        </Box>
        <Box sx={{ display : 'flex', justifyContent : 'center' }}>
          <Box sx={{ height:'64vh', width:'59vh', backgroundColor : 'white', borderRadius : '30px', paddingX : '15px'}}>
            <Box sx={{ display : 'flex', justifyContent : 'center', alignItems : 'flex-start', flexDirection : 'column', paddingLeft : '10px', paddingTop : '100px', paddingBottom : '10px' }}>
              <h2 style={{margin : '0'}}>로그인 하기 위한</h2>
              <h2 style={{margin : '0'}}>정보를 입력해주세요</h2>
            </Box>
            <Box sx={{ marginX : '10px' }}>
              <TextField 
                label="아이디" 
                fullWidth 
                required 
                name="아이디" 
                autoComplete='아이디' 
                autoFocus
                margin='normal'
                />
                <TextField 
                margin='normal'
                label="비밀번호" 
                fullWidth 
                required 
                name="password" 
                type="password" 
                autoComplete='current-password'
                />
            </Box>
            <Box sx={{ display : 'flex', justifyContent : 'center' }}>
            <Typography component="h3" variant="body1" color="#9e9e9e">
                아이디 찾기 | 비밀번호 찾기
            </Typography>
            </Box>
          <Box sx={{ display : 'flex', flexDirection : 'column', justifyContent : 'flex-end', height : '25%'}}>
            <Button variant={"contained"} sx={{ fontWeight : 'bold' }}  style={{ backgroundColor : "#00d3ca", color : "black" }} fullWidth>
                    로그인
            </Button>
            <Button variant={"contained"} sx={{fontWeight : 'bold', marginTop : '10px' }}  style={{ backgroundColor : "#9e9e9e", color : "black" }} fullWidth>
                    회원가입
            </Button>
          </Box>
        </Box>
        </Box>
      </Container>
    </React.Fragment>
  )
}



export default Login;