package com.ssaft.project.Service;

import com.ssaft.project.Repository.IotUserRepository;
import com.ssaft.project.Repository.PaybackDataRepository;
import com.ssaft.project.domain.IotUser;
import com.ssaft.project.domain.PaybackData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Locale;
import java.util.Optional;


@Service
public class PaybackService {

    @Autowired
    PaybackDataRepository paybackDataRepository;

    @Autowired
    IotUserRepository iotUserRepository;

    public List<PaybackData> paybackAll(){
        List<PaybackData> paybackData = paybackDataRepository.findAll();
        for(PaybackData pD : paybackData){
            pD.setUserId(pD.getIotUser().getUserId());
        }
        return paybackData;
    }

    public void paybackPush(PaybackData paybackData){
        Optional<IotUser> iotUser = iotUserRepository.findById(paybackData.getUserId());
        paybackData.setIotUser(iotUser.get());
        Date today = new Date();
        Locale currentLocale = new Locale("KOREAN", "KOREA");
        String pattern = "yyyy-MM-dd HH:mm:ss"; //hhmmss로 시간,분,초만 뽑기도 가능
        SimpleDateFormat formatter = new SimpleDateFormat(pattern,
                currentLocale);
        paybackData.setPbDt(formatter.format(today));
        paybackDataRepository.save(paybackData);
    }

    public int findNcnt(){
        List<PaybackData> paybackData = paybackDataRepository.findByPbCheck("N");
        return paybackData.size();
    }

    public int findYmoney(){
        List<PaybackData> paybackData = paybackDataRepository.findByPbCheck("Y");
        int money =0 ;
        for(PaybackData pD : paybackData){
            money += pD.getPbMoney();
        }
        return money;
    }
}
