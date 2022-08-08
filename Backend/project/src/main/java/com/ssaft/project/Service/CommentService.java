package com.ssaft.project.Service;

import com.ssaft.project.Repository.CommentDataRepository;
import com.ssaft.project.Repository.IotUserRepository;
import com.ssaft.project.Repository.PostDataRepository;
import com.ssaft.project.domain.CommentData;
import com.ssaft.project.domain.IotUser;
import com.ssaft.project.domain.PostData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class CommentService {
    @Autowired
    IotUserRepository iotUserRepository;
    @Autowired
    PostDataRepository postDataRepository;
    @Autowired
    CommentDataRepository commentDataRepository;
    @Autowired
    SecurityService securityService;
    public Map cmtPush(int pstSeq,String token,CommentData commentData) {
        String id = securityService.getSubJect(token);
        Optional<IotUser> user = iotUserRepository.findById(id);
        Optional<PostData> data2 = postDataRepository.findById(pstSeq);
        int cnt;
        try {
            List<CommentData> data = commentDataRepository.findByPostData(data2.get());
            cnt = data.size();
            cnt = cnt + 1;
        }catch (NoSuchElementException e){
            cnt = 1;
        }
        commentData.setIotUser(user.get());
        commentData.setPostData(data2.get());
        commentData.setCmtSub(cnt);
        commentDataRepository.save(commentData);
        Map<String, Object> map = new LinkedHashMap<>();
        map.put("ok", true);
        return map;
    }

    public Map cmtEdit(int pstSeq, int cmtId, CommentData commentData){
        Map<String, Object> map = new LinkedHashMap<>();
        map.put("ok", true);

        Optional<CommentData> commentEdit =  commentDataRepository.findById(cmtId);
        commentEdit.get().setCmtCtnt(commentData.getCmtCtnt());
        commentDataRepository.save(commentEdit.get());

        return map;
    }
    public Map cmtDelete(int cmtId){
        Map<String, Object> map = new LinkedHashMap<>();
        map.put("ok", true);

        commentDataRepository.delete(commentDataRepository.findById(cmtId).get());
        return map;
    }
}

