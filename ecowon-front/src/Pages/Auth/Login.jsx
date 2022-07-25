import React from "react";
import Container from '@mui/material/Container';
import { CssBaseline, TextField, Typography } from "@mui/material";
import Button from '@mui/material/Button';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Box from '@mui/material/Box';
import { Link } from "react-router-dom"
import {useState, useEffect} from 'react'
import "./LoginModule.css"


function Login(){
  const URL = "http://localhost:8080/api/login/json"
  // const getUser = async() => {
  //   const json = await( await fetch(URL)).json()
  //   console.log(json[0])
  // }
  // useEffect(()=>{
  //   getUser()
  // },[])
  const fetchLogin = async ({ id, password }) => {
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
    },
      body: JSON.stringify({
        id: id,
        password: password
      })
    })
    .then((res) => console.log(res))
    // if (response.ok) {
    //     //서버통신이 성공적으로 이루어지면 users에 json값 대입
    //   const users = await response.json();
    //
    //   //users안 객체들을 순회하면서 그 객체들의 id값과 form 컴포넌트에서 받음 account의 id값과 비교
    //   //서로 일치하는 것만 user에 대입
    //   const user = users.find((user) => user.id === id);
    //   //일치하는 user가 없거나, 비밀번호가 틀리면 해당 에러 생성
    //   if (!user || user.password !== password) {
    //     throw new Error("아이디 또는 비밀번호가 일치하지 않습니다.");
    //   }
    //
    //   //모든게 일치하면 그 user 정보 return -> 이 return값이 form 컴포넌트 내 fetchLogin 함수 값으로 출력되는것
    //   //form 컴포넌트에서 setUser값에 넣어야함
    //   console.log(user)
    //   return user;
    // }
    //
    // //서버 통신이 안이루어졌을떄
    // throw new Error("서버 통신이 원활하지 않습니다.");
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
    console.log(account)
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
          <ArrowBackIosIcon sx={{color : 'black'}}/>
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