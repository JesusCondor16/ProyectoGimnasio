drop database gymbob;
create database gymbob;
use gymbob;
-- Crear la tabla Cliente
CREATE TABLE Cliente (
    id INT AUTO_INCREMENT PRIMARY KEY,
    contrasenia VARCHAR(255),
    correo VARCHAR(255),
    apellido VARCHAR(255),
    nombre VARCHAR(255),
    dni VARCHAR(255),
    fecha_nacimiento DATE
);
-- Crear la tabla Tarjeta
CREATE TABLE Tarjeta (
    numero VARCHAR(255) PRIMARY KEY,
    fecha_vencimiento VARCHAR(255),
    ccv VARCHAR(255),
    cliente_id INT,
    FOREIGN KEY (cliente_id) REFERENCES Cliente(id)
);
-- Crear la tabla Premio
CREATE TABLE Premio (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255),    
    imagen VARCHAR(255)    
);

CREATE TABLE Cliente_Premio (
    cliente_id INT,
    premio_id INT,
    PRIMARY KEY (cliente_id, premio_id),
    FOREIGN KEY (cliente_id) REFERENCES Cliente(id),
    FOREIGN KEY (premio_id) REFERENCES Premio(id)
);

-- Crear la tabla Plan
CREATE TABLE Plan (
    id INT AUTO_INCREMENT PRIMARY KEY,
    duracion INT,
    tipo VARCHAR(255),
    descripcion VARCHAR(255)
);
CREATE TABLE Cliente_Plan (
    cliente_id INT,
    plan_id INT,
    PRIMARY KEY (cliente_id, plan_id),
    FOREIGN KEY (cliente_id) REFERENCES Cliente(id),
    FOREIGN KEY (plan_id) REFERENCES Plan(id)
);
-- Crear la tabla Alimentos
CREATE TABLE Alimentos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    tipo VARCHAR(255),
    nombre_platillo VARCHAR(255),
    imagen VARCHAR(255)
);
-- Crear la tabla Plan_Alimentos para representar la relación entre Plan y Alimentos
CREATE TABLE Plan_Alimentos (
    plan_id INT,
    alimentos_id INT,
    PRIMARY KEY (plan_id, alimentos_id),
    FOREIGN KEY (plan_id) REFERENCES Plan(id),
    FOREIGN KEY (alimentos_id) REFERENCES Alimentos(id)
);

-- Crear la tabla Reserva
CREATE TABLE Reserva (
    id INT AUTO_INCREMENT PRIMARY KEY,
    fecha_inicio DATE,
    estado VARCHAR(255),
    duracion DATE,
    cliente_id INT,
    FOREIGN KEY (cliente_id) REFERENCES Cliente(id)
);
CREATE TABLE CategoriaMaq (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) UNIQUE
);
-- Crear la tabla Maquina
CREATE TABLE Maquina (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255),    
    marca VARCHAR(255),
    modelo VARCHAR(255),
    estado VARCHAR(255),
    imagen VARCHAR(255),
    id_tipo INT,
    FOREIGN KEY (id_tipo) REFERENCES CategoriaMaq(id)
);
-- Crear la tabla Reserva_Maquina para representar la relación entre Reserva y Maquina
CREATE TABLE Reserva_Maquina (
    id_reserva INT,
    id_maquina INT,
    PRIMARY KEY (id_reserva, id_maquina),
    FOREIGN KEY (id_reserva) REFERENCES Reserva(id),
    FOREIGN KEY (id_maquina) REFERENCES Maquina(id)
);

-- Insertar la categoría "CARDIO"
INSERT INTO CategoriaMaq (nombre) VALUES ('CARDIO');

-- Insertar la categoría "MAQUINA DE FUERZA"
INSERT INTO CategoriaMaq (nombre) VALUES ('MAQUINA DE FUERZA');

-- Máquina elíptica
INSERT INTO Maquina (nombre, estado, marca, modelo, imagen, id_tipo) 
VALUES ('Maquina elíptica', 'Disponible', 'Ultimate Fitness', 'T1000 Premium Magnética Inclinación', './img/Eliptica.jpg', 1);

-- Trotadora eléctrica
INSERT INTO Maquina (nombre, estado, marca, modelo, imagen, id_tipo) 
VALUES ('Trotadora eléctrica', 'Disponible', 'Ultimate Fitness', 'E500 Pro', './img/Trotadora-electrica.png', 1);

