import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {useRecoilState} from "recoil";

import * as Yup from "yup";
import $ from 'jquery';

import axios from "axios"
import {userInfo} from '../../atoms'

import {toast, ToastContainer} from "react-toastify"
import {Formik, ErrorMessage} from "formik";

import {
    SubLoginBackgroundView,
    MainButton,
    ButtonText,
    Wrap,
    MainText,
    HeaderWrapper
} from '../../styles/SubLoginStyles';

import {BinWrapper} from "../../styles/BackgroundStyle";

import {MuiTheme} from "../../styles/MuiTheme"

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import {ThemeProvider} from '@mui/material/styles';

import {Experimental_CssVarsProvider, Typography} from "@mui/material"
import { borderRadius } from '@mui/system';

function SignUp() {
    const [impUid, setImpUid] = useState('')
    const [userInfo2, setUserInfo2] = useRecoilState(userInfo)
    function onClickCertification() {
        const {IMP} = window; // 생략 가능
        IMP.init("imp01330466"); // 예: imp0000000
        // 본인인증 데이터 정의
        const data = {
            merchant_uid: `mid_${new Date().getTime()}`, // 주문번호
            popup: true,
            company: 'Ecowon', // 회사명 또는 URL
            carrier: 'SKT', // 통신사
            name: '홍길동', // 이름
            phone: '01012341234', // 전화번호
        };

        IMP.certification(data, callback)
        function callback(response) {
            console.log(response)
            const {success, merchant_uid, error_msg} = response;

            if (success) {
                const {imp_uid} = response;

                // fetch(url,{     method: "post",     headers: { "Content-Type":
                // "application/json" },     data: { imp_uid: imp_uid } }) $.ajax({     url:
                // url,  예: https://www.myservice.com/certifications     method: "POST",
                // headers: { "Content-Type": "application/json" },     data: { imp_uid: imp_uid
                // } }).then((res) => console.log(res))
                const fetchCertification = async () => {
                    const url = "http://localhost:8080/api/signup/check"
                    await fetch(url, {
                        method: 'POST',
                        headers: {
                            'Content-type': 'application/json'
                        },
                        body: JSON.stringify({imp_uid: `${imp_uid}`})
                    }).then((res) => {
                        if (!res.ok) {
                            alert('성인이 아닙니다!')
                        }
                    })
                }
                fetchCertification()

                // axios.post(url, {     imp_uid : imp_uid }).then((res) => console.log(res))
                setImpUid(imp_uid)
                console.log(imp_uid)
                alert('본인인증 성공')

            } else {
                alert(`본인인증 실패: ${error_msg}`);
            }
        }

    }

    const navigate = useNavigate();
    const validationSchema = Yup
        .object()
        .shape({
            userEmail: Yup
                .string()
                .email("올바른 이메일 형식이 아닙니다!")
                .required(""),
            userId: Yup
                .string()
                .min(2, "닉네임은 최소 2글자 이상입니다!")
                .max(10, "닉네임은 최대 10글자입니다!")
                .matches(
                    /^[가-힣a-zA-Z][^!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?\s]*$/,
                    "닉네임에 특수문자가 포함되면 안되고 숫자로 시작하면 안됩니다!"
                )
                .required(""),
            userPwd: Yup
                .string()
                .min(8, "비밀번호는 최소 8자리 이상입니다")
                .max(16, "비밀번호는 최대 16자리입니다!")
                .required("")
                .matches(
                    /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])[^\s]*$/,
                    "알파벳, 숫자, 공백을 제외한 특수문자를 모두 포함해야 합니다!"
                ),
            userPwd2: Yup
                .string()
                .oneOf([
                    Yup.ref("userPwd"), null
                ], "비밀번호가 일치하지 않습니다!")
                .required("")
        });

    const submit = async (values) => {
        const URL = "http://localhost:8080/api/signup"
        console.log("왔어")
        const {userEmail, userId, userPwd} = values;
        try {
            // await axios.post(URL, {   userEmail : userEmail,   userId : userId,   userPwd
            // : userPwd,   imp_uid : `${impUid}` }) .then((res) => {   console.log(res)
            // alert("회원가입이 완료 되었습니다.") })
            const fetchsubmit = async () => {
                const URL = "http://localhost:8080/api/signup"
                await fetch(URL, {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(
                        {userEmail: userEmail, userId: userId, userPwd: userPwd, imp_uid: `${impUid}`}
                    )
                }).then((res) => {
                    if (res.ok) {
                        res
                            .json()
                            .then((res) => {
                                localStorage.setItem('access-token', res.Access_token)
                                setUserInfo2(
                                    {userName: res.userName, userEmail: res.userEmail, userPoint: res.userPoint, userCnt: res.userCnt, userImage: res.userImg}
                                )
                            })
                    } else {
                        alert("성인이 아니거나 성인인증을 하지 않으셨습니다.")
                    }
                })
            }
            fetchsubmit()
            // 다음에 로그인하는 로직도 넣기
            toast.success()
            // toast.success(<h3>회원가입이 완료되었습니다.<br/>로그인 하세요😎</h3>, {   position:
            // "top-center",   autoClose: 2000 });

            setTimeout(() => {
                navigate("/");
            }, 2000);

        } catch (e) {
            alert("서버와 연결되지 않았습니다.")
            console.log("안왔어")
            // 서버에서 받은 에러 메시지 출력 toast.error(e.response.data.message + "😭", {   position:
            // "top-center", });
        }
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
                        <MainText flex="3">회원 가입</MainText>
                        <BinWrapper flex="1"></BinWrapper>
                    </HeaderWrapper>
                </Wrap>

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        flex: '1'
                    }}>
                    <Formik
                        initialValues={{
                            userEmail: "",
                            userId: "",
                            userPwd: "",
                            userPwd2: ""
                        }}
                        validationSchema={validationSchema}
                        onSubmit={submit}
                        validateOnMount={true}>
                        {
                            ({values, handleSubmit, handleChange, errors}) => (
                                <Box>
                                    <ToastContainer/>
                                    <form onSubmit={handleSubmit} autoComplete="off">

                                        <TextField
                                            value={values.userId}
                                            name="userId"
                                            onChange={handleChange}
                                            error={!!(errors.userId)}
                                            helperText={!!(errors.userId)
                                                ? errors.userId
                                                : ' '}
                                            id="id"
                                            label="아이디"
                                            variant="standard"
                                            fullWidth
                                            sx={{
                                                my: 4
                                            }}
                                            color="black"/>

                                        <TextField value={values.userPwd} name="userPwd" type="password" onChange={handleChange}
                                            error={!!errors.userPwd}
                                            helperText={!!(!!errors.userPwd) ? errors.userPwd : ' '} 
                                            id="pw" label="비밀번호" variant="standard" fullWidth color="black"/>

                                        <TextField
                                            value={values.userPwd2}
                                            name="userPwd2"
                                            type="password"
                                            onChange={handleChange}
                                            error={!!errors.userPwd2}
                                            helperText={!!errors.userPwd2
                                                ? errors.userPwd2
                                                : ' '}
                                            id="pw2"
                                            label="비밀번호 확인"
                                            variant="standard"
                                            fullWidth
                                            sx={{
                                                marginBottom: "32px"
                                            }}
                                            color="black"/>

                                        <TextField
                                            value={values.userEmail}
                                            name="userEmail"
                                            onChange={handleChange}
                                            type="email"
                                            error={!!(errors.userEmail)}
                                            helperText={!!(errors.userEmail)
                                                ? errors.userEmail
                                                : ' '}
                                            id="email"
                                            label="이메일"
                                            variant="standard"
                                            fullWidth
                                            sx={{
                                              marginBottom: "32px"
                                            }}
                                            color="black"/>
                                        <MainButton 
                                          width="100%" 
                                          type='submit'
                                          onClick={onClickCertification}
                                        >
                                          <ButtonText>인증 요청</ButtonText>
                                        </MainButton>
                                    </form>
                                </Box>
                            )
                        }
                    </Formik>
                </Box>
                <MainButton width="100%" type='submit'>
                    <ButtonText>회원 가입</ButtonText>
                </MainButton>
            </SubLoginBackgroundView>
        </ThemeProvider>
    )
}

export default SignUp;