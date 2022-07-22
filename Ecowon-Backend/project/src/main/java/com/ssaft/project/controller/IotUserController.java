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
    SecurityService securityService;   //Token 생성
    @Autowired
    IotUserService iotUserService;   // 아직까진 join
    @Autowired
    IotUserRepository iotUserRepository;   // jpa

    @GetMapping("/login")                               //전체 회원 조회 (사용한다면 관리자에서)
    @ResponseBody
    public List<IotUser> test() {
        return iotUserRepository.findAll();
    }

    @PostMapping("/login")                                // json 로그인 기능 json 로 전달
    @ResponseBody
    public Map jsonlogin(@RequestBody Map<String, Object> loginuser) {
        String id = (String) loginuser.get("userId");
        String password = (String) loginuser.get("userPwd");
        Map<String, Object> map = new LinkedHashMap<>();
        try{
            String token = iotUserService.login(id, password);
            map.put("token", token);
            System.out.println(map);
            return map;
        }catch(NoSuchElementException e){
            map.put("error", "error");
            return map;
        }
    }

    @PostMapping("/login/findId")                          //json 방식으로 아이디 찾기
    @ResponseBody
    public Map findId(@RequestBody Map<String, Object> user) {
        String name = (String) user.get("userName");
        String email = (String) user.get("userEmail");
        Map<String, Object> map = new LinkedHashMap<>();
        List<IotUser> iotUser = iotUserRepository.findByUserEmail(email);
        System.out.println(iotUser);
        for (IotUser id : iotUser) {
            if (id.getUserName().equals(name)) {
                map.put("userId", id.getUserId());
                return map;
            }
        }
        map.put("error", "error");
        return map;
    }

    @PostMapping("/login/findPw")                          //json 방식으로 비밀번호 찾기
    @ResponseBody
    public Map findPwd(@RequestBody Map<String, Object> user) {
        String id = (String) user.get("userId");
        String email = (String) user.get("userEmail");
        String phone = (String) user.get("userPhone");
        Map<String, Object> map = new LinkedHashMap<>();
        Optional<IotUser> iotUser = iotUserRepository.findById(id);
        System.out.println(iotUser);
        if(iotUser.get().getUserPhone().equals(phone)){
            map.put("userPwd", iotUser.get().getUserPwd());
            return map;
        }
        map.put("error", "error");
        return map;
    }

    @PutMapping("/login/findPw/changePw")                          //json 방식으로 비밀번호 찾기
    @ResponseBody
    public Map changePw(@RequestBody Map<String, Object> user) {
        String id = (String) user.get("userId");
        String password = (String) user.get("userPwd");
        Map<String, Object> map = new LinkedHashMap<>();
        Optional<IotUser> iotUser = iotUserRepository.findById(id);
        iotUser.get().setUserPwd(password);
        iotUserRepository.save(iotUser.get());
        map.put("sucess" , "sucess");
        return map;
    }

    @PostMapping("/singup")                          //json 방식으로 비밀번호 찾기
    @ResponseBody
    public Map singUp(@RequestBody Map<String, Object> user) {
        IotUser iotUser = new IotUser();
        iotUser.setUserId((String) user.get("userId"));
        iotUser.setUserPwd((String) user.get("userPwd"));
        iotUser.setUserName((String) user.get("userName"));
        iotUser.setUserPhone((String) user.get("userPhone"));
        iotUser.setUserBirthDay((String) user.get("userBirthDay"));
        iotUser.setUserEmail((String) user.get("userEmail"));
        Map<String, Object> map = new LinkedHashMap<>();
        try {
            iotUserService.join(iotUser);
            map.put("sucess", "sucess");
        }catch (IllegalStateException e) {
            map.put("message", e);
        }
        return map;
    }

    @GetMapping("/login/check")
    public void CheckToken(@RequestBody Map<String, Object> token){
        String name = securityService.getSubJect((String) token.get("token"));
        System.out.println(name);
    }

    @PostMapping("/login/findPw/changePw")                 //form-data 방식으로 비밀번호 변경
    public String changePw(IotUser changePw){
        Optional<IotUser> iotuser = iotUserRepository.findById(changePw.getUserId());
        System.out.println(iotuser);
        iotuser.get().setUserPwd(changePw.getUserPwd());
        iotUserRepository.save(iotuser.get());
        return "비밀번호 변경 완료!";
    }

    @PostMapping("/singup")                                 // form-data 방식으로 회원가입
    public String Create(IotUser NewUser){
        System.out.println(NewUser);
        IotUser iotUser = new IotUser();
        iotUser.setUserId(NewUser.getUserId());
        iotUser.setUserEmail(NewUser.getUserEmail());
        iotUser.setUserPwd((NewUser.getUserPwd()));
        iotUser.setUserBirthDay(NewUser.getUserBirthDay());

        iotUserService.join(NewUser);

        return "redirect:/";
    }
    @PostMapping("/singup/json")                               // json 방식으로 회원가입
    public String Create(@RequestBody Map<String, Object> newUser){
        IotUser iotUser = new IotUser();
        iotUser.setUserId((String) newUser.get("userId"));
        iotUser.setUserEmail((String) newUser.get("userEmail"));
        iotUser.setUserPwd((String) newUser.get("userPwd"));
        iotUser.setUserName((String) newUser.get("userName"));


        System.out.println(iotUser);

        iotUserService.join(iotUser);
        return "redirect:/";
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