package com.uok.common;

import java.util.List;

public class JwtResponse {
    private String token;
//    private String type = "Bearer";
//    private String id;
//    private String username;
//    private String email;
//    private List<String> roles;

    public JwtResponse(String token) {
        this.token = token;
//        this.id = id;
//        this.username = username;
//        this.email = email;
//        this.roles = roles;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }
}
