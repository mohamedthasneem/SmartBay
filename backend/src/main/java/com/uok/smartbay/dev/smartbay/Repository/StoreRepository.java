package com.uok.smartbay.dev.smartbay.Repository;

import com.uok.smartbay.dev.smartbay.Model.Store;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface StoreRepository extends MongoRepository<Store,String>{
    Store findByEmail(String email);
}
