package com.ssaft.project.controller;

import com.ssaft.project.Repository.GetDataRepository;
import com.ssaft.project.Repository.IotUserRepository;
import com.ssaft.project.Repository.PostDataRepository;
import com.ssaft.project.domain.GetData;
import com.ssaft.project.domain.IotUser;
import com.ssaft.project.domain.PostData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/Post")
public class PostController {

    @Autowired
    PostDataRepository postDataRepository;

    @Autowired
    IotUserRepository iotUserRepository;

    @Autowired
    GetDataRepository getDataRepository;

    @PostMapping("/post")
    public void test(@RequestBody PostData postData){

        Optional<IotUser> user = iotUserRepository.findById(postData.getUserId());

        postData.setIotUser(user.get());

        postDataRepository.save(postData);
    }

    @PostMapping("/get")
    public void test2(@RequestBody GetData getData){


        Optional<IotUser> user = iotUserRepository.findById(getData.getUserId());
        Optional<PostData> data2 = postDataRepository.findById(getData.getPstSeq());

        List<GetData> data  = getDataRepository.findByPostData(data2.get());
        int cnt = data.size();
        if(cnt!=0) {
            cnt = data.get(cnt-1).getGetSub() + 1;
        }else{
            cnt = cnt+1;
        }

        getData.setIotUser(user.get());
        getData.setPostData(data2.get());
        getData.setGetSub(cnt);
        getDataRepository.save(getData);

    }


}
