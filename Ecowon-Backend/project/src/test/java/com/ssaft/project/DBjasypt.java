package com.ssaft.project;

import org.jasypt.encryption.pbe.StandardPBEStringEncryptor;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class DBjasypt {

    @Test
    void DB정보암호화() {
        String url = "jdbc:mysql://3.36.78.244:3306/project?useSSL=false&useUnicode=true&serverTimezone=Asia/Seoul";
        String username = "swyou";
        String password = "qudrlxksdir1!";

        System.out.println(jasyptEncoding(url));
        System.out.println(jasyptEncoding(username));
        System.out.println(jasyptEncoding(password));
    }

    public String jasyptEncoding(String value) {

        String key = "iotProject";
        StandardPBEStringEncryptor pbeEnc = new StandardPBEStringEncryptor();
        pbeEnc.setAlgorithm("PBEWithMD5AndDES");
        pbeEnc.setPassword(key);
        return pbeEnc.encrypt(value);
    }

}
