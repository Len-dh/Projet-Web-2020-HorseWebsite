package com.example.HorseProjet5A2020.repository;

import com.example.HorseProjet5A2020.model.Admin;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RegistrationRepositoryAdmin extends JpaRepository<Admin, Integer> {
    public Admin findByAdminEmailId(String adminEmailId);
    public Admin findByAdminEmailIdAndAdminPassword(String adminEmailId, String adminPassword);
}
