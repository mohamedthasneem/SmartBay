package com.uok.services.controllers;

import com.uok.common.*;
import com.uok.configs.JwtUtils;
import com.uok.repository.RoleRepository;
import com.uok.repository.UserRepository;
import com.uok.services.CustomerServiceImpl;
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

import javax.validation.Valid;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/customer")
public class CustomerController{

    @Autowired
    CustomerServiceImpl serviceImpl;

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
    public ResponseEntity<?> registerUser(@Valid @RequestBody Customer signUpRequest) {

        if (userRepository.existsByEmail(signUpRequest.getEmail())) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: Email is already in use!"));
        }

        Customer customer = new Customer(signUpRequest.getUsername(),signUpRequest.getEmail(),encoder.encode(signUpRequest.getPassword()),signUpRequest.getAddress());

        Set<Role> roles = new HashSet<>();

        Role customerRole = roleRepository.findByName(ERole.ROLE_CUSTOMER)
                .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
        roles.add(customerRole);

        customer.setRoles(roles);
        customer.setValue(true);
        userRepository.save(customer);

        return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
    }

    @PostMapping("/order")
    @PreAuthorize("hasRole('CUSTOMER')")
    public Order createOrder(@RequestBody Order order){
        Order newOrder = serviceImpl.addOrder(order);
        return newOrder;
    }

    @GetMapping("/products/{id}")
    public Product viewProduct(@RequestParam("id") String productId){
        Product product = serviceImpl.getProduct(productId);
        return product;
    }

    @GetMapping("/products")
    @PreAuthorize("hasRole('CUSTOMER')")
    public List<Product> viewAllProducts(){
        List<Product> productList = serviceImpl.getAllProducts();
        return productList;
    }

    @GetMapping("/products/{category}")
    public List<Product> viewAllProductsByCategory(@RequestParam("category") String productCategory){
        List<Product> productList = serviceImpl.getAllProductsByCategory(productCategory);
        return productList;
    }

    @GetMapping("/products/{name}")
    public List<Product> searchProducts(@RequestParam("name") String productName){
        List<Product> productList = serviceImpl.searchProduct(productName);
        return productList;
    }

    @PostMapping("/product/rate")
    public Rating rateProduct(@RequestBody Rating rating){
        Rating productRating = serviceImpl.saveProductRating(rating);
        return productRating;
    }

    @GetMapping("/order-ids/{email}")
    public  List<Integer> getOrderProductIds(@PathVariable("email") String customerEmail){
        return serviceImpl.getAllOrders(customerEmail);
    }

    @PostMapping("/recommended-products")
    public List<Product> getRecommendedProducts(@RequestBody RecProduct recProduct){
        return serviceImpl.getProductsByIdList(recProduct.getProductIdList());
    }

    @GetMapping("/product/{id}")
    public Product getProduct(@PathVariable("id") String id){
        return serviceImpl.getProduct(id);
    }


}
