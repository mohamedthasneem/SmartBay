package com.uok.services;

import com.uok.common.LoginRequest;
import com.uok.common.Order;
import com.uok.common.Product;
import com.uok.common.SignupRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;

import javax.validation.Valid;
import java.util.List;

public interface CustomerService {
    List<Product> getAllProducts();

    Product getProduct(String id);

    List<Product> getAllProductsByCategory(String category);

    Order addOrder(Order order);

    List<Product> searchProduct(String productName);
}
