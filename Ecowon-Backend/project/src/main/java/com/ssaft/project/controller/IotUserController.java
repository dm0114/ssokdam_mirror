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

    @GetMapping("/login")                               //전체 회원 조회
    @ResponseBody
    public List<IotUser> test() {
        return iotUserRepository.findAll();
    }

    @PostMapping("/login")                                // 로그인 기능 true or false 로 전달
    @ResponseBody
    public boolean Checklogin(IotUser loginUser) {
        Optional<IotUser> iotUser = iotUserRepository.findById(loginUser.getUserId());
        return iotUser.get().getUserPwd().equals(loginUser.getUserPwd());
    }

    @PostMapping("/login/json")                                // json 로그인 기능 json 로 전달
    @ResponseBody
    public Map jsonlogin(@RequestBody Map<String, Object> loginuser) {
        String id = (String) loginuser.get("id");
        String password = (String) loginuser.get("password");
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
    @GetMapping("/login/check")
    public void CheckToken(@RequestBody Map<String, Object> token){
        String name = securityService.getSubJect((String) token.get("token"));
        System.out.println(name);
    }

    @PostMapping("/login/findId")                          //form-data 방식으로 아이디 찾기
    @ResponseBody
    public String findId(IotUser loginUser) {
        List<IotUser> iotUser = iotUserRepository.findByUserEmail("윤성@naver.com");
        System.out.println(iotUser);
        for (IotUser user : iotUser) {
            if (user.getUserName().equals(loginUser.getUserName())) {
                return user.getUserId();
            }
        }
        return "찾는 아이디가 없습니다.";
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