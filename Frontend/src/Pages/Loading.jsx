import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useEffect } from 'react';
import { useState } from 'react';
import { fetchUseState } from '../api/Loading';
import { useNavigate } from 'react-router-dom';
import { BinWrapper } from '../styles/BackgroundStyle';

function Loading() {
  const navigate = useNavigate();

  useEffect(() => {
    let isCigar = setInterval(() => {
      fetchUseState().then((res) => {
        res.json().then((res) => {
          console.log(res);
        });
      });
    }, 1000);

    setTimeout(() => {
      clearInterval(isCigar);
      navigate('/loading2');
    }, 7000);
  }, []);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        maxWidth='sm'
        sx={{
          bgcolor: '#CBF7FF',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h1 style={{ fontWeight: 'bold' }}>쏙담</h1>
        <p style={{marginLeft: 'auto', marginRight: 'auto'}}>기기에 담배를 넣어주세요</p>
      </Container>
    </React.Fragment>
  );
}

export default Loading;
