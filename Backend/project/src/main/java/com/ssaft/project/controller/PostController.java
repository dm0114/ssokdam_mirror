package com.ssaft.project.controller;

import com.ssaft.project.Repository.CommentDataRepository;
import com.ssaft.project.Repository.IotUserRepository;
import com.ssaft.project.Repository.PostDataRepository;
import com.ssaft.project.Service.PostService;
import com.ssaft.project.domain.CommentData;
import com.ssaft.project.domain.IotUser;
import com.ssaft.project.domain.PostData;
import org.hibernate.cfg.SecondaryTableSecondPass;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class PostController {

    @Autowired
    PostDataRepository postDataRepository;

    @Autowired
    IotUserRepository iotUserRepository;

    @Autowired
    CommentDataRepository getDataRepository;

    @Autowired
    PostService postService;


    @GetMapping("/myAsk")                                                          // 나의 문의사항 return
    @ResponseBody
    public List<PostData> myAsk(@RequestHeader("token") String token){
        System.out.println(token);
        return postService.myAsk(token);
    }

    @PostMapping("/post")
    @ResponseBody
    public Map postPush(@RequestHeader("token") String token, @RequestBody PostData postData){
        System.out.println(postData.getFile());
        postService.postPush(token, postData);
        Map<String, Object> map = new LinkedHashMap<>();
        map.put("ok", true);
        return map;
    }

    @PutMapping("/post/{pstSeq}")
    @ResponseBody
    public Map postEdit(@PathVariable("pstSeq") int pstSeq, @RequestBody PostData postData){
        return postService.postEdit(pstSeq, postData);
    }

    @DeleteMapping("/post/{pstSeq}")
    @ResponseBody
    public Map postDelete(@PathVariable("pstSeq") int pstSeq){
        return postService.postDelete(pstSeq);
    }

    @PostMapping("/get")
    public void test2(@RequestBody CommentData commentData){


        Optional<IotUser> user = iotUserRepository.findById(commentData.getUserId());
        Optional<PostData> data2 = postDataRepository.findById(commentData.getPstSeq());

        List<CommentData> data  = getDataRepository.findByPostData(data2.get());
        int cnt = data.size();
        if(cnt!=0) {
            cnt = data.get(cnt-1).getCmtSub() + 1;
        }else{
            cnt = cnt+1;
        }

        commentData.setIotUser(user.get());
        commentData.setPostData(data2.get());
        commentData.setCmtSub(cnt);
        getDataRepository.save(commentData);

    }

    @GetMapping("/notice/id")              // 속성값 게시판 호출
    @ResponseBody()
    public PostData noticeAll(){
        List<PostData> postData = postService.findAll("공지사항");
        PostData postData1 = postData.get(postData.size()-1);
        return postData1;
    }


}
