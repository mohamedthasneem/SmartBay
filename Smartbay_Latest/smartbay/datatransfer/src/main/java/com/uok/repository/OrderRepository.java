package com.uok.repository;

import com.uok.common.Order;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface OrderRepository extends MongoRepository<Order,String>{
    Order findByEmail(String email);
}
