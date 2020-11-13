package com.example.HorseProjet5A2020.repository;

import com.example.HorseProjet5A2020.model.HorseInstructor;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RegistrationRepositoryHI extends JpaRepository<HorseInstructor, Integer> {
    public HorseInstructor findByHorseInstructorEmailId(String horseInstructorEmailId);
    public HorseInstructor findByHorseInstructorEmailIdAndHorseInstructorPassword(String horseInstructorEmailId, String horseInstructorPassword);
}
