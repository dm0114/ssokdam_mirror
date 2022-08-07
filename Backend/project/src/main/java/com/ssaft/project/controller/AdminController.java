package com.ssaft.project.controller;

import com.ssaft.project.Service.AdminService;
import com.ssaft.project.Service.EmbeddedService;
import com.ssaft.project.Service.PaybackService;
import com.ssaft.project.Service.PostService;
import com.ssaft.project.domain.EmbeddedData;
import com.ssaft.project.domain.IotUser;
import com.ssaft.project.domain.PaybackData;
import com.ssaft.project.domain.PostData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class AdminController {

    @Autowired
    AdminService adminService;

    @Autowired
    EmbeddedService embeddedService;

    @Autowired
    PaybackService paybackService;

    @Autowired
    PostService postService;

    @PostMapping("/admin/login")       //관리자 로그인
    @ResponseBody()
    public Map adminLogin(@RequestBody IotUser iotUser){
        return adminService.login(iotUser.getUserId(), iotUser.getUserPwd());
    }

    @PostMapping("/admin/make")             //관리자 등록
    @ResponseBody()
    public boolean makeAdmin(@RequestBody IotUser iotUser){
        return adminService.makeAdmin(iotUser.getUserId());
    }

    @GetMapping("/admin/notice")              // 속성값 게시판 호출
    @ResponseBody()
    public List<PostData> noticeAll(){
        return postService.findAll("공지사항");
    }
    @GetMapping("/admin/complain")              // 속성값 게시판 호출
    @ResponseBody()
    public List<PostData> ComplainPAll(){
        return postService.findAll("불만사항");
    }
    @GetMapping("/admin/broken")              // 속성값 게시판 호출
    @ResponseBody()
    public List<PostData> BrokenAll(){
        return postService.findAll("고장신고");
    }

    @GetMapping("/admin/checkDevice")              // 임베디드 기기정보 호출
    @ResponseBody()
    public List<EmbeddedData> embeddedAll(){
        return embeddedService.findAll();
    }

    @GetMapping("/admin/exchange")              // 환전 데이터 전부 호출
    @ResponseBody()
    public List<PaybackData> paybackDataAll(){
        return paybackService.paybackAll();
    }

    @GetMapping("/admin")              // 관리자 메인 페이지
    @ResponseBody()
    public Map dataAll(){
        Map<String , Object> map = new LinkedHashMap<>();
        map.put("exchangeLth" , paybackService.findNcnt());
        map.put("exchangeMoney" , paybackService.findYmoney());
        map.put("complain" , postService.findAll("불만사항"));
        map.put("Broken" , postService.findAll("고장신고"));
        return map;
    }






    @PostMapping("/admin/exchange")              // 환전 데이터 입력
    @ResponseBody()
    public void paybackDataPush(@RequestBody PaybackData paybackData){
        paybackService.paybackPush(paybackData);
    }

    @PostMapping("/admin/post")        // 게시글 작성
    @ResponseBody()
    public void noticepush(@RequestBody PostData postData){
        adminService.postPush(postData);
    }
}
