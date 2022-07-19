import {
    SubLoginBackgroundView,
    MainButton,
    ButtonText,
    Wrap,
    Vector,
    MainText
} from './SubLoginStyles';

import {InputFormView, InputWrap, InputText, InputForm} from './InputFormStyles'

const FindId = () => {
    return (
        <SubLoginBackgroundView>
            <Vector
                alt=""
                src="https://static.overlay-tech.com/assets/897d620b-7272-4e3f-b46a-7d57d097eecd.svg"/>
            <Wrap>
                <MainText>아이디 찾기</MainText>
            </Wrap>
            <InputFormView>
                <InputWrap>
                    <InputText>이름</InputText>
                    <InputForm/>
                </InputWrap>
            </InputFormView>
            <MainButton>
                <ButtonText>아이디 찾기</ButtonText>
            </MainButton>
        </SubLoginBackgroundView>
    );
};

export default FindId;