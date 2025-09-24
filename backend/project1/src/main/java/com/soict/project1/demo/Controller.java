package com.soict.project1.demo;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class Controller {
    @PostMapping("/sum-2-numbers")
    public ResponseEntity<?> sum(@RequestBody ModelInput I){
        ModelResponse rs = new ModelResponse();
        System.out.println("input = " + I.getNumber1() + " and " + I.getNumber2());
        rs.setSum(I.getNumber1() + I.getNumber2());
        return ResponseEntity.ok().body(rs);
    }
}
