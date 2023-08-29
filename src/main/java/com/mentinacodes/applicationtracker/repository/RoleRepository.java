package com.mentinacodes.applicationtracker.repository;

import com.mentinacodes.applicationtracker.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleRepository extends JpaRepository<Role,Integer> {
}
