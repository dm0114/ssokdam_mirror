import {
  SubBackgroundView,
  Wrap,
  Vector,
  MainText,
  HeaderWrapper,

} from '../../styles/SubLoginStyles';

import {
    TitleWrapper,
    TitleText,
    TitleDivider,
    ContentDivider,
    ContentWrapper,
    ContentText,
    ContentVector
} from '../../styles/TitleStyle'

import { useQuery } from "@tanstack/react-query";
import { fetchMyPage } from '../../api';
import { useState } from 'react';


export const MyPage = () => { 
    const { isLoading, data } = useQuery(['userData'], fetchMyPage)

    // const { subTitle, setSubTitle } = useState(['이미지', '아이디', '포인트'])
    // const { fetchedDataKeyName, setFetchedDataKeyName } = useState(['userImg', 'userId', 'userPoint'])
    return (
        <>
            {isLoading ? (<>로딩중...</>) : (
            <SubBackgroundView>
                <Wrap>
                    <HeaderWrapper>
                        <Vector
                            alt=""
                            src="https://static.overlay-tech.com/assets/897d620b-7272-4e3f-b46a-7d57d097eecd.svg"/>
                        <MainText>마이 페이지</MainText>
                    </HeaderWrapper>
                </Wrap>
                <TitleWrapper>
                    <TitleText>프로필</TitleText>
                    <TitleDivider />
                    <ContentWrapper>
                        <ContentText>이미지</ContentText>
                            <>{data[0].userImg}</>
                            <ContentVector
                                alt=""
                                src="https://static.overlay-tech.com/assets/8baf2001-760e-444e-9536-318352b328b5.svg"
                            />
                    </ContentWrapper>
                    <ContentDivider />

                    <ContentWrapper>
                        <ContentText>아이디</ContentText>
                            <>{data[0].userId}</>
                            <ContentVector
                                alt=""
                                src="https://static.overlay-tech.com/assets/8baf2001-760e-444e-9536-318352b328b5.svg"
                            />
                    </ContentWrapper>
                    <ContentDivider />

                    <ContentWrapper>
                        <ContentText>비밀번호</ContentText>
                            <>비밀번호 변경</>
                            <ContentVector
                                alt=""
                                src="https://static.overlay-tech.com/assets/8baf2001-760e-444e-9536-318352b328b5.svg"
                            />
                    </ContentWrapper>
                    <ContentDivider />
                </TitleWrapper>


                <TitleWrapper>
                    <TitleText>나의 기여</TitleText>
                    <TitleDivider />
                    <ContentWrapper>
                        <ContentText>포인트</ContentText>
                            <>{data[0].userPoint}</>
                            <ContentVector
                                alt=""
                                src="https://static.overlay-tech.com/assets/8baf2001-760e-444e-9536-318352b328b5.svg"
                            />
                    </ContentWrapper>
                    <ContentDivider />
                </TitleWrapper>
            </SubBackgroundView>)}
        </>
    );  
}

export default MyPage;
