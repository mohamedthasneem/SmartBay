package com.uok.services;

import com.uok.common.*;
import com.uok.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import javax.validation.Valid;
import java.util.ArrayList;
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
    RatingRepository ratingRepository;

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
        List<Product> productList = null;
        try{
            productList = order.getProductList();
            for(Product product : productList){
                if(product.getQuantity() < product.getProductQuantity()){
                    product.setQuantity(0);
                }else {
                    product.setQuantity(product.getQuantity() - product.getProductQuantity());
                }
                productRepository.save(product);

            }
            order.setStatus("PENDING");
            order.setDelivered(false);
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

    @Override
    public Rating saveProductRating(Rating rating){
        Rating productRating = null;
        try{
            productRating = ratingRepository.save(rating);
            logger.info("Success");
        }catch (Exception e){
            logger.info("Failed with Exception"+e.getMessage());
        }
        return productRating;
    }

    @Override
    public List<Integer> getAllOrders(String email){
        List<Integer> productIdList = new ArrayList<>();
        try{
            Order order = orderRepository.findByEmail(email);
            logger.info("Order : "+order.getOrderId());
            List<Product> productList = order.getProductList();
            System.out.println("Before");
            logger.info("PrList : "+productList);
            for(Product product : productList){
                System.out.println("In forloop");
                System.out.println(product.getId());
                productIdList.add(product.getProductId());
                logger.info("Product : "+productIdList);
            }
            logger.info("Success");
        }catch (Exception e){
            logger.info("Failed with Exception"+e.getMessage());
        }
        return productIdList;
    }

    @Override
    public List<Product> getProductsByIdList(List<Integer> productIds){
        List<Product> productList = new ArrayList<Product>();
        try{
            for(Integer productId : productIds){
                productList.add(productRepository.findByProductId(productId));
            }
            logger.info("Success");
        }catch (Exception e){
            logger.info("Failed with Exception"+e.getMessage());
        }
        return productList;
    }

    @Override
    public List<User> getAllCustomers(){
        List<User> customerList = null;
        try{
            customerList = userRepository.findByValue(true);
            logger.info("Success");
        }catch (Exception e){
            logger.info("Failed with Exception"+e.getMessage());
        }
        return customerList;
    }
}
