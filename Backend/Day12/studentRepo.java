package com.example.boat.repository;

import com.example.boat.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface studentRepo extends JpaRepository<Student, Long> {
    // You can add custom query methods if needed
}
