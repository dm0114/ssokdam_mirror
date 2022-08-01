package com.ssaft.project.Service;


import com.ssaft.project.Repository.IotUserRepository;
import com.ssaft.project.domain.IotUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Optional;

@Service
public class AdminService {

    @Autowired
    IotUserService iotUserService;

    @Autowired
    IotUserRepository iotUserRepository;

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

    public boolean makeAdmin(String id){
        try {
            Optional<IotUser> iotUser = iotUserRepository.findById(id);
            iotUser.get().setUserAdmin("Y");
            iotUserRepository.save(iotUser.get());
            return  true;
        }catch (NegativeArraySizeException e){
            return false;
        }
    }
}
