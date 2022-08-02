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


const MyAsk = () => {
  return (
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

        <TitleWrapper>
            <TitleText>나의 문의 내역</TitleText>
            <TitleDivider />            
            <ContentWrapper>
              <AlarmMainText>포인트가 적립되었습니다.</AlarmMainText>
            </ContentWrapper>
            <ContentWrapper>
              <AlarmSubText>25분전</AlarmSubText>              
            </ContentWrapper>
            <ContentDivider />
        </TitleWrapper>
        

    </SubBackgroundView>
);  
}

export default MyAsk