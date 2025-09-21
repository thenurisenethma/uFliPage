package com.uflipage.uflipage.controller;

import com.uflipage.uflipage.dto.SigninRequestDTO;
import com.uflipage.uflipage.dto.SignupRequestDTO;
import com.uflipage.uflipage.dto.UserResponseDTO;
import com.uflipage.uflipage.entity.User;
import com.uflipage.uflipage.service.UserService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*")
public class AuthController {

    private final UserService userService;

    public AuthController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/signup")
    public UserResponseDTO signup(@RequestBody SignupRequestDTO request) throws Exception {
        User user = new User(request.getName(), request.getEmail(), request.getPassword(), request.getRole());
        User savedUser = userService.signup(user);
        return new UserResponseDTO(savedUser);
    }

    @PostMapping("/signin")
    public UserResponseDTO signin(@RequestBody SigninRequestDTO request) throws Exception {
        User user = userService.signin(request.getEmail(), request.getPassword());
        return new UserResponseDTO(user);
    }
}
