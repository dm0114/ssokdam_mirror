import React from 'react'
import {CustomOverlayMap, Map, MapMarker} from "react-kakao-maps-sdk";
import {useState} from "react";
import {useEffect} from "react";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Box from '@mui/material/Box';
import './EcoMapModule.css'
import { Link } from 'react-router-dom'
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import axios from "axios";

function EcoMap(){
    const [state, setState] = useState({
        center: {
            lat: 33.450701,
            lng: 126.570667,
        },
        errMsg: null,
        isLoading: true,
    })
    const [positions, setPositions] = useState([])
    useEffect(() => {
       const fetchDevice = async () => {
           const URL = "http://localhost:8888/positions"
           let response = await axios(URL)
           setPositions(response.data)
       };
       fetchDevice();
    }, []);



    useEffect(() => {
        if (navigator.geolocation) {
            // GeoLocation을 이용해서 접속 위치를 얻어옵니다
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setState((prev) => ({
                        ...prev,
                        center: {
                            lat: position.coords.latitude, // 위도
                            lng: position.coords.longitude, // 경도
                        },
                        isLoading: false,
                    }))
                },
                (err) => {
                    setState((prev) => ({
                        ...prev,
                        errMsg: err.message,
                        isLoading: false,
                    }))
                }
            )
        } else {
            // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
            setState((prev) => ({
                ...prev,
                errMsg: "geolocation을 사용할수 없어요..",
                isLoading: false,
            }))
        }
    }, [])

    return (
        <React.Fragment>
            <Container maxWidth="sm">
                <Map // 지도를 표시할 Container
                    center={state.center}
                    style={{
                        // 지도의 크기
                        width: "100%",
                        height: "100vh",
                        marginBottom : -100,
                        zIndex : 0

                    }}
                    level={4} // 지도의 확대 레벨
                >
                    {(
                        <MapMarker position={state.center}>
                            <div style={{ padding: "5px", color: "#000" }}>
                                "당신의 위치!"
                            </div>
                        </MapMarker>
                    )}
                    {(positions.map((position,index) => (
                        <MapMarker
                            position={position.latlng}
                            key={position.id}
                            image={{
                                src: "https://cdn-icons-png.flaticon.com/512/999/999047.png", // 마커이미지의 주소입니다
                                size: {
                                    width: 24,
                                    height: 35
                                },
                            }}
                            title={`${position.id}번 디바이스`}
                        />
                    )))}
                    <Box sx={{ zIndex : 100, display : 'flex', justifyContent : 'space-evenly' }}>
                        <Link to="/" style={{ textDecoration : 'none' }}>
                            <Button size={'large'} style={{ width : "140px", height : "60px" , backgroundColor : 'white' }} sx={{ border : 1 ,borderRadius : '10px', fontWeight : 'bold' ,color : 'black' }} variant={'contained'}>지도 닫기</Button>
                        </Link>
                        <Link to="/qr" style={{ textDecoration : 'none' }}>
                            <Button size={'large'} style={{ width : "140px",  height : "60px", backgroundColor : '#00d3ca' }} variant={'contained'} sx={{  borderRadius : '10px', fontWeight : 'bold' }}>사용 하기</Button>
                        </Link>
                    </Box>
                </Map>
            </Container>
        </React.Fragment>
    )
}

export default EcoMap;
