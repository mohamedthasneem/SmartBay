package com.uok.repository;

import com.uok.common.Customer;
import com.uok.common.Role;
import com.uok.common.User;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.Optional;
import java.util.Set;

public interface UserRepository extends MongoRepository<User, String> {
    Optional<User> findByUsername(String username);

    User findByEmail(String email);

    Boolean existsByUsername(String username);

    Boolean existsByEmail(String email);

    List<User> findByRoles(Set<Role> roles);

    Customer findByRolesAndId(Set<Role> roles,String id);

    List<User> findByValue(boolean isCustomer);
}
