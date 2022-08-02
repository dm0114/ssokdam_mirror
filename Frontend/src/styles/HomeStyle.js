import styled from 'styled-components';

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const MainTextContainerWrapper = styled.div`
  display: flex;
`
export const MainContainer = styled.div`
  display: flex;
  margin-left: ${props => props.ml};
  flex: ${props => props.flexNum};
  justify-content: ${props => props.jc};
`
export const MainText = styled.p`
  margin: 0;
  font-size: ${props => props.theme.fonts.sCoreDream24Bold.size};
  font-weight: ${props => props.theme.fonts.sCoreDream24Bold.weight};
  line-height: ${props => props.theme.fonts.sCoreDream24Bold.lineHeight};
`
export const MainIcon = styled.p`
  width: 24px;
  height: 24px;
  margin: 0px 0px 0px 16px;
`
export const MiddleText = styled.p`
  z-index: 99;
  width: 120px;
  margin: 24px auto 32px auto;
  padding: 16px;
  
  color: white;
  background: rgba(0, 0, 0, 50%);
  /* border: 2px solid #73AD21; */
  border-radius: 25px;
  
  font-size: 40px;
  font-weight: 600;
  text-align: center;
  line-height: 40px;
`

// Time
export const TimeController = styled.div`
  width: 100%;
  display : flex;
  flex-direction : column;
  justify-content : center;
  align-items : center;
`

// Notice
export const Notice = styled.div`
  width: 100%;
  background-color: ${props => props.theme.colors.whiteSmoke};
  border-radius: 10px;
  padding: 12px 16px 12px 16px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  box-sizing: border-box; /* Opera/IE 8+ */
`;
export const NoticeText = styled.p`
  margin: 0px;
  font-size: ${props => props.theme.fonts.sCoreDream14Regular.size};
  font-weight: ${props => props.theme.fonts.sCoreDream14Regular.weight};
`;
export const ChevronRight = styled.img`
  width: 19.29px;
  height: 18px;
`;



// Map and QR Button
export const QrMapButton = styled.div`
  width: 47%;
  height: 42vw;
  
  background-size: 100%;
  background-position: center;
  background-image: url(${props => props.url});  
  border-radius: 10px;
  
  display: flex;
  align-items: flex-end;
  justify-content: center;

  text-decoration: none;
`;
export const QrMapSubText = styled.p`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  color: ${props => props.theme.colors.black};
  font-size: ${props => props.theme.fonts.sCoreDream14RegularLine24.size};
  font-weight: 500;
  line-height: ${props => props.theme.fonts.sCoreDream14RegularLine24.lineHeight};

  
`;
export const QrMapMainText = styled.strong`
  color: ${props => props.theme.colors.black};
  font-size: ${props => props.theme.fonts.sCoreDream18Bold.size};
  font-weight: ${props => props.theme.fonts.sCoreDream18Bold.weight};
  line-height: ${props => props.theme.fonts.sCoreDream18Bold.lineHeight};
`;


//포인트 버튼
export const Point = styled.div`
  width: 100%;
  height: 25vw;
  background: rgba(239,240,242,1);
  border-radius: 10px;

  padding: 16px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  box-sizing: border-box; /* Opera/IE 8+ */
`;
export const PointSubText = styled.p`
  font-size: 14px;
  font-weight: 500;
`;
export const PointMainText = styled.strong`
  font-size: ${props => props.theme.fonts.sCoreDream18Bold.size};
  font-weight: ${props => props.theme.fonts.sCoreDream18Bold.weight};
  margin-bottom: 18px;
`;
export const PointImg = styled.img`
  width: 25%;
  height: 100%;
`;


// 서비스 안내 / 문의
export const Service = styled.div`
  width: 38%;
  height: 20vw;
  border-radius: 10px;  
  margin-bottom: 32px;
  padding: 16px;
  background-color: ${props => props.theme.colors.whiteSmoke};

  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ServiceVector = styled.img`
  height: 36px;
  margin-bottom: 16px;
  text-align: center;
`;
export const ServiceText = styled.p`
  margin: 0px;
  margin-top: auto;

  color: ${props => props.theme.colors.black};
  text-align: center;
  font-family: ${props => props.theme.fonts.sCoreDream14Regular.family};
  font-size: ${props => props.theme.fonts.sCoreDream14Regular.size};
  font-weight: ${props => props.theme.fonts.sCoreDream14Regular.weight};
`;