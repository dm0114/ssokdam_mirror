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
import { fetchAlarm } from '../../api/alarm';
import { useQuery } from '@tanstack/react-query';

export const Alarm = () => {
  const userInfo2 = useRecoilValue(userInfo);
  const {isLoading, data} = useQuery(['myAlarmList'], async () => await fetchAlarm())

  const alarmList = data.map((alarm, index) => (
    <BinWrapper key={index}>
      <ContentWrapper>
        {alarm.notCtnt === "포인트 적립" ? (<AlarmMainText>{alarm.notMoney} 포인트가 적립되었습니다.</AlarmMainText>) : (<AlarmMainText>{alarm.notMoney} 포인트가 환전되었습니다.</AlarmMainText>)}
      </ContentWrapper>
      <ContentWrapper>
        <AlarmSubText>{alarm.notDt}</AlarmSubText>
      </ContentWrapper>
      <ContentDivider />
    </BinWrapper>
  ));

  return (
    <>
      {userInfo2 ? (
        isLoading ? (<>Loading...</>) : (<SubBackgroundView>
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

          {alarmList}

        </SubBackgroundView>)
        
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};

export default Alarm;
