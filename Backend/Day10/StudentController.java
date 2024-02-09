
package com.example.boat.controller;

import com.example.boat.dto.StudentDto;
import com.example.boat.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class StudentController {

    private final StudentService boatService;

    @Autowired
    public StudentController(StudentService boatService) {
        this.boatService = boatService;
    }

    @GetMapping("/getStudents")
    public ResponseEntity<List<StudentDto>> getAllBoats() {
        List<StudentDto> boats = boatService.getAllBoats();
        return ResponseEntity.ok(boats);
    }

    @GetMapping("/getStudent/{id}")
    public ResponseEntity<StudentDto> getBoatById(@PathVariable("id") Long boatId) {
        Optional<StudentDto> boat = boatService.getBoatById(boatId);
        return boat.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping("/addStudent")
    public ResponseEntity<StudentDto> createBoat(@RequestBody StudentDto boatDto) {
        StudentDto createdBoat = boatService.createBoat(boatDto);
        return new ResponseEntity<>(createdBoat, HttpStatus.CREATED);
    }

    @PutMapping("/updateStudent/{id}")
    public ResponseEntity<StudentDto> updateBoat(@PathVariable("id") Long boatId, @RequestBody StudentDto updatedBoatDto) {
        StudentDto updatedBoat = boatService.updateBoat(boatId, updatedBoatDto);
        return updatedBoat != null ? ResponseEntity.ok(updatedBoat) : ResponseEntity.notFound().build();
    }

    @DeleteMapping("/deleteStudent/{id}")
    public ResponseEntity<Void> deleteBoat(@PathVariable("id") Long boatId) {
        boatService.deleteBoat(boatId);
        return ResponseEntity.noContent().build();
    }
}
