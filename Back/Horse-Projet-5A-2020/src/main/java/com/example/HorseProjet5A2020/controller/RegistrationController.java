package com.example.HorseProjet5A2020.controller;

import com.example.HorseProjet5A2020.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.GetMapping;


import com.example.HorseProjet5A2020.service.RegistrationService;

import javax.imageio.spi.RegisterableService;

@RestController // return some response from the controller
// Construction Form
public class RegistrationController {

    @Autowired
    private RegistrationService service;

    @PostMapping("/registeruser")
    public User registerUser(@RequestBody User user) throws Exception {
        String tempEmailId = user.getEmailId();
        if (tempEmailId != null && !"".equals(tempEmailId)){
            User userobj = service.fetchUserByEmailId(tempEmailId);
            if (userobj != null){
                throw new Exception("user with " + tempEmailId + " is already exist");
            }
        }
        User userObj = null;
        userObj = service.saveUser(user);
        return userObj;
    }

    @PostMapping("/login")
    public User loginUser (@RequestBody User user) throws Exception {
        User userObj = null;
        String tempEmailId = user.getEmailId(), tempPass = user.getPassword();
        if(tempEmailId != null && tempPass != null){
            userObj = service.fetchUserByEmailIdAndPassword(tempEmailId, tempPass);
        }
        if (userObj == null){
            throw new Exception("bad credentials");
        }
        return userObj;
    }
}
