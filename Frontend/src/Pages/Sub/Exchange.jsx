import React from "react";
import { Link } from 'react-router-dom'

import {
  ExchangeBackground,
  PointMainText,
  Rectangle24,
  Num5000,
  Num5000Emphasis0,

  Num100,
} from "../../styles/ExchangeStyle";

import {
  SubLoginBackgroundView,
  MainButton,
  ButtonText,
  Wrap,
  MainText,
  HeaderWrapper,
} from '../../styles/SubLoginStyles';

import {
  BinWrapper,
} from "../../styles/BackgroundStyle";

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { TextField } from '@mui/material';


const Exchange = () => {
  return (
    <SubLoginBackgroundView>
      <Wrap>
        <HeaderWrapper>
            <BinWrapper flex="1">
                <Link to="/">
                    <ArrowBackIosIcon color="black"/>
                </Link>
            </BinWrapper>
            <MainText flex="3">포인트 전환</MainText>
            <BinWrapper flex="1"></BinWrapper>
        </HeaderWrapper>
      </Wrap>

      <ExchangeBackground>
        <PointMainText>
          나의 포인트 2500 P
        </PointMainText>
        <Rectangle24 alt="" src="https://static.overlay-tech.com/assets/e2e20f2a-e20c-4c5f-9bc6-71ef706fd79e.png" />

        <TextField id="outlined-basic"  variant="outlined" fullWidth sx={{marginBottom: "32px"}}/>
        <Num5000Emphasis0>
          포인트를 전환 신청 합니다
        </Num5000Emphasis0>
        <Num5000>
          최소 5000포인트 이상 시 환전 가능
        </Num5000>
      </ExchangeBackground>
      <BinWrapper></BinWrapper>
      <MainButton width="100%">
          <ButtonText>전환 신청</ButtonText>
      </MainButton>
    </SubLoginBackgroundView>
  );
};

export default Exchange;
