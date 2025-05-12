package com.example.clinicalAppointmentapp.model;

import java.util.Date;

public class HistoryClinical {
    private Long id;
    private Long id_pacient;
    private Long id_doctor;
    private String treatment;
    private String diagnosis;
    private Date date;
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

    public String getTreatment() {
        return treatment;
    }

    public void setTreatment(String treatment) {
        this.treatment = treatment;
    }

    public String getDiagnosis() {
        return diagnosis;
    }

    public void setDiagnosis(String diagnosis) {
        this.diagnosis = diagnosis;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Pacient getPacient() {
        return pacient;
    }

    public void setPacient(Pacient pacient) {
        this.pacient = pacient;
    }
}
