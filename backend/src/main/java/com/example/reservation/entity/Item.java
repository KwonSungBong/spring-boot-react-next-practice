package com.example.reservation.entity;

import lombok.Data;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedBy;
import org.springframework.data.annotation.LastModifiedDate;

import javax.persistence.*;
import java.util.Date;

@Entity
@Data
public class Item {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String name;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "ITEM_GROUP_IDX")
    private ItemGroup itemGroup;

    @CreatedBy
    private User createdUser;

    @LastModifiedBy
    private User modifiedUser;

    @CreatedDate
    private Date createdAt;

    @LastModifiedDate
    private Date modifiedAt;

}
