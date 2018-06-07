package com.example.reservation.entity;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "POST")
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private Long id;

    @Column(name = "SUBJECT", nullable = false)
    private String subject;

    @Column(name = "CONTENT")
    @Lob
    private String content;

}