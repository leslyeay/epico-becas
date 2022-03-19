package com.example.epicobecasbackend.Repositories;

import com.example.epicobecasbackend.Entities.Beca;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IBecaRepository extends JpaRepository<Beca, Integer> {
}
