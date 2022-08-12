package com.ssaft.project.controller;

import com.ssaft.project.Repository.UseDataRepository;
import com.ssaft.project.Service.UseService;
import com.ssaft.project.domain.UseData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

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

}
