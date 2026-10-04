package com.devlio.devlio.controller;

import com.devlio.devlio.dto.RegisterRequest;
import com.devlio.devlio.service.AuthService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/auth")
public class AuthController {
    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }
    @PostMapping("/signup")
    public ResponseEntity<String> registerUser(@RequestBody RegisterRequest request){
        authService.register(request);
        return ResponseEntity.ok("Account created successfully");
    }
}
