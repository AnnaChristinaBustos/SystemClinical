package com.example.clinicalAppointmentapp.mapper;

import com.example.clinicalAppointmentapp.model.Appoiment;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface AppoimentMapper {
    List<Appoiment> findAllAppoiments();
    Appoiment findAppoimentById(Long id);
    List<Appoiment> findAllByDoctor(Long id);
    void saveAppoiment(Appoiment appoiment);
    void updateAppoiment(Appoiment appoiment);
    void deleteAppoiment(Long id);

}
