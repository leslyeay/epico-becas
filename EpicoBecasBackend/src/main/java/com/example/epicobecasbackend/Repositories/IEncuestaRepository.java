package com.example.epicobecasbackend.Repositories;

import com.example.epicobecasbackend.Entities.Encuesta;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IEncuestaRepository extends JpaRepository<Encuesta, Integer> {
}
