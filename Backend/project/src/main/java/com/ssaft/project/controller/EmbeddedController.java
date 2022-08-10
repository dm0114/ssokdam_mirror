package com.ssaft.project.controller;

import com.ssaft.project.Function.Function;
import com.ssaft.project.Repository.EmbeddedDataRepository;
import com.ssaft.project.Repository.IotUserRepository;
import com.ssaft.project.Repository.UseDataRepository;
import com.ssaft.project.Service.EmbeddedService;
import com.ssaft.project.domain.EmbeddedData;
import com.ssaft.project.domain.IotUser;
import com.ssaft.project.domain.UseData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api")
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
    Function function;

    @GetMapping("/admin/checkDevice")              // 임베디드 기기정보 호출
    @ResponseBody()
    public List<EmbeddedData> embeddedAll(){
        return embeddedService.findAll();
    }

    @PostMapping("/embedded/emb")
    @ResponseBody
    public void test(@RequestBody EmbeddedData embeddedData){
        embeddedService.join(embeddedData);
     }

     @PostMapping("/embedded/qr")
     @ResponseBody
     public void Qr(@RequestBody EmbeddedData user){
        System.out.println(user);
        Optional<EmbeddedData> embeddedData = embeddedDataRepository.findById(Integer.valueOf(user.getEmbId()));
        String name = function.getSubJect(user.getToken());
         Optional<IotUser> iotUser =  iotUserRepository.findById(name);
         embeddedData.get().setIotUser(iotUser.get());
         embeddedData.get().setEmbQr("Y");
         embeddedDataRepository.save(embeddedData.get());
     }

     @PostMapping("/embedded/send")
     @ResponseBody
     public void SensingSend(@RequestBody EmbeddedData sensing){
        Optional<EmbeddedData> embeddedData = embeddedDataRepository.findById(sensing.getEmbId());
        embeddedData.get().setEmbFullTra(sensing.getEmbFullTra());
        embeddedData.get().setEmbFullCig(sensing.getEmbFullCig());
        embeddedData.get().setEmbLat(sensing.getEmbLat());
        embeddedData.get().setEmbLng(sensing.getEmbLng());
         embeddedData.get().setEmbBat(sensing.getEmbBat());
         embeddedData.get().setEmbCnt(sensing.getEmbCnt());
         embeddedData.get().setEmbSta(sensing.getEmbSta());
         embeddedDataRepository.save(embeddedData.get());
     }

    @GetMapping("/embedded/receive")
    @ResponseBody
    public Map receive(@RequestParam int embId){
        Optional<EmbeddedData> embeddedData = embeddedDataRepository.findById(embId);
        Map<String, Object> map = new LinkedHashMap<>();
        if(embeddedData.get().getEmbQr().equals("Y")){
            map.put("userId" , embeddedData.get().getIotUser().getUserId());
            map.put("embQr" , embeddedData.get().getEmbQr());
            /*embeddedData.get().setEmbQr("N");
            embeddedDataRepository.save(embeddedData.get());*/
            return map;
        }
        map.put("error", false);
        return map;
    }

     @GetMapping("/embedded/map")
     @ResponseBody
     public List<Map<String, Object>> EmbeddedLoc(){
        return embeddedService.sendLoc();
     }


    @PostMapping("/embedded/use")
    @ResponseBody
    public void test3(@RequestBody UseData useData){
        useDataRepository.save(useData);
    }

    @PutMapping("/embedded/{userId}")
    @ResponseBody
    public void embDtUpdate(@PathVariable("userId") String userId){
        embeddedService.embDtUpdate(userId);
    }
}
