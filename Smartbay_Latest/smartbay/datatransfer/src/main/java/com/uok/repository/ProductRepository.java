package com.uok.repository;

import com.uok.common.Product;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface ProductRepository extends MongoRepository<Product,String> {
    List<Product> findByProductCategory(String category);

    List<Product> findByProductName(String name);
}
