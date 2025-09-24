package com.soict.project1.demo;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ModelResponse {
    private int sum;

    public void setSum(int sum) {
        this.sum = sum;
    }
}
