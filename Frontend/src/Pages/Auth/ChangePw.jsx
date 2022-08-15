import {
  SubLoginBackgroundView,
  MainButton,
  ButtonText,
  Wrap,
  Vector,
  MainText,
  HeaderWrapper,
  NotReadyToSubmitButton,

} from '../../styles/SubLoginStyles';
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BinWrapper } from '../../styles/BackgroundStyle';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { MuiTheme } from '../../styles/MuiTheme';
import { useState, useEffect } from 'react';
import ChangePwd from '../../api/changePw';



const FindPassword = () => {
  const navigate = useNavigate()
  const [isReadyToSubmit, setIsReadyToSubmit] = useState(false);
  const { state } = useLocation();
  console.log(state);

  const [inputData, setInputData] = useState({
    userPwd: "",
    userPwd2: "",
  });

  
  const onChangeInputData = (e) => {
    setInputData({
      ...inputData,
      [e.target.id]: e.target.value,
    });
  };
  
  useEffect(() => {
    if (!Object.values(inputData).includes("")) {
      setIsReadyToSubmit(true);
    } else {
      setIsReadyToSubmit(false);
    }
  }, [inputData]);

  const onSubmitAccount = async () => {
    const response = await ChangePwd(inputData.userPwd, state);
    console.log(response);
    if (response.ok === true) {
      alert('비밀번호 변경에 성공했습니다!')
      navigate('/login')
    } else {
      alert('죄송합니다. 로직을 처리하던 도중에 에러가 발생했습니다. 다시 시도해주세요.')
    }
  };

  return (
      <ThemeProvider theme={MuiTheme}>
          <SubLoginBackgroundView>
              <Wrap>
                <HeaderWrapper>
                  <BinWrapper flex="1" onClick={() => navigate(-1)}>
                      <ArrowBackIosIcon color="black" />
                  </BinWrapper>
                  <MainText flex="3">비밀번호 변경</MainText>
                  <BinWrapper flex="1"></BinWrapper>
                </HeaderWrapper>
                  
                      <TextField id="userPwd" label="변경할 비밀번호" variant="standard" fullWidth sx={ { my:2 } } color="black" onChange={onChangeInputData} />
                      <TextField id="userPwd2" label="비밀번호 확인" variant="standard" fullWidth sx={ { my:2 } } color="black" onChange={onChangeInputData} />
              </Wrap>
              {isReadyToSubmit ? (
                <MainButton
                  width="100%"
                  type="submit"
                  onClick={() => {
                    onSubmitAccount(inputData)
                  }}
                >
                  <ButtonText>비밀번호 변경</ButtonText>
                </MainButton>
              ) : (
                <NotReadyToSubmitButton>
                  <ButtonText>비밀번호 변경</ButtonText>
                </NotReadyToSubmitButton>
              )}
          </SubLoginBackgroundView>
      </ThemeProvider>
  );
};

export default FindPassword;