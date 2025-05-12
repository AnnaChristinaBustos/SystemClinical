package com.example.clinicalAppointmentapp.mapper;

import com.example.clinicalAppointmentapp.model.Doctor;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface DoctorMapper {
    List<Doctor> findAllDoctors();
    Doctor findDoctorById(Long id);
    void saveDoctor(Doctor doctor);
    void updateDoctor(Doctor doctor);
    void deleteDoctor(Long id);
}
