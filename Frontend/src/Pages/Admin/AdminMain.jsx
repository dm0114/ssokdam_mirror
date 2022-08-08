import React from 'react'
import {
    AdminMainGround,
    FullwidthBox,
    ComponentBox,
    AdminMainImg,
    TextBox,
    ArticleWrapper,
    Article,
    IconBox
} from "../../styles/AdminStyle";
import AddIcon from '@mui/icons-material/Add';
import {SERVER_URL} from "../../config";
import {useState} from "react";
import { useEffect }  from "react";
import {fetchGeneralInfo} from "../../api/admin";


export const AdminMain = () => {
    const [generalInfo, setGeneralInfo] = useState({})

    useEffect(() => {
        fetchGeneralInfo()
            .then((res) => (res.json().then(res => {
                console.log(res)
                if(res != 'undefined' && res != null) {
                    setGeneralInfo(res)
                }
            })))
    },[])

    const complains = generalInfo.complain?.slice(0,3).map((complaint,index) => (
        <Article key={index}>
            <b>{complaint.pstDt.split(" ")[0]}
            </b>
            &nbsp; |  &nbsp; <span>{ complaint.pstTitle }</span>
        </Article>
    ))
    const brokens = generalInfo.Broken?.slice(0,3).map((broke,index) => (
        <Article key={index}>
            <b>{broke.pstDt.split(" ")[0]}
            </b>
            &nbsp; |  &nbsp; <span>{ broke.pstTitle }</span>
        </Article>
    ))



    return (
        <React.Fragment>
            <AdminMainGround>
                <FullwidthBox>
                    <ComponentBox>
                        <AdminMainImg alt="" src="https://cdn-icons-png.flaticon.com/512/7715/7715867.png"></AdminMainImg>
                        <TextBox>
                            <span>지급 요청</span>
                            <span style={{ fontWeight : 'bold' }}>{ generalInfo.exchangeLth } 건</span>
                        </TextBox>
                    </ComponentBox>
                    <ComponentBox>
                        <AdminMainImg alt="" src="https://cdn-icons-png.flaticon.com/512/3135/3135706.png"></AdminMainImg>
                        <TextBox>
                            <span>지급된 금액</span>
                            <span style={{ fontWeight : 'bold' }}>{ generalInfo.exchangeMoney } 원</span>
                        </TextBox>
                    </ComponentBox>
                    <ComponentBox>
                        <AdminMainImg alt="" src="https://cdn-icons-png.flaticon.com/512/2562/2562050.png"></AdminMainImg>
                        <TextBox>
                            <span>수거된 꽁초</span>
                            <span style={{ fontWeight : 'bold' }}>0 kg</span>
                        </TextBox>
                    </ComponentBox>
                </FullwidthBox>
                <FullwidthBox>
                    <ComponentBox>
                        <TextBox>
                            <span style={{ fontWeight : 'bold', textAlign : 'center' }}>{ generalInfo.complain ?
                                generalInfo.complain.length : null
                            }</span>
                            <span style={{ textAlign : 'center' }}>문의 사항</span>
                        </TextBox>
                    </ComponentBox>
                    <ComponentBox>
                        <TextBox>
                            <span style={{ fontWeight : 'bold',textAlign : 'center' }}>{ generalInfo.Broken ?
                                generalInfo.Broken.length : null
                            }</span>
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
                        <IconBox>
                            <AddIcon></AddIcon>
                        </IconBox>
                        {complains}
                        {/*{ generalInfo.complain?.slice(0,2).map((complaint,index) => {*/}
                        {/*    <Article key={index}><b>{ complaint.pstDt.split(" ")[0] }</b></Article>*/}
                        {/*})}*/}
                    </ArticleWrapper>
                <h2 style={{ marginLeft : '20px', marginTop : '25px', marginBottom : '10px'}}>접수된 고장 신고</h2>
                <ArticleWrapper style={{ backgroundColor : 'white' , marginTop : '0px', marginRight : '20px' }}>
                        <IconBox>
                            <AddIcon></AddIcon>
                        </IconBox>
                    {brokens}
                </ArticleWrapper>
            </AdminMainGround>
        </React.Fragment>
    )
}