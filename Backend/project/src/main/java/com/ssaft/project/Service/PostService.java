package com.ssaft.project.Service;

import com.ssaft.project.Repository.IotUserRepository;
import com.ssaft.project.Repository.PostDataRepository;
import com.ssaft.project.domain.IotUser;
import com.ssaft.project.domain.PostData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.*;

@Service
public class PostService {

    @Autowired
    PostDataRepository postDataRepository;

    @Autowired
    SecurityService securityService;

    @Autowired
    IotUserRepository iotUserRepository;

    public List<PostData> findAll(String pstProp){          // 공지사항 전체 리턴
        List<Map<String ,Object>> map = new ArrayList<Map<String, Object>>();
        List<PostData> postData = postDataRepository.findByPstProp(pstProp);
        for(PostData pd : postData){
            pd.setUserId(pd.getIotUser().getUserId());
        }
        return postData;
    }

    public List<PostData> myAsk(String token){
        String id = securityService.getSubJect(token);
        Optional<IotUser> iotUser =  iotUserRepository.findById(id);
        return postDataRepository.findByIotUser(iotUser.get());
    }

    public void postPush(String token, PostData postData){
        String id = securityService.getSubJect(token);
        Optional<IotUser> iotUser =  iotUserRepository.findById(id);
        postData.setIotUser(iotUser.get());
        Date today = new Date();
        Locale currentLocale = new Locale("KOREAN", "KOREA");
        String pattern = "yyyy-MM-dd HH:mm:ss"; //hhmmss로 시간,분,초만 뽑기도 가능
        SimpleDateFormat formatter = new SimpleDateFormat(pattern,
                currentLocale);
        postData.setPstDt(formatter.format(today));
        postDataRepository.save(postData);
    }
}
