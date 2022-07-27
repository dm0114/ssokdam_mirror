package com.ssaft.project.controller;

import com.ssaft.project.Repository.EmbeddedDataRepository;
import com.ssaft.project.Repository.IotUserRepository;
import com.ssaft.project.Repository.UseDataRepository;
import com.ssaft.project.Service.EmbeddedService;
import com.ssaft.project.Service.SecurityService;
import com.ssaft.project.domain.EmbeddedData;
import com.ssaft.project.domain.IotUser;
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
    EmbeddedDataRepository embeddedDataRepository;
    @Autowired
    UseDataRepository useDataRepository;

    @Autowired
    SecurityService securityService;

    @PostMapping("/emb")
    @ResponseBody
    public void test(@RequestBody EmbeddedData embeddedData){
        embeddedService.join(embeddedData);
     }

     @PostMapping("/qr")
     @ResponseBody
     public void Qr(@RequestBody EmbeddedData user){
        System.out.println(user);
        Optional<EmbeddedData> embeddedData = embeddedDataRepository.findById(Integer.valueOf(user.getEmbId()));
        String name = securityService.getSubJect(user.getToken());
<<<<<<< HEAD
         Optional<IotUser> iotUser =  iotUserRepository.findById(name);
         embeddedData.get().setIotUser(iotUser.get());
         embeddedData.get().setEmbQr("Y");
         embeddedDataRepository.save(embeddedData.get());
=======
        Optional<IotUser> iotUser =  iotUserRepository.findById(name);
        embeddedData.get().setIotUser(iotUser.get());
        embeddedData.get().setUserId(name);
        embeddedDataRepository.save(embeddedData.get());
>>>>>>> d7cd270dd4ceaa9d10282fd8635f467dc5d2c80e
     }



    @PostMapping("/use")
    @ResponseBody
    public void test3(@RequestBody UseData useData){
        useDataRepository.save(useData);
    }
}
