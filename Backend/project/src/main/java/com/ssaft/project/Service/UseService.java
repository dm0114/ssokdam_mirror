package com.ssaft.project.Service;

import com.ssaft.project.Repository.EmbeddedDataRepository;
import com.ssaft.project.Repository.IotUserRepository;
import com.ssaft.project.Repository.UseDataRepository;
import com.ssaft.project.domain.UseData;
import org.aspectj.weaver.ast.Not;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UseService {
    @Autowired
    IotUserService iotUserService;
    @Autowired
    NotionService notionService;

    @Autowired
    UseDataRepository useDataRepository;

    @Autowired
    IotUserRepository iotUserRepository;
    @Autowired
    EmbeddedDataRepository embeddedDataRepository;

    public void usePush(UseData useData){                  // 담배 판별 'Y' 'N' 에 따라 작업 수행
        if(useData.getUseCheck().equals("Y")){
            iotUserService.cigPush(useData.getUserId());
            notionService.notionPush(useData.getUserId(), "cig", 25);
        }
        useData.setIotUser(iotUserRepository.findById(useData.getUserId()).get());
        System.out.println(useData.getEmbId());
        useData.setEmbeddedData(embeddedDataRepository.findById(useData.getEmbId()).get());
        System.out.println(useData);
        useDataRepository.save(useData);
    }
}
