package com.example.HorseProjet5A2020.service;


import com.example.HorseProjet5A2020.model.*;
import com.example.HorseProjet5A2020.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class RegistrationService {

    @Autowired
    private RegistrationRepositoryAdmin repoAdmin;
    @Autowired
    private RegistrationRepositoryHI repoHI;
    @Autowired
    private RegistrationRepositoryRider repoRider;
    @Autowired
    private RegistrationRepositoryWA repoWA;
    @Autowired
    private HorseRepository repoHorse;
    @Autowired
    private LessonRepository repoLesson;

    public Admin saveAdmin(Admin admin){ return repoAdmin.save(admin); }
    public HorseInstructor saveHI(HorseInstructor hi){ return repoHI.save(hi); }
    public Rider saveRider(Rider rider){ return repoRider.save(rider); }
    public WebsiteAdmin saveWA(WebsiteAdmin wa){ return repoWA.save(wa); }
    public Horse saveHorse(Horse horse){ return repoHorse.save(horse); }
    public Lesson saveLesson(Lesson lesson){ return repoLesson.save(lesson); }

    public Admin fetchAdminByEmailId(String email){
        return repoAdmin.findByAdminEmailId(email);
    }

    public Admin fetchAdminByEmailIdAndPassword(String email, String password){
        return repoAdmin.findByAdminEmailIdAndAdminPassword(email, password);
    }

    public HorseInstructor fetchHIByEmailId(String email){
        return repoHI.findByHorseInstructorEmailId(email);
    }

    public HorseInstructor fetchHIByEmailIdAndPassword(String email, String password){
        return repoHI.findByHorseInstructorEmailIdAndHorseInstructorPassword(email, password);
    }

    public Rider fetchRiderByEmailId(String email){
        return repoRider.findByRiderEmailId(email);
    }

    public Rider fetchRiderByEmailIdAndPassword(String email, String password){
        return repoRider.findByRiderEmailIdAndRiderPassword(email, password);
    }

    public WebsiteAdmin fetchWAByEmailId( String email){
        return repoWA.findByWebsiteAdminEmailId(email);
    }

    public WebsiteAdmin fetchWAByEmailIdAndPassword(String email, String password){
        return repoWA.findByWebsiteAdminEmailIdAndWebsiteAdminPassword(email, password);
    }

   public List<Horse> fetchHorseByHorseID(int horseID){
        return  repoHorse.findByHorseId(horseID);
   }
}
