import { useEffect } from 'react';
import {Link, useNavigate} from 'react-router-dom'

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import {
  SubBackgroundView,
  Wrap,
  MainText,
  HeaderWrapper,

} from '../../styles/SubLoginStyles';

import {
    TitleWrapper,
    TitleText,
    TitleDivider,
    ContentDivider,
    ContentWrapper,
    ContentText,
    ContentVector
} from '../../styles/TitleStyle'

import {
    BinWrapper,
} from "../../styles/BackgroundStyle";

import { AlarmMainText, AlarmSubText } from '../../styles/AlarmStyle'
import { fetchMyAsk } from '../../api/myAsk';
import { useQuery } from '@tanstack/react-query'



const MyAsk = () => {
  const {isLoading, data} = useQuery(['myAskList'], async () => await fetchMyAsk())
  const navigate = useNavigate()
  console.log(data)

  return (
    <>
      {isLoading ? (
        <></>
      ) : (
        <SubBackgroundView>
          <Wrap>
          <HeaderWrapper mb="48px">
              <BinWrapper flex="1">
                  <Link to="/serviceCenter">
                      <ArrowBackIosIcon color="black"/>
                  </Link>
              </BinWrapper>
              <MainText flex="3">나의 문의 내역</MainText>
              <BinWrapper flex="1"></BinWrapper>
          </HeaderWrapper>
          </Wrap>

          {/* 맵함수로 인덱스랑 같이 생성해서, data.pstSeq내리고, state도 인덱스로 내리기 */}
          <TitleWrapper>
              <TitleText>나의 문의 내역</TitleText>
              <TitleDivider />            
              <BinWrapper onClick={() => {navigate(`/myAsk/${data.pstSeq}`, { state: data })}}>
                <ContentWrapper>
                  <AlarmMainText>{data.pstTitle}</AlarmMainText>
                </ContentWrapper>
                <ContentWrapper>
                  <AlarmSubText>{data.pstDt}</AlarmSubText>              
                </ContentWrapper>
              </BinWrapper>
              <ContentDivider />
          </TitleWrapper>
        </SubBackgroundView>
      )}
    </>
    
);  
}

export default MyAsk