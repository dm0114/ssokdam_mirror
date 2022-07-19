import React from 'react';
import {
    SubLoginBackgroundView,
    Wrap1,
    Vector,
    MainText,
    Wrap2,
    ButtonText,
} from './FindIdStyled';

const FindId = () => {
    return (
        <SubLoginBackgroundView>
            <Wrap1>
                <Vector
                    alt=""
                    src="https://static.overlay-tech.com/assets/897d620b-7272-4e3f-b46a-7d57d097eecd.svg"/>
                <MainText>아이디 찾기</MainText>
            </Wrap1>
            <Wrap2>
                <ButtonText>아이디 찾기</ButtonText>
            </Wrap2>
        </SubLoginBackgroundView>
    );
};

export default FindId;