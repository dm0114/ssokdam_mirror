package com.ssaft.project.controller;

import com.ssaft.project.Repository.EmbeddedDataRepository;
import com.ssaft.project.Repository.IotUserRepository;
import com.ssaft.project.Repository.UseDataRepository;
import com.ssaft.project.Service.EmbeddedService;
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
    EmbeddedService embeddedService;

    @Autowired
    UseDataRepository useDataRepository;

    @PostMapping("/emb")
    @ResponseBody
    public void test(@RequestBody EmbeddedData embeddedData){
        embeddedService.join(embeddedData);
     }



    @PostMapping("/use")
    @ResponseBody
    public void test3(@RequestBody UseData useData){
        useDataRepository.save(useData);
    }
}
