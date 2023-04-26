package com.spring.student.dao;

import com.spring.student.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("http://localhost:4200")
@RepositoryRestResource
public interface StudentRepository extends JpaRepository<Student, Long> {

}
/*
http://localhost:8080/students   GET
http://localhost:8080/students/1  GET
http://localhost:8080/students  POST
http://localhost:8080/students/1  DELETE
http://localhost:8080/students/1  PUT
 */
