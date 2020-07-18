package com.uok.repository;

import com.uok.common.Order;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Date;
import java.util.List;

public interface OrderRepository extends MongoRepository<Order,String>{
    Order findByEmail(String email);
    List<Order> findByOrderDate(String mothStartDate);
    List<Order> findByStatus(String status);
}