-- Maquina elíptica (segunda máquina de este tipo)
INSERT INTO Maquina (nombre, estado, marca, modelo, imagen, id_tipo) 
VALUES ('Maquina elíptica', 'Disponible', 'Ultimate Fitness', 'Mini escaladora', './img/Mini-escaladora.jpg', 1);

-- Trotadora Curva
INSERT INTO Maquina (nombre, estado, marca, modelo, imagen, id_tipo) 
VALUES ('Trotadora Curva', 'Disponible', 'Ultimate Fitness', 'C1000 Elite', './img/Trotadora-curva.png', 1);

-- Estación Dominadas Paralelas
INSERT INTO Maquina (nombre, estado, marca, modelo, imagen, id_tipo) 
VALUES ('Estación Dominadas Paralelas', 'Disponible', 'Ultimate Fitness', 'Elite Premium', './img/Maquina-dominadas.png', 2);

-- Banca de ejercicios
INSERT INTO Maquina (nombre, estado, marca, modelo, imagen, id_tipo) 
VALUES ('Banca de ejercicios', 'Disponible', 'Ultimate Fitness', 'Plano', './img/Banca-plana.jpg', 2);

-- Banca multi función inclinable
INSERT INTO Maquina (nombre, estado, marca, modelo, imagen, id_tipo) 
VALUES ('Banca multi función inclinable', 'Disponible', 'Ultimate Fitness', 'Plano Slim', './img/Banca-inclinada.jpg', 2);

-- Rueda Abdominales
INSERT INTO Maquina (nombre, estado, marca, modelo, imagen, id_tipo) 
VALUES ('Rueda Abdominales', 'Disponible', 'Ultimate Fitness', 'Pro', './img/Rueda-Abdominales.jpg', 2);

-- Barra Olimpica
INSERT INTO Maquina (nombre, estado, marca, modelo, imagen, id_tipo) 
VALUES ('Barra Olimpica', 'Disponible', 'Ultimate Fitness', 'Hexagonal Trap', './img/Barra-olimpica.jpg', 2);

-- Barra Olimpica Recta
INSERT INTO Maquina (nombre, estado, marca, modelo, imagen, id_tipo) 
VALUES ('Barra Olimpica Recta', 'Disponible', 'Ultimate Fitness', '25 mm – 160 kg', './img/Barra-olimpica-recta.jpg', 2);

-- Barra Olimpica Gruesa
INSERT INTO Maquina (nombre, estado, marca, modelo, imagen, id_tipo) 
VALUES ('Barra Olimpica Gruesa', 'Disponible', 'Ultimate Fitness', '28mm – 200 cm -160 kg', './img/Barra-olimpica-gruesa.jpg', 2);

-- Disco Olimpico 15 kg
INSERT INTO Maquina (nombre, estado, marca, modelo, imagen, id_tipo) 
VALUES ('Disco Olimpico 15 kg', 'Disponible', 'Ultimate Fitness', 'Bumper', './img/Disco-olimpico-15kg.png', 2);

-- Disco Olimpico 5 kg
INSERT INTO Maquina (nombre, estado, marca, modelo, imagen, id_tipo) 
VALUES ('Disco Olimpico 5 kg', 'Disponible', 'Ultimate Fitness', 'Engomado con agarres', './img/Disco-olimpico-5kg.png', 2);

-- Mancuerna 5 kg
INSERT INTO Maquina (nombre, estado, marca, modelo, imagen, id_tipo) 
VALUES ('Mancuerna 5 kg', 'Disponible', 'Ultimate Fitness', 'Hexagonal', './img/Mancuerna-hexagonal-5kg.jpg', 2);

-- Mancuerna 15 kg
INSERT INTO Maquina (nombre, estado, marca, modelo, imagen, id_tipo) 
VALUES ('Mancuerna 15 kg', 'Disponible', 'Ultimate Fitness', 'Hexagonal', './img/Mancuerna-hexagonal-15kg.jpg', 2);

-- Mancuerna 20 kg
INSERT INTO Maquina (nombre, estado, marca, modelo, imagen, id_tipo) 
VALUES ('Mancuerna 20 kg', 'Disponible', 'Ultimate Fitness', 'Hexagonal', './img/Mancuerna-hexagonal-20kg.jpg', 2);

