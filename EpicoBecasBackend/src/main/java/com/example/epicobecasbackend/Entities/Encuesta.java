package com.example.epicobecasbackend.Entities;

import lombok.Data;

import java.util.List;

@Data
public class Encuesta {
    List<Pregunta> preguntas;
}
