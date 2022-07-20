import {
  SubBackgroundView,
  Wrap,
  Vector,
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

const ServiceCenter = () => {
  return (
    <SubBackgroundView>
      <Wrap>
          <HeaderWrapper>
              <Vector
                  alt=""
                  src="https://static.overlay-tech.com/assets/897d620b-7272-4e3f-b46a-7d57d097eecd.svg"/>
              <MainText>고객 센터</MainText>
          </HeaderWrapper>
      </Wrap>
      <TitleWrapper>
          <TitleText>불편 사항</TitleText>
          <TitleDivider />
          <ContentWrapper>
              <ContentText>이미지</ContentText>
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