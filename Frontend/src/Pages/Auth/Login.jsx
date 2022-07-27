import React from "react";

import Container from '@mui/material/Container';
import { CssBaseline, TextField, Typography } from "@mui/material";
import Button from '@mui/material/Button';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Box from '@mui/material/Box';
import {Link, useNavigate } from "react-router-dom"
import {useState, useEffect} from 'react'
import "./LoginModule.css"
import {
  useQuery,
} from '@tanstack/react-query'
import { isLoginAtom } from '../../atoms'
import { useSetRecoilState, useRecoilState } from 'recoil'



function Login(){

  // const { isLoading, data } = useQuery(['user'], fetchMyPage)
  const URL = 'http://localhost:8080/api/login'
  const navigate = useNavigate();
  const [isLogin,setIsLogin] = useRecoilState(isLoginAtom);
  
  const fetchLogin = async ({ id, password }) => {
    await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        userId: id,
        userPwd: password
      })
    })
    .then((res) => {
      if(!res.ok){
        alert('일치하는 회원정보가 없습니다!')
      }
      return res.json().then((res) => {
        localStorage.setItem('access-token', res.Access_token);
        setUserInfo2({
          userName : res.userName,
          userEmail : res.userEmail,
          userPoint : res.userPoint,
          userCnt : res.userCnt,
          userImage: res.userImg,
        })
        console.log(res)
      })})
        .then(() => {
          setIsLogin(true)
          navigate('/')
        })
      // .then((res) => {
      //   // 로그인 상태임을 확인 isLogin == True로 변경 =>
      //   // 쿠키에 토큰 만료시 isLogin == False로 변경
      //   localStorage.setItem('access-token', res.token);
      // })).then(()=>{
      //   setIsLogin(true);
      // })
  };

  // 계정
  const [account, setAccount] = useState({
    id : "",
    password : "",
  })

  const onChangeAccount = (e) => {
    setAccount({
      ...account,
      [e.target.name] : e.target.value
    })
  }

  const onSubmitAccount = async () => {
    try {
      const user = await fetchLogin(account);
      //성공하면 해당 user 아이디 패스워드값 셋팅
      //성공하면 해당 url로 이동(main페이지로)
    } catch (error) {
        //실패하면 throw new Error("") 값 출력
      window.alert(error);
    }
  };

  return(
    <React.Fragment>
      <Container maxWidth="sm" sx={{bgcolor : '#00d3ca', height : '100vh'}} style={{ marginX : '0px'}}>
        <Box sx={{padding:'30px 10px', justifyContent : 'center', alignItems:'center'}}>
          <Link to='/'>
            <ArrowBackIosIcon sx={{color : 'black'}}/>
          </Link>
        </Box>
        <Box sx={{display:'flex', flexDirection : 'column', justifyContent : 'center', alignItems:'flex-start', marginBottom:'20px'}}>
          <h2 style={{fontWeight : '500', marginBottom : '10px'}}>아름다운 흡연 습관</h2>
          <h1 style={{fontWeight : 'bold', marginTop : '0px'}}>에코원</h1>
        </Box>
        <Box sx={{ display : 'flex', justifyContent : 'center' }}>
          <Box sx={{ height:'64vh', width:'59vh', backgroundColor : 'white', borderRadius : '30px', paddingX : '15px'}}>
            <Box sx={{ display : 'flex', justifyContent : 'center', alignItems : 'flex-start', flexDirection : 'column', paddingLeft : '10px', paddingTop : '50px', paddingBottom : '10px' }}>
              <h2 style={{margin : '0'}}>로그인 하기 위한</h2>
              <h2 style={{margin : '0'}}>정보를 입력해주세요</h2>
            </Box>
            <Box sx={{ marginX : '10px' }}>
              <TextField 
                label="아이디" 
                fullWidth 
                required 
                name="id" 
                autoComplete='아이디' 
                autoFocus
                margin='normal'
                variant="standard"
                onChange={onChangeAccount}
                />
                <TextField 
                margin='normal'
                label="비밀번호" 
                fullWidth 
                required 
                name="password" 
                type="password" 
                variant="standard"
                autoComplete='current-password'
                onChange={onChangeAccount}
                />
            </Box>
            <Box sx={{ display : 'flex', justifyContent : 'center' }}>
            <Typography component="h3" variant="body1" color="#9e9e9e">
               <Link to={'/login/findId'} className={"findText"}>아이디 찾기</Link> | <Link to={'/login/findPw'} className={"findText"}>비밀번호 찾기</Link> 
            </Typography>
            </Box>
          <Box sx={{ display : 'flex', flexDirection : 'column', justifyContent : 'flex-end', height : '25%'}}>
            <Button onClick={onSubmitAccount} variant={"contained"} sx={{ fontWeight : 'bold' }}  style={{ backgroundColor : "#00d3ca", color : "black" }} fullWidth>
                    로그인
            </Button>
            <Link to='/signup' style={{ textDecoration : 'none' }}>
              <Button variant={"contained"} sx={{fontWeight : 'bold', marginTop : '10px' }}  style={{ backgroundColor : "#9e9e9e", color : "black" }} fullWidth>
                      회원가입
              </Button>
            </Link>
          </Box>
        </Box>
        </Box>
      </Container>
    </React.Fragment>
  )
}



export default Login;