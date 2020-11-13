package com.example.HorseProjet5A2020.model;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;

@Entity
public class Lesson {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int lessonId;
    private String lessonTitle;
    private Date lessonDate;
    private Date lessonStart;
    private Date lessonEnd;
    private int lessonGroupSize;
    private int lessonLevel;
    private String lessonInstructor;
    private String lessonRecurrence;

    public Lesson(){
    }

    @JsonCreator
    public Lesson(@JsonProperty("lessonId") int lessonId,@JsonProperty("lessonTitle") String lessonTitle,@JsonProperty("lessonDate") Date lessonDate,@JsonProperty("lessonStart") Date lessonStart,@JsonProperty("lessonEnd") Date lessonEnd,@JsonProperty("lessonGroupSize") int lessonGroupSize,@JsonProperty("lessonLevel") int lessonLevel,@JsonProperty("lessonInstructor") String lessonInstructor,@JsonProperty("lessonRecurrence") String lessonRecurrence) {
        this.lessonId = lessonId;
        this.lessonTitle = lessonTitle;
        this.lessonDate = lessonDate;
        this.lessonStart = lessonStart;
        this.lessonEnd = lessonEnd;
        this.lessonGroupSize = lessonGroupSize;
        this.lessonLevel = lessonLevel;
        this.lessonInstructor = lessonInstructor;
        this.lessonRecurrence = lessonRecurrence;
    }

    public int getLessonId() {
        return lessonId;
    }

    public void setLessonId(int lessonId) {
        this.lessonId = lessonId;
    }

    public String getLessonTitle() {
        return lessonTitle;
    }

    public void setLessonTitle(String lessonTitle) {
        this.lessonTitle = lessonTitle;
    }

    public Date getLessonDate() {
        return lessonDate;
    }

    public void setLessonDate(Date lessonDate) {
        this.lessonDate = lessonDate;
    }

    public Date getLessonStart() {
        return lessonStart;
    }

    public void setLessonStart(Date lessonStart) {
        this.lessonStart = lessonStart;
    }

    public Date getLessonEnd() {
        return lessonEnd;
    }

    public void setLessonEnd(Date lessonEnd) {
        this.lessonEnd = lessonEnd;
    }

    public int getLessonGroupSize() {
        return lessonGroupSize;
    }

    public void setLessonGroupSize(int lessonGroupSize) {
        this.lessonGroupSize = lessonGroupSize;
    }

    public int getLessonLevel() {
        return lessonLevel;
    }

    public void setLessonLevel(int lessonLevel) {
        this.lessonLevel = lessonLevel;
    }

    public String getLessonInstructor() {
        return lessonInstructor;
    }

    public void setLessonInstructor(String lessonInstructor) {
        this.lessonInstructor = lessonInstructor;
    }

    public String getLessonRecurrence() {
        return lessonRecurrence;
    }

    public void setLessonRecurrence(String lessonRecurrence) {
        this.lessonRecurrence = lessonRecurrence;
    }

    @Override
    public String toString(){
        return "Lesson [lessonId=" + lessonId + ", lessonTitle=" + lessonTitle + ", lessonDate=" + lessonDate + ", lessonStart=" + lessonStart + ", lessonEnd=" + lessonEnd + ", lessonGroupSize=" + lessonGroupSize + ", lessonLevel=" + lessonLevel + ", lessonInstructor=" + lessonInstructor + ", lessonRecurrence=" + lessonRecurrence + "]";
    }
}
