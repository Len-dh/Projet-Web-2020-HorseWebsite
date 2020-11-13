package com.example.HorseProjet5A2020.repository;

import com.example.HorseProjet5A2020.model.Horse;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface HorseRepository extends JpaRepository<Horse, Integer> {
    List<Horse> findByHorseId(int horseId);
}
