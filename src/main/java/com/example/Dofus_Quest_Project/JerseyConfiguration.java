package com.example.Dofus_Quest_Project;

import com.example.Dofus_Quest_Project.Model.*;
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
        register(Quest.class);
        register(Succes.class);
        register(Player.class);
        register(CORSResponseFilter.class);
        property(ServletProperties.FILTER_FORWARD_ON_404, true);

    }

}