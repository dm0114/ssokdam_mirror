import {
    SubLoginBackgroundView,
    MainButton,
    ButtonText,
    Wrap,
    Vector,
    MainText,
    HeaderWrapper,

} from './SubLoginStyles';

import {InputFormView, InputWrap, InputText, InputForm} from './InputFormStyles'
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
                        <Vector
                            alt=""
                            src="https://static.overlay-tech.com/assets/897d620b-7272-4e3f-b46a-7d57d097eecd.svg"/>
                        <MainText>아이디 찾기</MainText>
                    </HeaderWrapper>
                    
                        <TextField id="standard-basic" label="이름" variant="standard" fullWidth sx={ { my:2 } } color="black" />
                        <TextField id="standard-basic" label="이메일" variant="standard" fullWidth sx={ { my:2 } } color="black" />

                    {/* <InputFormView>
                        <InputWrap>
                            <InputText>이름</InputText>
                            <InputForm/>
                        </InputWrap>
                        <InputWrap>
                            <InputText>이름</InputText>
                            <InputForm/>
                        </InputWrap>
                    </InputFormView> */}
                </Wrap>
                <MainButton>
                    <ButtonText>아이디 찾기</ButtonText>
                </MainButton>
            </SubLoginBackgroundView>
        </ThemeProvider>
    );
};

export default FindId;