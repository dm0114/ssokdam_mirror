import React from 'react'
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import {Link} from "react-router-dom";
import Button from "@mui/material/Button";
import {useEffect, useState} from "react";
import { DataGrid } from '@mui/x-data-grid';

import { SERVER_URL } from '../../config';
import axios from "axios";

const columns = [
    { field: 'id', headerName: '아이디', flex : 1, headerAlign: 'center', align: "center",  editable: true },
    { field: 'userPwd', headerName: '비밀번호', flex : 1, headerAlign: 'center',align: "center",  editable: true },
    { field: 'userBirth', headerName: '생년월일', type : 'dateTime' ,headerAlign: 'center', flex : 1, align: "center", editable: true },
    {
        field: 'userPoint',
        headerName: '포인트',
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
    { id: 'kiki249', userPwd: '*****!', userBirth: '1993-11-18', userPoint: 120, userEmail : 'kiki249@naver.com' },
    { id: 'swyou', userPwd: '*****9', userBirth: '1997-11-18', userPoint: 100, userEmail : 'swyou97@naver.com'  },
    { id: 'kdmhello', userPwd: '*****4', userBirth: '1997-11-18', userPoint: 300, userEmail : 'kdmhello97@naver.com'},
    { id: 'kdwon', userPwd: '*****$', userBirth: '1997-11-18', userPoint: 240, userEmail : 'kdwon96@naver.com' },
    { id: 'yshan', userPwd: '*****w', userBirth: '1997-11-18', userPoint: 500, userEmail : 'yshan97@naver.com' },
    { id: 'jhwon', userPwd: '*****s', userBirth: '1998-11-18', userPoint: 1000, userEmail : 'jhwon98@naver.com' },
    { id: 'hello', userPwd: '*****j', userBirth: '1994-11-18', userPoint: 20, userEmail : 'kiki249@naver.com' },
    { id: 'ecowon', userPwd: '*****v', userBirth: '1995-11-18', userPoint: 40, userEmail : 'kiki249@naver.com' },
    { id: 'cigarnono', userPwd: '*****d', userBirth: '1996-11-18', userPoint: 60, userEmail :'kiki249@naver.com' },
];


export const AdminUserManagement = () => {
    return (
        <React.Fragment>
            <Box sx={{ marginLeft : '20px' }}>
                <h2>회원 관리</h2>
                <div style={{ height: 400, width: '99%' }}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                        checkboxSelection
                    />
                </div>
            </Box>
        </React.Fragment>
    )
}