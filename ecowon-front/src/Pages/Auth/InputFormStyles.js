import styled from 'styled-components';


export const InputFormView = styled.div `
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputWrap = styled.div `
  margin-bottom: 9px;
  padding: 43px 0 0 1px;
  position: relative;
`;

export const InputText = styled.p `
  height: 73.49%;
  width: 50.79%;
  color: ${props => props.theme.colors.black};
  display: flex;
  align-items: center;
  left: 0;
  top: 0;
  font-family: ${props => props.theme.fonts.sCoreDream14Regular.family};
  font-size: ${props => props.theme.fonts.sCoreDream14Regular.size};
  font-weight: ${props => props.theme.fonts.sCoreDream14Regular.weight};
  line-height: ${props => props.theme.fonts.sCoreDream14Regular.lineHeight};
`;

export const InputForm = styled.input.attrs({ required: true })`
  display: block;
  width: 100%;
  height: 40px;
  background-color: ${props => props.theme.colors.white};
  border: 0.1px solid;
  border-radius: 5px;
`;