package com.example.HorseProjet5A2020.model;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Rider {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int riderId;
    private int riderPhoneNumber;
    private String riderEmailId;
    private String riderName;
    private String riderFirstName;
    private String riderPassword;

    public Rider(){
    }


    @JsonCreator
    public Rider(@JsonProperty("riderId") int riderId,@JsonProperty("riderPhoneNumber") int riderPhoneNumber,@JsonProperty("riderEmailId") String riderEmailId,@JsonProperty("riderName") String riderName,@JsonProperty("riderFirstName") String riderFirstName,@JsonProperty("riderPassword") String riderPassword) {
        this.riderId = riderId;
        this.riderPhoneNumber = riderPhoneNumber;
        this.riderEmailId = riderEmailId;
        this.riderName = riderName;
        this.riderFirstName = riderFirstName;
        this.riderPassword = riderPassword;
    }

    public String getRiderEmailId() {
        return riderEmailId;
    }

    public String getRiderPassword() {
        return riderPassword;
    }
}
