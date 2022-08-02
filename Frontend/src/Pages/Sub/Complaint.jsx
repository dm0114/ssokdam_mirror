import * as React from 'react';
import {Link, useNavigate} from "react-router-dom";

import {
  SubLoginBackgroundView,
  Wrap,
  MainText,
  HeaderWrapper,
  MainButton,
  ButtonText,
} from '../../styles/SubLoginStyles';
import {BinWrapper} from "../../styles/BackgroundStyle";
import {MuiTheme} from "../../styles/MuiTheme"


import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import TextField from '@mui/material/TextField';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { ThemeProvider } from '@mui/material/styles';
import { borderRadius } from '@mui/system';


const Complaint = () => {
  return (
    <ThemeProvider theme={MuiTheme}>
      <SubLoginBackgroundView>
        <Wrap>
          <HeaderWrapper>
            <BinWrapper flex='1'>
              <Link to='/serviceCenter'>
                <ArrowBackIosIcon color='black' />
              </Link>
            </BinWrapper>
            <MainText flex='3'>불편사항 접수</MainText>
            <BinWrapper flex='1'></BinWrapper>
          </HeaderWrapper>
        </Wrap>
        <BinWrapper>

          <TextField
            name='title'
            id='title'
            label='제목'
            variant='standard'
            fullWidth
            sx={{
              marginBottom: '32px',
            }}
            color='black'
            required
          />

          <TextField
            name='userPwd2'
            id='content'
            label='내용'
            variant='standard'
            multiline
            fullWidth
            sx={{
              marginBottom: '32px',
            }}
            color='black'
            required
          />
        </BinWrapper>

        <IconButton
          color='black'
          aria-label='upload picture'
          component='label'
          sx={{
            width: '150px',
            height: '150px',
            border: '1px solid',
            
            borderColor: 'rgba(0, 0, 0, 0.25)',
            marginLeft: 'auto',
            marginRight: 'auto',
            backgroundColor: 'gainsboro',
          }}
        >
          <input hidden accept='image/*' type='file' />
          <PhotoCamera />
        </IconButton>

        <MainButton width='100%' type='submit'>
          <ButtonText>제출하기</ButtonText>
        </MainButton>
      </SubLoginBackgroundView>
    </ThemeProvider>
  );
}

export default Complaint