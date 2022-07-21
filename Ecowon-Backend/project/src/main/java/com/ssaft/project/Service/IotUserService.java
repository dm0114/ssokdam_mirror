package com.ssaft.project.Service;

import com.ssaft.project.Repository.IotUserRepository;
import com.ssaft.project.domain.IotUser;
import org.springframework.stereotype.Service;

@Service
public class IotUserService {
    private final IotUserRepository iotUserRepository ;

    public IotUserService(IotUserRepository iotUserRepository) {
        this.iotUserRepository = iotUserRepository;
    }


    public String join(IotUser iotUser){
        CheckId(iotUser);
        iotUserRepository.save(iotUser);
        return iotUser.getUserId();
    }

    public void CheckId(IotUser iotUser){
        iotUserRepository.findById(iotUser.getUserId())
                .ifPresent(m -> {
                    throw new IllegalStateException("이미 존재하는 회원입니다.");
                });
    }

}
