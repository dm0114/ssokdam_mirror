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
  height: ${props => props.height};;

  border-radius: 20px 20px 0px 0px;
  padding: 32px 0 32px 0;

  border: 1px solid #fff;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const BinWrapper = styled.div`
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