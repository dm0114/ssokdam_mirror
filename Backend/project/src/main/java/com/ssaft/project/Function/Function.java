package com.ssaft.project.Function;

import com.siot.IamportRestClient.IamportClient;
import com.siot.IamportRestClient.exception.IamportResponseException;
import com.ssaft.project.Repository.IotUserRepository;
import com.ssaft.project.Service.IamportService;
import com.ssaft.project.domain.IotUser;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.jasypt.encryption.pbe.StandardPBEStringEncryptor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.security.Key;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.Date;
import java.util.LinkedHashMap;
import java.util.Locale;
import java.util.Map;
import com.siot.IamportRestClient.IamportClient;
import com.siot.IamportRestClient.exception.IamportResponseException;
import org.springframework.stereotype.Service;

import javax.crypto.spec.SecretKeySpec;
import javax.xml.bind.DatatypeConverter;
import java.io.IOException;
import java.time.LocalDate;
import java.util.LinkedHashMap;
import java.util.Map;

@Service
public class Function {
    @Autowired
    IotUserRepository iotUserRepository;

    private static final String SECRET_KEY = "111dsfsdfasadfadassdadasdasdasasdadsasdasdsfdasfasfdffasds234";

    private IamportService api;
    LocalDate now = LocalDate.now();

    public static String nowDate(){
        Date today = new Date();
        Locale currentLocale = new Locale("KOREAN", "KOREA");
        String pattern = "yyyy-MM-dd HH:mm:ss"; //hhmmss로 시간,분,초만 뽑기도 가능
        SimpleDateFormat formatter = new SimpleDateFormat(pattern,
                currentLocale);
        return formatter.format(today);
    }


    IamportClient client = new IamportClient("8270742312861075", "dAjR0eNuEcBlF2m3jpbVAwgBg9A80aOR85pyfLpweaRqnpnynReBHOM4jTp2lvJb7Vh3XhzZOc1tjoo4");

    public Map getIamport(String uid) throws IamportResponseException, IOException {
        String birth = String.valueOf(client.certificationByImpUid(uid).getResponse().getBirth());
        String phone = client.certificationByImpUid(uid).getResponse().getPhone();
        String name = client.certificationByImpUid(uid).getResponse().getName();


        System.out.println(phone);
        String birth2[] = birth.split(" ");

        int userbitrh = Integer.parseInt(birth2[5]);
        int year = now.getYear();
        System.out.println(userbitrh);
        System.out.println(year);
        System.out.println(name);
        Map<String , Object> map = new LinkedHashMap<>();

        if(userbitrh+19 > year){
            map.put("message", "19이상 사용가능합니다.");
            return map;
        }else {

            map.put("userBirthDay", birth);
            map.put("userPhone", phone);
            map.put("userName", name);

            return map;
        }
    }

    public String creatToken(String subject, long expTime){
        if(expTime <= 0){
            throw new RuntimeException("ERROR");
        }

        SignatureAlgorithm signatureAlgorithm = SignatureAlgorithm.HS256;

        byte[] secretKeyBytes = DatatypeConverter.parseBase64Binary(SECRET_KEY);
        Key signingKey = new SecretKeySpec(secretKeyBytes, signatureAlgorithm.getJcaName());

        return Jwts.builder()

                .setSubject(subject)    //아이디 값 넣어주기
                .signWith(signingKey, signatureAlgorithm)  // 키값
                .setExpiration(new Date(System.currentTimeMillis() + expTime))
                .compact();
    }

    // 토큰 검증하는 메서드 boolean
    public String getSubJect(String token){
        try {
            Claims claims = Jwts.parserBuilder()
                    // 페이로드에 담기는 정보
                    .setSigningKey(DatatypeConverter.parseBase64Binary(SECRET_KEY))
                    .build()
                    .parseClaimsJws(token)
                    .getBody();
            return claims.getSubject();
        } catch (JwtException e){
            return "토큰만료";
        }
    }

    public Map refreshTokenCheck(String token){
        Map<String, Object> map = new LinkedHashMap<>();
        try{
            getSubJect(token);
            IotUser iotuser = iotUserRepository.findByUserRt(token);
            map.put("Access token", creatToken(iotuser.getUserId(), (1*1000*60)));return map;
        }catch (JwtException e){
            map.put("messgae" , "Refresh 토큰 이 만료되었습니다.");
            return map;
        }
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
}
