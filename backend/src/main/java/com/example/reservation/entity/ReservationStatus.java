package com.example.reservation.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum ReservationStatus {
    WAITING("대기"), PUBLISHING("진행"), FINISHED("종료");
    private String name;
}
