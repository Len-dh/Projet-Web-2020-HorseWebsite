package com.example.HorseProjet5A2020.model;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Admin {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int adminId;
    private int adminPhoneNumber;
    private String adminEmailId;
    private String adminName;
    private String adminFirstName;
    private String adminPassword;

    public Admin(){
    }

    @JsonCreator
    public Admin(@JsonProperty("adminID") int adminId,@JsonProperty("adminPhoneNumber") int adminPhoneNumber,@JsonProperty("adminEmailId") String adminEmailId,@JsonProperty("adminName") String adminName,@JsonProperty("adminFirstName") String adminFirstName,@JsonProperty("adminPassword") String adminPassword) {
        this.adminId = adminId;
        this.adminPhoneNumber = adminPhoneNumber;
        this.adminEmailId = adminEmailId;
        this.adminName = adminName;
        this.adminFirstName = adminFirstName;
        this.adminPassword = adminPassword;
    }

    public String getAdminEmailId() {
        return adminEmailId;
    }

    public String getAdminPassword() {
        return adminPassword;
    }
}
