import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'


import {
    SubLoginBackgroundView,
    MainButton,
    ButtonText,
    Wrap,
    MainText,
    HeaderWrapper
} from '../../styles/SubLoginStyles';
import {
    BinWrapper,
  } from "../../styles/BackgroundStyle";


import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {ThemeProvider} from '@mui/material/styles';


import { MuiTheme } from '../../styles/MuiTheme';
import FetchFindPw from '../../api/findPw';




export const FindPw = () => {
  const navigate = useNavigate();

  const [inputData, setInputData] = useState({
    userId: "",
    userPhone: "",
  });
  const [resData, setResData] = useState({})

  const onChangeInputData = (e) => {
    setInputData({
      ...inputData,
      [e.target.id]: e.target.value,
    });
  };

  const onSubmitAccount = async () => {
    await FetchFindPw(inputData.userId, inputData.userPhone).then((res) => {
        setResData(res.userPw)
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
                                    <ArrowBackIosIcon color="black"/>
                                </Link>
                            </BinWrapper>
                            <MainText flex="3">비밀번호 찾기</MainText>
                            <BinWrapper flex="1"></BinWrapper>
                    </HeaderWrapper>

                    <TextField
                        id="userId"
                        label="아이디"
                        variant="standard"
                        fullWidth
                        sx={{
                            my: 2
                        }}
                        onChange={onChangeInputData}
                        color="black"/>

                    <TextField
                        id="userPhone"
                        label="핸드폰 번호"
                        variant="standard"
                        fullWidth
                        sx={{
                            my: 2
                        }}
                        onChange={onChangeInputData}
                        color="black"/>
                </Wrap>
                <MainButton width="100%" onClick={onSubmitAccount}>
                    <ButtonText>비밀번호 찾기</ButtonText>
                </MainButton>


                <>
                    <Dialog
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >

                        <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            비밀번호 찾기 결과<br/>
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
}

export default FindPw;