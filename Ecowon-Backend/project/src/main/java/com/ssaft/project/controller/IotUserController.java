package com.ssaft.project.controller;

import com.ssaft.project.Repository.IotUserRepository;
import com.ssaft.project.Service.IotUserService;
import com.ssaft.project.Service.SecurityService;
import com.ssaft.project.domain.IotUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.util.*;

@RestController
@RequestMapping("/api")
public class IotUserController {

    @Autowired
    SecurityService securityService;   //Token 생성  // 암호화
    @Autowired
    IotUserService iotUserService;   // 유저관련 서비스
    @Autowired
    IotUserRepository iotUserRepository;   // jpa

    @GetMapping("/login")                               //전체 회원 조회 (사용한다면 관리자에서)
    @ResponseBody
    public List<IotUser> test() {
        return iotUserRepository.findAll();
    }

    @PostMapping("/login")                                //로그인 기능
    @ResponseBody
    public Map jsonlogin(@RequestBody IotUser loginuser) {
        return iotUserService.login(loginuser.getUserId(), loginuser.getUserPwd());
    }

    @PostMapping("/login/json")                                //로그인 기능
    @ResponseBody
    public Map jsonlogin(@RequestBody Map<String, Object> map) {
        String id = (String) map.get("id");
        String password = (String) map.get("password");
        return iotUserService.login(id, password);
    }

    @PostMapping("/login/findId")                          //아이디 찾기
    @ResponseBody
    public Map findId(@RequestBody IotUser user) {
        return iotUserService.findId(user);
    }

    @PostMapping("/login/findPw")                          //비밀번호 찾기
    @ResponseBody
    public Map findPwd(@RequestBody IotUser user) {
        return iotUserService.findPwd(user);
    }

    @PutMapping("/login/findPw/changePw")                          //json 방식으로 비밀번호 변경
    @ResponseBody
    public Map changePw(@RequestBody IotUser user) {
        return iotUserService.changePw(user);
    }

    @PostMapping("/singup")                          //json 방식으로 로그인
    @ResponseBody
    public Map singUp(@RequestBody IotUser user) {
        return iotUserService.singup(user);
    }

    @GetMapping("/")
    @ResponseBody
    public Map main(@RequestBody String token){
        String id = securityService.getSubJect(token);
        Optional<IotUser> user = iotUserRepository.findById(id);
        Map<String, Object> map = new LinkedHashMap<>();
        map.put("userTime", user.get().getUserTime());
        return null;
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