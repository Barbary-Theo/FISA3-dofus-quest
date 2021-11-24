package com.example.Dofus_Quest_Project.Controller;

import com.example.Dofus_Quest_Project.Model.Player;
import com.example.Dofus_Quest_Project.Model.Quest;
import com.example.Dofus_Quest_Project.Model.Succes;
import com.example.Dofus_Quest_Project.Repository.PlayerRepository;
import com.example.Dofus_Quest_Project.Repository.QuestRepository;
import com.example.Dofus_Quest_Project.Repository.SuccesRepository;
import net.bytebuddy.implementation.bytecode.Throw;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.Optional;

@Path("quests")
@Controller
public class QuestController {

    @Autowired
    private QuestRepository questRepository;

    @Autowired
    private SuccesController succesController;


    /* ================== GET ================== */

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

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/name")
    public Iterable<Quest> getByName(@QueryParam("name") String name) {
        return questRepository.findByName(name);
    }


    /* ================== POST ================== */

    @POST
    @Produces(MediaType.APPLICATION_JSON)
    public Quest insert(Quest quest) {

        if(succesController.getById(quest.getSucces().getIdSucces()).isPresent()) {
            quest.setSucces(succesController.getById(quest.getSucces().getIdSucces()).get());
            questRepository.save(quest);
            return quest;
        }
        else {
            throw new IllegalArgumentException("Le succes à l'id " + quest.getSucces().getIdSucces() + " n'existe pas");
        }

    }


    /* ================== DELETE ================== */

    @DELETE
    @Produces(MediaType.APPLICATION_JSON)
    public String deleteById(@QueryParam("id") long id) {
        questRepository.deleteById(id);
        return "deleted quest with id " + id + " done.";
    }


    /* ================== PATCH ================== */



    /* ================== PUT ================== */

}