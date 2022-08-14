import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MuiTheme } from '../../styles/MuiTheme';

import { Typography } from '@mui/material';
import { useState, useEffect, useRef } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './HomeModule.css';
import LoginIcon from '@mui/icons-material/Login';
import { userInfo } from '../../atoms';
import { useRecoilState, useRecoilValue } from 'recoil';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import { recoilPersist } from 'recoil-persist';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

import {
  MainBackGround,
  MiddleBackground,
  SubBackGround,
  BinWrapper,
  TopBackGround,
} from '../../styles/BackgroundStyle';

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
  MiddleText,
  Footer,
  NameText,
  SubNotice,
  SubNoticeText,
  MiddleImg,
} from '../../styles/HomeStyle';

import { NavBar } from '../Nav/NavBar';
import { getCookieToken, removeCookieToken } from '../../Cookie';

const detailGo = <ArrowForwardIosIcon />;
// const padNumber = (num, length) => {
//   return String(num).padStart(length, '0');
// };

function Home() {
  const [userLevel, setUserLevel] = useState(1);

  const [min, setMin] = useState(40);
  const [sec, setSec] = useState(0);
  const time = useRef(2400);
  const timerId = useRef(null);
  // const [time, setTime] = useState("00:00")

  const [notice, setNotice] = useState('');
  const navigate = useNavigate();
  const [userInfo2, setUserInfo2] = useRecoilState(userInfo);

  const logout = () => {
    localStorage.removeItem('access-token');
    removeCookieToken();
    setUserInfo2({
      userName: '',
      userEmail: '',
      userPoint: '',
      userCnt: '',
      userImage: '',
    });
  };

  useEffect(() => {
    timerId.current = setInterval(() => {
      setMin(parseInt(time.current / 60));
      setSec(time.current % 60);
      time.current -= 1;
    }, 1000);
    return () => clearInterval(timerId.current);
  }, []); // 처음 렌더링 될때만 실행

  useEffect(() => {
    if (time.current <= 0) {
      console.log('time out');
      clearInterval(timerId.current);
    }
  }, [sec]);

  useEffect(() => {
    if (userInfo2.userCnt === '') {
      setUserLevel('https://i.postimg.cc/bJ0xx4Tk/1.gif')
    } else if (userInfo2.userCnt <= 20) {
      setUserLevel('https://i.postimg.cc/BZg5X9tG/2.gif')
    } else if (userInfo2.userCnt <= 40) {
      setUserLevel('https://i.postimg.cc/0jc73mhN/3.gif')
    } else {
      setUserLevel('https://i.postimg.cc/6q9dYzjS/4.gif')
    }
  }, [userInfo2.userCnt])

  return (
    <ThemeProvider theme={MuiTheme}>
      <MainBackGround bgColor='#fff'>
        <BinWrapper>
          <TopBackGround>
            <BinWrapper display='flex' fd='row' pt='60px' pl='24px' pr='24px'>
              <NameText>
                {(localStorage.getItem('access-token') !== 'undefined' && localStorage.getItem('access-token') !== null) ? (
                  <>{userInfo2.userName} 님이</>
                ) : (
                  <></>
                )}
              </NameText>

              <MainContainer flexNum='1' jc='flex-end'>
                {(localStorage.getItem('access-token') !== 'undefined' && localStorage.getItem('access-token') !== null) ? (
                  <>
                    {/* <MainIcon>
                          <Link to='/myPage'>
                            <AccountCircleIcon color='black'/>
                          </Link>
                        </MainIcon> */}
                    <MainIcon>
                      <LogoutIcon onClick={logout} />
                    </MainIcon>
                    <MainIcon>
                      <Link to='/alarm'>
                        <NotificationsNoneIcon color='black' />
                      </Link>
                    </MainIcon>
                  </>
                ) : (
                  <MainIcon>
                    <Link to='/login'>
                      <LoginIcon color='black' />
                    </Link>
                  </MainIcon>
                )}

                <MainIcon>
                  <NavBar />
                </MainIcon>
              </MainContainer>
            </BinWrapper>

            <BinWrapper display='flex' fd='row' pl='24px' mt='8px' mb="24px">
              <BinWrapper>
                <MainContainer flexNum='3'>
                  {(localStorage.getItem('access-token') !== 'undefined' && localStorage.getItem('access-token') !== null) ? (
                    <NameText>바다를 지켜준 횟수</NameText>
                  ) : (
                    <MainText>
                      쏙담과 <br />
                      <br />
                      바다를 지켜주세요
                    </MainText>
                  )}
                </MainContainer>
                {(localStorage.getItem('access-token') !== 'undefined' && localStorage.getItem('access-token') !== null) ? (
                  <MiddleText>{userInfo2.userCnt}회</MiddleText>
                ) : null}
              </BinWrapper>
              <BinWrapper display="flex" fd="row-reverse" ai="" pr="24px" pt="24px">
                <MiddleImg src={`${userLevel}`} alt="" />
              </BinWrapper>
            </BinWrapper>
          </TopBackGround>

          <BinWrapper
            display='flex'
            ai='center'
            jc='center'
            pl='24px'
            pr='24px'
            mt='32px'
          >
            <BinWrapper display='flex' fd='column' ai='center' jc='center'>
              <SubNoticeText>다음 이용까지</SubNoticeText>
              <SubNotice>
                <TimeController>
                  {sec < 10 ? (
                    <h4 style={{ margin: 0 }}>
                      {min} : 0{sec}
                    </h4>
                  ) : (
                    <h4 style={{ margin: 0 }}>
                      {min} : {sec}
                    </h4>
                  )}
                </TimeController>
              </SubNotice>
            </BinWrapper>

            <img
              alt=''
              src='https://static.overlay-tech.com/assets/4754c232-09de-4793-b61f-0f83dcdf791f.svg'
              width='10px'
            />

            <BinWrapper display='flex' fd='column' ai='center' jc='center'>
              <SubNoticeText>나의 포인트</SubNoticeText>
              <SubNotice>{userInfo2?.userPoint}점</SubNotice>
            </BinWrapper>
          </BinWrapper>
        </BinWrapper>

        {/* <MiddleBackground>
            <img src="https://ifh.cc/g/fvfPJg.png" alt="" style={{objectFit: 'contain', width: '100vw'}}/>
          </MiddleBackground> */}

        <SubBackGround>
          <BinWrapper pl='24px' pr='24px' mb='16px'>
            <Notice
              message={notice}
              action={detailGo}
              onClick={() => navigate('/notice')}
              br='10px'
            >
              <NoticeText>공지사항 📢</NoticeText>
              <ChevronRight
                alt=''
                src='https://static.overlay-tech.com/assets/cdd4539a-7fd6-46c2-96bc-dbee9bd4530c.svg'
              />
            </Notice>
          </BinWrapper>

          <BinWrapper pl='24px' pr='24px' mb='16px'>
            <MainWrapper>
              <QrMapButton
                url='https://static.overlay-tech.com/assets/2b51331a-8e20-45a6-a7e2-45e5218306bc.png'
                onClick={() => navigate('/map')}
              >
                <QrMapSubText>
                  지도를 확인해서
                  <QrMapMainText>수거기기 찾기</QrMapMainText>
                </QrMapSubText>
              </QrMapButton>
              <QrMapButton
                url='https://static.overlay-tech.com/assets/cba3e919-a122-429f-8edc-4c5eebd06709.png'
                onClick={() => navigate('/qr')}
              >
                <QrMapSubText>
                  QR 스캔으로
                  <QrMapMainText>꽁초 수거하기</QrMapMainText>
                </QrMapSubText>
              </QrMapButton>
            </MainWrapper>
          </BinWrapper>

          <BinWrapper pl='24px' pr='24px' mb='16px'>
            <Point onClick={() => navigate('/exchange')}>
              <PointSubText>
                <PointMainText>
                  포인트 확인
                  <br />
                </PointMainText>
                내가 적립한 포인트 확인하기
              </PointSubText>
              <PointImg
                alt=''
                src='https://static.overlay-tech.com/assets/e2e20f2a-e20c-4c5f-9bc6-71ef706fd79e.png'
              />
            </Point>
          </BinWrapper>

          <BinWrapper pl='24px' pr='24px' mb='16px'>
            <MainWrapper bs='rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'>
              <Service br='10px 0px 0px 10px'>
                <BinWrapper
                  onClick={() => navigate('/myPage')}
                  display='flex'
                  fd='column'
                  jc='center'
                  ai='center'
                >
                  <ServiceVector
                    alt=''
                    src='https://static.overlay-tech.com/assets/ec312d4a-84ac-4930-ae91-6ca29a07712d.svg'
                  />
                  <ServiceText>마이 페이지</ServiceText>
                </BinWrapper>
              </Service>
              <Service>
                <BinWrapper
                  onClick={() => navigate('/serviceInfo')}
                  display='flex'
                  fd='column'
                  jc='center'
                  ai='center'
                >
                  <ServiceVector
                    alt=''
                    src='https://static.overlay-tech.com/assets/38a95fc7-fb7d-4c9a-8f8b-acde86a3f47f.svg'
                  />
                  <ServiceText>서비스 안내</ServiceText>
                </BinWrapper>
              </Service>
              <Service br='0px 10px 10px 0px'>
                <BinWrapper
                  onClick={() => navigate('/serviceCenter')}
                  display='flex'
                  fd='column'
                  jc='center'
                  ai='center'
                >
                  <ServiceVector
                    alt=''
                    src='https://static.overlay-tech.com/assets/1e9c2706-edd6-4fe5-b478-4c983313be34.svg'
                  />
                  <ServiceText>1:1 문의</ServiceText>
                </BinWrapper>
              </Service>
            </MainWrapper>
          </BinWrapper>
        </SubBackGround>
        <Footer>ⓒ EcoWon 2022</Footer>
      </MainBackGround>
    </ThemeProvider>
  );
}

export default Home;
