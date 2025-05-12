package com.example.clinicalAppointmentapp.mapper;

import com.example.clinicalAppointmentapp.model.HistoryClinical;
import org.apache.ibatis.annotations.Mapper;
import java.util.List;


@Mapper
public interface HistoryClinicalMapper {
    List<HistoryClinical> getHistoryClinical();
    HistoryClinical findHistoryClinicalById(Long id);
    List<HistoryClinical> findAllByPacient(Long id);
    void saveHistoryClinical(HistoryClinical historyClinical);
    void updateHistoryClinical(HistoryClinical historyClinical);
    void deleteHistoryClinical(Long id);
}
