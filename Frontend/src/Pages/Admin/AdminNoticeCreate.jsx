import React from 'react'
import Container from "@mui/material/Container";
import TextField from '@mui/material/TextField';
import {Box, FormControl} from '@mui/material';
import Button from "@mui/material/Button";
import BorderColorIcon from "@mui/icons-material/BorderColor";

export const AdminNoticeCreate = () => {
    return (
        <React.Fragment>
            <Container maxWidth="xl">
                <h2>공지사항 작성</h2>
                <FormControl fullWidth>
                    <h3>제목</h3>
                    <TextField fullWidth placeholder="제목을 입력해주세요." ></TextField>
                    <h3>내용</h3>
                    <TextField fullWidth placeholder="내용을 입력해주세요."  multiline rows={12}></TextField>
                </FormControl>
                <Box sx={{ display : 'flex', justifyContent : 'flex-end', marginTop : '10px' }}>
                    <Button variant="contained" startIcon={<BorderColorIcon />} >작성</Button>
                </Box>
            </Container>
        </React.Fragment>
    )
}