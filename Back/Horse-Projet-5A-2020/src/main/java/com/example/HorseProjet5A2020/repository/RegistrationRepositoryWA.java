package com.example.HorseProjet5A2020.repository;

import com.example.HorseProjet5A2020.model.WebsiteAdmin;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RegistrationRepositoryWA extends JpaRepository<WebsiteAdmin, Integer> {
    public WebsiteAdmin findByWebsiteAdminEmailId(String websiteAdminEmailId);
    public WebsiteAdmin findByWebsiteAdminEmailIdAndWebsiteAdminPassword(String websiteAdminEmailId, String websiteAdminPassword);
}
