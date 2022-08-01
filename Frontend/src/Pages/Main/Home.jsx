import React from "react";
import {Link, useNavigate} from "react-router-dom";

import { Typography } from "@mui/material";
import { useState, useEffect, useRef } from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './HomeModule.css'
import LoginIcon from '@mui/icons-material/Login';
import { userInfo } from '../../atoms'
import {useRecoilValue} from "recoil";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import {recoilPersist} from "recoil-persist";

import {
  MainBackGround,
  SubBackGround,
  BinWrapper,
} from "../../styles/BackgroundStyle";

import {
  Notice,
  NoticeText,
  ChevronRight,

  QrMapSubText,
  QrMapButton,
  QrMapMainText,
  MainWrapper,
  Point,
  PointSubText,
  PointImg,
  PointMainText,
  ServiceText,
  ServiceVector,
  Service,
  TimeController,

  MainText,
  MainTextContainerWrapper,
  MainContainer,
  MainIcon,
} from "../../styles/HomeStyle";

import {
  NavBar
} from '../Nav/NavBar'

const detailGo = (
  <ArrowForwardIosIcon/>
)
// const padNumber = (num, length) => {
//   return String(num).padStart(length, '0');
// };



function Home(){
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
  const [min, setMin] = useState(40);
  const [sec, setSec] = useState(0);
  const time = useRef(2400);
  const timerId = useRef(null);
  // const [time, setTime] = useState("00:00")


  const [notice, setNotice] = useState("")
  const navigate = useNavigate()
  const userInfo2 = useRecoilValue(userInfo)
  // console.log(userInfo2);


  const logout = () => {
    localStorage.removeItem('access-token')
  }


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


  return (
    <ThemeProvider theme={theme}>
      <MainBackGround>
          <BinWrapper pt="52px" pl="24px" pr="24px">
            <MainTextContainerWrapper>
              <MainContainer flexNum="3">
                { localStorage.getItem("access-token") ? (
                  <MainText>
                    { userInfo2.userName } 님이 <br/><br/>바다를 지켜준 횟수
                  </MainText>)
                  : (<MainText>
                    EcoWon과 <br/><br/>바다를 지켜주세요
                  </MainText>)  
                }
              </MainContainer>

              <MainContainer flexNum="1" jc="flex-end">
                  { localStorage.getItem("access-token")
                  ? (<>
                    <MainIcon>
                      <Link to='/myPage'>
                        <AccountCircleIcon color='black'/>
                      </Link>
                    </MainIcon>
                    {/*<MainIcon>*/}
                    {/*  <LogoutIcon onClick={logout}/>*/}
                    {/*</MainIcon>*/}
                    </>) 

                  : (<MainIcon>
                      <Link to='/login'>
                        <LoginIcon color='black'/>
                      </Link>
                    </MainIcon>) 
                  }
                  
                  <MainIcon>
                    <NavBar />
                  </MainIcon>

              </MainContainer>
            </MainTextContainerWrapper>
          </BinWrapper>

        <SubBackGround height="60vh">              
            <BinWrapper pl="24px" pr="24px" mb="32px">
              <TimeController>
                <Typography component="h4" variant="h6">
                  다음 이용까지
                </Typography>
                { (sec < 10) ?  <h3 style={{ margin : 0 }}>{ min } : 0{ sec }</h3>  : <h3 style={{ margin : 0 }}>{ min } : { sec }</h3> } 
              </TimeController>
            </BinWrapper>

            <BinWrapper pl="24px" pr="24px" mb="16px">
              <Notice message={ notice } action={ detailGo }>
                <NoticeText>공지사항 📢</NoticeText>
                <ChevronRight alt="" src="https://static.overlay-tech.com/assets/cdd4539a-7fd6-46c2-96bc-dbee9bd4530c.svg"/>
              </Notice>
            </BinWrapper>

            <BinWrapper pl="24px" pr="24px" mb="16px">
              <MainWrapper>
                <QrMapButton url="https://static.overlay-tech.com/assets/2b51331a-8e20-45a6-a7e2-45e5218306bc.png" onClick={() => navigate('/map')}>
                  <QrMapSubText>지도를 확인해서
                    <QrMapMainText>수거기기 찾기</QrMapMainText>
                  </QrMapSubText>  
                </QrMapButton>
                <QrMapButton url="https://static.overlay-tech.com/assets/cba3e919-a122-429f-8edc-4c5eebd06709.png" onClick={() => navigate('/qr')}>
                  <QrMapSubText>QR 스캔으로
                    <QrMapMainText>꽁초 수거하기</QrMapMainText>
                  </QrMapSubText>
                </QrMapButton>
              </MainWrapper>
            </BinWrapper>

            <BinWrapper pl="24px" pr="24px" mb="16px">
              <Point>
                <PointSubText>
                  <PointMainText>포인트 확인<br /></PointMainText>
                  내가 적립한 포인트 확인하기
                </PointSubText>
                <PointImg alt="" src="https://static.overlay-tech.com/assets/e2e20f2a-e20c-4c5f-9bc6-71ef706fd79e.png"/>
              </Point>
            </BinWrapper>

            <BinWrapper pl="24px" pr="24px" mb="24px" bgColor="#fff">
              <MainWrapper>
                <Service>
                  <ServiceVector alt="" src="https://static.overlay-tech.com/assets/38a95fc7-fb7d-4c9a-8f8b-acde86a3f47f.svg"/>
                  <ServiceText>서비스 안내</ServiceText>
                </Service>
                <Service>
                  <ServiceVector alt="" src="https://static.overlay-tech.com/assets/1e9c2706-edd6-4fe5-b478-4c983313be34.svg"/>
                  <ServiceText>1:1 문의</ServiceText>
                </Service>
              </MainWrapper>
            </BinWrapper>
        </SubBackGround>

      </MainBackGround>
    </ThemeProvider>
  )
}

export default Home;
