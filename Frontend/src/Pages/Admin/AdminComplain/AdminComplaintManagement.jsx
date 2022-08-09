import {useEffect, useState} from "react";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import IconButton from '@mui/material/IconButton';
import TablePagination from '@mui/material/TablePagination';
import TableFooter from '@mui/material/TableFooter';
import PropTypes from 'prop-types';
import {Box} from "@mui/material";
import { useTheme } from '@mui/material/styles';
import {ADMIN_SERVER_URL} from "../../../config";
import {fetchComplains} from "../../../api/admin";
import {PostDetail} from "../../../atoms";
import {useRecoilState} from "recoil";
import {Mode} from "../../../atoms";
import {AdminComplaintManagementDetail} from "./AdminComplaintManagementDetail";
import Button from "@mui/material/Button";
import {DeleteComplain} from "../../../api/admin";
import {Status} from "../../../atoms";

function TablePaginationActions(props) {
    const theme = useTheme();
    const { count, page, rowsPerPage, onPageChange } = props;

    const handleFirstPageButtonClick = (event) => {
        onPageChange(event, 0);
    };

    const handleBackButtonClick = (event) => {
        onPageChange(event, page - 1);
    };

    const handleNextButtonClick = (event) => {
        onPageChange(event, page + 1);
    };

    const handleLastPageButtonClick = (event) => {
        onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };

    return (
        <Box sx={{ flexShrink: 0, ml: 2.5 }}>
            <IconButton
                onClick={handleFirstPageButtonClick}
                disabled={page === 0}
                aria-label="first page"
            >
                {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
            </IconButton>
            <IconButton
                onClick={handleBackButtonClick}
                disabled={page === 0}
                aria-label="previous page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            </IconButton>
            <IconButton
                onClick={handleNextButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="next page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </IconButton>
            <IconButton
                onClick={handleLastPageButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="last page"
            >
                {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
            </IconButton>
        </Box>
    );
}

TablePaginationActions.propTypes = {
    count: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
};

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
        fontSize : 18
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 16,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));




export const AdminComplaintManagement = () => {
    // status 상태 상수
    const General = "GENERAL"
    const Detail = "DETAIL"
    // 글로벌 Mode
    const [mode, setMode] = useRecoilState(Mode)
    // 전체 글
    const [complains,setComplains] = useState([])
    // 글 Detail
    const [status, setStatus] = useRecoilState(Status)
    const [id, setId] = useState(null);
    const [postDetail, setPostDetail] = useRecoilState(PostDetail)
    // pagination
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);


    function createData(id, pstTitle, userId, pstDt, trash) {
        return { id, pstTitle, userId, pstDt, trash };
    }

    const rows = [
        complains.map((complain) => {
            return createData(complain.id ,complain.pstTitle, complain.userId, complain.pstDt,<DeleteIcon/>)
        })
    ];

    useEffect(() => {
        // const fetchComplains = async () => {
        //     // const URL = "https://3.36.78.244:8080/embedded/map"
        //     const URL = `${ADMIN_SERVER_URL}/ComplainP`
        //     let response = await fetch(URL, {
        //         method : 'GET'
        //     }).then((res) => {res.json().then((res) => {
        //         console.log(res)
        //         setComplains(res)
        //     })
        //     })
        // };
        // fetchComplains();
        fetchComplains()
            .then((res) => {res.json().then((res) => {
                console.log(res)
                for(let i=0; i < res.length; i++ ){
                    res[i].id = res[i].pstSeq
                    delete res[i].pstSeq
                }
                console.log(res)
                setComplains(res)
            })})
    }, []);

    if(status === Detail){
        // notices돌면서 id와 같은것 정보 가져옴
        for(let i=0; i<complains.length; i++){
            if(complains[i].id === id){
                setPostDetail(complains[i])
            }
        }
    }
    const deleteComplain = (id) => {
        DeleteComplain(id)
            .then((res) => console.log(res))
    }


    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    return (
        <React.Fragment>
            { status === General ? (
                <>
                    <h2 style={{ marginLeft : '30px' }}>접수된 불만 사항</h2>
                    <Box sx={{ display : 'flex', flexDirection : 'column', width : '100%' }}>

                    <TableContainer sx={{ width : '100%', margin : '20px' }} component={Paper}>
                        <Table sx={{ minWidth: 700}} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell align="center">번호</StyledTableCell>
                                    <StyledTableCell align="center">제목</StyledTableCell>
                                    <StyledTableCell align="center">작성자</StyledTableCell>
                                    <StyledTableCell align="center">작성일</StyledTableCell>
                                    <StyledTableCell align="center"></StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {(rowsPerPage > 0
                                        ? rows[0].slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                        : rows[0]
                                ).map((complain,index) => (
                                    <StyledTableRow key={complain.id}>
                                        <StyledTableCell align="center" component="th" scope="complain">
                                            { index + 1 }
                                        </StyledTableCell>
                                        <StyledTableCell onClick={() => {
                                            console.log(complain.id)
                                            setId(complain.id)
                                            setStatus(Detail)
                                        }} align="center">{complain.pstTitle}</StyledTableCell>
                                        <StyledTableCell align="center">{complain.userId}</StyledTableCell>
                                        <StyledTableCell align="center">{complain.pstDt}</StyledTableCell>
                                        <StyledTableCell align="center" onClick={() => {
                                            deleteComplain(complain.id)
                                        }}>{complain.trash}</StyledTableCell>
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                            <TableFooter>
                                <TableRow>
                                    <TablePagination
                                        rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                                        colSpan={3}
                                        count={rows[0].length}
                                        rowsPerPage={rowsPerPage}
                                        page={page}
                                        SelectProps={{
                                            inputProps: {
                                                'aria-label': 'rows per page',
                                            },
                                            native: true,
                                        }}
                                        onPageChange={handleChangePage}
                                        onRowsPerPageChange={handleChangeRowsPerPage}
                                        ActionsComponent={TablePaginationActions}
                                    />
                                </TableRow>
                            </TableFooter>
                        </Table>
                    </TableContainer>
                    </Box>
                </>
            ) : (<>
                <AdminComplaintManagementDetail/>
                <Button variant="contained" sx={{ mx : 5 }} onClick={() => {
                    setStatus(General)
                }}>
                    뒤로가기
                </Button>
            </>) }
        </React.Fragment>
    )
}