package com.ssaft.project.Service;


import com.ssaft.project.Function.Function;
import com.ssaft.project.Repository.IotUserRepository;
import com.ssaft.project.Repository.NotionDataRepository;
import com.ssaft.project.domain.IotUser;
import com.ssaft.project.domain.NotionData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.*;

@Service
public class NotionService {

    @Autowired
    NotionDataRepository notionDataRepository;
    @Autowired
    Function function;
    @Autowired
    IotUserRepository iotUserRepository;

    public List<NotionData> userAll(String token){
        String id = function.getSubJect(token);
        System.out.println(id);
        List<NotionData> notionData;
        try {
            Optional<IotUser> iotUser = iotUserRepository.findById(id);
            notionData = notionDataRepository.findByIotUser(iotUser.get());

            for(NotionData nD : notionData){
                nD.setUserId(nD.getIotUser().getUserId());
            }
        }catch (NoSuchElementException e){
            throw new IllegalStateException(e);
        }
        return notionData;
    }

    public void notionPush(NotionData notionData){
        notionData.setIotUser(iotUserRepository.findById(notionData.getUserId()).get());
        Date today = new Date();
        Locale currentLocale = new Locale("KOREAN", "KOREA");
        String pattern = "yyyy-MM-dd HH:mm:ss"; //hhmmss로 시간,분,초만 뽑기도 가능
        SimpleDateFormat formatter = new SimpleDateFormat(pattern,
                currentLocale);
        notionData.setNotDt(formatter.format(today));
        notionDataRepository.save(notionData);
    }
}
