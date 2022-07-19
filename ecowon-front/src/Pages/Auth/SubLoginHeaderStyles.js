import styled from 'styled-components';

export const Wrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Vector = styled.img `
  position: absolute;
  width: 2.9%;
  height: 22.95%;
`;

export const MainText = styled.p `
  color: ${props => props.theme.colors.black};
  display: flex;
  align-items: center;
  text-align: center;
  font-family: ${props => props.theme.fonts.sCoreDream20Regular.family};
  font-size: ${props => props.theme.fonts.sCoreDream20Regular.size};
  font-weight: ${props => props.theme.fonts.sCoreDream20Regular.weight};
  line-height: ${props => props.theme.fonts.sCoreDream20Regular.lineHeight};
`;

