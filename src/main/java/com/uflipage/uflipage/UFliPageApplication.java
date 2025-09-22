package com.uflipage.uflipage;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class UFliPageApplication {

    public static void main(String[] args) {
        SpringApplication.run(UFliPageApplication.class, args);
    }

}