-- Insertar planes con duración en meses como número entero
INSERT INTO Plan (duracion, tipo, descripcion)
VALUES (3, 'Reducir Grasa', 'Plan para reducir grasa con dieta y ejercicio.');

INSERT INTO Plan (duracion, tipo, descripcion)
VALUES (2, 'Tonificar', 'Plan para tonificar y fortalecer los músculos.');

INSERT INTO Plan (duracion, tipo, descripcion)
VALUES (4, 'Aumentar Masa Muscular', 'Plan para ganar masa muscular y fuerza.');

-- Alimentos para el plan de Reducir Grasa
-- Desayuno
INSERT INTO Alimentos (tipo, nombre_platillo, imagen)
VALUES ('Desayuno', 'Tazón de avena con frutas (manzanas, bayas o plátanos) y nueces, Té verde o café negro sin azúcar', 'imagen_desayuno_reducir_grasa.jpg');

-- Almuerzo
INSERT INTO Alimentos (tipo, nombre_platillo, imagen)
VALUES ('Almuerzo', 'Pechuga de pollo a la parrilla con una ensalada mixta (verduras frescas y hojas verdes), Sopa de vegetales sin crema, Una porción de arroz integral', 'imagen_almuerzo_reducir_grasa.jpg');

-- Cena
INSERT INTO Alimentos (tipo, nombre_platillo, imagen)
VALUES ('Cena', 'Salmón al horno con brócoli al vapor, Ensalada de espinacas con aceite de oliva y vinagre balsámico', 'imagen_cena_reducir_grasa.jpg');

-- Alimentos para el plan de Tonificar
-- Desayuno
INSERT INTO Alimentos (tipo, nombre_platillo, imagen)
VALUES ('Desayuno', 'Batido de proteínas con proteína en polvo, plátano y espinacas, Té o café sin azúcar', 'imagen_desayuno_tonificar.jpg');

-- Almuerzo
INSERT INTO Alimentos (tipo, nombre_platillo, imagen)
VALUES ('Almuerzo', 'Pechuga de pavo a la parrilla con batata al horno, Ensalada de garbanzos con verduras y aderezo ligero', 'imagen_almuerzo_tonificar.jpg');

-- Cena
INSERT INTO Alimentos (tipo, nombre_platillo, imagen)
VALUES ('Cena', 'Pescado a la parrilla (por ejemplo, tilapia o salmón), Espárragos asados con aceite de oliva y ajo', 'imagen_cena_tonificar.jpg');

-- Alimentos para el plan de Aumentar Masa Muscular
-- Desayuno
INSERT INTO Alimentos (tipo, nombre_platillo, imagen)
VALUES ('Desayuno', 'Tortilla de claras de huevo con espinacas y pimientos, Avena con plátanos y almendras', 'imagen_desayuno_aumentar_masa_muscular.jpg');

-- Almuerzo
INSERT INTO Alimentos (tipo, nombre_platillo, imagen)
VALUES ('Almuerzo', 'Pollo a la parrilla con arroz integral, Brócoli o espárragos al vapor, Batido de proteínas con proteína en polvo y leche (como merienda)', 'imagen_almuerzo_aumentar_masa_muscular.jpg');

-- Cena
INSERT INTO Alimentos (tipo, nombre_platillo, imagen)
VALUES ('Cena', 'Carne magra (res o cerdo magro) con batata y brócoli al vapor, Ensalada de aguacate y tomate', 'imagen_cena_aumentar_masa_muscular.jpg');

-- Insertar datos en Plan_Alimentos automáticamente (cada plan con varios alimentos)
INSERT INTO Plan_Alimentos (plan_id, alimentos_id)
SELECT p.id, a.id
FROM Plan p
JOIN Alimentos a ON (
  (p.id = 1 AND a.id IN (1, 2, 3)) -- Plan 1 con alimentos 1, 2 y 3
  OR
  (p.id = 2 AND a.id IN (4, 5, 6)) -- Plan 2 con alimentos 4, 5 y 6
  OR
  (p.id = 3 AND a.id IN (7, 8, 9)) -- Plan 3 con alimentos 7, 8 y 9
);
INSERT INTO Premio (nombre, imagen) VALUES
('Descuento de 20 soles', 'imagen_descuento_20_soles.jpg'),
('Tarjeta de regalo de 50 soles en tiendas deportivas', 'imagen_tarjeta_regalo.jpg'),
('Canjear suplementos vitamínicos', 'imagen_suplementos_vitamicos.jpg');