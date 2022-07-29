import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {Link, useNavigate} from 'react-router-dom'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useState} from "react"
import {useSetRecoilState} from "recoil";
import fetchAdminLogin from "../../api/adminLogin"
import {isLoginAtom, userInfo} from "../../atoms";

const theme = createTheme(
    {
        palette: {
            black: {
                main: "#212121",
            },
        },
        typography: {
            fontFamily: [
                "-apple-system",
                "SCoreDream",
                "BlinkMacSystemFont",
                '"Segoe UI"',
                "Roboto",
                '"Helvetica Neue"',
                "Arial",
                "sans-serif",
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"',
            ].join(","),
        },
    }
);

export default function AdminLogin() {
    const navigate = useNavigate();
    const [account, setAccount] = useState({
        id: "",
        password: "",
    });
    const setIsLogin = useSetRecoilState(isLoginAtom);
    const setUserInfo2 = useSetRecoilState(userInfo);

    const onChangeAccount = (e) => {
        console.log(account)
        setAccount({
            ...account,
            [e.target.name]: e.target.value,
        });
    };

    const onSubmitAccount = async () => {
        try {
            const resUserInfomation = await fetchAdminLogin(account); //성공하면 해당 user 아이디 패스워드값 셋팅
            console.log(resUserInfomation)
            if (!resUserInfomation.ok) {
                alert('관리자가 아닙니다!')
            } else {
                resUserInfomation.json().then((res) => {
                    console.log(res)
                    if(!('message' in res)){
                        localStorage.setItem('access-token', res.Access_token);
                        setUserInfo2({
                            userName : res.userName,
                            userEmail : res.userEmail,
                            userPoint : res.userPoint,
                            userCnt : res.userCnt,
                            userImage: res.userImg,
                        })
                        setIsLogin(true)
                        navigate('/admin')
                    }else{
                        alert('관리자페이지 접근권한이 없습니다.')
                        navigate('/adminlogin')
                    }
                })
            }
        } catch (error) {
            window.alert(error);  //실패하면 throw new Error("") 값 출력
        }
    };


    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="s"  sx={{ display : 'flex', justifyContent: 'center', alignItems : 'center', bgcolor : '#bdbdbd', height : '100vh' }} >
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Box sx={{ bgcolor : 'white', borderRadius : '10px', p : 3 }}>
                        <Box sx={{ display : 'flex', flexDirection : 'column', justifyContent : 'center', alignItems : 'center'  }} >
                            <Avatar sx={{ m: 1, bgcolor : '#00d3ca' }}>
                                <LockOutlinedIcon />
                            </Avatar>
                            <Typography component="h1" variant="h5" sx={{ fontWeight : 'bold' }}>
                                에코원 관리자
                            </Typography>
                        </Box>
                        <Box component="form" onSubmit={onSubmitAccount} noValidate sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="id"
                                label="아이디"
                                name="id"
                                autoComplete="아이디"
                                autoFocus
                                onChange={onChangeAccount}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="비밀번호"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                onChange={onChangeAccount}
                            />
                            {/*<FormControlLabel*/}
                            {/*    control={<Checkbox value="remember" color="primary" />}*/}
                            {/*    label="Remember me"*/}
                            {/*/>*/}
                            <Button
                                onClick={onSubmitAccount}
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                style={{ backgroundColor : '#00d3ca' }}
                            >
                                로그인
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link to="/login/findPw" variant="body2" style={{ color : 'blue' }}>
                                        비밀번호를 잊어버리셨나요?
                                    </Link>
                                </Grid>
                                {/*<Grid item>*/}
                                {/*    <Link href="#" variant="body2">*/}
                                {/*        관리자만 로그인 해주세요*/}
                                {/*    </Link>*/}
                                {/*</Grid>*/}
                            </Grid>
                        </Box>

                    </Box>
                </Box>
                {/*<Copyright sx={{ mt: 8, mb: 4 }} />*/}
            </Container>
        </ThemeProvider>
    );
}
