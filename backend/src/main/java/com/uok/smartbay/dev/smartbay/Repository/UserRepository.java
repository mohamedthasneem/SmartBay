package com.uok.smartbay.dev.smartbay.Repository;

import com.uok.smartbay.dev.smartbay.Model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<User,String>{
    User findByEmail(String email);
}
