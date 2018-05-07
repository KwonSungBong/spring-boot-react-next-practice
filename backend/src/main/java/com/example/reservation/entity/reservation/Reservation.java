package com.example.reservation.entity.reservation;

import com.example.reservation.entity.User;
import lombok.Data;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedBy;
import org.springframework.data.annotation.LastModifiedDate;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Data
public class Reservation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String subject;

    private String content;

    @OneToMany(mappedBy = "reservation", fetch = FetchType.LAZY)
    private List<ReservationItem> reservationItemList;

    @CreatedBy
    private User createdUser;

    @LastModifiedBy
    private User modifiedUser;

    @CreatedDate
    private Date createdAt;

    @LastModifiedDate
    private Date modifiedAt;

    public ReservationStatus getReservationStatus() {
//        reservationItemList.stream()
        return null;
    }

    public Date getStartDate() {
//        reservationItemList.stream()
        return null;
    }

    public Date getEndDate() {
//        reservationItemList.stream()
        return null;
    }

}
