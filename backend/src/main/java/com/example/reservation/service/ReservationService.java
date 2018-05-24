package com.example.reservation.service;

import com.example.reservation.dto.ReservationDto;
import com.example.reservation.entity.Reservation;
import com.example.reservation.repository.ReservationRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.util.ObjectUtils;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@Service
public class ReservationService {

    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private ReservationRepository reservationRepository;

    public ReservationDto.Detail getReservation(long id) {
        return modelMapper.map(reservationRepository.findById(id) , ReservationDto.Detail.class);
    }

    public Iterable<ReservationDto.Detail> getReservationList() {
        return StreamSupport.stream(reservationRepository.findAll(new Sort(Sort.Direction.DESC, "id")).spliterator(), false)
                .map(reservation -> modelMapper.map(reservation, ReservationDto.Detail.class))
                .collect(Collectors.toList());
    }

    public Iterable<ReservationDto.Detail> getReservationList(ReservationDto.Search search) {
        return StreamSupport.stream(reservationRepository.findAll(new Sort(Sort.Direction.DESC, "id")).spliterator(), false)
                .map(reservation -> modelMapper.map(reservation, ReservationDto.Detail.class))
                .collect(Collectors.toList());
    }

    public Page<ReservationDto.Detail> getReservationList(Pageable pageable) {
        Page<Reservation> page = reservationRepository.findAll(pageable);
        List<ReservationDto.Detail> content = page.getContent().stream().
                map(reservation -> modelMapper.map(reservation, ReservationDto.Detail.class)).collect(Collectors.toList());
        return new PageImpl<>(content, pageable, page.getTotalElements());
    }

    public Page<ReservationDto.Detail> getReservationList(ReservationDto.Search search, Pageable pageable) {
        Page<Reservation> page = reservationRepository.findAll(pageable);
        List<ReservationDto.Detail> content = page.getContent().stream().
                map(reservation -> modelMapper.map(reservation, ReservationDto.Detail.class)).collect(Collectors.toList());
        return new PageImpl<>(content, pageable, page.getTotalElements());
    }

    public int createReservation(ReservationDto.Create reservation) {
        Reservation result = reservationRepository.save(modelMapper.map(reservation, Reservation.class));

        if(!ObjectUtils.isEmpty(result)){
            return 1;
        }

        return 0;
    }

    public int updateReservation(ReservationDto.Update reservation) {
        Reservation result = reservationRepository.save(modelMapper.map(reservation, Reservation.class));

        if(!ObjectUtils.isEmpty(result)){
            return 1;
        }

        return 0;
    }

    public int deleteReservation(long id) {
        if(reservationRepository.existsById(id)){
            reservationRepository.deleteById(id);
            return 1;
        }

        return 0;
    }

}
