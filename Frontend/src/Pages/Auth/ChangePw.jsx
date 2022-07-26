import {
  SubLoginBackgroundView,
  MainButton,
  ButtonText,
  Wrap,
  Vector,
  MainText,
  HeaderWrapper,

} from '../../styles/SubLoginStyles';

import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const FindPassword = () => {
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
                      <Vector
                          alt=""
                          src="https://static.overlay-tech.com/assets/897d620b-7272-4e3f-b46a-7d57d097eecd.svg"/>
                      <MainText>비밀번호 찾기</MainText>
                  </HeaderWrapper>
                  
                      <TextField id="standard-basic" label="변경할 비밀번호" variant="standard" fullWidth sx={ { my:2 } } color="black" />
                      <TextField id="standard-basic" label="비밀번호 확인" variant="standard" fullWidth sx={ { my:2 } } color="black" />
              </Wrap>
              <MainButton>
                  <ButtonText>비밀번호 변경</ButtonText>
              </MainButton>
          </SubLoginBackgroundView>
      </ThemeProvider>
  );
};

export default FindPassword;