
package com.example.boat.dto;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

public class StudentDto {
 @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String firstName;
    private String lastName;
    private int age;
    private String gender;
    private String emailId;
    private String aadharNumber;
    private double tenthPercentage;
    private double twelfthPercentage;
    private String course;
    private String department;
    private String studentPhoneNumber;
    private String parentPhoneNumber;
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getFirstName() {
        return firstName;
    }
    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }
    public String getLastName() {
        return lastName;
    }
    public void setLastName(String lastName) {
        this.lastName = lastName;
    }
    public int getAge() {
        return age;
    }
    public void setAge(int age) {
        this.age = age;
    }
    public String getGender() {
        return gender;
    }
    public void setGender(String gender) {
        this.gender = gender;
    }
    public String getEmailId() {
        return emailId;
    }
    public void setEmailId(String emailId) {
        this.emailId = emailId;
    }
    public String getAadharNumber() {
        return aadharNumber;
    }
    public void setAadharNumber(String aadharNumber) {
        this.aadharNumber = aadharNumber;
    }
    public double getTenthPercentage() {
        return tenthPercentage;
    }
    public void setTenthPercentage(double tenthPercentage) {
        this.tenthPercentage = tenthPercentage;
    }
    public double getTwelfthPercentage() {
        return twelfthPercentage;
    }
    public void setTwelfthPercentage(double twelfthPercentage) {
        this.twelfthPercentage = twelfthPercentage;
    }
    public String getCourse() {
        return course;
    }
    public void setCourse(String course) {
        this.course = course;
    }
    public String getDepartment() {
        return department;
    }
    public void setDepartment(String department) {
        this.department = department;
    }
    public String getStudentPhoneNumber() {
        return studentPhoneNumber;
    }
    public void setStudentPhoneNumber(String studentPhoneNumber) {
        this.studentPhoneNumber = studentPhoneNumber;
    }
    public String getParentPhoneNumber() {
        return parentPhoneNumber;
    }
    public void setParentPhoneNumber(String parentPhoneNumber) {
        this.parentPhoneNumber = parentPhoneNumber;
    }

}
