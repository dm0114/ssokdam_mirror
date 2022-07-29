import { Link } from 'react-router-dom'

import {
    SubLoginBackgroundView,
    MainButton,
    ButtonText,
    Wrap,
    MainText,
    HeaderWrapper,

} from '../../styles/SubLoginStyles';

import {
    BinWrapper,
  } from "../../styles/BackgroundStyle";


import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const FindId = () => {
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
                        <MainText flex="3">아이디 찾기</MainText>
                        <BinWrapper flex="1"></BinWrapper>
                    </HeaderWrapper>
                    
                        <TextField id="standard-basic" label="이름" variant="standard" fullWidth sx={ { my:2 } } color="black" />
                        <TextField id="standard-basic" label="이메일" variant="standard" fullWidth sx={ { my:2 } } color="black" />
                </Wrap>
                <MainButton width="100%">
                    <ButtonText>아이디 찾기</ButtonText>
                </MainButton>
            </SubLoginBackgroundView>
        </ThemeProvider>
    );
};

export default FindId;