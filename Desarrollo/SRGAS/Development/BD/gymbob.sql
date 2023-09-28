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
    tipo VARCHAR(255),
    cliente_id INT,
    imagen VARCHAR(255),
    FOREIGN KEY (cliente_id) REFERENCES Cliente(id),
    costo INT
);
-- Crear la tabla Plan
CREATE TABLE Plan (
    id INT AUTO_INCREMENT PRIMARY KEY,
    tiempo DATE,
    tipo VARCHAR(255),
    descripcion VARCHAR(255),
    cliente_id INT,
    FOREIGN KEY (cliente_id) REFERENCES Cliente(id)
);
-- Crear la tabla Alimentos
CREATE TABLE Alimentos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    tipo VARCHAR(255),
    calorias INT,
    proteinas INT,
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

select * from maquina;