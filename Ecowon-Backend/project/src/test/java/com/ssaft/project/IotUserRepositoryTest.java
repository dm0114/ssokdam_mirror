package com.ssaft.project;

import com.ssaft.project.Repository.IotUserRepository;
import com.ssaft.project.Service.IotUserService;
import com.ssaft.project.domain.IotUser;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Commit;

import java.util.NoSuchElementException;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.fail;

@SpringBootTest
@Commit
public class IotUserRepositoryTest {

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
        try{
            iotUserService.join(iotuser1);
            fail();
        }catch (IllegalStateException e){
            assertThat(e.getMessage()).isEqualTo("이미 존재하는 회원입니다.");
        }

    }

    @Test
    public void 로그인_성공and실패_테스트(){
        String token = iotUserService.login("유승우", "1234");
        if(token != "error"){
            System.out.println("로그인 성공");
        }
        try{
            iotUserService.login("실패테스트값", "&&^&#@$ㅁㅉㅁ!@#");
            fail();
        }catch (NoSuchElementException e){
            assertThat(e.getMessage()).isEqualTo("No value present");
        }

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
