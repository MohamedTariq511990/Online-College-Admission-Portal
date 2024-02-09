// package com.example.boat.service;

// import com.example.boat.dto.jobdto;
// import com.example.boat.mapper.jobmapper;
// import com.example.boat.model.jobmodel;
// import com.example.boat.repository.jobrepo;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.stereotype.Service;

// import java.util.List;
// import java.util.Optional;
// import java.util.stream.Collectors;

// @Service
// public class jobservice {

//     private final jobrepo jobRepo;

//     @Autowired
//     public jobservice(jobrepo jobRepo) {
//         this.jobRepo = jobRepo;
//     }

//     public List<jobdto> getAllJobs() {
//         List<jobmodel> jobs = jobRepo.findAll();
//         return jobs.stream().map(jobmapper::mapToJobDto).collect(Collectors.toList());
//     }

//     public Optional<jobdto> getJobById(Long jobId) {
//         Optional<jobmodel> job = jobRepo.findById(jobId);
//         return job.map(jobmapper::mapToJobDto);
//     }

//     public jobdto createJob(jobdto jobDto) {
//         jobmodel jobModel = jobmapper.mapToJobModel(jobDto);
//         jobModel = jobRepo.save(jobModel);
//         return jobmapper.mapToJobDto(jobModel);
//     }

//     public jobdto updateJob(Long jobId, jobdto updatedJobDto) {
//         Optional<jobmodel> existingJobOptional = jobRepo.findById(jobId);

//         if (existingJobOptional.isPresent()) {
//             jobmodel existingJob = existingJobOptional.get();

//             // Map updatedJobDto to existingJob, updating only the fields that should be updated
//             jobmapper.updateJobModel(existingJob, updatedJobDto);

//             existingJob = jobRepo.save(existingJob);
//             return jobmapper.mapToJobDto(existingJob);
//         }

//         return null;
//     }

//     public void deleteJob(Long jobId) {
//         jobRepo.deleteById(jobId);
//     }
// }
package com.example.boat.service;

import com.example.boat.dto.StudentDto;
import com.example.boat.mapper.studentMapper;
import com.example.boat.model.Student;
import com.example.boat.repository.studentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class StudentService {

    private final studentRepo boatRepo;

    @Autowired
    public StudentService(studentRepo boatRepo) {
        this.boatRepo = boatRepo;
    }

    public List<StudentDto> getAllBoats() {
        List<Student> boats = boatRepo.findAll();
        return boats.stream().map(studentMapper::mapToBoatDto).collect(Collectors.toList());
    }

    public Optional<StudentDto> getBoatById(Long boatId) {
        Optional<Student> boat = boatRepo.findById(boatId);
        return boat.map(studentMapper::mapToBoatDto);
    }

    public StudentDto createBoat(StudentDto boatDto) {
        Student User = studentMapper.mapToStudent(boatDto);
        User = boatRepo.save(User);
        return studentMapper.mapToBoatDto(User);
    }

    public StudentDto updateBoat(Long boatId, StudentDto updatedBoatDto) {
        Optional<Student> existingBoatOptional = boatRepo.findById(boatId);

        if (existingBoatOptional.isPresent()) {
            Student existingBoat = existingBoatOptional.get();

            // Map updatedBoatDto to existingBoat, updating only the fields that should be updated
            studentMapper.updateStudent(existingBoat, updatedBoatDto);

            existingBoat = boatRepo.save(existingBoat);
            return studentMapper.mapToBoatDto(existingBoat);
        }

        return null;
    }

    public void deleteBoat(Long boatId) {
        boatRepo.deleteById(boatId);
    }
}
