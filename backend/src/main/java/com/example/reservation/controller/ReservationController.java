package com.example.reservation.controller;

import com.example.reservation.dto.ReservationDto;
import com.example.reservation.service.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/reservation")
public class ReservationController {

    @Autowired
    private ReservationService reservationService;

    @RequestMapping(method = RequestMethod.GET, value="/{id}")
    public ReservationDto.Detail getReservation(@PathVariable long id){
        return reservationService.getReservation(id);
    }

//    @RequestMapping(method = RequestMethod.GET)
//    public Iterable<ReservationDto.Detail> getReservation(){
//        return reservationService.getReservationList();
//    }
//
//    @RequestMapping(method = RequestMethod.GET)
//    public Iterable<ReservationDto.Detail> getReservation(@ModelAttribute ReservationDto.Search search){
//        return reservationService.getReservationList(search);
//    }
//
//    @RequestMapping(method = RequestMethod.GET)
//    public Page<ReservationDto.Detail> getReservation(@PageableDefault(value = 10, sort = "id", direction = Sort.Direction.DESC) Pageable pageable){
//        return reservationService.getReservationList(pageable);
//    }

    @RequestMapping(method = RequestMethod.GET)
    public Page<ReservationDto.Detail> getReservation(@PageableDefault(value = 10, sort = "id", direction = Sort.Direction.DESC) Pageable pageable,
                                 @ModelAttribute ReservationDto.Search search){
        return reservationService.getReservationList(search, pageable);
    }

    @RequestMapping(method = RequestMethod.POST)
    public void createReservation(@RequestBody ReservationDto.Create create){
        reservationService.createReservation(create);
    }

    @RequestMapping(method = RequestMethod.PUT)
    public void updateReservation(@RequestBody ReservationDto.Update update){
        reservationService.updateReservation(update);
    }

    @RequestMapping(method = RequestMethod.DELETE, value="/{id}")
    public void deleteReservation(@PathVariable long id){
        reservationService.deleteReservation(id);
    }

}
