import { useEffect, useState } from 'react';
import {Link, useNavigate} from "react-router-dom";

import {
  SubLoginBackgroundView,
  Wrap,
  MainText,
  HeaderWrapper,
  MainButton,
  ButtonText,
  NotReadyToSubmitButton,
} from '../../styles/SubLoginStyles';
import {BinWrapper} from "../../styles/BackgroundStyle";
import {MuiTheme} from "../../styles/MuiTheme"

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import TextField from '@mui/material/TextField';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { ThemeProvider } from '@mui/material/styles';

import { CreateComplaint } from '../../api/complaint';


const Complaint = () => {
  const [isReadyToSubmit, setIsReadyToSubmit] = useState(false)
  const [userInput, setUserInput] = useState({
    pstTitle: '',
    pstCtnt: '',
    pstType: '',
  });

  const navigate = useNavigate()

  const handleChange = (event) => { 
    setUserInput((state) => {
      return { ...state, [event.target.name]: event.target.value };
    })
  }
  const submitComplaint = async (userInput) => {
    // create complaint 코드 수정
    const res = await CreateComplaint(userInput)
    if (res.ok) {
      alert('작성 완료')
      navigate('/myAsk')
    } else {
      alert('오류 발생')
    }
  }

  useEffect(() => {
    if (!(Object.values(userInput).includes(''))) {
      setIsReadyToSubmit(true)
    } else {
      setIsReadyToSubmit(false)
    }
  }, [userInput])

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
          
          <FormControl fullWidth>
            <InputLabel id="pstType">문의 유형</InputLabel>
            <Select
              name="pstType"
              labelId="pstType"
              id="pstType"
              value={userInput.pstType}
              label="pstType"
              onChange={handleChange}
              sx={{marginBottom: "24px"}}
              required
            >
              <MenuItem value={"불만사항"}>불편 사항</MenuItem>
              <MenuItem value={"고장신고"}>고장 신고</MenuItem>
            </Select>
          </FormControl>

          <TextField
            name='pstTitle'
            id='pstTitle'
            label='제목'
            variant='standard'
            fullWidth
            sx={{
              marginBottom: '32px',
            }}
            color='black'
            onChange={handleChange}
            required
          />

          <TextField
            name='pstCtnt'
            id='pstCtnt'
            label='내용'
            variant='standard'
            multiline
            fullWidth
            sx={{
              marginBottom: '32px',
            }}
            color='black'
            onChange={handleChange}
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
        
        {isReadyToSubmit ? (
          <MainButton width='100%' type='submit' onClick={() => submitComplaint(userInput)}>
            <ButtonText>제출하기</ButtonText>
          </MainButton>
        ) : (
          <NotReadyToSubmitButton>
            <ButtonText>제출하기</ButtonText>
          </NotReadyToSubmitButton>
        )}

      </SubLoginBackgroundView>
    </ThemeProvider>
  );
}

export default Complaint