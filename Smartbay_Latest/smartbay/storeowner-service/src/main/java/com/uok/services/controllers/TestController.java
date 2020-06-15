package com.uok.services.controllers;

import com.uok.common.*;
import com.uok.repository.RoleRepository;
import com.uok.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/test")
public class TestController {

    @Autowired
    RoleRepository roleRepository;

    @Autowired
    UserRepository userRepository;

    @GetMapping("/all")
    public String allAccess() {

        Role role1 = new Role();
        role1.setName(ERole.ROLE_STOREOWNER);
        roleRepository.save(role1);

        Role role2 = new Role();
        role2.setName(ERole.ROLE_CUSTOMER);
        roleRepository.save(role2);

        Role role3 = new Role();
        role3.setName(ERole.ROLE_ADMIN);
        roleRepository.save(role3);

        return "Public Content.";
    }


    @GetMapping("/user")
    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    public String userAccess() {
        return "User Content.";
    }

    @GetMapping("/mod")
    @PreAuthorize("hasRole('MODERATOR')")
    public String moderatorAccess() {
        return "Moderator Board.";
    }

    @GetMapping("/admin")
    @PreAuthorize("hasRole('ADMIN')")
    public String adminAccess() {
        return "Admin Board.";
    }
}