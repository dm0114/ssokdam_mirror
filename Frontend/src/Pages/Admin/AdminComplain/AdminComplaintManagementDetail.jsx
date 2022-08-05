import React from 'react'
import Container from "@mui/material/Container";
import {Box, Divider, FormControl} from "@mui/material";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import {AdminNoticeUpdate} from "../AdminNotice/AdminNoticeUpdate";




export const AdminComplaintManagementDetail = () => {
    return (
        <React.Fragment>
                <Container maxWidth="xl">
                    <h2>불만사항 상세</h2>
                    <FormControl fullWidth>
                        <h3>제목</h3>
                        <Typography sx={{ marginLeft : '10px', marginBottom : '10px' }} component="h2" variant="h3" >
                            { notice.pstTitle }
                        </Typography>
                        <Divider/>
                        <h3>내용</h3>
                            <div className="uploader-wrapper">
                                {/*<input type="file" accept="image/*"*/}
                                {/*       onChange={saveImage}*/}
                                {/*    // 클릭할 때 마다 file input의 value를 초기화 하지 않으면 버그가 발생할 수 있다*/}
                                {/*    // 사진 등록을 두개 띄우고 첫번째에 사진을 올리고 지우고 두번째에 같은 사진을 올리면 그 값이 남아있음!*/}
                                {/*       onClick={(e) => e.target.value = null}*/}
                                {/*       ref={refParam => inputRef = refParam}*/}
                                {/*       style={{display: "none"}}*/}
                                {/*/>*/}
                                {/*<div className="img-wrapper">*/}
                                {/*    <img src={image.preview_URL}/>*/}
                                {/*</div>*/}
                                    {/*<Button color="success" variant="contained" onClick={createNotice}>*/}
                                    {/*    Upload*/}
                                    {/*</Button>*/}
                            </div>
                         <Typography>
                            { notice.pstCtnt }
                        </Typography>
                    </FormControl>

                    <Box sx={{ display : 'flex', justifyContent : 'flex-end', marginTop : '10px' }}>
                        <Button sx={{ marginRight : '5px' }} variant="contained" startIcon={<BorderColorIcon />} onClick={() => {
                            setStatus("EDIT")
                        }}>수정하기</Button>
                        <Button color="error" variant="contained" onClick={deleteNotice}>
                            삭제
                        </Button>
                    </Box>
                </Container>

        </React.Fragment>
    )
}