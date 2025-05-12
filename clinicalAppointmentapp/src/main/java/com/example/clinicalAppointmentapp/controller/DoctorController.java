package com.example.clinicalAppointmentapp.controller;

import com.example.clinicalAppointmentapp.kernel.Response;
import com.example.clinicalAppointmentapp.mapper.DoctorMapper;
import com.example.clinicalAppointmentapp.model.Doctor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/doctor")
@CrossOrigin(origins = "*",methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE})
public class DoctorController {
    private final DoctorMapper doctorMapper;
    @Autowired
    private  Response response;

    public DoctorController(DoctorMapper doctorMapper) {
        this.doctorMapper = doctorMapper;
    }

    @GetMapping
    public ResponseEntity<Object>  findAllDoctors() {
        try{
            List<Doctor> doctor = doctorMapper.findAllDoctors();
            return response.buildSuccessResponse("Listado",doctor);
        }catch (Exception e) {
            return response.buildErrorResponse("Ocurrio un error"+e.getMessage());
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> findByID(@PathVariable Long id) {
        try{
            Doctor doctor = doctorMapper.findDoctorById(id);
            if(doctor == null) {
                return response.buildNotFoundResponse("Doctor no encontrado");
            }
            return response.buildSuccessResponse("Encontrado",doctor);
        }catch (Exception e) {
            return response.buildErrorResponse("Ocurrio un error");
        }
    }

    @PostMapping
    public  ResponseEntity<Object>  createDoctor(@RequestBody Doctor doctor) {
        try{
            doctorMapper.saveDoctor(doctor);
            return response.buildSuccessResponse("Doctor se creo correctamente",null);
        }catch (Exception e) {
            return response.buildErrorResponse("Ocurrio un error");
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Object> updateDoctor(@PathVariable Long id,@RequestBody Doctor doctor) {
        try{
            if(doctor == null) {
                return response.buildNotFoundResponse("Doctor no encontrado");
            }

            doctor.setId(id);
            doctorMapper.updateDoctor(doctor);
            return response.buildSuccessResponse("Doctor actualizado correctamente",null);
        }catch (Exception e) {
            return response.buildErrorResponse("Ocurrio un error");
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deleteDoctor(@PathVariable Long id) {
        try {
            Doctor doctor = doctorMapper.findDoctorById(id);
            if(doctor == null) {
                return response.buildNotFoundResponse("Doctor no encontrado");
            }
            doctorMapper.deleteDoctor(id);
            return response.buildSuccessResponse("Doctor eliminado correctamente",null);
        } catch (Exception e) {
            return response.buildErrorResponse("Ocurrio un error");
        }
    }



}
