import React from 'react'
import Container from "@mui/material/Container";
import {Map, MapMarker} from "react-kakao-maps-sdk";
import Box from "@mui/material/Box";
import {Link} from "react-router-dom";
import Button from "@mui/material/Button";
import {useEffect, useState} from "react";
import { DataGrid } from '@mui/x-data-grid';

import { SERVER_URL } from '../../config';
import axios from "axios";

const columns = [
    { field: 'id', headerName: '디바이스 번호', flex : 1, headerAlign: 'center', align: "center" },
    { field: 'lastUse', headerName: '마지막 이용시간', flex : 1, headerAlign: 'center',align: "center" },
    { field: 'batteryAmount', headerName: '배터리 양(%)', type : 'number' ,headerAlign: 'center', flex : 1, align: "center" },
    {
        field: 'trashAmount',
        headerName: '쓰레기통 양(%)',
        type : 'number',
        flex : 1,
        align: "center",
        headerAlign: 'center'
    },
    {
        field: 'buttAmount',
        headerName: '꽁초 양(%)',
        type : 'number',
        flex : 1,
        align: "center",
        headerAlign: 'center'
        // valueGetter: (params) =>
        //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
];

const rows = [
    { id: 1, lastUse: '2022-08-02 / 13:36', batteryAmount: 30, trashAmount: 30, buttAmount : 59 },
    { id: 2, lastUse: '2022-08-05 / 13:36', batteryAmount: 100, trashAmount: 69, buttAmount : 90  },
    { id: 3, lastUse: '2022-08-08 / 13:36', batteryAmount: 20, trashAmount: 30, buttAmount : 32},
    { id: 4, lastUse: '2022-08-10 / 13:36', batteryAmount: 69, trashAmount: 32, buttAmount : 60 },
    { id: 5, lastUse: '2022-08-12 / 13:36', batteryAmount: 99, trashAmount: 78, buttAmount : 24 },
    { id: 6, lastUse: '2022-08-06 / 13:36', batteryAmount: 30, trashAmount: 90, buttAmount : 9 },
    { id: 7, lastUse: '2022-08-09 / 13:36', batteryAmount: 40, trashAmount: 43, buttAmount : 80 },
    { id: 8, lastUse: '2022-08-10 / 13:50', batteryAmount: 60, trashAmount: 75, buttAmount : 10 },
    { id: 9, lastUse: '2022-08-16 / 13:36', batteryAmount: 30, trashAmount: 87, buttAmount :0 },
];


export const AdminCheckDevice = () => {
    const [state, setState] = useState({
        center: {
            lat: 33.450701,
            lng: 126.570667,
        },
        errMsg: null,
        isLoading: true,
    })
    const [positions, setPositions] = useState([])
    console.log(positions)
    useEffect(() => {
        const fetchDevice = async () => {
            const URL = "http://3.36.78.244:8080/embedded/map"
            // const URL = "http://localhost:8888/positions"
            let response = await fetch(URL, {
                method : 'GET'
            }).then((res) => {res.json().then((res) => {
                console.log(res)
                setPositions(res)
                console.log(positions)
            })
            })
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
                    console.log(state)
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
            <h3 style={{ marginLeft : '25px', marginBottom : '5px' }}>지도</h3>
            <Container sx={{ marginTop : '0px'}} maxWidth="xxl" >
                <Map // 지도를 표시할 Container
                    center={state.center}
                    style={{
                        // 지도의 크기
                        width: "100%",
                        height: "50vh",
                        marginBottom : 20,
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
                            // position={position.latlng}
                            position={{"lat" : `${position.embLat}`, "lng" :`${position.embLng}`}}
                            key={position.embId}
                            image={{
                                src: "https://cdn-icons-png.flaticon.com/512/999/999047.png", // 마커이미지의 주소입니다
                                size: {
                                    width: 24,
                                    height: 35
                                },
                            }}
                            title={`${position.embId}번 디바이스`}
                        />
                    )))}
                </Map>
            </Container>
            <div style={{ height: 400, width: '99%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                />
            </div>
        </React.Fragment>
    )
}