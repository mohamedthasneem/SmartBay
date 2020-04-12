package com.uok.smartbay.dev.smartbay.Controller;

import com.uok.smartbay.dev.smartbay.Model.*;
import com.uok.smartbay.dev.smartbay.Repository.CustomerRepository;
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
    CustomerRepository customerRepository;

    @Autowired

    @GetMapping("/welcome")
    public String welcome(){
        return "Welcome";
    }

    @GetMapping("/hello")
    public String hello(){
        return "Hello";
    }


    @PostMapping("/{storeId}/customer/register")
    public void customerSignup(@RequestBody Customer customer,@PathVariable(value = "storeId") String storeId) throws IOException {
        customer.setStore(storeRepository.findById(storeId).get());
        customerRepository.save(customer);
    }

    @PostMapping("/{storeId}/customer/login")
    public String customerLogin(@RequestBody Customer customer,@PathVariable(value = "storeId") String storeId){
        return "Success";
    }

    @GetMapping("/{storeId}/view-products")
    public List<Product> viewProducts(@PathVariable(value = "storeId") String storeId){
        Store store = storeRepository.findById(storeId).get();
        List<Product> storeProductList = store.getProductList();
        return storeProductList ;
    }
}
