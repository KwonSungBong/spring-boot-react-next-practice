package com.example.reservation.entity.reservation;

import com.example.reservation.entity.Item;
import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Entity
@Data
public class ReservationItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "ITEM_IDX")
    private Item item;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "RESERVATION_IDX")
    private Reservation reservation;

    private ReservationStatus reservationStatus;

    private Date startDate;

    private Date endDate;

    private Date completionDate;

    public ReservationStatus getReservationStatus() {
        Date nowDate = new Date();
        if(completionDate == null) {
            if(nowDate.before(startDate)) {
                return ReservationStatus.WAITING;
            } else if(nowDate.after(startDate) && nowDate.before(endDate)) {
                return ReservationStatus.FINISHED;
            } else if(nowDate.after(endDate)) {
                return ReservationStatus.PUBLISHING;
            } else {
                throw new RuntimeException("ERROR");
            }
        } else {
            return ReservationStatus.COMPLETION;
        }
    }

}
