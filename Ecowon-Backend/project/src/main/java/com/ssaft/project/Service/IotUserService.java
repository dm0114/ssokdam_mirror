package com.ssaft.project.Service;

import com.ssaft.project.Repository.IotUserRepository;
import com.ssaft.project.domain.IotUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class IotUserService {
    private final IotUserRepository iotUserRepository ;

    public IotUserService(IotUserRepository iotUserRepository) {
        this.iotUserRepository = iotUserRepository;
    }

    @Autowired
    private SecurityService securityService;


    public String join(IotUser iotUser){                   // 회원가입
        CheckId(iotUser.getUserId());
        iotUserRepository.save(iotUser);
        return iotUser.getUserId();
    }

    public void CheckId(String id){                   // 회원가입 - 중복검사
        iotUserRepository.findById(id)
                .ifPresent(m -> {
                    throw new IllegalStateException("이미 존재하는 회원입니다.");
                });
    }

    public String login(String id, String password) {
        String token = "error";
        Optional<IotUser> iotuser = iotUserRepository.findById(id);
        if (iotuser!=null) {
            if (iotUserRepository.findById(id).get().getUserPwd().equals(password)) {
                token = securityService.creatToken(id, (2 * 1000 * 60));
            }
        }
        return token;
    }

}
