package com.uok.common;

public class Customer extends User{

    private String address;

    public String getAddress() {
        return address;
    }

    public Customer(String username, String email, String password, String address) {
        super(username, email, password);
        this.address = address;
    }

    public void setAddress(String address) {
        this.address = address;
    }


}
