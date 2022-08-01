import { Link } from 'react-router-dom'

import {
    SubLoginBackgroundView,
    MainButton,
    ButtonText,
    Wrap,
    PasswordWrap,
    MainText,
    HeaderWrapper
} from '../../styles/SubLoginStyles';
import {
    BinWrapper,
  } from "../../styles/BackgroundStyle";


import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import {createTheme, ThemeProvider} from '@mui/material/styles';

export const FindPw = () => {
    const theme = createTheme({
        palette: {
            black: {
                main: '#212121'
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
                '"Segoe UI Symbol"'
            ].join(',')
        }
    });

    return (
        <ThemeProvider theme={theme}>
            <SubLoginBackgroundView>
                <Wrap>
                    <HeaderWrapper>
                        <BinWrapper flex="1">
                                <Link to="/login">
                                    <ArrowBackIosIcon color="black"/>
                                </Link>
                            </BinWrapper>
                            <MainText flex="3">비밀번호 찾기</MainText>
                            <BinWrapper flex="1"></BinWrapper>
                    </HeaderWrapper>

                    <TextField
                        id="standard-basic"
                        label="이메일 입력"
                        variant="standard"
                        fullWidth
                        sx={{
                            my: 2
                        }}
                        color="black"/>
                    <PasswordWrap>
                        <TextField
                            id="standard-basic"
                            label="휴대폰 번호 입력"
                            variant="standard"
                            fullWidth
                            sx={{
                                my: 2,
                            }}
                            color="black"/>
                        <Button 
                            sx={{
                                  width: '30%',
                                  pb: 0,
                              }}
                            color="black"
                            >인증요청</Button>
                    </PasswordWrap>
                    <TextField
                        id="standard-basic"
                        label="인증번호 입력"
                        variant="standard"
                        fullWidth
                        sx={{
                            my: 2
                        }}
                        color="black"/>
                </Wrap>
                <MainButton width="100%">
                    <ButtonText>비밀번호 찾기</ButtonText>
                </MainButton>
            </SubLoginBackgroundView>
        </ThemeProvider>
    );
}

export default FindPw;