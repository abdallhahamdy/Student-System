package com.spring.student.model;


import com.spring.student.model.enums.Gender;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "student")
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "full_name")
    private String FullName;

    @Enumerated(EnumType.STRING)
    @Column(name = "gender")
    private Gender gender;

    @Column(name = "phone_number")
    private String phone;

    @Column(name = "age")
    private String age;

    @Column(name = "address")
    private String address;

    @CreationTimestamp
    @Column(name = "data_created")
    private Date dataCreated;

    @UpdateTimestamp
    @Column(name = "data_updated")
    private Date dataUpdated;
}
