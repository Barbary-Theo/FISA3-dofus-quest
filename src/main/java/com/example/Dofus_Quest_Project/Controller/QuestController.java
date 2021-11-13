package com.example.Dofus_Quest_Project.Controller;

import com.example.Dofus_Quest_Project.Model.Player;
import com.example.Dofus_Quest_Project.Model.Quest;
import com.example.Dofus_Quest_Project.Repository.QuestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;

@Path("quests")
@Controller
public class QuestController {

    @Autowired
    private QuestRepository questRepository;


    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Quest hello() {
        return new Quest();
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/all")
    public Iterable<Quest> getAll() {
        return questRepository.findAll();
    }


    @POST
    @Produces(MediaType.APPLICATION_JSON)
    public Quest insert(Quest quest) {
        questRepository.save(quest);
        return quest;
    }

    @DELETE
    @Produces(MediaType.APPLICATION_JSON)
    public String deleteById(@QueryParam("id") long id) {
        questRepository.deleteById(id);
        return "deleted quest with id " + id + " done.";
    }

}