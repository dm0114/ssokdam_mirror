import React from "react";
import { Link, useParams, useLocation } from "react-router-dom";

import {
  SubBackgroundView,
  Wrap,
  MainText,
  HeaderWrapper,
} from "../../styles/SubLoginStyles";

import {
  TitleWrapper,
  TitleText,
  TitleDivider,
  ContentDivider,
  ContentWrapper,
  ContentText,
  ContentVector,
} from "../../styles/TitleStyle";

import { BinWrapper } from "../../styles/BackgroundStyle";
import { AlarmMainText, AlarmSubText } from "../../styles/AlarmStyle";

import Avatar from "@mui/material/Avatar";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const MyAskDetail = () => {
  let { id } = useParams();
  const { state } = useLocation();
  console.log(state);

  return (
    <SubBackgroundView>
      <Wrap>
        <HeaderWrapper mb="48px">
          <BinWrapper flex="1">
            <Link to="/serviceCenter">
              <ArrowBackIosIcon color="black" />
            </Link>
          </BinWrapper>
          <MainText flex="3">나의 문의 내역</MainText>
          <BinWrapper flex="1"></BinWrapper>
        </HeaderWrapper>
        <TitleWrapper>
          <BinWrapper>
            <ContentWrapper>
              <AlarmMainText>{state.pstTitle}</AlarmMainText>
            </ContentWrapper>
            <ContentWrapper>
              <AlarmSubText>{state.pstDt}</AlarmSubText>
            </ContentWrapper>
          </BinWrapper>
          <TitleDivider />
          <BinWrapper>
            <ContentWrapper>
              <AlarmMainText>{state.pstCtnt}</AlarmMainText>
            </ContentWrapper>
          </BinWrapper>
        </TitleWrapper>
      </Wrap>

      <Avatar
        alt="Remy Sharp"
        src={`${state.pstImg}`}
        sx={{ width: 200, height: 200 }}
      />

      <TitleWrapper>
        <TitleText>답변</TitleText>
        <TitleDivider />
        <BinWrapper>
          <ContentWrapper>
            <AlarmMainText>{state.pstTitle}</AlarmMainText>
          </ContentWrapper>
          <ContentWrapper>
            <AlarmSubText>{state.pstDt}</AlarmSubText>
          </ContentWrapper>
        </BinWrapper>
        <ContentDivider />
      </TitleWrapper>
    </SubBackgroundView>
  );
};

export default MyAskDetail;
