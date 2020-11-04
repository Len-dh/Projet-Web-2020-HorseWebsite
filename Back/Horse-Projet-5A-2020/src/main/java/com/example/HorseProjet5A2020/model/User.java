package com.example.HorseProjet5A2020.model;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String emailId;
    private String userName;
    private String password;

    public User() {
    }

    public User(int id, String emailId, String userName, String password) {
        this.id = id;
        this.emailId = emailId;
        this.userName = userName;
        this.password = password;
    }

    public String getEmailId() {
        return emailId;
    }

    public String getPassword() {
        return password;
    }

}
