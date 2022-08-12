import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {useRecoilState} from "recoil";

import { SERVER_URL } from "../../config";
import {userInfo} from '../../atoms'

import * as Yup from "yup";
import {Formik} from "formik";
import {ToastContainer} from "react-toastify"
import {Button} from "@mui/material";
import axios from "axios";
import AccountCheck from "../../api/signup";

import {
    SubLoginBackgroundView,
    MainButton,
    SubButton,
    ButtonText,
    Wrap,
    MainText,
    HeaderWrapper,
    ButtonWrapper2,
    NotReadyToSubmitButton,

} from '../../styles/SubLoginStyles';
import {BinWrapper} from "../../styles/BackgroundStyle";
import {MuiTheme} from "../../styles/MuiTheme"

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { ThemeProvider } from '@mui/material/styles';




function SignUp() {
    const queryString = require('query-string')
    const [impUid, setImpUid] = useState('')
    const [isReadyToSubmit, setIsReadyToSubmit] = useState(false)
    const [bankNumber, setBankNumber] = useState("")
    const [accountNumber, setAccountNumber] = useState('')
    const [userInfo2, setUserInfo2] = useRecoilState(userInfo)
    const [isAccount, setIsAccount] = useState(false)
    const banks1 = [
        ["국민은행","004"],["기업은행","003"],["신한은행","088"]
    ]
    const banks2 = [
        ["농협은행","011"],["카카오뱅크","090"],["광주은행","034"]
    ]
    
    function onClickCertification(){
      const { IMP } = window; // 생략 가능
        IMP.init("imp01330466"); // 예: imp0000000
        // 본인인증 데이터 정의
        const data = {
          merchant_uid: `mid_${new Date().getTime()}`,  // 주문번호
          popup : true,
          company: 'Ecowon',                           // 회사명 또는 URL
          carrier: 'SKT',                              // 통신사
          name: '홍길동',                                // 이름
          phone: '01012341234',                        // 전화번호
        }; // 별로 의미는 없는 data(공식문서에 적어져있어서 넣어놓긴했음)

        IMP.certification(data, callback)
        function callback(response) {
            console.log(response)
            const {
              success,
              merchant_uid,
              error_msg,
            } = response;

            if (success) {
                const { imp_uid } = response;

                const fetchCertification = async () => {
                    const url =  `${SERVER_URL}/signup/check`
                    await fetch(url, {
                        method: 'POST',
                        headers: {
                            'Content-type': 'application/json'
                        },
                        body: JSON.stringify({imp_uid: `${imp_uid}`})
                    }).then((res) => {
                        console.log(res)
                        if (!res.ok) {
                            alert('성인이 아닙니다!')
                        }
                    })
                }
                fetchCertification()

                setImpUid(imp_uid) // 아임포트 성인인증이 되면 imp_uid를 ImpUid에 저장
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
        console.log(values);
        const {userEmail, userId, userPwd} = values;
        if(isAccount) {
            const fetchsubmit = async () => {
                    const URL =  `${SERVER_URL}/signup`
                    await fetch(URL, {
                        method: 'POST',
                        headers: {
                            'Content-type': 'application/json'
                        },
                        body: JSON.stringify(
                            {userEmail: userEmail, userId: userId, userPwd: userPwd, imp_uid: `${impUid}`, userAccount : `${accountNumber}`}
                        )
                    }).then((res) => {
                        if (res.ok) {
                            res.json()
                                .then((res) => {
                                    console.log(res)
                                    localStorage.setItem('access-token', res.Access_token)
                                    setUserInfo2(
                                        {userName: res.userName, userEmail: res.userEmail, userPoint: res.userPoint, userCnt: res.userCnt, userImage: res.userImg}
                                    )
                                })
                                setTimeout(() => {
                                  navigate("/");
                              }, 2000);
                        } else {
                            alert("성인이 아니거나 성인인증을 하지 않으셨습니다.")
                        }
                    }
                    ).catch((e) => alert('서버와의 통신이 원활하지 않습니다.'))
                }
            fetchsubmit()
        } else  {
            alert("계좌인증을 해주세요.")
            console.log("안왔어")

        }
    };


    const onChangeHandle = (e) => {
        setAccountNumber(e.target.value)
    }
    async function checkBankHolder(
        accessToken,
        { bankCode, bankAccountNumber },
    ) {
        // get 요청이므로 querystring으로 넘겨준다.
        const query = queryString.stringify({
            bank_code: bankCode,
            bank_num: bankAccountNumber,
            // token : accessToken
        });

        return axios.get(
            `https://api.iamport.kr/vbanks/holder?${query}`,
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`, // 인증 요청이므로 헤더에 토큰을 넘겨준다.
                },
            },
        )
            .then((res) => AccountCheck({ userName : res.data.response.bank_holder, impUid : impUid })
                .then((res) => res.json().then((res) => {
                    if(res.ok){
                        alert("계좌인증이 되었습니다!")
                        setIsAccount(true)
                    }
                })))
            .catch((error) => {
            /**
             * handling iamport error
             */
            const clientErrors = [400, 404];

            // 400, 404 에러는 유저가 값을 누락한 경우이므로 다른 에러 클래스로 처리한다.
            if (clientErrors.includes(error.response.status)) {
                throw new Error(error.response.data.message, 400);
            }

            throw new Error('iamport api 에러');
        });
    }

    const bankAccept = () => {
        if(!impUid){
            alert("성인인증을 먼저 해주세요!")
        }else{
            axios({
                url: "https://api.iamport.kr/users/getToken",
                method: "post", // POST method
                headers: { "Content-Type": "application/json" }, // "Content-Type": "application/json"
                data: {
                    imp_key: "8270742312861075", // REST API키
                    imp_secret: "dAjR0eNuEcBlF2m3jpbVAwgBg9A80aOR85pyfLpweaRqnpnynReBHOM4jTp2lvJb7Vh3XhzZOc1tjoo4" // REST API Secret
                }
            }) // token받아옴
                .then((res) => {
                    checkBankHolder(res.data.response.access_token, { bankCode : bankNumber, bankAccountNumber : accountNumber })
                })
        }
    }


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
                        flex: '1',
                        height: '80vh',
                        justifyContent: 'space-between',
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
                            ({values, handleSubmit, handleChange, errors}) =>                                 // console.log(values)
                                (
                                <Box>
                                    <ToastContainer/>
                                    <form onSubmit={handleSubmit} autoComplete="off">
                                        <Box>
                                            <Box sx={{ display : 'flex'}}>
                                                { banks1.map((bank) => (
                                                    <Button style={{ backgroundColor : 'rgba(217,217,217,1)', color : 'black' }}
                                                            variant="contained"
                                                            onClick={() => {
                                                        setBankNumber(bank[1])
                                                            }}
                                                            sx={{ flex : 1, m : 0.25 }}
                                                    >{bank[0]}</Button>
                                                ))}
                                            </Box>
                                            <Box sx={{ display : 'flex' }}>
                                                { banks2.map((bank) => (
                                                    <Button style={{ backgroundColor : 'rgba(217,217,217,1)', color : 'black' }}
                                                            variant="contained"
                                                            onClick={() => {
                                                                setBankNumber(bank[1])
                                                            }}
                                                            sx={{ flex : 1, m : 0.25 }}
                                                    >{bank[0]}</Button>
                                                ))}
                                            </Box>
                                        <Box sx={{ display : 'flex', m : 1 }}>
                                            <TextField
                                                onChange={onChangeHandle}
                                                variant="standard"
                                                fullWidth
                                                sx={{
                                                    mx : 1,
                                                    flex : 5,
                                                }}
                                                color="black"
                                            ></TextField>
                                            <Button variant="contained" sx={{ flex : 2 }} style={{ backgroundColor : '#CBF7FF', color : 'black' }} onClick={() => {
                                                bankAccept()
                                            }}>계좌인증</Button>
                                        </Box>
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
                                        </Box>

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
                                          <SubButton 
                                            width = "100%" 
                                            type = 'submit'
                                            onClick = {onClickCertification}
                                            >
                                            <ButtonText>성인 인증 요청</ButtonText>
                                          </SubButton>
                                        <MainButton width='100%' type='submit'>
                                            <ButtonText>회원 가입</ButtonText>
                                        </MainButton>
                                    </form>
                                </Box>
                            )
                        }
                    </Formik>
                </Box>
                
            </SubLoginBackgroundView>
        </ThemeProvider>
    )
}

export default SignUp;