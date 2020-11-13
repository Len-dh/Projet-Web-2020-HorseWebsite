package com.example.HorseProjet5A2020.repository;

import com.example.HorseProjet5A2020.model.Lesson;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface LessonRepository extends JpaRepository<Lesson, Integer> {
    List<Lesson> findByLessonId(int lessonId);
}
