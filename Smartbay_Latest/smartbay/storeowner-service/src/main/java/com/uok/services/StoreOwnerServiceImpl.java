package com.uok.services;

import com.uok.common.*;
import com.uok.configs.JwtUtils;
import com.uok.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import javax.validation.Valid;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.logging.Logger;
import java.util.stream.Collectors;

@Service
public class StoreOwnerServiceImpl implements StoreOwnerService{

    Logger logger = Logger.getLogger(StoreOwnerServiceImpl.class.getName());



    @Autowired
    ProductRepository productRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    OrderRepository orderRepository;

    @Autowired
    RoleRepository roleRepository;

    @Override
    public Product saveProduct(Product product){
        try{
            productRepository.save(product);
            logger.info("Product saved succesfully");
        }catch(Exception e){
            logger.info("Save Product Failed with Exception : "+e.getMessage());
        }
        return product;
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
    public Product updateProduct(String id,Product product){
        try{
            Product existProduct = productRepository.findById(id).get();
            existProduct.setProductName(product.getProductName());
            existProduct.setProductCategory(product.getProductCategory());
            existProduct.setProductPrice(product.getProductPrice());
            existProduct.setPicByte(product.getPicByte());
            productRepository.save(existProduct);
            logger.info("Product update Success");
        }catch(Exception e){
            logger.info("Product update Failed with Exception : "+e.getMessage());
        }
        return product;
    }

    @Override
    public void deleteProduct(String id){
        try{
            productRepository.deleteById(id);
            logger.info("Product delete Success");
        }catch(Exception e){
            logger.info("Product delete Failed with Exception : "+e.getMessage());
        }
    }


    @Override
    public List<User> getAllCustomers(){
        List<User> customerList = null;
        try{
            customerList = userRepository.findByValue(true);
            logger.info("Get all customers success");
        }catch(Exception e){
            logger.info("Get all customers Failed with Exception : "+e.getMessage());
        }
        return customerList;
    }


    @Override
    public Customer getCustomer(String id){
        Customer customer = null;
        try{
            Set<Role> roles = new HashSet<>();
            Role customerRole = roleRepository.findByName(ERole.ROLE_CUSTOMER).get();
            roles.add(customerRole);
            customer = userRepository.findByRolesAndId(roles,id);
            logger.info("Get customer success");
        }catch(Exception e){
            logger.info("Get customer Failed with Exception : "+e.getMessage());
        }
        return customer;
    }

    @Override
    public List<Order> getAllOrders(){
        List<Order> orderList = null;
        try{
            orderList = orderRepository.findAll();
            logger.info("Get all orders success");
        }catch(Exception e){
            logger.info("Get all orders Failed with Exception : "+e.getMessage());
        }
        return orderList;
    }

    @Override
    public Order getOrder(String id){
        Order order = null;
        try{
            order = orderRepository.findById(id).get();
            logger.info("Get order success");
        }catch(Exception e){
            logger.info("Get order Failed with Exception : "+e.getMessage());
        }
        return order;
    }

    @Override
    public void deleteCustomer(String id){
        try{
            userRepository.deleteById(id);
            logger.info("success");
        }catch(Exception e){
            logger.info("Failed with Exception : "+e.getMessage());
        }
    }

    @Override
    public SalesDetails getAllDetails(){
        SalesDetails salesDetails = null;
        try{
            int customerCount = userRepository.findByValue(true).size();
            int pendingOrderCount = orderRepository.findByStatus("PENDING").size();
            int deliveredOrderCount = orderRepository.findByStatus("DELIVERED").size();
            List<Order> orderList = orderRepository.findAll();
            float totalSales = 0;
            for(Order order : orderList){
                totalSales = totalSales + order.getTotalAmount();
            }
            salesDetails = new SalesDetails(customerCount,pendingOrderCount,deliveredOrderCount,totalSales);
            logger.info("success");
        }catch (Exception e){
            logger.info("Failed with Exception : "+e.getMessage());
        }
        return salesDetails;
    }

    @Override
    public void setDelivered(String id){
        Order order = null;
        try{
            order = orderRepository.findById(id).get();
            order.setStatus("DELIVERED");
            order.setDelivered(true);
            orderRepository.save(order);
            logger.info("success");
        }catch (Exception e){
            logger.info("Failed with Exception : "+e.getMessage());
        }
    }
}
