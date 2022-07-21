package com.ssaft.project.controller;

import com.ssaft.project.Repository.IotUserRepository;
import com.ssaft.project.Service.IotUserService;
import com.ssaft.project.domain.IotUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class ReacttestController {

    @Autowired
    IotUserService iotUserService;

    @Autowired
    IotUserRepository iotUserRepository;

    @GetMapping("/user")
    @ResponseBody
    public List<IotUser> test() {
        List<IotUser> iotusers = iotUserRepository.findAll();
        return iotusers;
    }

    @GetMapping("/user/{uid}")
    @ResponseBody
    public Optional<IotUser> test2(@PathVariable String uid) {
        System.out.println(uid);
        Optional<IotUser> iotusers = iotUserRepository.findById(uid);
        return iotusers;
    }


}
