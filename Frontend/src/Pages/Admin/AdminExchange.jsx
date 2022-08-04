import React from 'react'
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import {Link} from "react-router-dom";
import Button from "@mui/material/Button";
import {useEffect, useState} from "react";
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import { SERVER_URL } from '../../config';
import axios from "axios";
import {fetchExchange} from "../../api/admin";

const columns = [
    { field: 'id', headerName: '아이디', flex : 1, headerAlign: 'center', align: "center",  editable: true },
    { field: 'reqDt', headerName: '신청 날짜', type : 'dateTime' ,headerAlign: 'center', flex : 1, align: "center", editable: true },
    {
        field: 'reqPt',
        headerName: '신청 포인트',
        type : 'number',
        flex : 1,
        align: "center",
        headerAlign: 'center',
        editable: true
    },
    {
        field: 'userEmail',
        headerName: '이메일',
        type : 'email',
        flex : 1,
        align: "center",
        headerAlign: 'center',
        editable: true
        // valueGetter: (params) =>
        //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
];

const rows = [
    { id: 'kiki249', userAsk: '1993-11-18', userAskPoint: 6000, userEmail : 'kiki249@naver.com' },
    { id: 'swyou', userAsk: '1997-11-18', userAskPoint: 5000, userEmail : 'swyou97@naver.com'  },
    { id: 'kdmhello', userAsk: '1997-11-18', userAskPoint: 5920, userEmail : 'kdmhello97@naver.com'},
    { id: 'kdwon', userAsk: '1997-11-18', userAskPoint: 5740, userEmail : 'kdwon96@naver.com' },
    { id: 'yshan', userAsk: '1997-11-18', userAskPoint: 5900, userEmail : 'yshan97@naver.com' },
    { id: 'jhwon', userAsk: '1998-11-18', userAskPoint: 6400, userEmail : 'jhwon98@naver.com' },
    { id: 'hello', userAsk: '1994-11-18', userAskPoint: 5000, userEmail : 'kiki249@naver.com' },
    { id: 'ecowon', userAsk: '1995-11-18', userAskPoint: 6500, userEmail : 'kiki249@naver.com' },
    { id: 'cigarnono', userAsk: '1996-11-18', userAskPoint: 5060, userEmail :'kiki249@naver.com' },
];


export const AdminExchange = () => {
    const [exchanges, setExchanges] = useState([])

    useEffect(() => {
        const fetchExchanges = fetchExchange()
            .then((res) => console.log(res.json().then((res) => {
                console.log(res)
                setExchanges(res)
            })))
    }, []);


    return (
        <React.Fragment>
            <Box sx={{ marginLeft : '20px' }}>
                <h2>포인트 전환</h2>
                <div style={{ height: 400, width: '99%' }}>
                    <DataGrid
                        rows={exchanges}
                        columns={columns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                        checkboxSelection
                    />
                </div>
            </Box>
            <Box sx={{ display : 'flex', justifyContent : 'flex-end', marginRight : '20px', marginTop : '10px' }}>
                <Button variant="contained" startIcon={<CheckIcon />} sx={{ marginRight : '10px' }} >승인</Button>
                <Button variant="contained" startIcon={<DeleteIcon />} color='error' >삭제</Button>
            </Box>
        </React.Fragment>
    )
}