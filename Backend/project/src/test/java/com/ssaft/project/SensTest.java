package com.ssaft.project;

import com.ssaft.project.Function.SMSFunction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.stereotype.Controller;
import org.springframework.test.annotation.Commit;

@SpringBootTest
@Commit
public class SensTest {
    @Autowired
    SMSFunction smsFunction;

    public void 핸드폰sms테스트트(){

    }
}
