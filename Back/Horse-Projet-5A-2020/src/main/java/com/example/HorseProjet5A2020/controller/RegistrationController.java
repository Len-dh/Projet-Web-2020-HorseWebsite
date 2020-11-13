package com.example.HorseProjet5A2020.controller;

import com.example.HorseProjet5A2020.model.*;
import com.example.HorseProjet5A2020.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import com.example.HorseProjet5A2020.service.RegistrationService;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController // return some response from the controller
// Construction Form
public class RegistrationController {

    @Autowired
    private RegistrationService service;

    @Autowired
    HorseRepository horseRepository;

    @Autowired
    LessonRepository lessonRepository;

    @Autowired
    RegistrationRepositoryAdmin adminRepository;

    @Autowired
    RegistrationRepositoryHI hiRepository;

    @Autowired
    RegistrationRepositoryRider riderRepository;

    @Autowired
    RegistrationRepositoryWA waRepository;

    @GetMapping("/lessons")
    public List<Lesson> getAllLessons(){
        List<Lesson> lessons = new ArrayList<>();

        lessonRepository.findAll().forEach(lessons::add);
        return lessons;
    }

    @PostMapping("lessons/create")
    public Lesson lessonCreation (@RequestBody Lesson lesson){
        Lesson _lesson = lessonRepository.save(new Lesson(lesson.getLessonId(), lesson.getLessonTitle(), lesson.getLessonDate(), lesson.getLessonStart(), lesson.getLessonEnd(), lesson.getLessonGroupSize(), lesson.getLessonLevel(), lesson.getLessonInstructor(), lesson.getLessonRecurrence()));
        Lesson userObj = null;
        userObj = service.saveLesson(lesson);
        return userObj;
    }

    @GetMapping("/horses")
    public List<Horse> getAllHorses( ){
        List<Horse> horses = new ArrayList<>();

        horseRepository.findAll().forEach(horses::add);
        return horses;
    }

    @PostMapping("/horses/create")
    public Horse horseCreation (@RequestBody Horse horse){
        Horse _horse = horseRepository.save(new Horse(horse.getHorseAge(), horse.getHorseName(), horse.getHorseBreed(), horse.getHorseGender()));
        Horse userObj = null;
        userObj = service.saveHorse(horse);
        return userObj;
    }


    @DeleteMapping("/horses/{id}")
    public ResponseEntity<String> deleteHorse(@PathVariable("id") int id){

        horseRepository.deleteById(id);
        return new ResponseEntity<>("Le cheval à été supprimer!", HttpStatus.OK);
    }

    @GetMapping("/amins")
    public List<Admin> getAllAdmins(){
        List<Admin> admins = new ArrayList<>();

        adminRepository.findAll().forEach(admins::add);
        return admins;
    }


    @PostMapping("/registeradmin")
    public Admin registerAdmin(@RequestBody Admin admin) throws Exception {
        String tempEmailId = admin.getAdminEmailId();
        if (tempEmailId != null && !"".equals(tempEmailId)) {
            Admin userobj = (Admin) service.fetchAdminByEmailId(tempEmailId);
            if (userobj != null) {
                throw new Exception("admin with " + tempEmailId + " is already exist");
            }
        }
        Admin _admin = adminRepository.save(new Admin(admin.getAdminId(), admin.getAdminPhoneNumber(), admin.getAdminEmailId(), admin.getAdminName(), admin.getAdminFirstName(), admin.getAdminPassword()));
        Admin userObj = null;
        userObj = service.saveAdmin(admin);
        return userObj;
    }

    @GetMapping("/horse-instructors")
    public List<HorseInstructor> getAllHorseInstructors(){
        List<HorseInstructor> horseInstructors = new ArrayList<>();

        hiRepository.findAll().forEach(horseInstructors::add);
        return horseInstructors;
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
        HorseInstructor _horseInstructor = hiRepository.save(new HorseInstructor(hi.getHorseInstructorId(), hi.getHorseInstructorPhoneNumber(), hi.getHorseInstructorEmailId(), hi.getHorseInstructorName(), hi.getHorseInstructorFirstName(), hi.getHorseInstructorPassword()));
        HorseInstructor userObj = null;
        userObj = service.saveHI(hi);
        return userObj;
    }

    @GetMapping("/riders")
    public List<Rider> getAllRiders(){
        List<Rider> riders = new ArrayList<>();

        riderRepository.findAll().forEach(riders::add);
        return riders;
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
        Rider _rider = riderRepository.save(new Rider(rider.getRiderId(), rider.getRiderPhoneNumber(), rider.getRiderEmailId(), rider.getRiderName(), rider.getRiderFirstName(), rider.getRiderPassword()));
        Rider userObj = null;
        userObj = service.saveRider(rider);
        return userObj;
    }

    @GetMapping("/websiteAdmins")
    public List<WebsiteAdmin> getAllWebsiteAdmins(){
        List<WebsiteAdmin> websiteAdmins = new ArrayList<>();

        waRepository.findAll().forEach(websiteAdmins::add);
        return websiteAdmins;
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
        WebsiteAdmin _websiteAdmin = waRepository.save(new WebsiteAdmin(wa.getWebsiteAdminId(), wa.getWebsiteAdminPhoneNumber(), wa.getWebsiteAdminEmailId(), wa.getWebsiteAdminName(), wa.getWebsiteAdminFirstName(), wa.getWebsiteAdminPassword()));
        WebsiteAdmin userObj = null;
        userObj = service.saveWA(wa);
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
