import Container from "@mui/material/Container";
import React, {useState} from 'react'
import {Fab, TextareaAutosize} from '@material-ui/core'
import {ArrowBack} from '@material-ui/icons'
import { Link } from "react-router-dom";
import QrScan from 'react-qr-reader'
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Box from "@mui/material/Box";
import axios from "axios";


function Qr(){
    const [qrscan, setQrscan] = useState('QR을 스캔해주세요.');
    const handleScan = data => {
        const URL = "http://localhost:8888/positions"
        if (data) {
            setQrscan(data)
            // 백엔드에 URL 보내기
            const deviceOpen =  async () => {
                let response = await axios.post(URL, {
                    deviceId : data
                }).then((res) => console.log(res))
            }
            console.log(data)
        }
    }
    const handleError = err => {
        console.error(err)
    }

    return (
        <React.Fragment>
            <Container maxWidth="sm" sx={{ bgcolor : "#00d3ca", height : '100vh' }}>
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
                            style={{height: 240, width: 320 }}
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