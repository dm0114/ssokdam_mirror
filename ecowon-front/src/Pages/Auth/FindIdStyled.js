import styled from 'styled-components';

export const SubLoginBackgroundView = styled.div `
background-color:${props => props.theme.colors.whiteSmoke};
padding: 28px 27px 32px 28px;
display: flex;
flex-direction: column;
align-items: flex-start;
`;
export const Wrap1 = styled.div `
margin-bottom: 651px;
display: flex;
align-items: center;
`;
export const Vector = styled.img `
width: 2.9%;
height: 22.95%;
margin-right: 71px;
`;

export const MainText = styled.p `
height: 61px;
width: 163px;
color: ${props => props.theme.colors.black};
display: flex;
align-items: center;
text-align: center;
font-family: ${props => props.theme.fonts.sCoreDream20Regular.family};
font-size: ${props => props.theme.fonts.sCoreDream20Regular.size};
font-weight: ${props => props.theme.fonts.sCoreDream20Regular.weight};
line-height: ${props => props.theme.fonts.sCoreDream20Regular.lineHeight};
`;

export const Wrap2 = styled.div `
background-color: ${props => props.theme.colors.darkTurquoise};
border-radius: 10px;
padding: 12px 124px 11px;
display: flex;
align-items: center;
`;

export const ButtonText = styled.p `
color: ${props => props.theme.colors.black};
text-align: center;
font-family: ${props => props.theme.fonts.sCoreDream14Regular.family};
font-size: ${props => props.theme.fonts.sCoreDream14Regular.size};
font-weight: ${props => props.theme.fonts.sCoreDream14Regular.weight};
line-height: ${props => props.theme.fonts.sCoreDream14Regular.lineHeight};
`;