package com.uok.common;

public class StoreOwner extends User{

    private String shopName;

    private String shopURL;

    public StoreOwner(String username, String email, String password, String shopName, String shopURL) {
        super(username, email, password);
        this.shopName = shopName;
        this.shopURL = shopURL;
    }

    public String getShopName() {
        return shopName;
    }

    public void setShopName(String shopName) {
        this.shopName = shopName;
    }

    public String getShopURL() {
        return shopURL;
    }

    public void setShopURL(String shopURL) {
        this.shopURL = shopURL;
    }
}
