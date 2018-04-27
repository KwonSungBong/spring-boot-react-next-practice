package com.example.reservation.controller;

import com.example.reservation.dto.TestDto;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/test")
public class TestController {

    @RequestMapping(method = RequestMethod.GET, value="/test")
    public String test(){
        return "test";
    }

    @RequestMapping(method = RequestMethod.GET, value="/testdto")
    public TestDto testdto(){
        TestDto testDto = new TestDto();
        testDto.setId(1L);
        testDto.setName("name");
        return testDto;
    }

}
