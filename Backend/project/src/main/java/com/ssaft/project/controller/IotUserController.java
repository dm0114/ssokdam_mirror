package com.ssaft.project.controller;

import com.siot.IamportRestClient.exception.IamportResponseException;
import com.ssaft.project.Repository.IotUserRepository;
import com.ssaft.project.Service.*;
import com.ssaft.project.domain.EmbeddedData;
import com.ssaft.project.domain.IotUser;
import com.ssaft.project.domain.PostData;
import io.jsonwebtoken.JwtException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class IotUserController {

    @Autowired
    SecurityService securityService;   //Token 생성  // 암호화
    @Autowired
    IotUserService iotUserService;   // 유저관련 서비스
    @Autowired
    IotUserRepository iotUserRepository;   // jpa
    @Autowired
    IamportService iamportService;
    @Autowired
    AdminService adminService;
    @Autowired
    PostService postService;
    @Autowired
    EmbeddedService embeddedService;
    @Autowired
    PaybackService paybackService;

    @GetMapping("/admin/users")                               //전체 회원 조회 (사용한다면 관리자에서)
    @ResponseBody
    public List<IotUser> test() {
        return iotUserRepository.findAll();
    }

    @PostMapping("/login")                                //로그인 기능
    @ResponseBody
    public Map jsonlogin(@RequestBody IotUser loginuser) {
        return iotUserService.login(loginuser.getUserId(), loginuser.getUserPwd());
    }

    @PostMapping("/login/findId")                          //아이디 찾기
    @ResponseBody
    public Map findId(@RequestBody IotUser user) {
        return iotUserService.findId(user);
    }

    @PostMapping("/login/findPwd")                          //비밀번호 찾기
    @ResponseBody
    public Map findPwd(@RequestBody IotUser user) {
        return iotUserService.findPwd(user);
    }

    @PutMapping("/login/findPw/changePw")                          //json 방식으로 비밀번호 변경
    @ResponseBody
    public Map changePw(@RequestBody IotUser user) {
        return iotUserService.changePw(user);
    }

    @PostMapping("/users")
    @ResponseBody
    public Map userDelete(@RequestBody IotUser iotUser){
        return iotUserService.userDelete(iotUser.getUserId());
    }

    @PostMapping("/signUp")                          //json  방식으로 로그인
    @ResponseBody
    public Map singUp(@RequestBody IotUser user) {
        return iotUserService.singup(user);
    }

    @PostMapping("/signup/check")                          // 로그인 체크
    @ResponseBody
    public boolean singUpCheck(@RequestBody IotUser user)  {
        try {
            if(iamportService.getIamport(user.getImp_uid()).containsKey("userPhone")){
                return true;
            } else{
                return false;
            }
        } catch (IamportResponseException e) {
            throw new RuntimeException(e);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }
    //*************************************** 관리자 **************************************//
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





    @GetMapping("/myPage")
    @ResponseBody
    public Map main(@RequestBody Map<String, Object> token){
        String token2 = (String) token.get("token");
        String id = securityService.getSubJect(token2);
        Optional<IotUser> user = iotUserRepository.findById(id);
        Map<String, Object> map = new LinkedHashMap<>();
        map.put("userName", user.get().getUserName());
        return map;
    }



    @GetMapping("/mypage/test")
    public Map mypage(@RequestHeader("token") String token){
        Map<String, Object> map = new LinkedHashMap<>();
        try {
            String id = securityService.getSubJect(token);
            Optional<IotUser> user = iotUserRepository.findById(id);
            map.put("userName", user.get().getUserName());
            return map;
        }catch(JwtException e){
            System.out.println(e);
            map.put("Error", "Access 토큰이 만료되었습니다.");
            return map;
        }
    }

    @GetMapping("/Refesh/token")
    public Map refreshToken(@RequestHeader("token") String token){
        return securityService.refreshTokenCheck(token);
    }
}








   /* @GetMapping("/user/{uid}")
    @ResponseBody
    public Optional<IotUser> test2(@PathVariable String uid) {
        System.out.println(uid);
        Optional<IotUser> iotusers = iotUserRepository.findById(uid);
        return iotusers;
    }

    @PostMapping("/singup")
    public String Create(IotUser NewUser){
        System.out.println(NewUser);
        IotUser iotUser = new IotUser();
        iotUser.setUser_id(NewUser.getUser_id());
        iotUser.setUser_email(NewUser.getUser_email());
        iotUser.setUser_pwd((NewUser.getUser_pwd()));
        iotUser.setUser_birth_day(NewUser.getUser_birth_day());

        iotUserService.join(iotUser);

        return "redirect:/";
    }*/