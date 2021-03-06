package com.example.epicobecasbackend.Entities;

import lombok.Data;

import java.util.Date;
import java.util.List;

@Data
public class Beca {
    List<Curso> modulos;
    Date fechaInicio;
    Date fechaFin;
    String nombre;
    String brochure;
    TipoDocumento tipoDocumento;
    boolean estado;
    int disponibilidad; // Cupos disponibles
}

enum TipoDocumento {
    CEDULA,
    PASAPORTE
}
