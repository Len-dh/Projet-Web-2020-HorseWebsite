package com.example.HorseProjet5A2020.model;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class WebsiteAdmin {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int websiteAdminId;
    private int websiteAdminPhoneNumber;
    private String websiteAdminEmailId;
    private String websiteAdminName;
    private String websiteAdminFirstName;
    private String websiteAdminPassword;

    public WebsiteAdmin(){
    }

    @JsonCreator
    public WebsiteAdmin(@JsonProperty("websiteAdminId") int websiteAdminId,@JsonProperty("websiteAdminPhoneNumber") int websiteAdminPhoneNumber,@JsonProperty("websiteAdminEmailId") String websiteAdminEmailId,@JsonProperty("websiteAdminName") String websiteAdminName,@JsonProperty("websiteAdminFirstName") String websiteAdminFirstName,@JsonProperty("websiteAdminPassword") String websiteAdminPassword) {
        this.websiteAdminId = websiteAdminId;
        this.websiteAdminPhoneNumber = websiteAdminPhoneNumber;
        this.websiteAdminEmailId = websiteAdminEmailId;
        this.websiteAdminName = websiteAdminName;
        this.websiteAdminFirstName = websiteAdminFirstName;
        this.websiteAdminPassword = websiteAdminPassword;
    }

    public String getWebsiteAdminEmailId() {
        return websiteAdminEmailId;
    }

    public String getWebsiteAdminPassword() {
        return websiteAdminPassword;
    }
}
