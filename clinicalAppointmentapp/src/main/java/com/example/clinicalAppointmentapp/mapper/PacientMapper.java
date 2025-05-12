package com.example.clinicalAppointmentapp.mapper;

import com.example.clinicalAppointmentapp.model.Pacient;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface PacientMapper {
    List<Pacient> findAllPacients();
    Pacient findPacientById(Long id);
    void savePacient(Pacient pacient);
    void updatePacient(Pacient pacient);
    void deletePacient(Long id);

}
