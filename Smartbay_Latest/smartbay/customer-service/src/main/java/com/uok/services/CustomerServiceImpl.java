package com.uok.services;

import com.uok.common.*;
import com.uok.repository.OrderRepository;
import com.uok.repository.ProductRepository;
import com.uok.repository.RoleRepository;
import com.uok.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import javax.validation.Valid;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.logging.Logger;

@Service
public class CustomerServiceImpl implements CustomerService{
    Logger logger = Logger.getLogger(CustomerServiceImpl.class.getName());

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private UserRepository userRepository;

    @Override
    public List<Product> getAllProducts(){
        List<Product> productList = null;
        try{
            productList = productRepository.findAll();
            logger.info("Get all products Success");
        }catch(Exception e){
            logger.info("Get all products Failed with Exception : "+e.getMessage());
        }
        return productList;
    }

    @Override
    public Product getProduct(String id){
        Product product = null;
        try{
            product = productRepository.findById(id).get();
            logger.info("Get product Success");
        }catch(Exception e){
            logger.info("Get product Failed with Exception : "+e.getMessage());
        }
        return product;
    }

    @Override
    public List<Product> getAllProductsByCategory(String productCategory){
        List<Product> productList = null;
        try{
            productList = productRepository.findByProductCategory(productCategory);
            logger.info("Get all products Success");
        }catch(Exception e){
            logger.info("Get all products Failed with Exception : "+e.getMessage());
        }
        return productList;
    }

    @Override
    public Order addOrder(Order order){
        try{
            orderRepository.save(order);
            logger.info("Create order Success");
        }catch(Exception e){
            logger.info("Create order Failed with Exception : "+e.getMessage());
        }
        return order;
    }

    @Override
    public List<Product> searchProduct(String productName){
        List<Product> products = null;
        try{
            products = productRepository.findByProductName(productName);
            logger.info("Search product Success");
        }catch (Exception e){
            logger.info("Search product Fail");
        }
        return products;
    }
}
