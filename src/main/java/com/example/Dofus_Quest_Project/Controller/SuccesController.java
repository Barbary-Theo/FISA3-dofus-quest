package com.example.Dofus_Quest_Project.Controller;


import com.example.Dofus_Quest_Project.Model.Player;
import com.example.Dofus_Quest_Project.Model.Quest;
import com.example.Dofus_Quest_Project.Model.Succes;
import com.example.Dofus_Quest_Project.Repository.QuestRepository;
import com.example.Dofus_Quest_Project.Repository.SuccesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;

@Path("succes")
@Controller
public class SuccesController {


    @Autowired
    private SuccesRepository succesRepository;


    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Succes hello() {
        return new Succes();
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/all")
    public Iterable<Succes> getAll() {
        return succesRepository.findAll();
    }


    @POST
    @Produces(MediaType.APPLICATION_JSON)
    public Succes insert(Succes succes) {
        succesRepository.save(succes);
        return succes;
    }

    @DELETE
    @Produces(MediaType.APPLICATION_JSON)
    public String deleteById(@QueryParam("id") long id) {
        succesRepository.deleteById(id);
        return "deleted succes with id " + id + " done.";
    }

}