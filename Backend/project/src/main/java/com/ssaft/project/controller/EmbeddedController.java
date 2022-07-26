package com.ssaft.project.controller;

import com.ssaft.project.Repository.EmbeddedDataRepository;
import com.ssaft.project.Repository.IotUserRepository;
import com.ssaft.project.Repository.UseDataRepository;
import com.ssaft.project.domain.EmbeddedData;
import com.ssaft.project.domain.UseData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/embedded")
public class EmbeddedController {

    @Autowired
    IotUserRepository iotUserRepository;
    @Autowired
    EmbeddedDataRepository embeddedDataRepository;

    @Autowired
    UseDataRepository useDataRepository;

    @PostMapping("/emb")
    @ResponseBody
    public void test(@RequestBody EmbeddedData embeddedData){
        embeddedDataRepository.save(embeddedData);

        Optional<EmbeddedData> data = embeddedDataRepository.findById(embeddedData.getEmbId());


     }



    @PostMapping("/use")
    @ResponseBody
    public void test3(@RequestBody UseData useData){
        useDataRepository.save(useData);
    }
}
