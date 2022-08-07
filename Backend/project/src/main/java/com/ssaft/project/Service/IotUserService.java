package com.ssaft.project.Service;

import com.siot.IamportRestClient.exception.IamportResponseException;
import com.ssaft.project.Repository.IotUserRepository;
import com.ssaft.project.domain.IotUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.*;

@Service
public class IotUserService {
    private final IotUserRepository iotUserRepository;

    public IotUserService(IotUserRepository iotUserRepository) {
        this.iotUserRepository = iotUserRepository;
    }

    @Autowired
    private SecurityService securityService;

    @Autowired
    private IamportService iamportService;


    public Map login(String id, String password) {    //로그인
        String token = "error";
        Optional<IotUser> iotuser = iotUserRepository.findById(id);
        Map<String, Object> map = new LinkedHashMap<>();
        if (iotuser != null) {
            if (securityService.jasyptDecoding(iotuser.get().getUserPwd()).equals(password)) {
                token = securityService.creatToken(id, (60 * 1000 * 60));
                map.put("Access_token", token);
                token = securityService.creatToken(id, (10800 * 1000 * 60));
                iotuser.get().setUserRt(token);
                iotUserRepository.save(iotuser.get());
                map.put("Refresh_token", token);
                map.put("userName", iotuser.get().getUserName());
                map.put("userEmail", iotuser.get().getUserEmail());
                map.put("userPoint", iotuser.get().getUserPoint());
                map.put("userCnt", iotuser.get().getUserCnt());
                map.put("userImg", iotuser.get().getUserImg());
            } else {
                map.put("message", "비밀번호가 틀렸습니다.");
            }
        } else {
            map.put("message", "존재하지 않는 회원입니다.");
        }

        return map;
    }

    public Map loginRefresh(String token) {
        String id = securityService.getSubJect(token);
        Optional<IotUser> iotUser = iotUserRepository.findById(id);
        Map<String, Object> map = new LinkedHashMap<>();
        if (iotUser.get().getUserRt().equals(token)) {
            String Accesstoken = securityService.creatToken(iotUser.get().getUserId(), (60 * 1000 * 60));
            map.put("Acess token", Accesstoken);
        }
        return map;
    }

    public Map findId(IotUser user) {                      //아이디 찾기
        Map<String, Object> map = new LinkedHashMap<>();

        List<IotUser> iotUser = iotUserRepository.findByUserName(user.getUserName());
        System.out.println(iotUser);
        for (IotUser id : iotUser) {
            if (id.getUserPhone().equals(user.getUserPhone())) {
                map.put("userId", id.getUserId());
                return map;
            }
        }
        map.put("message", "존재하지 않는 회원입니다.");
        return map;

    }

    public Map findPwd(IotUser user) {
        Map<String, Object> map = new LinkedHashMap<>();
        try {
            Optional<IotUser> iotUser = iotUserRepository.findById(user.getUserId());
            if (iotUser.get().getUserPhone().equals(user.getUserPhone())) {
                map.put("userPwd", securityService.jasyptDecoding(iotUser.get().getUserPwd()));
                return map;
            }
            map.put("error", "휴대폰 번호가 틀렸습니다.");
        }catch (NoSuchElementException e){
            map.put("error", "존재하지 않는 회원입니다.");
        }
        return map;
    }


    public Map changePw(IotUser user) {
        Map<String, Object> map = new LinkedHashMap<>();
        Optional<IotUser> iotUser = iotUserRepository.findById(user.getUserId());
        iotUser.get().setUserPwd(securityService.jasyptEncoding(user.getUserPwd()));
        iotUserRepository.save(iotUser.get());
        map.put("messge", "비밀번호 변경 완료!!");
        return map;
    }

    public Map singup(IotUser user) {          //회원가입
        String pwd = securityService.jasyptEncoding(user.getUserPwd());    //비밀번호 암호화
        user.setUserPwd(pwd);

        Map<String ,Object> map = new LinkedHashMap<>();

        try {
            map = iamportService.getIamport(user.getImp_uid());
            System.out.println(map);
        } catch (IamportResponseException e) {
            throw new RuntimeException(e);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
        user.setUserPhone((String) map.get("userPhone"));
        user.setUserBirthDay((String) map.get("userBirthDay"));
        user.setUserName((String) map.get("userName"));
        map.clear();


        try {
            CheckId(user.getUserId());
            String token = securityService.creatToken(user.getUserId(), (60 * 1000 * 60));
            map.put("Access_token" , token);
            token = securityService.creatToken(user.getUserId(), (10800 * 1000 * 60));
            user.setUserRt(token);
            iotUserRepository.save(user);
            map.put("Refresh_token" , token);
            map.put("userName", user.getUserName());
            map.put("userEmail", user.getUserEmail());
            map.put("userPoint", user.getUserPoint());
            map.put("userCnt", user.getUserCnt());
            map.put("userImg", user.getUserImg());
            return map;
        }catch (IllegalStateException e) {

            map.put("message", e);
            return map;
        }
    }

    public void CheckId(String id){                   // 회원가입 - 중복검사
        iotUserRepository.findById(id)
                .ifPresent(m -> {
                    throw new IllegalStateException("이미 존재하는 회원입니다.");
                });
    }
}
