package com.example.HorseProjet5A2020.controller;

import com.example.HorseProjet5A2020.model.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import com.example.HorseProjet5A2020.service.RegistrationService;

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

    @PostMapping("/registeradmin")
    public Admin registerAdmin(@RequestBody Admin admin) throws Exception {
        String tempEmailId = admin.getAdminEmailId();
        if (tempEmailId != null && !"".equals(tempEmailId)){
            Admin userobj = (Admin) service.fetchAdminByEmailId(tempEmailId);
            if (userobj != null){
                throw new Exception("admin with " + tempEmailId + " is already exist");
            }
        }
        Admin userObj = null;
        userObj = service.saveAdmin(admin);
        return userObj;
    }

    @PostMapping("/registerHI")
    public HorseInstructor registerHI(@RequestBody HorseInstructor hi) throws Exception {
        String tempEmailId = hi.getHorseInstructorEmailId();
        if (tempEmailId != null && !"".equals(tempEmailId)){
            HorseInstructor userobj = service.fetchHIByEmailId(tempEmailId);
            if (userobj != null){
                throw new Exception("Horse Instructor with " + tempEmailId + " is already exist");
            }
        }
        HorseInstructor userObj = null;
        userObj = service.saveHI(hi);
        return userObj;
    }

    @PostMapping("/registerRider")
    public Rider registerRider(@RequestBody Rider rider) throws Exception {
        String tempEmailId = rider.getRiderEmailId();
        if (tempEmailId != null && !"".equals(tempEmailId)){
            Rider userobj = service.fetchRiderByEmailId(tempEmailId);
            if (userobj != null){
                throw new Exception("Rider with " + tempEmailId + " is already exist");
            }
        }
        Rider userObj = null;
        userObj = service.saveRider(rider);
        return userObj;
    }

    @PostMapping("/registerWA")
    public WebsiteAdmin registerWA(@RequestBody WebsiteAdmin wa) throws Exception {
        String tempEmailId =wa.getWebsiteAdminEmailId();
        if (tempEmailId != null && !"".equals(tempEmailId)){
            WebsiteAdmin userobj = service.fetchWAByEmailId(tempEmailId);
            if (userobj != null){
                throw new Exception("The Website Admin with " + tempEmailId + " is already exist");
            }
        }
        WebsiteAdmin userObj = null;
        userObj = service.saveWA(wa);
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

    @PostMapping("/loginAdmin")
    public Admin loginAdmin (@RequestBody Admin admin) throws Exception {
        Admin userObj = null;
        String tempEmailId = admin.getAdminEmailId(), tempPass = admin.getAdminPassword();
        if(tempEmailId != null && tempPass != null){
            userObj = service.fetchAdminByEmailIdAndPassword(tempEmailId, tempPass);
        }
        if (userObj == null){
            throw new Exception("bad credentials");
        }
        return userObj;
    }

    @PostMapping("/loginHI")
    public HorseInstructor loginHI (@RequestBody HorseInstructor hi) throws Exception {
        HorseInstructor userObj = null;
        String tempEmailId = hi.getHorseInstructorEmailId(), tempPass = hi.getHorseInstructorPassword();
        if(tempEmailId != null && tempPass != null){
            userObj = service.fetchHIByEmailIdAndPassword(tempEmailId, tempPass);
        }
        if (userObj == null){
            throw new Exception("bad credentials");
        }
        return userObj;
    }

    @PostMapping("/loginRider")
    public Rider loginRider (@RequestBody Rider rider) throws Exception {
        Rider userObj = null;
        String tempEmailId = rider.getRiderEmailId(), tempPass = rider.getRiderPassword();
        if(tempEmailId != null && tempPass != null){
            userObj = service.fetchRiderByEmailIdAndPassword(tempEmailId, tempPass);
        }
        if (userObj == null){
            throw new Exception("bad credentials");
        }
        return userObj;
    }

    @PostMapping("/loginWA")
    public WebsiteAdmin loginWA (@RequestBody WebsiteAdmin wa) throws Exception {
        WebsiteAdmin userObj = null;
        String tempEmailId = wa.getWebsiteAdminEmailId(), tempPass = wa.getWebsiteAdminPassword();
        if(tempEmailId != null && tempPass != null){
            userObj = service.fetchWAByEmailIdAndPassword(tempEmailId, tempPass);
        }
        if (userObj == null){
            throw new Exception("bad credentials");
        }
        return userObj;
    }

}
