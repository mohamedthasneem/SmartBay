package com.uok.services;

import com.uok.common.*;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;

import javax.validation.Valid;
import java.util.List;

public interface StoreOwnerService {
    Product saveProduct(Product product);

    Product getProduct(String id);

    List<Product> getAllProducts();

    Product updateProduct(String id,Product product);

    void deleteProduct(String id);

    List<User> getAllCustomers();

    Customer getCustomer(String id);

    List<Order> getAllOrders();

    Order getOrder(String id);

    void deleteCustomer(String id);
    //Product deleteProduct(String id);

    SalesDetails getAllDetails();

    void setDelivered(String id);
}
