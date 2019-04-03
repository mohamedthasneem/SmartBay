package com.uok.smartbay.dev.smartbay.Repository;

import com.uok.smartbay.dev.smartbay.Model.Role;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface RoleRepository extends MongoRepository<Role,String>{
    Role findByRole(String role);
}
