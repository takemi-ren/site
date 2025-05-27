package com.example.demo;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class DemoController {

    // @GetMapping("/")
    // public String home() {
    //     return "index"; // Имя файла без расширения
    // }

    @PostMapping("/submit")
    public ResponseEntity<String> submitFeedback(@RequestBody DemoDTO demo) {
        System.out.println("Получена обратная связь: " + demo.getName() + " - " + demo.getMessage());
        return ResponseEntity.ok("Спасибо за ваш отзыв!");
    }
}