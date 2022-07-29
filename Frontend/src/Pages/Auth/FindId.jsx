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

import {
    MuiTheme
} from "../../styles/MuiTheme"

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import TextField from '@mui/material/TextField';
import { ThemeProvider } from '@mui/material/styles';

const FindId = () => {
    return (
        <ThemeProvider theme={MuiTheme}>
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
                    
                        <TextField id="name" label="이름" variant="standard" fullWidth sx={ { my:2 } } color="black" />
                        <TextField id="email" label="이메일" variant="standard" fullWidth sx={ { my:2 } } color="black" />
                </Wrap>
                <MainButton width="100%">
                    <ButtonText>아이디 찾기</ButtonText>
                </MainButton>
            </SubLoginBackgroundView>
        </ThemeProvider>
    );
};

export default FindId;