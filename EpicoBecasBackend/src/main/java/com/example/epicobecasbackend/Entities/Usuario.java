package com.example.epicobecasbackend.Entities;

import lombok.Data;

@Data
public class Usuario {
    String nombre;
    String apellidos;
    String cedula;
    String email;
    String passwd;
    boolean admin;
}
