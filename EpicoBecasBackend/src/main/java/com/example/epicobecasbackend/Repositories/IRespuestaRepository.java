package com.example.epicobecasbackend.Repositories;

import com.example.epicobecasbackend.Entities.Respuesta;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IRespuestaRepository extends JpaRepository<Respuesta, Integer> {
}
