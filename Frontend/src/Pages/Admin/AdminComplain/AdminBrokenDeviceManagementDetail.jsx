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
import {commentCreate, commentUpdate, commentDelete, DeleteComplain, fetchComplainsDetail, RegisterBroken} from "../../../api/admin";
import {Status} from "../../../atoms";
import {useEffect} from "react";
import {fetchBrokenDetail, fetchDeviceDetailStatus} from "../../../api/admin";



export const AdminBrokenDeviceManagementDetail = () => {
    const [mode,setMode] = useRecoilState(Mode)
    const [postDetail, setPostDetail] = useRecoilState(PostDetail)
    const imgLink = belu
    const [comments, setComments] = useState([])
    const [content, setContent] = useState("")
    const [status, setStatus] = useRecoilState(Status)
    const [myUserInfo, setMyUserInfo] = useRecoilState(userInfo)
    const [editId, setEditId] = useState(null);
    const [deviceStatus, setDeviceStatus] = useState("")

    useEffect(() => {
        fetchBrokenDetail(postDetail.id)
            .then((res) => {res.json().then((res) => {
                for(let i=0; i < res.length; i++ ){
                    res[i].id = res[i].pstSeq
                    delete res[i].pstSeq
                }
                console.log(res)
                setComments(res)
            })})
    }, []);

    useEffect(() => {
        fetchDeviceDetailStatus(postDetail.pstDumy)
            .then((res) => {res.json().then((res)=>{
                console.log(res)
                setDeviceStatus(res[0].embSta)
            })})
    }, []);




    const onChangeComment = (e) => {
        console.log(content)
        setContent(e.target.value)
    }

    const myCommentCreate = () => {
        commentCreate({postId : postDetail.id, cmtCtnt : content})
            .then((res)=> window.location.replace("/admin"))
    }

    const myCommentDelete = (id) => {
        commentDelete({postId : postDetail.id, cmtId : id})
            .then((res) => window.location.replace("/admin"))
    }
    const myCommentEdit = () => {
        commentUpdate({ postId : postDetail.id, cmtId : editId, cmtCtnt: content })
            .then((res) => setEditId(null))
            .then((res) => window.location.replace("/admin"))
    }

    const deleteComplain = () => {
        DeleteComplain(postDetail.id)
            .then((res) => setStatus("GENERAL") )
            .then((res) => window.location.replace("/admin"))
    }

    const registerBroken = (id) => {
        RegisterBroken(id)
            .then((res) => window.location.replace("/admin"))
    }


    return (
        <React.Fragment>
            <Container maxWidth="xl">
                <h2>고장신고 상세</h2>
                <h4><span style={{ color : "red" }}>{ postDetail.pstDumy }</span>번 디바이스 고장신고</h4>
                { deviceStatus === "N" ? (
                    <Button variant="contained" color="error" onClick={() => registerBroken(postDetail.pstDumy)}>고장등록</Button>
                ) : (
                    <Button variant="contained" color="error" onClick={() => registerBroken(postDetail.pstDumy)}>고장해제</Button>
                ) }
                <FormControl fullWidth>
                    <h3>제목</h3>
                    <Typography sx={{ marginLeft : '10px', marginBottom : '10px' }} component="h2" variant="h3" >
                        { postDetail.pstTitle }
                    </Typography>
                    <Divider/>
                    <h3>내용</h3>
                    <Box style={{ padding: "20px 20px", minHeight : '500px' }}>
                        { postDetail.pstImg ? (
                            <div className="img-wrapper">
                                <img style={{  width: '500px' , height: '500px', objectFit : "contain" }}  src={postDetail.pstImg}/>
                            </div>
                        ) : (<></>) }
                        <Typography>
                            { postDetail.pstCtnt }
                        </Typography>
                    </Box>
                    <Divider/>
                </FormControl>

                <Box sx={{ display : 'flex', justifyContent : 'flex-end', marginTop : '10px' }}>
                    <Button color="error" variant="contained" sx={{ m : 1 }} onClick={() => {
                        deleteComplain(postDetail.id)
                    }}>
                        삭제
                    </Button>
                </Box>
                <Divider/>
                <div style={{ padding: 14 }}>
                    {/*<h1>불만사항 답변</h1>*/}
                    { comments.length !== 0 ? (
                        <Paper style={{ padding: "40px 20px" }}>
                            <Grid container  wrap="nowrap" spacing={2} direction="column">
                                {/* comment 덩어리 */}
                                { comments?.map((comment) => (
                                    <>
                                        <Grid item>
                                            <Avatar alt="Remy Sharp" src={belu} />
                                        </Grid>
                                        <Grid justifyContent="left" item xs zeroMinWidth>
                                            <h4 style={{ margin: 0, textAlign: "left" }}>{ comment.userId } 관리자님</h4>
                                            { comment.cmtSeq !== editId ? (
                                                <p style={{ textAlign: "left" }}>
                                                    {comment.cmtCtnt}
                                                </p>
                                            ) : (<TextField
                                                sx={{ pt : 2 }}
                                                fullWidth
                                                multiline
                                                rows = {5}
                                                defaultValue={comment.cmtCtnt}
                                                id="fullWidth"
                                                onChange={onChangeComment}
                                            />)  }
                                            <p style={{ textAlign: "left", color: "gray" }}>
                                                posted 1 minute ago
                                            </p>
                                            <Box sx={{ display : 'flex', justifyContent : 'flex-end', marginTop : '10px' }}>
                                                { comment.cmtSeq !== editId ? (
                                                    <Button color="info" variant="contained" sx={{ margin : "0 5px" }} onClick={() => setEditId(comment.cmtSeq)}>
                                                        수정
                                                    </Button>
                                                ) : (<Button color="info" variant="contained" sx={{ margin : "0 5px" }} onClick={() => myCommentEdit()}>
                                                    수정완료
                                                </Button>) }
                                                <Button color="error" variant="contained" sx={{ margin : "0 5px" }} onClick={() => {
                                                    myCommentDelete(comment.cmtSeq)
                                                }}>
                                                    삭제
                                                </Button>
                                            </Box>
                                        </Grid>
                                        <Divider/>
                                    </>
                                ))}
                                {/* comment 덩어리 */}
                            </Grid>
                        </Paper>
                    ) : (<></>) }
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