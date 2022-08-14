import React from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import {useEffect} from "react";
import {useState} from "react";
import {fetchUseState} from "../api/Loading";
import {useNavigate} from "react-router-dom";


function Loading(){
  const navigate = useNavigate()

  useEffect(() => {
    let isCigar = setInterval(() =>{
            fetchUseState()
                .then((res)=> {res.json().then((res)=> {
                  console.log(res)
                })})
    },1000)

    setTimeout(() => {
      clearInterval(isCigar);
      navigate('/')
    }, 7000)
  }, []);



  return (
  <React.Fragment>
    <CssBaseline />
    <Container maxWidth="sm" sx={{ bgcolor: '#00d3ca', height: '100vh', display:'flex', justifyContent:'center', alignItems:'center' }}>
      <h1 style={{fontWeight:'bold'}}>쏙담</h1>
    </Container>
  </React.Fragment>
  )
}



export default Loading;