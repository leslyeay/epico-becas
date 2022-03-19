package com.example.epicobecasbackend.Repositories;

import com.example.epicobecasbackend.Entities.Pregunta;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IPreguntaRepository extends JpaRepository<Pregunta, Integer> {
}
