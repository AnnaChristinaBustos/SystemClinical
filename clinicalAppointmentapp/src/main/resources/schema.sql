-- Secuencias
DROP TABLE IF EXISTS HISTORY_CLINICAL;
DROP TABLE IF EXISTS APPOINTMENT;
DROP TABLE IF EXISTS PACIENT;
DROP TABLE IF EXISTS DOCTOR;

DROP SEQUENCE IF EXISTS DOCTOR_SEQ;
DROP SEQUENCE IF EXISTS PACIENT_SEQ;
DROP SEQUENCE IF EXISTS APPOINTMENT_SEQ;
DROP SEQUENCE IF EXISTS HISTORY_SEQ;



CREATE SEQUENCE DOCTOR_SEQ START WITH 1 INCREMENT BY 1;
CREATE SEQUENCE PACIENT_SEQ START WITH 1 INCREMENT BY 1;
CREATE SEQUENCE APPOINTMENT_SEQ START WITH 1 INCREMENT BY 1;
CREATE SEQUENCE HISTORY_SEQ START WITH 1 INCREMENT BY 1;

-- Tabla: DOCTOR
CREATE TABLE DOCTOR (
                        ID BIGINT DEFAULT DOCTOR_SEQ.NEXTVAL PRIMARY KEY,
                        NAME VARCHAR(255),
                        SURNAME VARCHAR(255),
                        LASTNAME VARCHAR(255),
                        SPECIALIZATION VARCHAR(255)
);

-- Tabla: PACIENT
CREATE TABLE PACIENT (
                         ID BIGINT DEFAULT PACIENT_SEQ.NEXTVAL PRIMARY KEY,
                         NAME VARCHAR(255),
                         SURNAME VARCHAR(255),
                         LASTNAME VARCHAR(255),
                         AGE INT
);

-- Tabla: APPOINTMENT
CREATE TABLE APPOINTMENT (
                             ID BIGINT DEFAULT APPOINTMENT_SEQ.NEXTVAL PRIMARY KEY,
                             DATE DATE,
                             ID_DOCTOR BIGINT,
                             ID_PACIENT BIGINT,
                             MOTIVE VARCHAR(500),
                             STATUS VARCHAR(100),
                             FOREIGN KEY (ID_DOCTOR) REFERENCES DOCTOR(ID),
                             FOREIGN KEY (ID_PACIENT) REFERENCES PACIENT(ID)
);

-- Tabla: HISTORY_CLINICAL
CREATE TABLE HISTORY_CLINICAL (
                                  ID BIGINT DEFAULT HISTORY_SEQ.NEXTVAL PRIMARY KEY,
                                  ID_PACIENT BIGINT,
                                  ID_DOCTOR BIGINT,
                                  TREATMENT VARCHAR(500),
                                  DIAGNOSIS VARCHAR(500),
                                  DATE DATE,
                                  FOREIGN KEY (ID_PACIENT) REFERENCES PACIENT(ID),
                                  FOREIGN KEY (ID_DOCTOR) REFERENCES DOCTOR(ID)
);


-- Doctores
INSERT INTO DOCTOR (NAME, SURNAME, LASTNAME, SPECIALIZATION) VALUES
                                                                     ( 'Ana', 'López', 'Martínez', 'Cardiología'),
                                                                     ( 'Carlos', 'Ramírez', 'Torres', 'Dermatología');

-- Pacientes
INSERT INTO PACIENT ( NAME, SURNAME, LASTNAME, AGE) VALUES
                                                           ( 'María', 'Gómez', 'Fernández', 28),
                                                           ( 'Luis', 'Díaz', 'Pérez', 34);

-- Citas
INSERT INTO APPOINTMENT ( DATE, ID_DOCTOR, ID_PACIENT, MOTIVE, STATUS) VALUES
                                                                              ( CURRENT_DATE, 1, 1, 'Chequeo general', 'Pendiente'),
                                                                              ( CURRENT_DATE, 2, 2, 'Erupción cutánea', 'Confirmada');

-- Historial clínico
INSERT INTO HISTORY_CLINICAL ( ID_PACIENT, ID_DOCTOR, TREATMENT, DIAGNOSIS, DATE) VALUES
                                                                                         ( 1, 1, 'Reposo y dieta ligera', 'Gripe común', CURRENT_DATE),
                                                                                         (2, 2, 'Crema tópica', 'Dermatitis', CURRENT_DATE);
