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

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { ThemeProvider } from "@mui/material/styles";

import { MuiTheme } from "../../styles/MuiTheme";
import FetchFindPw from "../../api/findPw";

export const FindPw = () => {
  const navigate = useNavigate();
  const [isReadyToSubmit, setIsReadyToSubmit] = useState(false);

  const [inputData, setInputData] = useState({
    userId: "",
    userPhone: "",
  });
  const [resData, setResData] = useState("");

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
    const resUserInfomation = await FetchFindPw(inputData);

    if (!!Object.keys(resUserInfomation).includes("error")) {
      alert(resUserInfomation.error);
    } else {
      setResData(resUserInfomation.userPwd);
      handleClickOpen();
    }
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
            <MainText flex="3">비밀번호 찾기</MainText>
            <BinWrapper flex="1"></BinWrapper>
          </HeaderWrapper>

          <TextField
            id="userId"
            label="아이디"
            variant="standard"
            fullWidth
            sx={{
              my: 2,
            }}
            onChange={onChangeInputData}
            color="black"
          />

          <TextField
            id="userPhone"
            label="핸드폰 번호"
            variant="standard"
            fullWidth
            sx={{
              my: 2,
            }}
            onChange={onChangeInputData}
            color="black"
          />
        </Wrap>
        {isReadyToSubmit ? (
          <MainButton
            width="100%"
            type="submit"
            onClick={() => onSubmitAccount(inputData)}
          >
            <ButtonText>비밀번호 찾기</ButtonText>
          </MainButton>
        ) : (
          <NotReadyToSubmitButton>
            <ButtonText>비밀번호 찾기</ButtonText>
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
                비밀번호 찾기 결과
                <br />
              </DialogContentText>
              <DialogTitle id="alert-dialog-title" style={{textAlign: 'center'}}>{resData}</DialogTitle>
            </DialogContent>
            <DialogActions>
              <Button
                onClick={() => {
                  handleClose();
                  navigate("/login");
                }}
                autoFocus
              >
                확인
              </Button>
            </DialogActions>
          </Dialog>
        </>
      </SubLoginBackgroundView>
    </ThemeProvider>
  );
};

export default FindPw;
