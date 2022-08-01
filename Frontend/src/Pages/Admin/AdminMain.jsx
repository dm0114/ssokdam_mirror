import React from 'react'
import {
    AdminMainGround,
    FullwidthBox,
    ComponentBox,
    AdminMainImg,
    TextBox,
    ArticleWrapper
} from "../../styles/AdminStyle";


export const AdminMain = () => {
    return (
        <AdminMainGround>
            <FullwidthBox>
                <ComponentBox>
                    <AdminMainImg alt="" src="https://cdn-icons-png.flaticon.com/512/7715/7715867.png"></AdminMainImg>
                    <TextBox>
                        <span>지급 요청</span>
                        <span style={{ fontWeight : 'bold' }}>0 건</span>
                    </TextBox>
                </ComponentBox>
                <ComponentBox>
                    <AdminMainImg alt="" src="https://cdn-icons.flaticon.com/png/512/2953/premium/2953423.png?token=exp=1659337378~hmac=6a1bd8107fb93fc911b3fe79ba42c714"></AdminMainImg>
                    <TextBox>
                        <span>지급된 금액</span>
                        <span style={{ fontWeight : 'bold' }}>0 원</span>
                    </TextBox>
                </ComponentBox>
                <ComponentBox>
                    <AdminMainImg alt="" src="https://cdn-icons.flaticon.com/png/512/2732/premium/2732057.png?token=exp=1659339586~hmac=a8cc91ba54dae20a8d27775ab225ef33"></AdminMainImg>
                    <TextBox>
                        <span>수거된 꽁초</span>
                        <span style={{ fontWeight : 'bold' }}>0 kg</span>
                    </TextBox>
                </ComponentBox>
            </FullwidthBox>
            <FullwidthBox>
                <ComponentBox>
                    <TextBox>
                        <span style={{ fontWeight : 'bold', textAlign : 'center' }}>0</span>
                        <span style={{ textAlign : 'center' }}>문의 사항</span>
                    </TextBox>
                </ComponentBox>
                <ComponentBox>
                    <TextBox>
                        <span style={{ fontWeight : 'bold',textAlign : 'center' }}>0</span>
                        <span>고장 신고</span>
                    </TextBox>
                </ComponentBox>
                <ComponentBox>
                    <TextBox>
                        <span style={{ fontWeight : 'bold',textAlign : 'center' }}>0</span>
                        <span>디바이스 알림</span>
                    </TextBox>
                </ComponentBox>
                <ComponentBox>
                    <TextBox>
                        <span style={{ fontWeight : 'bold',textAlign : 'center' }}>0</span>
                        <span>문제 디바이스</span>
                    </TextBox>
                </ComponentBox>
            </FullwidthBox>
                <h2 style={{ marginLeft : '20px', marginTop : '25px', marginBottom : '10px'}}>접수된 불만 사항</h2>
                <ArticleWrapper style={{ backgroundColor : 'white' , marginTop : '0px', marginRight : '20px' }}>
                </ArticleWrapper>
            <h2 style={{ marginLeft : '20px', marginTop : '25px', marginBottom : '10px'}}>접수된 고장 신고</h2>
            <ArticleWrapper style={{ backgroundColor : 'white' , marginTop : '0px', marginRight : '20px' }}>
            </ArticleWrapper>
        </AdminMainGround>
    )
}