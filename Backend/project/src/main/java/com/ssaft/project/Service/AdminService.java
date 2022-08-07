package com.ssaft.project.Service;


import com.ssaft.project.Repository.IotUserRepository;
import com.ssaft.project.Repository.PostDataRepository;
import com.ssaft.project.domain.IotUser;
import com.ssaft.project.domain.PostData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.*;

@Service
public class AdminService {

    @Autowired
    IotUserService iotUserService;

    @Autowired
    IotUserRepository iotUserRepository;

    @Autowired
    PostDataRepository postDataRepository;

    public Map login(String id, String password){ // 관리자 로그인
        Optional<IotUser> iotUser = iotUserRepository.findById(id);
        Map<String, Object> map = new LinkedHashMap<>();
        if(iotUser.get().getUserAdmin().equals("N")){
            map.put("ok", false);
            return map;
        }
        map =  iotUserService.login(id, password);
        map.put("ok", true);
        return map;
    }

    public boolean makeAdmin(String id){         //관리자 생성
        try {
            Optional<IotUser> iotUser = iotUserRepository.findById(id);
            iotUser.get().setUserAdmin("Y");
            iotUserRepository.save(iotUser.get());
            return  true;
        }catch (NegativeArraySizeException e){
            return false;
        }
    }

    public void postPush(PostData postData){  // 게시글 작성
        Optional<IotUser> iotUser = iotUserRepository.findById(postData.getUserId());
        postData.setIotUser(iotUser.get());
        Date today = new Date();
        Locale currentLocale = new Locale("KOREAN", "KOREA");
        String pattern = "yyyy-MM-dd HH:mm:ss"; //hhmmss로 시간,분,초만 뽑기도 가능
        SimpleDateFormat formatter = new SimpleDateFormat(pattern,
                currentLocale);
        postData.setPstDt(String.valueOf(formatter.format(today)));
        postDataRepository.save(postData);
    }
}
