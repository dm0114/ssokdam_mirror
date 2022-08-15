import { ThemeProvider } from '@mui/material';
import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { BinWrapper, MainBackGround } from '../../styles/BackgroundStyle'
import { MuiTheme } from '../../styles/MuiTheme';
import { HeaderWrapper, SubBackgroundView, Wrap, MainText} from '../../styles/SubLoginStyles';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const Fail = () => {
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
                <MainText flex="3">수거 실패!</MainText>
                <BinWrapper flex="1"></BinWrapper>
            </HeaderWrapper>
        </Wrap>

        <BinWrapper mt="auto" mb="auto">
          <BinWrapper display="flex" jc="center" ai="center">
            <p style={{fontSize: "24px", fontWeight: 600}}>꽁초 인식을 실패했습니다!</p>
          </BinWrapper>
          <img src="https://i.postimg.cc/B67CnbTb/1.jpg" alt="loading-belu-min" style={{width: "100%"}}/>
          <BinWrapper display="flex" jc="center" ai="center">
            다시 확인해주세요
          </BinWrapper>
        </BinWrapper>
      </SubBackgroundView>
    </ThemeProvider>
  )
}

export default Fail


