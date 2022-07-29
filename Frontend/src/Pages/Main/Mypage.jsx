import {Link, Navigate} from 'react-router-dom'

import {SubBackgroundView, Wrap, MainText, HeaderWrapper} from '../../styles/SubLoginStyles';
import {
    TitleWrapper,
    TitleText,
    TitleDivider,
    ContentDivider,
    ContentWrapper,
    ContentText,
    ContentVector
} from '../../styles/TitleStyle'
import {BinWrapper} from "../../styles/BackgroundStyle";
import { SubInnerText } from "../../styles/MyPageStyle"

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import {userInfo} from '../../atoms'
import {useRecoilValue} from 'recoil'

export const MyPage = () => {
    const userInfo2 = useRecoilValue(userInfo)
    return (<> {
        userInfo2
            ? (
                <SubBackgroundView>
                    <Wrap>
                        <HeaderWrapper>
                            <BinWrapper flex="1">
                                <Link to="/">
                                    <ArrowBackIosIcon color="black"/>
                                </Link>
                            </BinWrapper>
                            <MainText flex="3">마이 페이지</MainText>
                            <BinWrapper flex="1"></BinWrapper>
                        </HeaderWrapper>
                    </Wrap>
                    <TitleWrapper>
                        <TitleText>프로필</TitleText>
                        <TitleDivider/>
                        <ContentWrapper>
                            <ContentText>이미지</ContentText>
                            <SubInnerText>{userInfo2.userImage}</SubInnerText>
                        <ContentVector
                            alt=""
                            src="https://static.overlay-tech.com/assets/8baf2001-760e-444e-9536-318352b328b5.svg"/>
                    </ContentWrapper>
                    <ContentDivider/>

                    <ContentWrapper>
                        <ContentText>아이디</ContentText>
                    <SubInnerText>{userInfo2.userName}</SubInnerText>
                </ContentWrapper>
                <ContentDivider/>

                <ContentWrapper>
                    <ContentText>비밀번호</ContentText>
                    <SubInnerText>비밀번호 변경</SubInnerText>
                    <ContentVector
                        alt=""
                        src="https://static.overlay-tech.com/assets/8baf2001-760e-444e-9536-318352b328b5.svg"/>
                </ContentWrapper>
                <ContentDivider/>
            </TitleWrapper>

            <TitleWrapper>
                <TitleText>나의 기여</TitleText>
                <TitleDivider/>
                <ContentWrapper>
                    <ContentText>포인트</ContentText>
                    <SubInnerText>{userInfo2.userPoint}</SubInnerText>
                    <ContentVector
                        alt=""
                        src="https://static.overlay-tech.com/assets/8baf2001-760e-444e-9536-318352b328b5.svg"/>
                </ContentWrapper>
                <ContentDivider/>

                <ContentWrapper>
                    <ContentText>바다를 지킨 횟수</ContentText>
                    <SubInnerText>{userInfo2.userCnt}</SubInnerText>
                    <ContentVector
                        alt=""
                        src="https://static.overlay-tech.com/assets/8baf2001-760e-444e-9536-318352b328b5.svg"/>
                </ContentWrapper>
                <ContentDivider/>
            </TitleWrapper>
        </SubBackgroundView>
            )
            : (<Navigate to="/login"/>)
    }</>
    );  
  }
  
  export default MyPage;