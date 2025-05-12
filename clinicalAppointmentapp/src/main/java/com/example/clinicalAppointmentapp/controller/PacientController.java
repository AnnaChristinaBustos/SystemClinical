package com.example.clinicalAppointmentapp.controller;

import com.example.clinicalAppointmentapp.kernel.Response;
import com.example.clinicalAppointmentapp.mapper.PacientMapper;
import com.example.clinicalAppointmentapp.model.Pacient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/pacient")
@CrossOrigin(origins = "*",methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE})
public class PacientController {
    @Autowired
    private Response response;
    private final PacientMapper pacientMapper;

    public PacientController(PacientMapper pacientMapper) {
        this.pacientMapper = pacientMapper;
    }

    @GetMapping
    public ResponseEntity<Object> getAllPacients() {
        try{
            return response.buildSuccessResponse("Listado",this.pacientMapper.findAllPacients());
        }catch (Exception e){
            return response.buildErrorResponse("Ocurrio un error");
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> findById(@PathVariable Long id) {
        try{
            Pacient pacient = this.pacientMapper.findPacientById(id);
            if(pacient == null){
                return response.buildNotFoundResponse("Paciente no encontrado");
            }

            return response.buildSuccessResponse("Listado",pacient);
        }catch (Exception e){
            return response.buildErrorResponse("Ocurrio un error");
        }
    }

    @PostMapping
    public ResponseEntity<Object> createPacient(@RequestBody Pacient pacient) {
        try{
            this.pacientMapper.savePacient(pacient);
            return response.buildSuccessResponse("Se registro correctamente el paciente",null);
        }catch (Exception e){
            return response.buildErrorResponse("Ocurrio un error");
        }
    }

    @PutMapping
    public ResponseEntity<Object> updatePacient(@PathVariable Long id,@RequestBody Pacient pacient) {
        try{
            pacient.setId(id);
            this.pacientMapper.updatePacient(pacient);
            return response.buildSuccessResponse("Se actualizo correctamente",null);
        }catch (Exception e){
            return response.buildErrorResponse("Ocurrio un error");
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deletePacient(@PathVariable Long id) {
        try{
            Pacient pacient = this.pacientMapper.findPacientById(id);
            if(pacient == null){
                return response.buildNotFoundResponse("Paciente no encontrado");
            }
            this.pacientMapper.deletePacient(id);
            return response.buildSuccessResponse("Se elimino correctamente el paciente",null);
        }catch (Exception e){
            return response.buildErrorResponse("Ocurrio un error");
        }
    }

}
