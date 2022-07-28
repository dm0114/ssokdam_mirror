package com.ssaft.project.controller;

import com.ssaft.project.Service.AdminService;
import com.ssaft.project.domain.IotUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/admin")
public class AdminController {

    @Autowired
    AdminService adminService;

    @PostMapping("/login")
    @ResponseBody()
    public boolean adminLogin(@RequestBody IotUser iotUser){
        return adminService.login(iotUser.getUserId(), iotUser.getUserPwd());
    }

    @PostMapping("/make")
    @ResponseBody()
    public boolean makeAdmin(@RequestBody IotUser iotUser){
        return adminService.makeAdmin(iotUser.getUserId());
    }
}
