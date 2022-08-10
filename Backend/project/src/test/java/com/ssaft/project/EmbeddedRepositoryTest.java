package com.ssaft.project;

import com.ssaft.project.Repository.EmbeddedDataRepository;
import com.ssaft.project.Service.EmbeddedService;
import com.ssaft.project.domain.EmbeddedData;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Commit;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

@SpringBootTest
@Commit
public class EmbeddedRepositoryTest {

    @Autowired
    EmbeddedService embeddedService;
    @Autowired
    EmbeddedDataRepository embeddedDataRepository;

    @Test
    public void 임베디드등록(){
        List<EmbeddedData> embeddedData = embeddedDataRepository.findAll();
        for(int i=0;i<embeddedData.size();i++){
            embeddedService.qrCheck(i);
        }
    }

}
