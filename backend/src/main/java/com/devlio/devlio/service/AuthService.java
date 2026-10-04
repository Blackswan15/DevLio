package com.devlio.devlio.service;

import com.devlio.devlio.dto.RegisterRequest;
import com.devlio.devlio.entity.User;
import com.devlio.devlio.repository.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    public AuthService(UserRepository userRepository,PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder=passwordEncoder;
    }
    public User register(RegisterRequest registerRequest){
        if(userRepository.existsByGmail(registerRequest.getGmail())){
            throw new RuntimeException("The user with this credentials is already exists.");
        }
        User user=new User();
        user.setName(registerRequest.getUsername());
        user.setGmail(registerRequest.getGmail());
        String encoded_password=passwordEncoder.encode(registerRequest.getPassword());
        user.setPasswordHash(encoded_password);
        return userRepository.save(user);
    }
}
