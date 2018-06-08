package com.example.reservation.entity;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
public class Image {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "IMAGE_NAME", nullable = false)
    private String imageName;

    @Column(name = "IMAGE_SIZE", nullable = false)
    private long imageSize;

    @Column(name = "STORED_IMAGE_NAME", nullable = false)
    private String storedImageName;

    @Column(name = "CONTENT_TYPE")
    private String contentType;

    @Column(name = "ENABLED", nullable = false)
    private boolean enabled = true;

    @Column(name = "SORT_ORDER")
    private int sortOrder = 1;

}
