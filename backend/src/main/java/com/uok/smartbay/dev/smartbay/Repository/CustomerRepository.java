package com.uok.smartbay.dev.smartbay.Repository;

import com.uok.smartbay.dev.smartbay.Model.Customer;
import com.uok.smartbay.dev.smartbay.Model.Store;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface CustomerRepository extends MongoRepository<Customer,String>{
    List<Customer> findByStore(Store store);
}
