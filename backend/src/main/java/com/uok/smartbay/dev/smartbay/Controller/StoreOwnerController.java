package com.uok.smartbay.dev.smartbay.Controller;

import com.uok.smartbay.dev.smartbay.Model.Role;
import com.uok.smartbay.dev.smartbay.Model.User;
import com.uok.smartbay.dev.smartbay.Repository.RoleRepository;
import com.uok.smartbay.dev.smartbay.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.HashSet;

@RestController
@CrossOrigin(origins = "http://localhost:4200",allowedHeaders = "*")
public class StoreOwnerController {
    @Autowired
    UserRepository userRepository;

    @Autowired
    RoleRepository roleRepository;

    @Autowired
    BCryptPasswordEncoder passwordEncoder;

    @PostMapping("/addOwner")
    public User addStoreOwner(@RequestBody User user){
        String encryptPwd = passwordEncoder.encode(user.getPassword());
        user.setPassword(encryptPwd);
        Role userRole = roleRepository.findByRole("STORE_OWNER");
        user.setRoles(new HashSet<>(Arrays.asList(userRole)));
        userRepository.save(user);
        return user;
    }

    @GetMapping("/abc")
    public String hi(){
        return "ABC";
    }
}
