package com.uok.smartbay.dev.smartbay.Controller;

import com.uok.smartbay.dev.smartbay.Model.*;
import com.uok.smartbay.dev.smartbay.Repository.CustomerRepository;
import com.uok.smartbay.dev.smartbay.Repository.RoleRepository;
import com.uok.smartbay.dev.smartbay.Repository.StoreRepository;
import com.uok.smartbay.dev.smartbay.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashSet;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4400",allowedHeaders = "*")
public class StoreOwnerController {
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

    private byte[] bytes;



    @GetMapping("/abc")
    public String hi(){
        return "ABC";
    }

    @PostMapping("/upload")
    public void uploadImage(@RequestParam("imageFile") MultipartFile file) throws IOException {
        this.bytes = file.getBytes();
    }

    @PostMapping("/add-store")
    public void createStore(@RequestBody Store store) throws IOException {
        storeRepository.save(store);
        this.bytes = null;
    }

    @GetMapping("/role")
    public void setRole(){
        Role role1 = new Role();
        role1.setRole("CUSTOMER");

        Role role2 = new Role();
        role2.setRole("STOREOWNER");

        roleRepository.save(role1);
        roleRepository.save(role2);
    }


    @PutMapping("/add-product/{email}")
    public String addProduct(@RequestBody Product product,@PathVariable(value = "email") String storeEmail) throws IOException {
        Store store = storeRepository.findByEmail(storeEmail);
        List<Product> prList = new ArrayList();
        product.setPicByte(this.bytes);
        prList.add(product);
        store.updateProductList(product);
        storeRepository.save(store);
        this.bytes = null;
        return "Success";
       // storeRepository.save(store);
        //this.bytes = null;
    }

    @PostMapping("/store-owner/login")
    public String storeOwnerLogin(@RequestBody User userInfo){
        User user = userRepository.findByEmail(userInfo.getEmail());
        String message = "Not LoggedIn";
        User loggedUser = new User();
        if(user.getPassword().equals(userInfo.getPassword())){
            return "Success";
        }else {
            return "Fail";
        }
    }

    @GetMapping("/products/all/{email}")
    public List<Product> getAllProducts(@PathVariable(value = "email") String storeEmail){
        Store store = storeRepository.findByEmail(storeEmail);
        List<Product> productList = store.getProductList();
        return productList;
    }

    @GetMapping("/customers/all/{email}")
    public List<Customer> getAllCustomers(@PathVariable(value = "email") String storeEmail){
        Store store = storeRepository.findByEmail(storeEmail);
        List<Customer> customerList = customerRepository.findByStore(store);
        return customerList;
    }

}
