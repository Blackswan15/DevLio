package com.devlio.devlio.dto;

public class RegisterRequest {
    private String username;
    private String gmail;
    private String password;
    public RegisterRequest(){}

    public RegisterRequest(String username, String gmail, String password) {
        this.username = username;
        this.gmail = gmail;
        this.password = password;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getGmail() {
        return gmail;
    }

    public void setGmail(String gmail) {
        this.gmail = gmail;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
