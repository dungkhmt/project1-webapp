package com.soict.project1.demo;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.web.service.annotation.GetExchange;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class ModelInput {
    private int number1;
    private int number2;

    public int getNumber1() {
        return number1;
    }

    public int getNumber2() {
        return number2;
    }
}
