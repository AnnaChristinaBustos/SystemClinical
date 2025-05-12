package com.example.clinicalAppointmentapp.kernel;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

@Component
public class Response {
    public ResponseEntity<Object> buildErrorResponse(String message) {
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(
                new ApiResponse<>(message,null)
        );
    }

    public ResponseEntity<Object> buildNotFoundResponse(String message) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                new ApiResponse<>(message,null)
        );
    }

    public ResponseEntity<Object> buildSuccessResponse(String message, Object data) {
        return ResponseEntity.status(HttpStatus.OK).body(
                new ApiResponse<>(message,data)
        );
    }
}
