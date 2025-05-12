package com.example.clinicalAppointmentapp.controller;

import com.example.clinicalAppointmentapp.kernel.Response;
import com.example.clinicalAppointmentapp.mapper.HistoryClinicalMapper;
import com.example.clinicalAppointmentapp.mapper.PacientMapper;
import com.example.clinicalAppointmentapp.model.HistoryClinical;
import com.example.clinicalAppointmentapp.model.Pacient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/history")
@CrossOrigin(origins = "*",methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE})
public class HistoryClinicalController {
    private final HistoryClinicalMapper historyClinicalMapper;
    private final PacientMapper pacientMapper;
    @Autowired
    private Response response;

    public HistoryClinicalController(HistoryClinicalMapper historyClinicalMapper, PacientMapper pacientMapper) {
        this.historyClinicalMapper = historyClinicalMapper;
        this.pacientMapper = pacientMapper;
    }

    @GetMapping
    public ResponseEntity<Object> findAllHistoryClinical() {
        try{
            List<HistoryClinical> historyClinicalList = historyClinicalMapper.getHistoryClinical();
            return response.buildSuccessResponse("Listado",historyClinicalList);
        }catch (Exception e){
            return response.buildErrorResponse("Ocurrio un error");
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> findById(@PathVariable Long id) {
        try{
            HistoryClinical historyClinical = historyClinicalMapper.findHistoryClinicalById(id);
            if(historyClinical == null){
                return response.buildNotFoundResponse("Historia clinica no encontrada");
            }

            return response.buildSuccessResponse("Listado",historyClinical);
        }catch (Exception e){
            return response.buildErrorResponse("Ocurrio un error");
        }
    }

    @GetMapping("/pacient/{id}")
    public ResponseEntity<Object> findAllByPacient(@PathVariable Long id) {
        try{
            Pacient pacient = pacientMapper.findPacientById(id);
            if(pacient == null){
                return response.buildNotFoundResponse("Paciente no encontrado");
            }

            List<HistoryClinical> historyClinical = historyClinicalMapper.findAllByPacient(id);
            if(historyClinical == null){
                return response.buildNotFoundResponse("Historia clinica no encontrada");
            }

            return response.buildSuccessResponse("Listado",historyClinical);
        }catch (Exception e){
            return response.buildErrorResponse("Ocurrio un error"+e.getMessage());
        }
    }

    @PostMapping
    public ResponseEntity<Object> saveHistoryClinical(@RequestBody HistoryClinical historyClinical) {
        try{
            historyClinicalMapper.saveHistoryClinical(historyClinical);
            return response.buildSuccessResponse("Se registro correctamente",null);
        }catch (Exception e){
            return response.buildErrorResponse("Ocurrio un error");
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Object> updateHistoryClinical(@PathVariable Long id,@RequestBody HistoryClinical historyClinical) {
        try{
            historyClinical = historyClinicalMapper.findHistoryClinicalById(id);
            if(historyClinical == null){
                return response.buildNotFoundResponse("Historia clinica no encontrada");
            }
            historyClinical.setId(id);
            historyClinicalMapper.updateHistoryClinical(historyClinical);
            return response.buildSuccessResponse("Se edito correctamente",null);
        }catch (Exception e){
            return response.buildErrorResponse("Ocurrio un error");
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deleteHistoryClinical(@PathVariable Long id) {
        try{
            HistoryClinical historyClinical = historyClinicalMapper.findHistoryClinicalById(id);
            if(historyClinical == null){
                return response.buildNotFoundResponse("Historia clinica no encontrada");
            }
            historyClinicalMapper.deleteHistoryClinical(id);
            return response.buildSuccessResponse("Se elimino correctamente",null);
        }catch (Exception e){
            return response.buildErrorResponse("Ocurrio un error");
        }
    }


}
