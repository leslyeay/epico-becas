package com.example.epicobecasbackend.Entities;

import lombok.Data;

enum Tipo {
    MULTIPLE,
    UNICA,
    TEXTO
}

@Data
public class Respuesta {
    Tipo tipoRespuesta;
}
