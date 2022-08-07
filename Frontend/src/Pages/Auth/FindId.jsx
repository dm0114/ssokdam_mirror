import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";


import {
  SubLoginBackgroundView,
  MainButton,
  ButtonText,
  Wrap,
  MainText,
  HeaderWrapper,
  NotReadyToSubmitButton,
} from "../../styles/SubLoginStyles";
import { BinWrapper } from "../../styles/BackgroundStyle";
import { MuiTheme } from "../../styles/MuiTheme";


import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import TextField from "@mui/material/TextField";
import { ThemeProvider } from "@mui/material/styles";
import FetchFindId from "../../api/findId";




const FindId = () => {
  const navigate = useNavigate();
  const [isReadyToSubmit, setIsReadyToSubmit] = useState(false)

  const [inputData, setInputData] = useState({
    userName: "",
    userPhone: "",
  });
  const [resData, setResData] = useState({})

  const onChangeInputData = (e) => {
    setInputData({
      ...inputData,
      [e.target.id]: e.target.value,
    });
  };

  useEffect(() => {
    if (!(Object.values(inputData).includes(''))) {
      setIsReadyToSubmit(true)
    } else {
      setIsReadyToSubmit(false)
    }
  }, [inputData])


  const onSubmitAccount = async (inputData) => {
    await FetchFindId(inputData).then((res) => {
        setResData(res.userId)
        handleClickOpen()
    }); 
    
    // try {
    //   const resUserInfomation = await FetchFindId(inputData); //성공하면 해당 user 아이디 패스워드값 셋팅
    //   if (!resUserInfomation.ok) {
    //     alert('일치하는 회원정보가 없습니다!')
    //   } else {
    //     resUserInfomation.json().then((res) => {
    //       console.log(res);
    //       if ('message' in res) {
    //         throw new Error(alert('앗!'))  //비동기 진행 막기
    //       } else {
    //         setResponseData({
    //           userId : res.UserId
    //         })
    //       }
    //     }).then(() => {

    //     })
    //   }
    // } catch (error) {
    //   window.alert(error);  //실패하면 throw new Error("") 값 출력
    // }
  };


  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };


  return (
    <ThemeProvider theme={MuiTheme}>
      <SubLoginBackgroundView>
        <Wrap>
          <HeaderWrapper>
            <BinWrapper flex="1">
              <Link to="/login">
                <ArrowBackIosIcon color="black" />
              </Link>
            </BinWrapper>
            <MainText flex="3">아이디 찾기</MainText>
            <BinWrapper flex="1"></BinWrapper>
          </HeaderWrapper>

          <TextField
            id="userName"
            label="이름"
            variant="standard"
            fullWidth
            sx={{ my: 2 }}
            color="black"
            onChange={onChangeInputData}
          />
          <TextField
            id="userPhone"
            label="휴대폰 번호"
            variant="standard"
            fullWidth
            sx={{ my: 2 }}
            color="black"
            onChange={onChangeInputData}
          />
        </Wrap>
        {isReadyToSubmit ? (
          <MainButton width='100%' type='submit' onClick={() => onSubmitAccount(inputData)}>
            <ButtonText>아이디 찾기</ButtonText>
          </MainButton>
        ) : (
          <NotReadyToSubmitButton>
            <ButtonText>아이디 찾기</ButtonText>
          </NotReadyToSubmitButton>
        )}

        <>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >

                <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    아이디 찾기 결과<br/>
                    <DialogTitle id="alert-dialog-title">
                    {resData}
                    </DialogTitle>
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button onClick={() => {
                    handleClose()
                    navigate('/login')}}
                    autoFocus>
                    확인
                </Button>
                </DialogActions>
            </Dialog>
        </>
      </SubLoginBackgroundView>
    </ThemeProvider>
  );
};

export default FindId;
