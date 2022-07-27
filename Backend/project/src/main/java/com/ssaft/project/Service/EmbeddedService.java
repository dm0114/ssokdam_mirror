package com.ssaft.project.Service;

import com.ssaft.project.Repository.EmbeddedDataRepository;
import com.ssaft.project.Repository.IotUserRepository;
import com.ssaft.project.domain.EmbeddedData;
import com.ssaft.project.domain.IotUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class EmbeddedService {

    @Autowired
    EmbeddedDataRepository embeddedDataRepository;

    @Autowired
    IotUserRepository iotUserRepository;

    public void join(EmbeddedData embeddedData){
        Optional<IotUser> iotUser =  iotUserRepository.findById(embeddedData.getUserId());
        embeddedData.setIotUser(iotUser.get());
        embeddedDataRepository.save(embeddedData);
    }
}
