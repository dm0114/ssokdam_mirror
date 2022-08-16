import { ThemeProvider } from '@mui/material';
import React, { useEffect } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { BinWrapper, MainBackGround } from '../../styles/BackgroundStyle'
import { MuiTheme } from '../../styles/MuiTheme';
import { HeaderWrapper, SubBackgroundView, Wrap, MainText} from '../../styles/SubLoginStyles';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const Complete = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/');
    }, 3000);
  }, []);


  return (
    <ThemeProvider theme={MuiTheme}>
      <SubBackgroundView>
        <Wrap>
            <HeaderWrapper mb="48px">
                <BinWrapper flex="1">
                    <Link to="/">
                        <ArrowBackIosIcon color="black"/>
                    </Link>
                </BinWrapper>
                <MainText flex="3">수거 성공!</MainText>
                <BinWrapper flex="1"></BinWrapper>
            </HeaderWrapper>
        </Wrap>

        <BinWrapper mt="auto" mb="auto">
          <BinWrapper display="flex" jc="center" ai="center">
            <p style={{fontSize: "24px", fontWeight: 600}}>바다를 지켰습니다!</p>
          </BinWrapper>
          <img src="https://i.postimg.cc/28sWzJt4/1.jpg" alt="loading-belu-min" style={{width: "100%"}}/>
          <BinWrapper display="flex" jc="center" ai="center">
            25 포인트가 적립되었습니다.
          </BinWrapper>
        </BinWrapper>
      </SubBackgroundView>
    </ThemeProvider>
  )
}

export default Complete