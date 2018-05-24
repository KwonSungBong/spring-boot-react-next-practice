package com.example.reservation.repository;

import com.example.reservation.entity.ItemGroup;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ItemGroupRepository extends JpaRepository<ItemGroup, Long> {
}
