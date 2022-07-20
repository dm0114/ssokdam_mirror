import styled from 'styled-components';

export const SubLoginBackgroundView = styled.div `
  width: 100vh;
  height: 100vh;

  background-color:${props => props.theme.colors.white};
  padding: 24px 24px 32px 24px;
  
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

export const MainButton = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.colors.darkTurquoise};
  border-radius: 10px;
  padding: 12px 124px 12px;
  margin: 0px 16px;
  width: 100%;
  height: 40px;
`

export const ButtonText = styled.p `
  color: ${props => props.theme.colors.black};
  text-align: center;
  font-family: ${props => props.theme.fonts.sCoreDream14Regular.family};
  font-size: ${props => props.theme.fonts.sCoreDream14Regular.size};
  font-weight: ${props => props.theme.fonts.sCoreDream14Regular.weight};
  line-height: ${props => props.theme.fonts.sCoreDream14Regular.lineHeight};
`;