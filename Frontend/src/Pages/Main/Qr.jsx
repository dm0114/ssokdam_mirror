import { NONEAPI_URL } from '../../config';

import Container from "@mui/material/Container";
import React, {useState} from 'react'
import {Fab, TextareaAutosize} from '@material-ui/core'
import {ArrowBack} from '@material-ui/icons'
import { Link } from "react-router-dom";
import QrScan from 'react-qr-reader'
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Box from "@mui/material/Box";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import { userInfo } from '../../atoms'
import {useRecoilState} from "recoil";
import {useEffect} from "react";


function Qr(){
    const [qrscan, setQrscan] = useState('QR을 스캔해주세요.');
    const navigate = useNavigate();
    const [userInfo2, setUserInfo2] = useRecoilState(userInfo)
    const [screenSize, setScreenSize] = useState([window.innerWidth, window.innerHeight])
    const handleScan = data => {
        if (data) {
            setQrscan(data)
            // 백엔드에 URL 보내기
            const fetchQr = async () => {
                
                const URL = `${NONEAPI_URL}/embedded/qr`
                await fetch(URL, {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify({
                        embId: parseInt(data),
                        token: localStorage.getItem('access-token')
                    })
                }).then((res) => navigate('/'))
            }
            fetchQr()

            // const deviceOpen =  async () => {
            //     let response = await axios.post(URL, {
            //         embId : parseInt(data),
            //         token : localStorage.getItem('access-token')
            //     }).then((res) => navigate('/'))
            // }
            // deviceOpen()
            console.log(data)
        }
    }
    const handleError = err => {
        console.error(err)
    }
    useEffect(() => {
        if(!localStorage.getItem('access-token')){
            alert('로그인을 해주세요.')
            navigate('/login')
        }
    },[])

    return (
        <React.Fragment>
            <Container maxWidth="sm" sx={{ bgcolor : "#CBF7FF", height : '100vh' }}>
                <Box sx={{padding:'30px 10px', justifyContent : 'center', alignItems:'center'}}>
                    <Link to='/'>
                        <ArrowBackIosIcon sx={{color : 'black'}}/>
                    </Link>
                </Box>
                <Box sx={{ display : 'flex', justifyContent : 'center' }}>
                    <h2>QR을 스캔해주세요.</h2>
                </Box>

                <center>
                    <div style={{marginTop:30}}>
                        <QrScan
                            delay={300}
                            onError={handleError}
                            onScan={handleScan}
                            style={{height: screenSize[1], width: screenSize[0] }}
                        />
                    </div>
                </center>

                <TextareaAutosize
                    style={{ textAlign : 'center',fontSize:18, width:320, height:100, marginTop:100}}
                    rowsMax={4}
                    defaultValue={qrscan}
                    value={qrscan}
                />
            </Container>
        </React.Fragment>
    )
}

export default Qr;