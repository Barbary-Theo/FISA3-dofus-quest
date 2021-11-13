package com.example.Dofus_Quest_Project;

import com.example.Dofus_Quest_Project.Controller.*;
import org.glassfish.jersey.server.ResourceConfig;
import org.glassfish.jersey.servlet.ServletProperties;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;

import javax.ws.rs.ApplicationPath;

@Component
@ApplicationPath("rest")
@Configuration
public class JerseyConfiguration extends ResourceConfig {

    public JerseyConfiguration() {
        register(QuestController.class);
        register(SuccesController.class);
        register(PlayerController.class);
        register(CORSResponseFilter.class);
        property(ServletProperties.FILTER_FORWARD_ON_404, true);

    }

}