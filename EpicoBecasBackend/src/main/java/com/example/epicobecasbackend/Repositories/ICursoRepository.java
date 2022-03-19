package com.example.epicobecasbackend.Repositories;

import com.example.epicobecasbackend.Entities.Curso;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ICursoRepository extends JpaRepository<Curso, Integer> {
}
