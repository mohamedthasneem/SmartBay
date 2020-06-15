package com.uok.services.controllers;

import com.uok.common.*;
import com.uok.configs.JwtUtils;
import com.uok.repository.RoleRepository;
import com.uok.repository.UserRepository;
import com.uok.services.StoreOwnerServiceImpl;
import com.uok.services.UserDetailsImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.Valid;
import java.io.IOException;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/store-owner")
public class StoreOwnerController {
    @Autowired
    StoreOwnerServiceImpl serviceImpl;

    @Autowired
    UserRepository userRepository;

    @Autowired
    RoleRepository roleRepository;

    @Autowired
    PasswordEncoder encoder;

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    JwtUtils jwtUtils;

    private byte[] bytes;

    @PostMapping("/signin")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getEmail(), loginRequest.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtUtils.generateJwtToken(authentication);

        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        List<String> roles = userDetails.getAuthorities().stream()
                .map(item -> item.getAuthority())
                .collect(Collectors.toList());

        return ResponseEntity.ok(new JwtResponse(jwt));
    }

    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@Valid @RequestBody StoreOwner signUpRequest) {

        if (userRepository.existsByEmail(signUpRequest.getEmail())) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: Email is already in use!"));
        }

        StoreOwner storeOwner = new StoreOwner(signUpRequest.getUsername(),
                signUpRequest.getEmail(),
                encoder.encode(signUpRequest.getPassword()),signUpRequest.getShopName(),signUpRequest.getShopURL());

        Set<Role> roles = new HashSet<>();

        Role storeOwnerRole = roleRepository.findByName(ERole.ROLE_STOREOWNER)
                .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
        roles.add(storeOwnerRole);

        storeOwner.setRoles(roles);
        userRepository.save(storeOwner);

        return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
    }

    @PostMapping("/upload")
    public void uploadImage(@RequestParam("imageFile") MultipartFile file) throws IOException {
        this.bytes = file.getBytes();
    }

    @PostMapping("/product")
    @PreAuthorize("hasRole('STOREOWNER')")
    public Product addProduct(@RequestBody Product product){
        product.setPicByte(this.bytes);
        Product newProduct = serviceImpl.saveProduct(product);
        this.bytes = null;
        return newProduct;
    }

    @GetMapping("/products/{id}")
    @PreAuthorize("hasRole('STOREOWNER')")
    public Product viewProduct(@RequestParam("id") String productId){
        Product product = serviceImpl.getProduct(productId);
        return product;
    }

    @GetMapping("/products")
    @PreAuthorize("hasRole('STOREOWNER')")
    public List<Product> viewAllProducts(){
        List<Product> productList = serviceImpl.getAllProducts();
        return productList;
    }

    @PutMapping("/product/{id}")
    @PreAuthorize("hasRole('STOREOWNER')")
    public Product updateProduct(@PathVariable("id") String id,@RequestBody Product product){
        product.setPicByte(this.bytes);
        Product updateProduct = serviceImpl.updateProduct(id,product);
        this.bytes = null;
        return updateProduct;
    }

    @DeleteMapping("/product/{id}")
    @PreAuthorize("hasRole('STOREOWNER')")
    public void deleteProduct(@PathVariable("id") String productId){
        serviceImpl.deleteProduct(productId);
    }

    @GetMapping("/orders")
    @PreAuthorize("hasRole('STOREOWNER')")
    public List<Order> viewAllOrders(){
        List<Order> orderList = serviceImpl.getAllOrders();
        return orderList;
    }

    @GetMapping("/orders/{id}")
    @PreAuthorize("hasRole('STOREOWNER')")
    public Order viewOrder(@RequestParam("id") String orderId){
        Order order = serviceImpl.getOrder(orderId);
        return order;
    }

    @GetMapping("/customers")
    @PreAuthorize("hasRole('STOREOWNER')")
    public List<User> viewAllCustomers(){
        List<User> customerList = serviceImpl.getAllCustomers();
        return customerList;
    }

    @GetMapping("/customers/{id}")
    @PreAuthorize("hasRole('STOREOWNER')")
    public Customer viewCustomer(@RequestParam("id") String customerId){
        Customer customer = serviceImpl.getCustomer(customerId);
        return customer;
    }


}
