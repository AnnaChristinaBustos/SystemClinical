package com.example.clinicalAppointmentapp.controller;

import com.example.clinicalAppointmentapp.kernel.Response;
import com.example.clinicalAppointmentapp.mapper.AppoimentMapper;
import com.example.clinicalAppointmentapp.mapper.DoctorMapper;
import com.example.clinicalAppointmentapp.model.Appoiment;
import com.example.clinicalAppointmentapp.model.Doctor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/appoiment")
@CrossOrigin(origins = "*",methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE})
public class AppoimentController {
    private final AppoimentMapper appoimentMapper;
    private final DoctorMapper doctorMapper;
    @Autowired
    private Response response;

    public AppoimentController(AppoimentMapper appoimentMapper, DoctorMapper doctorMapper) {
        this.appoimentMapper = appoimentMapper;
        this.doctorMapper = doctorMapper;
    }

    @GetMapping
    public ResponseEntity<Object> findAllAppoiments() {
        try{
            List<Appoiment> appoiments = appoimentMapper.findAllAppoiments();

            return response.buildSuccessResponse("Listado",appoiments);
        }catch (Exception e){
            return response.buildErrorResponse("Ocurrio un error"+e.getMessage());
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> findAppoimentById(@PathVariable Long id) {
        try{
            Appoiment appoiment = appoimentMapper.findAppoimentById(id);
            if (appoiment == null) {
                return response.buildNotFoundResponse("Cita no encontrada");
            }
            return response.buildSuccessResponse("Cita encontrada",appoiment);
        }catch (Exception e){
            return response.buildErrorResponse("Ocurrio un error"+e.getMessage());
        }
    }

    @GetMapping("/doctor/{id}")
    public ResponseEntity<Object> findAllByDoctor(@PathVariable Long id) {
        try{
            Doctor doctor = doctorMapper.findDoctorById(id);
            if (doctor == null) {
                return response.buildNotFoundResponse("Doctor no existente");
            }
            List<Appoiment> appoiment = appoimentMapper.findAllByDoctor(id);

            if (appoiment == null) {
                return response.buildNotFoundResponse("Sin citas asignadas");
            }
            return response.buildSuccessResponse("Cita encontrada",appoiment);
        }catch (Exception e){
            return response.buildErrorResponse("Ocurrio un error"+e.getMessage());
        }
    }


    @PostMapping
    public ResponseEntity<Object> saveAppoiment(@RequestBody Appoiment appoiment) {
        try{
            appoimentMapper.saveAppoiment(appoiment);
            return response.buildSuccessResponse("Se registro correctamente la cita",null);
        }catch (Exception e){
            return response.buildErrorResponse("Ocurrio un error");
        }
    }
    @PutMapping("/{id}")
    public ResponseEntity<Object> updateAppoiment(@PathVariable Long id, @RequestBody Appoiment appoiment) {
        try{
            Appoiment existingAppoiment = appoimentMapper.findAppoimentById(id);
            if (existingAppoiment == null) {
                return response.buildNotFoundResponse("Cita no encontrada");
            }
            
            if (appoiment == null) {
                return response.buildNotFoundResponse("Cita no encontrada");
            }
            appoiment.setId(id);
            appoimentMapper.updateAppoiment(appoiment);
            return response.buildSuccessResponse("Se edito correctamente la cita",null);
        }catch (Exception e){
            return response.buildErrorResponse("Ocurrio un error");
        }
    }

    @PatchMapping("/{id}")
    public ResponseEntity<Object> updateAppoimentStatus(@PathVariable Long id, @RequestBody Appoiment appoiment) {
        try{
            Appoiment existingAppoiment = appoimentMapper.findAppoimentById(id);
            if (existingAppoiment == null) {
                return response.buildNotFoundResponse("Cita no encontrada");
            }

            appoiment.setId(id);
            appoimentMapper.updateAppoimentStatus(appoiment);
            return response.buildSuccessResponse("Se edito correctamente el estado de la cita",null);
        }catch (Exception e){
            return response.buildErrorResponse("Ocurrio un error");
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deleteAppoiment(@PathVariable Long id) {
        try{
            Appoiment appoiment = appoimentMapper.findAppoimentById(id);
            if (appoiment == null) {
                return response.buildNotFoundResponse("Cita no encontrada");
            }
            appoimentMapper.deleteAppoiment(id);
            return response.buildSuccessResponse("Se elimino correctamente",null);
        }catch (Exception e){
            return response.buildErrorResponse("Ocurrio un error");
        }
    }
}
