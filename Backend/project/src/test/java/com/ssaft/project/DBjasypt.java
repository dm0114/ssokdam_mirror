package com.ssaft.project;

import com.ssaft.project.Service.SecurityService;
import org.jasypt.encryption.pbe.StandardPBEStringEncryptor;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class DBjasypt {
    @Autowired
    SecurityService securityService;

    @Test
    void DB정보암호화() {
        String url = "jdbc:mysql://3.36.78.244:3306/project?useSSL=false&useUnicode=true&serverTimezone=Asia/Seoul";
        String username = "swyou";
        String password = "qudrlxksdir1!";

        String username2 = securityService.jasyptEncoding(username);

        System.out.println(securityService.jasyptEncoding(url));
        System.out.println(username2);
        System.out.println(securityService.jasyptDecoding(username2));
        System.out.println(securityService.jasyptEncoding(password));
    }

    public String jasyptEncoding(String value) {

        String key = "iotProject";
        StandardPBEStringEncryptor pbeEnc = new StandardPBEStringEncryptor();
        pbeEnc.setAlgorithm("PBEWithMD5AndDES");
        pbeEnc.setPassword(key);
        return pbeEnc.encrypt(value);
    }

    public String jasyptDecoding(String value) {

        String key = "iotProject";
        StandardPBEStringEncryptor pbeEnc = new StandardPBEStringEncryptor();
        pbeEnc.setAlgorithm("PBEWithMD5AndDES");
        pbeEnc.setPassword(key);
        return pbeEnc.decrypt(value);
    }

   /* @Test
    public void encryptSimpleTest() {
        StandardPBEStringEncryptor encryptor = new StandardPBEStringEncryptor();
        encryptor.setPassword("iotProject");
        encryptor.setAlgorithm("PBEWithMD5AndDES");
        encryptor.setSaltGenerator(new StringFixedSaltGenerator("someFixedSalt"));
        String str = "testString";
        String encStr = encryptor.encrypt(str);
        String decStr = encryptor.decrypt(encStr);
        log.debug("str : {}, encStr : {}, decStr : {}", str, encStr, decStr);
    }*/

}
