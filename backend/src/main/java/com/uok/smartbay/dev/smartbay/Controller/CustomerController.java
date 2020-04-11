package com.uok.smartbay.dev.smartbay.Controller;

import com.uok.smartbay.dev.smartbay.Model.Product;
import com.uok.smartbay.dev.smartbay.Model.Role;
import com.uok.smartbay.dev.smartbay.Model.Store;
import com.uok.smartbay.dev.smartbay.Model.User;
import com.uok.smartbay.dev.smartbay.Repository.RoleRepository;
import com.uok.smartbay.dev.smartbay.Repository.StoreRepository;
import com.uok.smartbay.dev.smartbay.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashSet;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200",allowedHeaders = "*")
public class CustomerController {
    @Autowired
    UserRepository userRepository;

    @Autowired
    RoleRepository roleRepository;

    @Autowired
    BCryptPasswordEncoder passwordEncoder;

    @Autowired
    StoreRepository storeRepository;

    @Autowired

    @GetMapping("/welcome")
    public String welcome(){
        return "Welcome";
    }

    @GetMapping("/hello")
    public String hello(){
        return "Hello";
    }

    @PostMapping("/add")
    public User addCustomer(@RequestBody User user){
        String encryptPwd = passwordEncoder.encode(user.getPassword());
        user.setPassword(encryptPwd);
        Role userRole = roleRepository.findByRole("CUSTOMER");
        user.setRoles(new HashSet<>(Arrays.asList(userRole)));
        userRepository.save(user);
        return user
                ;
    }

    @PostMapping("/add-storeowner")
    public User addStoreOwner(@RequestBody User user){
        String encryptPwd = passwordEncoder.encode(user.getPassword());
        user.setPassword(encryptPwd);
        Role userRole = roleRepository.findByRole("STOREOWNER");
        user.setRoles(new HashSet<>(Arrays.asList(userRole)));
        userRepository.save(user);
        return user
                ;
    }
    @GetMapping("/view-stores")
    public List<Store> getAllStores() {
        //System.out.println(bookRepository.findAll());
        return storeRepository.findAll();
    }

    @GetMapping("/view-products/{id}")
    public List<Product> viewProducts(@PathVariable(value = "id") String storeId) throws IOException {
        Store store = storeRepository.findById(storeId).get();

        return store.getProductList();
    }

}
