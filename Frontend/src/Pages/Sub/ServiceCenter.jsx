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

const ServiceCenter = () => {
  return (
    <SubBackgroundView>
       <Wrap>
        <HeaderWrapper mb="48px">
            <BinWrapper flex="1">
                <Link to="/">
                    <ArrowBackIosIcon color="black"/>
                </Link>
            </BinWrapper>
            <MainText flex="3">고객 센터</MainText>
            <BinWrapper flex="1"></BinWrapper>
        </HeaderWrapper>
      </Wrap>

        <TitleWrapper>
            <TitleText>불편 사항</TitleText>
            <TitleDivider />
            <ContentWrapper onClick={() => navigate('/')}>
                <ContentText>불편 사항 접수</ContentText>
                    <ContentVector
                        alt=""
                        src="https://static.overlay-tech.com/assets/8baf2001-760e-444e-9536-318352b328b5.svg"
                    />
            </ContentWrapper>
            <ContentDivider />
        </TitleWrapper>

        <TitleWrapper>
            <TitleText>고장 신고</TitleText>
            <TitleDivider />
            <ContentWrapper onClick={() => navigate('/')}>
                <ContentText>고장신고 접수</ContentText>
                    <ContentVector
                        alt=""
                        src="https://static.overlay-tech.com/assets/8baf2001-760e-444e-9536-318352b328b5.svg"
                    />
            </ContentWrapper>
            <ContentDivider />
        </TitleWrapper>

        <TitleWrapper>
            <TitleText>나의 문의 내역</TitleText>
            <TitleDivider />
            <ContentWrapper onClick={() => navigate('/')}>
                <ContentText>내역 보기</ContentText>
                    <ContentVector
                        alt=""
                        src="https://static.overlay-tech.com/assets/8baf2001-760e-444e-9536-318352b328b5.svg"
                    />
            </ContentWrapper>
            <ContentDivider />
        </TitleWrapper>
    </SubBackgroundView>
  )
}

export default ServiceCenter