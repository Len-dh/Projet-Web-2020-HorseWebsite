package com.example.HorseProjet5A2020.repository;

import com.example.HorseProjet5A2020.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RegistrationRepository extends JpaRepository<User, Integer> {
    public User findByEmailId(String emailId);
    public User findByEmailIdAndPassword(String emailId, String password);
}

