package com.ssaft.project.Service;

import com.ssaft.project.Function.Function;
import com.ssaft.project.Repository.EmbeddedDataRepository;
import com.ssaft.project.Repository.IotUserRepository;
import com.ssaft.project.domain.EmbeddedData;
import com.ssaft.project.domain.IotUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class EmbeddedService {

    @Autowired
    EmbeddedDataRepository embeddedDataRepository;

    @Autowired
    IotUserRepository iotUserRepository;
    @Autowired
    Function function;

    public void join(EmbeddedData embeddedData){
        Optional<IotUser> iotUser = iotUserRepository.findById(embeddedData.getUserId());
        embeddedData.setIotUser(iotUser.get());
        embeddedDataRepository.save(embeddedData);
    }

    public List<Map<String, Object>> sendLoc(){
        List<Map<String, Object>> List = new ArrayList<Map<String, Object>>();

        List<EmbeddedData> embeddedData =  embeddedDataRepository.findAll();
        for(int i=0;i<embeddedData.size();i++){
            Map<String, Object > map = new LinkedHashMap<>();
            map.put("embId", embeddedData.get(i).getEmbId());
            map.put("embLat", embeddedData.get(i).getEmbLat());
            map.put("embLng", embeddedData.get(i).getEmbLng());
            List.add(map);
        }
        System.out.println(List);
        return List;
    };

    public List<EmbeddedData> findAll(){
        List<EmbeddedData> embeddedData = embeddedDataRepository.findAll();
//        for(int i=0;i<embeddedData.size();i++){
//            embeddedData.get(i).setUserId(embeddedData.get(i).getIotUser().getUserId());
//            embeddedData.get(i).
//        }
        return embeddedDataRepository.findAll();
    }

    public Map embDtUpdate(String userId){                                 // 임베디드에서 담배 성공한 유저의 최근 핀 시간 체크
        Optional<IotUser> iotUser = iotUserRepository.findById(userId);
        iotUser.get().setUserTime(Function.nowDate());
        iotUser.get().setUserCnt(iotUser.get().getUserCnt()+1);
        iotUserRepository.save(iotUser.get());
        Map<String, Object> map = new LinkedHashMap<>();
        map.put("ok", true);
        return map;
    }

    public Map embSensingUpdate(EmbeddedData sensing){
        Optional<EmbeddedData> embeddedData = embeddedDataRepository.findById(sensing.getEmbId());
        embeddedData.get().setIotUser(iotUserRepository.findById(sensing.getUserId()).get());
        embeddedData.get().setEmbFullTra(sensing.getEmbFullTra());
        embeddedData.get().setEmbFullCig(sensing.getEmbFullCig());
        embeddedData.get().setEmbLat(sensing.getEmbLat());
        embeddedData.get().setEmbLng(sensing.getEmbLng());
        embeddedData.get().setEmbBat(sensing.getEmbBat());  
        embeddedData.get().setEmbCnt(sensing.getEmbCnt());
        embeddedData.get().setEmbSta(sensing.getEmbSta());
        System.out.println(embeddedData.get());
        embeddedDataRepository.save(embeddedData.get());
        Map<String, Object> map = new LinkedHashMap<>();
        map.put("ok", true);
        return map;
    }

    public void  qrCheck(int embId){
        Optional<EmbeddedData> embeddedData = embeddedDataRepository.findById(embId);
        Map<String, Object> map = new LinkedHashMap<>();
        if(embeddedData.get().getEmbQr().equals("Y")){
            map.put("userId" , embeddedData.get().getIotUser().getUserId());
            map.put("embQr" , embeddedData.get().getEmbQr());
            /*embeddedData.get().setEmbQr("N");
            embeddedDataRepository.save(embeddedData.get()*/
        }
        map.put("error", false);
    }

    public Map<String, Object> changeState(String id){
        String[] embId = id.split(",");
        for(String ED : embId){
            Optional<EmbeddedData> embeddedData = embeddedDataRepository.findById(Integer.valueOf(ED));
            if(embeddedData.get().getEmbSta().equals("Y")) {
                embeddedData.get().setEmbSta("N");
            }else{
                embeddedData.get().setEmbSta("Y");
            }
            embeddedDataRepository.save(embeddedData.get());
        }
        Map<String, Object> map = new LinkedHashMap<>();
        map.put("ok", true);
        return map;
    }
}
