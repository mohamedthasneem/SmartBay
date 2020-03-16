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
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashSet;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200",allowedHeaders = "*")
public class StoreOwnerController {
    @Autowired
    UserRepository userRepository;

    @Autowired
    RoleRepository roleRepository;

    @Autowired
    BCryptPasswordEncoder passwordEncoder;

    @Autowired
    StoreRepository storeRepository;

    private byte[] bytes;

//    @PostMapping("/addOwner")
//    public User addStoreOwner(@RequestBody User user){
//        String encryptPwd = passwordEncoder.encode(user.getPassword());
//        user.setPassword(encryptPwd);
//        Role userRole = roleRepository.findByRole("STORE_OWNER");
//        user.setRoles(new HashSet<>(Arrays.asList(userRole)));
//        userRepository.save(user);
//        return user;
//    }

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
        store.setPicByte(this.bytes);
        storeRepository.save(store);
        this.bytes = null;
    }

    @PatchMapping("/add-product/{id}")
    public String addProduct(@RequestBody Product product,@PathVariable(value = "id") String storeId) throws IOException {
        Store store = storeRepository.findById(storeId).get();
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




}
