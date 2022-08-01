import { Link, Navigate } from "react-router-dom";

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

import { AlarmMainText, AlarmSubText } from '../../styles/AlarmStyle'

import { BinWrapper } from "../../styles/BackgroundStyle";
import { SubInnerText } from "../../styles/MyPageStyle";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { userInfo } from "../../atoms";
import { useRecoilValue } from "recoil";

export const Alarm = () => {
  const userInfo2 = useRecoilValue(userInfo);
  return (
    <>
      {userInfo2 ? (
        <SubBackgroundView>
          <Wrap>
            <HeaderWrapper mb="48px">
              <BinWrapper flex="1">
                <Link to="/">
                  <ArrowBackIosIcon color="black" />
                </Link>
              </BinWrapper>
              <MainText flex="3">알림</MainText>
              <BinWrapper flex="1"></BinWrapper>
            </HeaderWrapper>
          </Wrap>
          
            <ContentWrapper>
              <AlarmMainText>포인트가 적립되었습니다.</AlarmMainText>
              <MainText>{userInfo2.userImage}</MainText>
            </ContentWrapper>
            <ContentWrapper>
              <AlarmSubText>25분전</AlarmSubText>
              <SubInnerText>{userInfo2.userImage}</SubInnerText>
            </ContentWrapper>
            <ContentDivider />
            <AlarmMainText>이미지 넣기, Map함수로 렌더링하기</AlarmMainText>

        </SubBackgroundView>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};

export default Alarm;
