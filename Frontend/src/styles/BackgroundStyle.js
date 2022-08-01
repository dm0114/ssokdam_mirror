import styled from "styled-components";

export const MainBackGround = styled.div`
  background-color: ${(props) => props.theme.colors.darkTurquoise};
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  box-sizing: border-box; /* Opera/IE 8+ */
`;

export const SubBackGround = styled.div`
  background-color: ${(props) => props.theme.colors.white};

  width: 100%;
  height: ${props => props.height};
  box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;

  border-radius: 20px 20px 0px 0px;
  padding: 32px 0 32px 0;

  border: 1px solid #fff;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const BinWrapper = styled.div`
  flex: ${props => props.flex};

  width: 100%;
  padding-top: ${props => props.pt};
  margin-bottom: ${props => props.mb};
  padding-left: ${props => props.pl};
  padding-right: ${props => props.pr};
  background-color: ${props => props.bgColor};
  
  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  box-sizing: border-box; /* Opera/IE 8+ */
`

export const QrBackGround = styled.div`
  background-color: #000;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  box-sizing: border-box; /* Opera/IE 8+ */
`