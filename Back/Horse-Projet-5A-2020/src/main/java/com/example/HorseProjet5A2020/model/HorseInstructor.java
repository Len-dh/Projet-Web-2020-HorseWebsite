package com.example.HorseProjet5A2020.model;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class HorseInstructor {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int horseInstructorId;
    private int horseInstructorPhoneNumber;
    private String horseInstructorEmailId;
    private String horseInstructorName;
    private String horseInstructorFirstName;
    private String horseInstructorPassword;

    public HorseInstructor(){
    }

    @JsonCreator
    public HorseInstructor(@JsonProperty("horseInstructorId") int horseInstructorId,@JsonProperty("horseInstructorPhoneNumber") int horseInstructorPhoneNumber,@JsonProperty("horseInstructorEmailId") String horseInstructorEmailId,@JsonProperty("horseInstructorName") String horseInstructorName,@JsonProperty("horseInstructorFirstName") String horseInstructorFirstName,@JsonProperty("horseInstructorPassword") String horseInstructorPassword) {
        this.horseInstructorId = horseInstructorId;
        this.horseInstructorPhoneNumber = horseInstructorPhoneNumber;
        this.horseInstructorEmailId = horseInstructorEmailId;
        this.horseInstructorName = horseInstructorName;
        this.horseInstructorFirstName = horseInstructorFirstName;
        this.horseInstructorPassword = horseInstructorPassword;
    }

    public int getHorseInstructorId() {
        return horseInstructorId;
    }

    public int getHorseInstructorPhoneNumber() {
        return horseInstructorPhoneNumber;
    }

    public String getHorseInstructorName() {
        return horseInstructorName;
    }

    public String getHorseInstructorFirstName() {
        return horseInstructorFirstName;
    }

    public String getHorseInstructorEmailId() {
        return horseInstructorEmailId;
    }

    public String getHorseInstructorPassword() {
        return horseInstructorPassword;
    }
}
