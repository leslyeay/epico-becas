package com.example.epicobecasbackend.Repositories;

import com.example.epicobecasbackend.Entities.Profesor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IProfesorRepository extends JpaRepository<Profesor, Integer> {

}
