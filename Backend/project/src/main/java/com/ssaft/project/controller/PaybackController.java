package com.ssaft.project.controller;

import com.ssaft.project.Service.PaybackService;
import com.ssaft.project.domain.PaybackData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class PaybackController {
    @Autowired
    PaybackService paybackService;

    @PutMapping("/exchange/{id}")        // 환전 승인
    @ResponseBody
    public Map exchange(@PathVariable("id") String pbSeq){
        return paybackService.exchange(pbSeq);
    }

    @GetMapping("/admin/exchange")              // 환전 데이터 전부 호출
    @ResponseBody()
    public List<PaybackData> paybackDataAll(){
        return paybackService.paybackAll();
    }


    @DeleteMapping("/exchange/{id}")
    @ResponseBody
    public Map paybackDelete(@PathVariable("id") String id){
        return paybackService.paybackDelete(id);
    }

    @PostMapping("/exchange")
    @ResponseBody
    public Map paybackPush(@RequestHeader String token, @RequestBody PaybackData paybackData){
        return paybackService.paybackPush(token, paybackData);
    }


}
