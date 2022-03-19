package com.example.epicobecasbackend.Entities;

import lombok.Data;

@Data
public class Curso {
    int id;
    String codigo;
    String nombre;
    String descripcion;
    Profesor profesor;
}
