SELECT * FROM proyecto.usuarios;

/* mysql*/
SELECT * FROM proyecto.usuarios WHERE id=1;
/*postgres*/
SELECT * FROM public.usuarios WHERE id=3;

SELECT id, nombre, correo 
FROM proyecto.usuarios;

INSERT INTO proyecto.usuarios (id, nombre, correo, createdAt, updatedAt) VALUES (1, 'Juan Pérez', 'juan.perez@example.com', NOW(), NOW());
INSERT INTO proyecto.usuarios (id, nombre, correo, createdAt, updatedAt) VALUES (2, 'María García', 'maria.garcia@example.com', NOW(), NOW());
INSERT INTO proyecto.usuarios (id, nombre, correo, createdAt, updatedAt) VALUES (3, 'Carlos López', 'carlos.lopez@example.com', NOW(), NOW());
INSERT INTO proyecto.usuarios (id, nombre, correo, createdAt, updatedAt) VALUES (4, 'Ana Rodríguez', 'ana.rodriguez@example.com', NOW(), NOW());
INSERT INTO proyecto.usuarios (id, nombre, correo, createdAt, updatedAt) VALUES (5, 'Pedro Sánchez', 'pedro.sanchez@example.com', NOW(), NOW());
INSERT INTO proyecto.usuarios (id, nombre, correo, createdAt, updatedAt) VALUES (6, 'Sofía Fernández', 'sofia.fernandez@example.com', NOW(), NOW());
INSERT INTO proyecto.usuarios (id, nombre, correo, createdAt, updatedAt) VALUES (7, 'Luis Gómez', 'luis.gomez@example.com', NOW(), NOW());
INSERT INTO proyecto.usuarios (id, nombre, correo, createdAt, updatedAt) VALUES (8, 'Laura Díaz', 'laura.diaz@example.com', NOW(), NOW());
INSERT INTO proyecto.usuarios (id, nombre, correo, createdAt, updatedAt) VALUES (9, 'Diego Martínez', 'diego.martinez@example.com', NOW(), NOW());
INSERT INTO proyectousuarios (id, nombre, correo, createdAt, updatedAt) VALUES (10, 'Valeria Torres', 'valeria.torres@example.com', NOW(), NOW());