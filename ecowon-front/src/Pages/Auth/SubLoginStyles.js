import styled from 'styled-components';

export const SubLoginBackgroundView = styled.div `
  width: 100%;
  height: 100vh;

  background-color:${props => props.theme.colors.white};
  padding: 24px 24px 32px 24px;
  
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  
  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */	
  -moz-box-sizing: border-box; /* Firefox, other Gecko */	
  box-sizing: border-box; /* Opera/IE 8+ */
`;

export const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const HeaderWrapper = styled(Wrap)`
  flex-direction: row;
`

export const Vector = styled.img `
  position: absolute;
  left: 16px;
  width: 2.9%;
  height: 22.95%;
`;

export const MainText = styled.p `
  color: ${props => props.theme.colors.black};
  display: flex;
  align-items: center;
  text-align: center;
  font-family: ${props => props.theme.fonts.sCoreDream16Regular.family};
  font-size: ${props => props.theme.fonts.sCoreDream16Regular.size};
  font-weight: ${props => props.theme.fonts.sCoreDream16Regular.weight};
  line-height: ${props => props.theme.fonts.sCoreDream16Regular.lineHeight};
`;

export const MainButton = styled.button`
  width: 100%;
  height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.darkTurquoise};
  
  border: 0px;
  border-radius: 10px;
`

export const ButtonText = styled.p `
  color: ${props => props.theme.colors.black};
  text-align: center;
  font-family: ${props => props.theme.fonts.sCoreDream14Regular.family};
  font-size: ${props => props.theme.fonts.sCoreDream14Regular.size};
  font-weight: ${props => props.theme.fonts.sCoreDream14Regular.weight};
  line-height: ${props => props.theme.fonts.sCoreDream14Regular.lineHeight};
`;