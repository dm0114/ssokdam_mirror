package com.ssaft.project.Service;

import com.ssaft.project.Repository.PostDataRepository;
import com.ssaft.project.domain.PostData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Service
public class PostService {

    @Autowired
    PostDataRepository postDataRepository;

    public List<PostData> findAll(String pstProp){          // 공지사항 전체 리턴
        List<Map<String ,Object>> map = new ArrayList<Map<String, Object>>();
        List<PostData> postData = postDataRepository.findByPstProp(pstProp);
        for(PostData pd : postData){
            pd.setUserId(pd.getIotUser().getUserId());
        }
        return postData;
    }
}
