package com.example.HorseProjet5A2020.model;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;

@Entity
@Table(name = "horse")
public class Horse {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int horseId;

    @Column
    private int horseAge;
    @Column
    private String horseName;
    @Column
    private String horseBreed;
    @Column
    private String horseGender;

    public Horse(int horseAge, String horseName, String horseBreed, String horseGender){
    }

    @JsonCreator
    public Horse(@JsonProperty("horseId") int horseId,@JsonProperty("horseAge") int horseAge,@JsonProperty("horseName") String horseName,@JsonProperty("horseBreed") String horseBreed,@JsonProperty("horseGender") String horseGender) {
        this.horseAge = horseAge;
        this.horseName = horseName;
        this.horseBreed = horseBreed;
        this.horseGender = horseGender;
    }

    public int getHorseId() {
        return horseId;
    }

    public void setHorseId(int horseId) {
        this.horseId = horseId;
    }

    public int getHorseAge() {
        return horseAge;
    }

    public void setHorseAge(int horseAge) {
        this.horseAge = horseAge;
    }

    public String getHorseName() {
        return horseName;
    }

    public void setHorseName(String horseName) {
        this.horseName = horseName;
    }

    public String getHorseBreed() {
        return horseBreed;
    }

    public void setHorseBreed(String horseBreed) {
        this.horseBreed = horseBreed;
    }

    public String getHorseGender() {
        return horseGender;
    }

    public void setHorseGender(String horseGender) {
        this.horseGender = horseGender;
    }

    //@Override
    //public String toString(){
    //    return "Horse [horseId=" + horseId + ", horseAge=" + horseAge + ", horseName=" + horseName + ", horseBreed=" + horseBreed + ", horseGender" + horseGender + "]";
    //}
}
