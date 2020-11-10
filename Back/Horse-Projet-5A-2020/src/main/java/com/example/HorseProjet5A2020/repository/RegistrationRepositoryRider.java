package com.example.HorseProjet5A2020.repository;

import com.example.HorseProjet5A2020.model.Rider;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RegistrationRepositoryRider extends JpaRepository<Rider, Integer> {
    public Rider findByRiderEmailId(String riderEmailId);
    public Rider findByRiderEmailIdAndRiderPassword(String riderEmailId, String riderPassword);
}
