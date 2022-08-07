package com.ssaft.project.controller;

import com.ssaft.project.Service.SecurityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.LinkedHashMap;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class securityController {



    @Autowired
    private SecurityService securityService;

    @GetMapping("/create/token")
    public Map<String, Object> createToken(@RequestParam(value = "subject") String subject){
        String token = securityService.creatToken(subject, (2*1000*60));
        Map<String, Object> map = new LinkedHashMap<>();
        map.put("result", token);
        return map;
    }

    @GetMapping("/get/subject")
        public Map<String, Object> getSubject(@RequestParam(value = "token") String token){
            String subject = securityService.getSubJect(token);
            Map<String, Object> map = new LinkedHashMap<>();
            map.put("result", subject);
            return map;
        }
    }

