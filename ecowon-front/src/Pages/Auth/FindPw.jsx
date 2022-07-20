import {
  SubLoginBackgroundView,
  MainButton,
  ButtonText,
  Wrap,
  Vector,
  MainText,
} from './SubLoginStyles';

import {
  InputFormView,
  InputWrap,
  InputText,
  InputForm
} from './InputFormStyles';



const FindPassword = () => {

    return (
      <SubLoginBackgroundView>
        <Wrap>
          <Vector
          alt=""
          src="https://static.overlay-tech.com/assets/897d620b-7272-4e3f-b46a-7d57d097eecd.svg"/>          
          <MainText>비밀번호 찾기</MainText>
        </Wrap>

        

        <MainButton>
          <ButtonText>
            비밀번호 찾기
          </ButtonText>
        </MainButton>
      </SubLoginBackgroundView>
    );
};

export default FindPassword;