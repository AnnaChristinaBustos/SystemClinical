package com.example.clinicalAppointmentapp.model;

import java.util.Date;

public class Appoiment {
    private Long id;
    private Long id_doctor;
    private Long id_pacient;
    private String motive;
    private String status;
    private Date date;
    private Doctor doctor;
    private Pacient pacient;

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public Long getId_doctor() {
        return id_doctor;
    }
    public void setId_doctor(Long id_doctor) {
        this.id_doctor = id_doctor;
    }
    public Long getId_pacient() {
        return id_pacient;
    }
    public void setId_pacient(Long id_pacient) {
        this.id_pacient = id_pacient;
    }
    public String getMotive() {
        return motive;
    }
    public void setMotive(String motive) {
        this.motive = motive;
    }
    public String getStatus() {
        return status;
    }
    public void setStatus(String status) {
        this.status = status;
    }
    public Date getDate() {
        return date;
    }
    public void setDate(Date date) {
        this.date = date;
    }

    public Doctor getDoctor() {
        return doctor;
    }
    public void setDoctor(Doctor doctor) {
        this.doctor = doctor;
    }
    public Pacient getPacient() {
        return pacient;
    }
    public void setPacient(Pacient pacient) {
        this.pacient = pacient;
    }

}
