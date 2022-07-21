package com.ssaft.project.Repository;

import com.ssaft.project.Service.IotUserService;
import com.ssaft.project.domain.IotUser;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Commit;


import java.util.List;

import static org.junit.jupiter.api.Assertions.fail;

@SpringBootTest
@Commit
public class TestIotUserRepository {

    @Autowired
    private IotUserRepository iotUserRepository;

    @Autowired
    private  IotUserService iotUserService;


    @Test
    public void 회원가입() throws Exception {
        IotUser iotuser = new IotUser();
        iotuser.setUserId("윤성환");
        iotuser.setUserEmail("swyou1123@naver.com");
        iotuser.setUserPwd("1234");
        iotuser.setUserBirthDay("1997-11-04");
        iotuser.setUserName("닉네임");
        iotUserService.join(iotuser);
    }

    @Test
    public void 아이디로_회원삭제(){
        IotUser iotUser = new IotUser();
        iotUser.setUserId("가나다");
        iotUserRepository.delete(iotUser);
    }

    @Test
    public void 아이디로_중복검사(){
        IotUser iotuser1 = new IotUser();
        iotuser1.setUserId("유승우");
        iotuser1.setUserEmail("swoyou1123@naver.com");
        iotuser1.setUserPwd("1234");
        iotuser1.setUserBirthDay("1997-11-04");
        iotuser1.setUserName("닉네임");
        iotuser1.setUserAdmin("N");

        IotUser iotuser = new IotUser();
        iotuser.setUserId("유승우");
        iotuser.setUserEmail("swoyou1123@naver.com");
        iotuser.setUserPwd("1234");
        iotuser.setUserBirthDay("1997-11-04");
        iotuser.setUserName("닉네임");
        iotuser.setUserAdmin("N");


        iotUserService.join(iotuser);





    }
    /*@Test
    public void 이메일로_회원찾기(){
        IotUser iotuser = new IotUser();
        iotuser.setUser_email("swoyou1123@naver.com");
        List<IotUser> result = iotUserRepository.findByuser_email("swoyou1123@naver.com");
        if(result.size() == 0){
            fail();
        }
    }*/
}
