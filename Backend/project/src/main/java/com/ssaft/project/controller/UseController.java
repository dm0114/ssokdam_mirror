package com.ssaft.project.controller;

import com.ssaft.project.Repository.UseDataRepository;
import com.ssaft.project.Service.UseService;
import com.ssaft.project.domain.UseData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Map;

@Controller
@RequestMapping("/api")
public class UseController {

    @Autowired
    UseService useService;

    @PostMapping("/use")
    @ResponseBody
    public void usePush(@RequestBody UseData useData){
        useService.usePush(useData);
    }

    @GetMapping("/use")
    @ResponseBody
    public Map useGet(@RequestHeader String token){
         LocalDateTime now = LocalDateTime.now();
        System.out.println(now); // 2021-12-02T18:19:36.897421300
        String formatedNow = now.format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss"));
       System.out.println(formatedNow);
        return useService.useCheck(token);
    }

}
