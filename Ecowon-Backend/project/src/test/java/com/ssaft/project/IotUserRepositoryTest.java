package com.ssaft.project;

import com.ssaft.project.Repository.IotUserRepository;
import com.ssaft.project.Service.IotUserService;
import com.ssaft.project.domain.IotUser;
import org.junit.jupiter.api.AfterEach;
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

    @AfterEach
    public void afterEach(){
        IotUser iotuser = new IotUser();
        iotuser.setUserId("swyou");
        iotUserRepository.delete(iotuser);
    }



    @Test
    public void 회원가입() throws Exception {
        IotUser iotuser = new IotUser();
        iotuser.setUserId("swyou");
        iotuser.setUserPwd("1234");
        iotuser.setUserName("유승우");
        iotuser.setUserPhone("010-5638-9909");
        iotuser.setUserBirthDay("1997-11-04");
        iotuser.setUserEmail("swyou1123@naver.com");
        iotUserService.join(iotuser);
    }

    @Test
    public void 아이디로_회원삭제(){
        IotUser iotuser = new IotUser();
        iotuser.setUserId("swyou");
        iotuser.setUserPwd("1234");
        iotuser.setUserName("유승우");
        iotuser.setUserPhone("010-5638-9909");
        iotuser.setUserBirthDay("1997-11-04");
        iotuser.setUserEmail("swyou1123@naver.com");
        iotUserService.join(iotuser);

        IotUser iotUser = new IotUser();
        iotUser.setUserId("swyou");
        iotUserRepository.delete(iotUser);
    }

    @Test
    public void 아이디로_중복검사(){
        IotUser iotuser = new IotUser();
        iotuser.setUserId("swyou");
        iotuser.setUserPwd("1234");
        iotuser.setUserName("유승우");
        iotuser.setUserPhone("010-5638-9909");
        iotuser.setUserBirthDay("1997-11-04");
        iotuser.setUserEmail("swyou1123@naver.com");


        iotUserService.join(iotuser);
        try{
            iotUserService.join(iotuser);
            fail();
        }catch (IllegalStateException e){
            assertThat(e.getMessage()).isEqualTo("이미 존재하는 회원입니다.");
        }

    }

    @Test
    public void 로그인_성공and실패_테스트(){
        IotUser iotuser = new IotUser();
        iotuser.setUserId("swyou");
        iotuser.setUserPwd("1234");
        iotuser.setUserName("유승우");
        iotuser.setUserPhone("010-5638-9909");
        iotuser.setUserBirthDay("1997-11-04");
        iotuser.setUserEmail("swyou1123@naver.com");
        iotUserService.join(iotuser);

        String token = iotUserService.login("swyou", "1234");
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
