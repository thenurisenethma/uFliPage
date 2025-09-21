package com.uflipage.uflipage.service;

import com.uflipage.uflipage.entity.User;
import com.uflipage.uflipage.repository.UserRepository;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User signup(User user) throws Exception {
        if (userRepository.findByEmail(user.getEmail()).isPresent()) {
            throw new Exception("Email already exists");
        }
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }

    public User signin(String email, String password) throws Exception {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new Exception("User not found"));

        if (!passwordEncoder.matches(password, user.getPassword())) {
            throw new Exception("Invalid credentials");
        }
        return user;
    }
}
