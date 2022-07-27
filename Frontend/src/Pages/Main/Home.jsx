import React from "react";
import Container from '@mui/material/Container';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ToggleButton from '@mui/material/ToggleButton';
import Box from '@mui/material/Box';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import { Typography } from "@mui/material";
import { useState, useEffect, useRef } from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SnackbarContent from '@mui/material/SnackbarContent';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import './HomeModule.css'
import money from '../../picture/money.png'
import PhoneIcon from '@mui/icons-material/Phone';
import InfoIcon from '@mui/icons-material/Info';
import {Link} from "react-router-dom";
import LoginIcon from '@mui/icons-material/Login';
import { isLoginAtom } from '../../atoms'
import {useRecoilValue} from "recoil";

const detailGo = (
  <ArrowForwardIosIcon/>
)

const padNumber = (num, length) => {
  return String(num).padStart(length, '0');
};



function Home(){
  const [min, setMin] = useState(40);
  const [sec, setSec] = useState(0);
  const time = useRef(2400);
  const timerId = useRef(null);
  const isLogin = useRecoilValue(isLoginAtom)


  useEffect(() => {
    timerId.current = setInterval(() => {
      setMin(parseInt(time.current / 60));
      setSec(time.current % 60);
      time.current -= 1
    },1000);
    return () => clearInterval(timerId.current);
  },[]);  // 처음 렌더링 될때만 실행

  useEffect(() => {
    if(time.current <= 0){
      console.log("time out")
      clearInterval(timerId.current)
    }
  }, [sec])


  // const [time, setTime] = useState("00:00")
  const [notice, setNotice] = useState("6조 화이팅!!")
  const theme = createTheme({
    palette: {
      black: {
        main: '#212121',
      }
    },
    typography: {
        fontFamily: [
          '-apple-system',
          'SCoreDream',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(','),
      },
  });

  const itemData = [
    {
      img : "https://navermaps.github.io/ios-map-sdk/assets/2-3-basic.png",
      title : "map",
      littleText : "지도를 확인해서",
      bigText : "수거기기 찾기",
      link : "/map"
    },
    {
      img : "https://cdn.codingworldnews.com/news/photo/202108/5425_7139_400.jpg",
      title : "QR",
      littleText : "QR 스캔으로",
      bigText : "꽁초 분리수거",
      link : "/qr"
    }
  ]

  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
      <Container maxWidth="sm" sx={{bgcolor : "#00d3ca", height : "100vh", px:"25px"}}>
        <Box sx={{ display : "flex" }}>
          <Box sx={{flex : '3'}}>
            <h2 style={{marginTop : "50px", marginBottom : "0"}}>에코원 님이</h2>
            <h2 style={{marginTop : "0"}}>바다를 지켜준 횟수</h2>
          </Box>
          <Box sx={{flex : '1', display : 'flex', justifyContent : 'center', alignItems : 'center'}}>
            <Link to='/login' sx={{ fontSize : 'medium'}} style={{ color : 'black' }}>
              <LoginIcon/>
            </Link>
            <ToggleButton value="justify" aria-label="justified" sx={{ border : "0" }}>
              <FormatAlignJustifyIcon />
            </ToggleButton>
          </Box>
        </Box>
        <Box sx={{ display : 'flex', flexDirection : 'column' ,justifyContent : 'center', bgcolor : 'white', borderRadius : "30px", px : 2 }}>
          <Box sx={{ display : 'flex', justifyContent : 'center', alignItems : 'center', flexDirection : 'column', m: 2 }}>
            <Typography component="h4" variant="h6">
              다음 이용까지
            </Typography>
             { (sec < 10) ?  <h3 style={{ margin : 0 }}>{ min } : 0{ sec }</h3>  : <h3 style={{ margin : 0 }}>{ min } : { sec }</h3> } 
          </Box>
          <Box>
            <SnackbarContent style={{ backgroundColor : "#eeeeee", color : "black" }} message={ notice } action={ detailGo }  />
          </Box>
           <ImageList sx={{ width: "100%", height: "100%", my: 1 }} gap={6} cols={2} rowHeight={137}>
      {itemData.map((item) => (
          <Link to={item.link} style={{ color : 'black', textDecoration : 'none' }}>
            <ImageListItem className="banner" key={item.img}>
                <img
                  style={{ borderRadius : "10px" }}
                  src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
              <div className="banner-txt">
                <h5 style={{ fontSize : "1px", margin : "3px" }}>{ item.littleText }</h5>
                <h4 style={{ fontWeight : "bold" ,fontSize : "10px", margin : "10px" }}>{ item.bigText }</h4>
              </div>
            </ImageListItem>
          </Link>
      ))}
    </ImageList>
        <Box sx={{ display : "flex", width : "100%", height : "10vh", borderRadius : "10px" }} style={{ backgroundColor : "#eeeeee" }}>
          <Box sx={{ width : "100%", height : "10vh", flex : "4", px : 1 }} className="align">
            <h3 style={{ margin : "1px" }} >포인트 확인</h3>
            <h5 style={{ margin :  "1px" }}>내가 적립한 포인트 확인하기</h5> 
          </Box>
          <Box sx={{ flex : "2" }}>
            <img style={{ borderRadius : "10px" }} className="fitting" src={money}/>
          </Box>
        </Box>
        <Box sx={{ display : "flex", width : "100%", height : "10vh", my : 2 }}>
          <Box sx={{ flex : '1', mr : 2, borderRadius : "10px" }} style={{ backgroundColor : "#eeeeee" }} className="align-center">
            <InfoIcon sx = {{ pb : 1, fontSize : "35px" }} ></InfoIcon>
            <h5 style={{ margin : 0 }}>서비스 안내</h5>
          </Box>
          <Box sx={{ flex : '1', borderRadius : "10px" }} style={{ backgroundColor : "#eeeeee" }} className="align-center">
            <PhoneIcon sx={{ pb : 1, fontSize : "35px" }}></PhoneIcon>
            <h5 style={{ margin : 0 }}>1:1 문의</h5>
          </Box>
        </Box>
        </Box>
      </Container>
    </React.Fragment>
    </ThemeProvider>
  )
}

export default Home;
