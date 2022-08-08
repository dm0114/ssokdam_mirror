import React from 'react'
import Container from "@mui/material/Container";
import {Box, Divider, FormControl, TextField} from "@mui/material";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import {AdminNoticeUpdate} from "../AdminNotice/AdminNoticeUpdate";
import { Avatar, Grid, Paper } from "@material-ui/core";
import {PostDetail} from "../../../atoms";
import {useRecoilState} from "recoil";
import {Mode} from "../../../atoms";
import belu from "../../../picture/belu.png"
import {userInfo} from "../../../atoms";
import {CommentInputBox} from "../../../styles/AdminStyle";
import {useState} from "react";
import {commentCreate, commentUpdate, commentDelete} from "../../../api/admin";
import {DeleteComplain} from "../../../api/admin";



export const AdminComplaintManagementDetail = () => {
    const [mode,setMode] = useRecoilState(Mode)
    const [postDetail, setPostDetail] = useRecoilState(PostDetail)
    const [comment, setComment] = useState("")
    const imgLink = belu
    const [myUserInfo, setMyUserInfo] = useRecoilState(userInfo)
    const [editId, setEditId] = useState(null);

    const onChangeComment = (e) => {
        console.log(comment)
        setComment(e.target.value)
    }


    const myCommentCreate = () => {
        commentCreate({postId : postDetail.pstSeq, cmtCtnt : comment })
            .then((res)=> console.log(res))
    }

    const myCommentDelete = () => {
        commentDelete()
            .then((res) => console.log(res))
    }
    const myCommentEdit = () => {
        commentUpdate()
            .then((res) => console.log(res))
    }

    const deleteComplain = () => {
        DeleteComplain()
            .then((res) => console.log(res))
    }


    return (
        <React.Fragment>
                <Container maxWidth="xl">
                    <h2>불만사항 상세</h2>
                    <FormControl fullWidth>
                        <h3>제목</h3>
                        <Typography sx={{ marginLeft : '10px', marginBottom : '10px' }} component="h2" variant="h3" >
                            { postDetail.pstTitle }
                        </Typography>
                        <Divider/>
                        <h3>내용</h3>
                            {/*<div className="uploader-wrapper">*/}
                            {/*    <div className="img-wrapper">*/}
                            {/*        <img src={postDetail.preview_URL}/>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                         <Box style={{ padding: "20px 20px" }}>
                             <Grid container wrap="nowrap" spacing={2}>
                                 <Grid item>
                                     { postDetail.pstCtnt }
                                 </Grid>
                             </Grid>
                        </Box>
                        <Divider/>
                    </FormControl>

                    <Box sx={{ display : 'flex', justifyContent : 'flex-end', marginTop : '10px' }}>
                        <Button color="error" variant="contained" sx={{ m : 1 }} onClick={() => {
                            deleteComplain(postDetail.pstSeq)
                        }}>
                            삭제
                        </Button>
                    </Box>
            <Divider/>
            <div style={{ padding: 14 }}>
                {/*<h1>불만사항 답변</h1>*/}
                <Paper style={{ padding: "40px 20px" }}>
                    <Grid container wrap="nowrap" spacing={2}>
                        {/* comment 덩어리 */}
                        <Grid item>
                            <Avatar alt="Remy Sharp" src={belu} />
                        </Grid>
                        <Grid justifyContent="left" item xs zeroMinWidth>
                            <h4 style={{ margin: 0, textAlign: "left" }}>{ myUserInfo.userName } 관리자님</h4>
                            <p style={{ textAlign: "left" }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                                luctus ut est sed faucibus. Duis bibendum ac ex vehicula laoreet.
                                Suspendisse congue vulputate lobortis. Pellentesque at interdum
                                tortor. Quisque arcu quam, malesuada vel mauris et, posuere
                                sagittis ipsum. Aliquam ultricies a ligula nec faucibus. In elit
                                metus, efficitur lobortis nisi quis, molestie porttitor metus.
                                Pellentesque et neque risus. Aliquam vulputate, mauris vitae
                                tincidunt interdum, mauris mi vehicula urna, nec feugiat quam
                                lectus vitae ex.{" "}
                            </p>
                            <p style={{ textAlign: "left", color: "gray" }}>
                                posted 1 minute ago
                            </p>
                            <Box sx={{ display : 'flex', justifyContent : 'flex-end', marginTop : '10px' }}>
                                <Button color="info" variant="contained" sx={{ margin : "0 5px" }}>
                                    수정
                                </Button>
                                <Button color="error" variant="contained" sx={{ margin : "0 5px" }} onClick={() => {
                                    myCommentDelete()
                                }}>
                                    삭제
                                </Button>
                            </Box>
                        </Grid>
                        {/* comment 덩어리 */}
                    </Grid>
                </Paper>
            </div>
                    <div style={{ padding: 14 }}>
                        <paper style={{ padding: "40px 20px" }}>
                            <Grid container wrap="nowrap" spacing={2}>
                                <Grid item>
                                    <Avatar alt="Remy Sharp" src={belu} />
                                </Grid>
                                <Grid justifyContent="left" item xs zeroMinWidth>
                                    <h4 style={{ margin: 0, textAlign: "left" }}>{ myUserInfo.userName } 관리자님</h4>
                                    <TextField
                                        sx={{ pt : 2 }}
                                        fullWidth
                                        multiline
                                        rows = {5}
                                        placeholder="답변 작성"
                                        id="fullWidth"
                                        onChange={onChangeComment}
                                    />
                                    <Box sx={{ display : 'flex', justifyContent : 'flex-end', marginTop : '10px' }}>
                                        <Button color="primary" variant="contained" sx={{ margin : "0 5px" }} onClick={() => {
                                            myCommentCreate()
                                        }}>
                                            작성
                                        </Button>
                                    </Box>
                                </Grid>
                            </Grid>
                        </paper>
                    </div>
                </Container>

        </React.Fragment>
    )
}