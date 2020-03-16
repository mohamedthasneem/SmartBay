package com.uok.smartbay.dev.smartbay.Model;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.List;

@Document(collection = "store")
public class Store {
    @Id
    private ObjectId id;
    private String storeName;
    private String storeOwner;
    private List<Product> productList;
    private byte[] picByte;

    public ObjectId getId() {
        return id;
    }

    public void setId(ObjectId id) {
        this.id = id;
    }

    public String getStoreName() {
        return storeName;
    }

    public void setStoreName(String storeName) {
        this.storeName = storeName;
    }

    public String getStoreOwner() {
        return storeOwner;
    }

    public void setStoreOwner(String storeOwner) {
        this.storeOwner = storeOwner;
    }

    public List<Product> getProductList() {
        return productList;
    }

    public void setProductList(List<Product> productList) {
        this.productList = productList;
    }

    public byte[] getPicByte() {
        return picByte;
    }

    public void setPicByte(byte[] picByte) {
        this.picByte = picByte;
    }

    public void updateProductList(Product product){
        if(this.productList==null){
            List<Product> prList = new ArrayList();
            prList.add(product);
            //this.productList.add(product);
            setProductList(prList);
        }else{
            this.productList.add(product);
        }

    }
}
