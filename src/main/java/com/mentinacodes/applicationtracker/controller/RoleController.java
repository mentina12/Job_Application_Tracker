package com.mentinacodes.applicationtracker.controller;

import com.mentinacodes.applicationtracker.model.Role;
import com.mentinacodes.applicationtracker.service.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/role")
public class RoleController {
    @Autowired
    private RoleService roleService;

    @PostMapping("/add")
    public String add(@RequestBody Role role){
        roleService.saveRole(role);
        return "New job application Successfully added. Keep it going!";
    }

    @GetMapping("/getAll")
    public List<Role> getAllRoles() {
        return roleService.getAllRoles();
    }
}
