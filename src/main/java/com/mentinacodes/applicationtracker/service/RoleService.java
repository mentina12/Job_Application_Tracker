package com.mentinacodes.applicationtracker.service;

import com.mentinacodes.applicationtracker.model.Role;
import java.util.List;
public interface RoleService {
    public Role saveRole(Role role);
    public List<Role> getAllRoles();
}
