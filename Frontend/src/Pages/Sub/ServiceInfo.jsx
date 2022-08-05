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



const ServiceInfo = () => {
  const navigate = useNavigate()
  return (
    <SubBackgroundView>
       <Wrap>
        <HeaderWrapper mb="48px">
            <BinWrapper flex="1">
                <Link to="/">
                    <ArrowBackIosIcon color="black"/>
                </Link>
            </BinWrapper>
            <MainText flex="3">서비스 안내</MainText>
            <BinWrapper flex="1"></BinWrapper>
        </HeaderWrapper>
      </Wrap>

        <TitleWrapper>
            <TitleText>서비스 안내</TitleText>
            <TitleDivider />
            <ContentWrapper onClick={() => navigate('/frequentlyQuestion')}>
                <ContentText>자주 묻는 질문</ContentText>
                    <ContentVector
                        alt=""
                        src="https://static.overlay-tech.com/assets/8baf2001-760e-444e-9536-318352b328b5.svg"
                    />
            </ContentWrapper>
            <ContentDivider />
        </TitleWrapper>
    </SubBackgroundView>
);  
}

export default ServiceInfo