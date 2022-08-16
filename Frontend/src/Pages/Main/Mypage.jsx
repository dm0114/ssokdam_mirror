import {Link, Navigate, useNavigate} from 'react-router-dom'
import { MuiTheme } from '../../styles/MuiTheme';

import {SubBackgroundView, Wrap, MainText, HeaderWrapper} from '../../styles/SubLoginStyles';
import {
    TitleWrapper,
    TitleText,
    TitleDivider,
    ContentDivider,
    ContentWrapper,
    ContentText,
    ContentVector
} from '../../styles/TitleStyle'
import {BinWrapper} from "../../styles/BackgroundStyle";
import { SubInnerText } from "../../styles/MyPageStyle"

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import {userInfo} from '../../atoms'
import {useRecoilState} from 'recoil'
import fetchUserInfo from '../../api/fetchUserInfo';
import { useEffect, useState } from 'react';
import { ThemeProvider } from '@mui/material';

export const MyPage = () => {
    const navigate = useNavigate()
    const [fetchedUserInfo, setFetchedUserInfo] = useState()
    const [userInfo2, setUserInfo2] = useRecoilState(userInfo)
    
    useEffect(() => {
      const response = fetchUserInfo()
      response.then((res) => {
        const newObject = {
          ...userInfo2,
          userPoint: res.userPoint,
          userCnt: res.userCnt,
          userTime: res.userTime,
          userImage: res.userImg
        }
        setUserInfo2(newObject)
      })
    }, [])

    return (<ThemeProvider theme={MuiTheme}> {
        (localStorage.getItem('access-token') !== 'undefined' && localStorage.getItem('access-token') !== null)
            ? (
                <SubBackgroundView>
                    <Wrap>
                        <HeaderWrapper mb="48px">
                            <BinWrapper flex="1">
                                <Link to="/">
                                    <ArrowBackIosIcon color="black"/>
                                </Link>
                            </BinWrapper>
                            <MainText flex="3">마이 페이지</MainText>
                            <BinWrapper flex="1"></BinWrapper>
                        </HeaderWrapper>
                    </Wrap>
                    <TitleWrapper>
                    <ContentDivider/>
                        <ContentWrapper>
                            <ContentText>이미지</ContentText>
                            <SubInnerText>{userInfo2.userImage}</SubInnerText>
                        <ContentVector
                            alt=""
                            src="https://static.overlay-tech.com/assets/8baf2001-760e-444e-9536-318352b328b5.svg"/>
                    </ContentWrapper>
                    <ContentDivider/>

                    <ContentWrapper>
                        <ContentText>이름</ContentText>
                    <SubInnerText>{userInfo2.userName}</SubInnerText>
                </ContentWrapper>
                <ContentDivider/>

                <ContentWrapper onClick={() => navigate('/login/changePw')}>
                    <ContentText>비밀번호</ContentText>
                    <SubInnerText>비밀번호 변경</SubInnerText>
                    <ContentVector
                        alt=""
                        src="https://static.overlay-tech.com/assets/8baf2001-760e-444e-9536-318352b328b5.svg"/>
                </ContentWrapper>
                <ContentDivider/>
            </TitleWrapper>

            <TitleWrapper>
                <ContentDivider/>
                <ContentWrapper onClick={() => navigate('/exchange')}>
                    <ContentText>포인트</ContentText>
                    <SubInnerText>{userInfo2.userPoint}</SubInnerText>
                    <ContentVector
                        alt=""
                        src="https://static.overlay-tech.com/assets/8baf2001-760e-444e-9536-318352b328b5.svg"/>
                </ContentWrapper>
                <ContentDivider/>

                <ContentWrapper>
                    <ContentText>바다를 지킨 횟수</ContentText>
                    <SubInnerText>{userInfo2.userCnt}</SubInnerText>
                </ContentWrapper>
                <ContentDivider/>
            </TitleWrapper>
        </SubBackgroundView>
            )
            : (<Navigate to="/login"/>)
    }</ThemeProvider>
    );  
  }
  
  export default MyPage;